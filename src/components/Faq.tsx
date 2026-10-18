"use client";

import { useI18n } from "@/components/LanguageProvider";

export function Faq({ asPage = false }: { asPage?: boolean }) {
  const { t } = useI18n();
  const Heading = asPage ? "h1" : "h2";

  return (
    <section
      id="faq"
      className={`scroll-mt-20 bg-[var(--hm-bg)] ${
        asPage ? "pt-8 pb-20 sm:pb-24" : "border-t border-[var(--hm-border)] py-20 sm:py-24"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
          {t.faq.kicker}
        </p>
        <Heading className="mt-2 max-w-2xl font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
          {t.faq.h2}
        </Heading>
        <div className="mt-10 max-w-3xl space-y-3">
          {t.faq.items.map((item) => (
            <details
              key={item.question}
              className="group border-b border-[var(--hm-border)] pb-3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 text-[var(--hm-text)] marker:hidden">
                <span className="font-medium">{item.question}</span>
                <span
                  className="text-[var(--hm-accent)] transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="pb-2 text-sm leading-relaxed text-[var(--hm-muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
