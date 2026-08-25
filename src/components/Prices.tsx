"use client";

import { useMemo, useState } from "react";
import { ADDONS, PACKAGES, SITE, whatsappQuoteUrl } from "@/lib/constants";
import {
  EXTEND_RATE,
  NIGHT_RATE,
  POST_RENO_RATE,
  estimateTotal,
  type JobType,
} from "@/lib/pricing";

function parseHelpersInput(raw: string): number {
  const n = Number.parseInt(raw, 10);
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.min(8, n);
}

function parseHoursInput(raw: string): number {
  const n = Number.parseInt(raw, 10);
  if (!Number.isFinite(n)) return 2;
  return Math.min(12, Math.max(2, n));
}

export function Prices() {
  const [helpersInput, setHelpersInput] = useState("1");
  const [hoursInput, setHoursInput] = useState("2");
  const [jobType, setJobType] = useState<JobType>("house");
  const [tools, setTools] = useState(false);
  const [ladder, setLadder] = useState(false);

  const helpers = parseHelpersInput(helpersInput);
  const hours = parseHoursInput(hoursInput);

  const estimate = useMemo(
    () =>
      estimateTotal({
        helpers,
        hours,
        jobType,
        tools,
        ladder,
      }),
    [helpers, hours, jobType, tools, ladder],
  );

  const selectedPackage = PACKAGES.find(
    (pkg) =>
      pkg.helpers === helpers &&
      pkg.hours === hours &&
      jobType === "house" &&
      !tools &&
      !ladder,
  );

  function selectPackage(pkg: (typeof PACKAGES)[number]) {
    setHelpersInput(String(pkg.helpers));
    setHoursInput(String(pkg.hours));
    setJobType("house");
    setTools(false);
    setLadder(false);
    document.getElementById("quick-estimate")?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  const quoteMessage = `Hi Hauzmaid, I'd like a quote: ${estimate.helpers} helper(s), ${estimate.hours} hour(s), ${jobType} cleaning${tools ? ", tools" : ""}${ladder ? ", ladder" : ""}. Estimate ~RM${estimate.total}.`;

  return (
    <section
      id="prices"
      className="scroll-mt-20 border-t border-[var(--hm-border)] bg-[var(--hm-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
          Prices
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
          Clear hourly rates — from RM80
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--hm-muted)]">
          Minimum order is <strong className="text-[var(--hm-text)]">1 helper × 2 hours at RM40/hr → RM80</strong>.
          When total maid-hours is 3 or more (e.g. 1×3h, or <strong className="text-[var(--hm-text)]">2 helpers × 2 hours</strong>),
          the rate is <strong className="text-[var(--hm-text)]">RM35/hr per maid</strong> — so 2×2h = RM140.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl text-[var(--hm-text)]">
              House / office cleaning
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-[var(--hm-border)] pb-3">
                <dt className="text-[var(--hm-muted)]">Minimum booking</dt>
                <dd className="text-[var(--hm-text)]">2 hours</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--hm-border)] pb-3">
                <dt className="text-[var(--hm-muted)]">Min order (1 helper × 2 hrs)</dt>
                <dd className="text-[var(--hm-text)]">RM40 / hour / maid</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--hm-border)] pb-3">
                <dt className="text-[var(--hm-muted)]">Minimum order total</dt>
                <dd className="font-medium text-[var(--hm-accent)]">RM80</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--hm-border)] pb-3">
                <dt className="text-[var(--hm-muted)]">3+ maid-hours total</dt>
                <dd className="text-[var(--hm-text)]">RM35 / hour / maid</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--hm-border)] pb-3">
                <dt className="text-[var(--hm-muted)]">Extension (after booked time)</dt>
                <dd className="text-[var(--hm-text)]">RM{EXTEND_RATE} / hour / maid</dd>
              </div>
            </dl>

            <h3 className="mt-10 font-display text-xl text-[var(--hm-text)]">
              Other rates &amp; add-ons
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-[var(--hm-border)] pb-3">
                <dt className="text-[var(--hm-muted)]">Post-renovation</dt>
                <dd className="text-[var(--hm-text)]">RM{POST_RENO_RATE} / hour / maid</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--hm-border)] pb-3">
                <dt className="text-[var(--hm-muted)]">Night shift (6PM–12AM)</dt>
                <dd className="text-[var(--hm-text)]">RM{NIGHT_RATE} / hour / maid</dd>
              </div>
              {ADDONS.map((addon) => (
                <div
                  key={addon.label}
                  className="flex justify-between gap-4 border-b border-[var(--hm-border)] pb-3"
                >
                  <dt className="text-[var(--hm-muted)]">{addon.label}</dt>
                  <dd className="text-[var(--hm-text)]">
                    RM{addon.price} / {addon.unit}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-6 space-y-1 text-sm text-[var(--hm-muted)]">
              <li>· No transport fee</li>
              <li>· No deposit</li>
              <li>· Pay by bank transfer when helpers arrive</li>
              <li>· Aircon service — non-chemical from RM70; overhaul from RM150</li>
              <li>· Extra tasks available: ironing, folding clothes, fridge, ceiling fan, outdoor</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl text-[var(--hm-text)]">
              Example packages
            </h3>
            <p className="mt-1 text-sm text-[var(--hm-muted)]">
              Tap a package to load it into Quick estimate.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {PACKAGES.map((pkg) => {
                const isSelected =
                  selectedPackage?.label === pkg.label ||
                  (helpers === pkg.helpers &&
                    hours === pkg.hours &&
                    jobType === "house");
                return (
                  <li key={pkg.label}>
                    <button
                      type="button"
                      onClick={() => selectPackage(pkg)}
                      aria-pressed={isSelected}
                      className={`w-full rounded-lg border p-4 text-left transition-colors ${
                        isSelected
                          ? "border-[var(--hm-accent)] bg-[color-mix(in_srgb,var(--hm-accent)_12%,var(--hm-surface-2))] ring-1 ring-[var(--hm-accent)]/40"
                          : "border-[var(--hm-border)] bg-[var(--hm-surface-2)] hover:border-[var(--hm-accent)]/50"
                      }`}
                    >
                      <p className="text-sm text-[var(--hm-muted)]">{pkg.label}</p>
                      <p className="mt-1 font-display text-3xl text-[var(--hm-text)]">
                        RM{pkg.price}
                      </p>
                      <p className="mt-1 text-xs text-[var(--hm-muted)]">{pkg.detail}</p>
                      {isSelected ? (
                        <p className="mt-2 text-xs font-medium text-[var(--hm-accent)]">
                          Selected in estimate ↓
                        </p>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div
              id="quick-estimate"
              className="mt-8 scroll-mt-28 rounded-lg border border-[var(--hm-border)] bg-[var(--hm-bg)] p-5"
            >
              <h3 className="font-display text-xl text-[var(--hm-text)]">
                Quick estimate
              </h3>
              <p className="mt-1 text-sm text-[var(--hm-muted)]">
                {selectedPackage
                  ? `Package loaded: ${selectedPackage.label}`
                  : "Helpers × hours with our rate rules. Final quote may vary by scope."}
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="text-[var(--hm-muted)]">Helpers</span>
                  <input
                    type="number"
                    min={1}
                    max={8}
                    inputMode="numeric"
                    value={helpersInput}
                    onChange={(e) => setHelpersInput(e.target.value)}
                    onBlur={() =>
                      setHelpersInput(String(parseHelpersInput(helpersInput)))
                    }
                    className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-3 text-base text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)] sm:py-2 sm:text-sm"
                  />
                </label>
                <label className="block text-sm">
                  <span className="text-[var(--hm-muted)]">Hours (min 2)</span>
                  <input
                    type="number"
                    min={2}
                    max={12}
                    inputMode="numeric"
                    value={hoursInput}
                    onChange={(e) => setHoursInput(e.target.value)}
                    onBlur={() =>
                      setHoursInput(String(parseHoursInput(hoursInput)))
                    }
                    className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-3 text-base text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)] sm:py-2 sm:text-sm"
                  />
                </label>
              </div>

              <fieldset className="mt-4">
                <legend className="text-sm text-[var(--hm-muted)]">Job type</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(
                    [
                      ["house", "House / office"],
                      ["post-reno", "Post-renovation"],
                      ["night", "Night shift"],
                    ] as const
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setJobType(value)}
                      className={`min-h-10 rounded-full px-3 py-2 text-xs transition-colors sm:min-h-0 sm:py-1.5 ${
                        jobType === value
                          ? "cta-gradient text-white"
                          : "border border-[var(--hm-border)] text-[var(--hm-muted)] hover:text-[var(--hm-text)]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <label className="inline-flex items-center gap-2 text-[var(--hm-muted)]">
                  <input
                    type="checkbox"
                    checked={tools}
                    onChange={(e) => setTools(e.target.checked)}
                    className="accent-[var(--hm-accent)]"
                  />
                  Tools &amp; chemicals (+RM30)
                </label>
                <label className="inline-flex items-center gap-2 text-[var(--hm-muted)]">
                  <input
                    type="checkbox"
                    checked={ladder}
                    onChange={(e) => setLadder(e.target.checked)}
                    className="accent-[var(--hm-accent)]"
                  />
                  4 ft ladder (+RM40)
                </label>
              </div>

              <div className="mt-6 border-t border-[var(--hm-border)] pt-4">
                <p className="text-sm text-[var(--hm-muted)]">
                  {estimate.helpers} × {estimate.hours}h = {estimate.maidHours}{" "}
                  maid-hours × RM{estimate.rate}/hr
                  {estimate.addons > 0 ? ` + RM${estimate.addons} add-ons` : ""}
                </p>
                <p className="mt-1 font-display text-4xl text-[var(--hm-accent)]">
                  RM{estimate.total}
                </p>
                <a
                  href={whatsappQuoteUrl(quoteMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-gradient mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:opacity-90 sm:w-auto sm:min-h-0 sm:py-2.5"
                >
                  Confirm on WhatsApp
                </a>
                <p className="mt-3 text-xs text-[var(--hm-muted)]">
                  Or call{" "}
                  <a href={`tel:${SITE.phoneTel}`} className="text-[var(--hm-text)] underline">
                    {SITE.phoneDisplay}
                  </a>
                  . Estimates are a guide — we confirm the final quote before booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
