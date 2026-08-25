import { SERVICES, SITE } from "@/lib/constants";

const SERVICE_META: Record<
  string,
  { badge: string; from?: string; points: string[] }
> = {
  "house-office": {
    badge: "Homes & offices",
    from: "From RM80",
    points: ["Home or office", "One-time / weekly / monthly", "Min 2 hours"],
  },
  move: {
    badge: "Moving day",
    from: "From RM80",
    points: ["Empty or furnished units", "Apartments & landed", "Deep clean ready"],
  },
  "post-reno": {
    badge: "After works",
    from: "RM40 / hr / maid",
    points: ["Dust & debris", "Construction residue", "Ready to move in"],
  },
  aircon: {
    badge: "Cooling units",
    from: "From RM70",
    points: [
      "Non-chemical from RM70",
      "Overhaul from RM150",
      "Free gas top-up (up to 20 PSI)",
    ],
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-[var(--hm-border)] bg-[var(--hm-bg)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
          Services
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
          What we clean for you in Klang Valley
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--hm-muted)]">
          Pick a service below — then WhatsApp us with your area, helpers, and hours.
          House cleaning starts from <span className="text-[var(--hm-text)]">RM80</span>{" "}
          (1 helper · 2 hours).
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const meta = SERVICE_META[service.id];
            const isQuote = "quoteOnly" in service && service.quoteOnly;
            return (
              <li
                key={service.id}
                className="flex flex-col rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] p-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[var(--hm-accent)]/30 bg-[var(--hm-accent)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--hm-accent)]">
                    {meta?.badge}
                  </span>
                  {meta?.from ? (
                    <span className="text-xs font-medium text-[var(--hm-text)]">
                      {meta.from}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 font-display text-2xl text-[var(--hm-text)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--hm-muted)]">
                  {service.description}
                </p>

                {meta?.points ? (
                  <ul className="mt-4 space-y-1.5">
                    {meta.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-[var(--hm-muted)]"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--hm-accent)]"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-auto pt-5">
                  {isQuote ? (
                    <a
                      href="#aircon"
                      className="inline-flex text-sm font-medium text-[var(--hm-accent)] hover:underline"
                    >
                      See aircon prices →
                    </a>
                  ) : (
                    <a
                      href="#prices"
                      className="inline-flex text-sm font-medium text-[var(--hm-accent)] hover:underline"
                    >
                      See prices &amp; packages →
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 rounded-xl border border-dashed border-[var(--hm-border)] bg-[var(--hm-surface)]/50 px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="font-medium text-[var(--hm-text)]">Night shift (6PM–12AM)</p>
            <p className="mt-1 text-sm text-[var(--hm-muted)]">
              Evening cleaning available at <strong className="text-[var(--hm-text)]">RM60 / hour / maid</strong>.
            </p>
          </div>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-sm font-medium text-[var(--hm-accent)] hover:underline sm:mt-0"
          >
            Ask about night shift →
          </a>
        </div>
      </div>
    </section>
  );
}
