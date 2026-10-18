#!/usr/bin/env python3
"""Measures text contrast over the hero video by simulating the CSS overlay.

The hero scene is a bright white apartment, so the scrim gradients are what make
the headline readable. This script composites the real poster frame with the
gradients exactly as the browser would and reports WCAG ratios per text band, so
the overlay can be tuned by measurement instead of by eye.

Usage: python3 scripts/check-hero-contrast.py
"""

import math
import sys

import numpy as np
from PIL import Image

DARK = np.array([11.0, 17.0, 24.0])
TEXT = np.array([0xEE, 0xF3, 0xF8], dtype=float)
MUTED = np.array([0x9A, 0xA8, 0xBA], dtype=float)
SURFACE = np.array([0x12, 0x19, 0x23], dtype=float)
POSTER = "public/hero-poster.jpg"
VIDEO_W, VIDEO_H = 1920, 1080

# Fraction of the hero height, measured from the bottom, that each block covers,
# derived from the Hero layout (items-end, pb-24, then logo/h1/sub/chips/buttons).
# Each band also carries the real foreground colour so the ratio reflects what
# ships: the trust chips sit on their own
# translucent surface, so they are composited before measuring.
#   (from, to, wcag_target, colour, colour_alpha, chip_surface_alpha)
MOBILE_BANDS = {
    "buttons": (0.11, 0.31, 4.5, TEXT, 1.00, None),
    "chips": (0.34, 0.40, 4.5, MUTED, 1.00, 0.80),
    "sub text": (0.43, 0.51, 4.5, TEXT, 1.00, None),
    "h1 (large)": (0.53, 0.65, 3.0, TEXT, 1.00, None),
    "logo": (0.67, 0.72, 3.0, TEXT, 1.00, None),
}
DESKTOP_BANDS = {
    "buttons": (0.10, 0.24, 4.5, TEXT, 1.00, None),
    "chips": (0.26, 0.32, 4.5, MUTED, 1.00, 0.80),
    "sub text": (0.34, 0.44, 4.5, TEXT, 1.00, None),
    "h1 (large)": (0.46, 0.62, 3.0, TEXT, 1.00, None),
    "logo": (0.64, 0.72, 3.0, TEXT, 1.00, None),
}


def rel_lum(rgb):
    c = rgb / 255.0
    c = np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
    return 0.2126 * c[..., 0] + 0.7152 * c[..., 1] + 0.0722 * c[..., 2]


def contrast(l_text, l_bg):
    hi, lo = max(l_text, l_bg), min(l_text, l_bg)
    return (hi + 0.05) / (lo + 0.05)


def ramp(stops, t):
    """CSS colour-stop interpolation: stops is [(position, alpha), ...]."""
    pos = np.array([p for p, _ in stops])
    val = np.array([a for _, a in stops])
    return np.interp(t, pos, val)


def gradient_alpha(stops, angle_deg, w, h):
    """Alpha map for a CSS linear-gradient over a w x h box."""
    ys, xs = np.mgrid[0:h, 0:w].astype(float)
    theta = math.radians(angle_deg)
    sin_t, cos_t = math.sin(theta), math.cos(theta)
    length = abs(w * sin_t) + abs(h * cos_t)
    t = 0.5 + ((xs - w / 2) * sin_t + (ys - h / 2) * (-cos_t)) / length
    return ramp(stops, np.clip(t, 0, 1))


def visible_window(cw, ch):
    """object-fit: cover crop of the video for a cw x ch container."""
    scale = max(cw / VIDEO_W, ch / VIDEO_H)
    src_w, src_h = cw / scale, ch / scale
    x0, y0 = (VIDEO_W - src_w) / 2, (VIDEO_H - src_h) / 2
    return int(x0), int(x0 + src_w), int(y0), int(y0 + src_h)


def evaluate(name, poster, container, bands, layers, text_x):
    cw, ch = container
    x0, x1, y0, y1 = visible_window(cw, ch)
    win = np.asarray(
        Image.fromarray(poster[y0:y1, x0:x1].astype(np.uint8)).resize(
            (cw, ch), Image.LANCZOS
        ),
        dtype=float,
    )

    # CSS paints the first background layer on top, so composite in reverse.
    comp = win.copy()
    for stops, angle in reversed(layers):
        alpha = gradient_alpha(stops, angle, cw, ch)[..., None]
        comp = alpha * DARK + (1 - alpha) * comp

    tx0, tx1 = int(cw * text_x[0]), int(cw * text_x[1])

    print(f"\n=== {name}  ({cw}x{ch})")
    print(f"  {'band':<12} {'bg p90':>7} {'ratio':>7} {'need':>6}  verdict")
    worst_fail = 0
    for label, (f0, f1, target, colour, colour_a, chip_a) in bands.items():
        ry1, ry2 = int(ch * (1 - f1)), int(ch * (1 - f0))
        region = comp[ry1:ry2, tx0:tx1]
        if chip_a is not None:
            region = chip_a * SURFACE + (1 - chip_a) * region

        # Worst case is the brightest background the glyphs sit on.
        lum = rel_lum(region)
        idx = lum >= np.percentile(lum, 90)
        bg_p90 = float(lum[idx].mean())
        bg_rgb = region[idx].mean(axis=0)

        fg_rgb = colour_a * colour + (1 - colour_a) * bg_rgb
        ratio = float(contrast(float(rel_lum(fg_rgb)), bg_p90))
        ok = ratio >= target
        if not ok:
            worst_fail = max(worst_fail, target - ratio)
        print(
            f"  {label:<12} {bg_p90:7.3f} {ratio:7.2f} {target:6.1f}  "
            f"{'PASS' if ok else 'FAIL'}"
        )

    # How much of the video still shows through up top (higher = more visible).
    top = gradient_alpha(layers[0][0], layers[0][1], cw, ch)
    top_alpha = float(np.mean(top[: int(ch * 0.25), :]))
    for stops, angle in layers[1:]:
        a2 = gradient_alpha(stops, angle, cw, ch)
        top_alpha = 1 - (1 - top_alpha) * (1 - float(np.mean(a2[: int(ch * 0.25), :])))
    print(f"  top 25% mean scrim alpha: {top_alpha:.2f}  (lower = video more visible)")
    return worst_fail


