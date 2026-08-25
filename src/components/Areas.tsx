import { AREAS, FEATURED_AREAS, SITE } from "@/lib/constants";

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Areas() {
  return (
    <section
      id="areas"
      className="scroll-mt-20 border-t border-[var(--hm-border)] bg-[var(--hm-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
          Service areas
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
          Cleaning service KL &amp; across Klang Valley
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--hm-muted)]">
          Looking for a maid service near you? Hauzmaid provides hourly, part-time,
          daily, and one-time house cleaning across Kuala Lumpur and the whole
          Klang Valley — with no transport fee anywhere we serve.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_AREAS.map((area) => (
            <li
              key={area.name}
              className="group rounded-xl border border-[var(--hm-border)] bg-[var(--hm-bg)] p-5 transition-colors hover:border-[var(--hm-accent)]/50"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--hm-accent)]/10 text-[var(--hm-accent)]">
                  <PinIcon className="h-4.5 w-4.5" />
                </span>
                <h3 className="font-display text-xl text-[var(--hm-text)]">
                  {area.name}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--hm-muted)]">
                {area.blurb}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <h3 className="text-sm font-medium text-[var(--hm-text)]">
            Also serving nearby areas
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-[var(--hm-border)] bg-[var(--hm-bg)] px-3 py-1.5 text-sm text-[var(--hm-muted)]"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-sm text-[var(--hm-muted)]">
          Not sure if we cover your neighbourhood?{" "}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--hm-accent)] hover:underline"
          >
            Ask us on WhatsApp
          </a>{" "}
          — we usually do.
        </p>
      </div>
    </section>
  );
}
