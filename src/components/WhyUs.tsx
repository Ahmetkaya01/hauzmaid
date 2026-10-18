"use client";

import { SITE, whatsappSiteUrl } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";
import { WhatsAppIcon } from "@/components/icons";

export function WhyUs() {
  const { lang, t } = useI18n();

  return (
    <section
      id="why-us"
      className="scroll-mt-20 border-t border-[var(--hm-border)] bg-[var(--hm-bg)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
          {t.whyUs.kicker}
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
          {t.whyUs.h2}
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--hm-muted)]">{t.whyUs.intro}</p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.whyUs.reasons.map((reason, i) => (
            <li
              key={reason.title}
              className="rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] p-6 transition-colors hover:border-[var(--hm-accent)]/40"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--hm-accent)]/15 font-display text-lg font-semibold text-[var(--hm-accent)]"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs font-medium tracking-wide text-[var(--hm-accent)] uppercase">
                    {reason.highlight}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-[var(--hm-text)]">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--hm-muted)]">
                    {reason.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={whatsappSiteUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-gradient inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(37,211,102,0.28)] hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t.whyUs.ctaWhatsApp}
          </a>
          <a
            href={SITE.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--hm-accent)] hover:underline"
          >
            {t.whyUs.ctaMaps}
          </a>
        </div>
      </div>
    </section>
  );
}
