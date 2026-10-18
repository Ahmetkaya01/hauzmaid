"use client";

import Link from "next/link";
import { whatsappSiteUrl } from "@/lib/constants";
import { SERVICE_SLUG_BY_ID } from "@/lib/local-seo";
import { useI18n } from "@/components/LanguageProvider";

export function Services() {
  const { lang, t } = useI18n();

  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-[var(--hm-border)] bg-[var(--hm-bg)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
          {t.services.kicker}
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
          {t.services.h2}
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--hm-muted)]">
          {t.services.intro1}
          <span className="text-[var(--hm-text)]">RM80</span>
          {t.services.intro2}
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.services.items.map((service) => (
            <li
              key={service.id}
              className="flex flex-col rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[var(--hm-accent)]/30 bg-[var(--hm-accent)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--hm-accent)]">
                  {service.badge}
                </span>
                <span className="text-xs font-medium text-[var(--hm-text)]">
                  {service.from}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl text-[var(--hm-text)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--hm-muted)]">
                {service.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {service.points.map((point) => (
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

              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5">
                {SERVICE_SLUG_BY_ID[service.id] && (
                  <Link
                    href={`/services/${SERVICE_SLUG_BY_ID[service.id]}`}
                    className="inline-flex text-sm font-medium text-[var(--hm-text)] hover:text-[var(--hm-accent)] hover:underline"
                  >
                    {t.services.learnMore}
                  </Link>
                )}
                {service.quoteOnly ? (
                  <a
                    href="#aircon"
                    className="inline-flex text-sm font-medium text-[var(--hm-accent)] hover:underline"
                  >
                    {t.services.seeAircon}
                  </a>
                ) : (
                  <Link
                    href="/prices"
                    className="inline-flex text-sm font-medium text-[var(--hm-accent)] hover:underline"
                  >
                    {t.services.seePrices}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-dashed border-[var(--hm-border)] bg-[var(--hm-surface)]/50 px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="font-medium text-[var(--hm-text)]">{t.services.nightTitle}</p>
            <p className="mt-1 text-sm text-[var(--hm-muted)]">
              {t.services.nightBody1}
              <strong className="text-[var(--hm-text)]">{t.services.nightRate}</strong>.
            </p>
          </div>
          <a
            href={whatsappSiteUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-sm font-medium text-[var(--hm-accent)] hover:underline sm:mt-0"
          >
            {t.services.nightAsk}
          </a>
        </div>
      </div>
    </section>
  );
}
