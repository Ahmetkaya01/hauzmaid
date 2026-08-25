"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SITE, TESTIMONIALS } from "@/lib/constants";

const ROTATE_MS = 2000;
const FADE_MS = 350;

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useRef(false);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const goTo = useCallback((next: number) => {
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    const target = (next + TESTIMONIALS.length) % TESTIMONIALS.length;
    if (reducedMotion.current) {
      setIndex(target);
      setProgress(0);
      return;
    }
    setVisible(false);
    fadeTimer.current = setTimeout(() => {
      setIndex(target);
      setVisible(true);
      setProgress(0);
    }, FADE_MS);
  }, []);

  useEffect(() => {
    if (paused || TESTIMONIALS.length < 2) return;

    const started = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - started;
      setProgress(Math.min(100, (elapsed / ROTATE_MS) * 100));
    }, 50);

    const rotate = setTimeout(() => {
      goTo(index + 1);
    }, ROTATE_MS);

    return () => {
      clearInterval(tick);
      clearTimeout(rotate);
    };
  }, [paused, index, goTo]);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="reviews"
      className="scroll-mt-20 border-t border-[var(--hm-border)] bg-[var(--hm-bg)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-4">
          <div>
            <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
              Reviews
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
              What customers say
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--hm-muted)]">
              Real feedback and trust highlights from people who booked Hauzmaid
              across Klang Valley.
            </p>
          </div>
          <p className="w-fit rounded-full border border-[var(--hm-border)] px-3 py-1.5 text-[0.7rem] text-[var(--hm-muted)] sm:text-xs">
            Auto-rotates every 2s · tap pause
          </p>
        </div>

        <div
          className="mt-8 rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] p-4 sm:mt-10 sm:p-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-live="polite"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
        >
          <div className="flex items-center justify-between gap-3 text-sm text-[var(--hm-muted)]">
            <span>
              Story{" "}
              <span className="font-medium text-[var(--hm-text)]">
                {index + 1}
              </span>{" "}
              of {TESTIMONIALS.length}
              {paused ? " · paused" : ""}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="rounded-md border border-[var(--hm-border)] px-3 py-1.5 text-[var(--hm-text)] transition-colors hover:border-[var(--hm-accent)]"
                aria-label="Previous review"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="rounded-md border border-[var(--hm-border)] px-3 py-1.5 text-[var(--hm-text)] transition-colors hover:border-[var(--hm-accent)]"
                aria-label="Next review"
              >
                →
              </button>
            </div>
          </div>

          <div
            className="mt-3 h-1 overflow-hidden rounded-full bg-[var(--hm-border)]"
            aria-hidden
          >
            <div
              className="h-full rounded-full bg-[var(--hm-accent)] transition-[width] duration-75 ease-linear motion-reduce:transition-none"
              style={{ width: paused ? `${progress}%` : `${progress}%` }}
            />
          </div>

          <blockquote
            className="mt-6 min-h-[160px] transition-opacity motion-reduce:transition-none sm:min-h-[140px]"
            style={{
              opacity: visible ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
            }}
          >
            <p className="font-display text-xl leading-snug text-[var(--hm-text)] sm:text-3xl">
              “{current.quote}”
            </p>
            <footer className="mt-4 text-sm text-[var(--hm-muted)]">
              — {current.source}
            </footer>
          </blockquote>

          <div
            className="mt-6 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Choose a review"
          >
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.source + i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show story ${i + 1}`}
                onClick={() => goTo(i)}
                className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                  i === index
                    ? "bg-[var(--hm-accent)] text-white"
                    : "border border-[var(--hm-border)] text-[var(--hm-muted)] hover:text-[var(--hm-text)]"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <a
            href={SITE.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--hm-accent)] hover:underline"
          >
            Find us on Google Maps →
          </a>
          <a
            href={SITE.facebookReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--hm-blue)] hover:underline"
          >
            Read more Facebook reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