def evaluate_header(name, poster, container, layers, header_h, items):
    """The unscrolled header sits on the lightest part of the scrim, so it gets
    its own check including the header's own top-to-bottom gradient."""
    cw, ch = container
    x0, x1, y0, y1 = visible_window(cw, ch)
    win = np.asarray(
        Image.fromarray(poster[y0:y1, x0:x1].astype(np.uint8)).resize(
            (cw, ch), Image.LANCZOS
        ),
        dtype=float,
    )
    comp = win.copy()
    for stops, angle in reversed(layers):
        alpha = gradient_alpha(stops, angle, cw, ch)[..., None]
        comp = alpha * DARK + (1 - alpha) * comp

    # .nav-scrim::before spans 220% of the header height and fades to transparent.
    scrim_h = int(header_h * 2.2)
    band = comp[:header_h]
    t = (np.arange(header_h) / max(scrim_h - 1, 1))[:, None, None]
    a = np.interp(t, [0.0, 0.45, 0.72, 1.0], [0.88, 0.62, 0.28, 0.0])
    band = a * DARK + (1 - a) * band

    print(f"\n=== {name} header  ({cw}x{ch}, header {header_h}px)")
    worst_fail = 0
    for label, (fx0, fx1, target, colour, colour_a) in items.items():
        region = band[:, int(cw * fx0) : int(cw * fx1)]
        lum = rel_lum(region)
        idx = lum >= np.percentile(lum, 90)
        bg_p90 = float(lum[idx].mean())
        bg_rgb = region[idx].mean(axis=0)
        fg = colour_a * colour + (1 - colour_a) * bg_rgb
        ratio = float(contrast(float(rel_lum(fg)), bg_p90))
        ok = ratio >= target
        if not ok:
            worst_fail = max(worst_fail, target - ratio)
        print(
            f"  {label:<16} {bg_p90:7.3f} {ratio:7.2f} {target:6.1f}  "
            f"{'PASS' if ok else 'FAIL'}"
        )
    return worst_fail


def main():
    poster = np.asarray(Image.open(POSTER).convert("RGB"), dtype=float)

    mobile_layers = [
        ([(0.00, 0.88), (0.34, 0.70), (0.56, 0.54), (0.74, 0.34), (0.88, 0.12), (1.00, 0.06)], 0),
        ([(0.00, 0.26), (1.00, 0.04)], 105),
    ]
    desktop_layers = [
        ([(0.00, 0.72), (0.50, 0.34), (1.00, 0.04)], 105),
        ([(0.00, 0.82), (0.46, 0.52), (0.78, 0.18), (1.00, 0.00)], 0),
    ]

    fails = 0
    fails += evaluate("MOBILE 390", poster, (390, 844), MOBILE_BANDS, mobile_layers, (0.0, 1.0))
    fails += evaluate("MOBILE 360 short", poster, (360, 640), MOBILE_BANDS, mobile_layers, (0.0, 1.0))
    # The md: breakpoint swaps in the desktop scrim while text is still full width.
    fails += evaluate("TABLET 768", poster, (768, 1024), MOBILE_BANDS, desktop_layers, (0.03, 0.97))
    fails += evaluate("DESKTOP 1440", poster, (1440, 900), DESKTOP_BANDS, desktop_layers, (0.10, 0.64))
    fails += evaluate("DESKTOP 1920", poster, (1920, 1080), DESKTOP_BANDS, desktop_layers, (0.20, 0.60))

    # Below xl the nav collapses, so mobile only exposes the logo and the
    # hamburger (graphics, 3:1); the link row only exists on wide viewports.
    fails += evaluate_header(
        "MOBILE 390", poster, (390, 844), mobile_layers, 48,
        {"logo (graphic)": (0.02, 0.40, 3.0, TEXT, 1.0),
         "menu button": (0.88, 0.99, 3.0, TEXT, 1.0)},
    )
    fails += evaluate_header(
        "DESKTOP 1440", poster, (1440, 900), desktop_layers, 56,
        {"logo (graphic)": (0.10, 0.24, 3.0, TEXT, 1.0),
         "nav links": (0.26, 0.62, 4.5, TEXT, 0.90)},
    )
    return 1 if fails > 0 else 0


if __name__ == "__main__":
    sys.exit(main())
