"use client";

import { whatsappSiteUrl } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";
import { WhatsAppIcon } from "@/components/icons";

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3ZM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15ZM5 15l.7 1.6L7.3 17.3l-1.6.7L5 19.6l-.7-1.6-1.6-.7 1.6-.7L5 15Z" />
    </svg>
  );
}

function BankIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

const STEP_ICONS = [ChatIcon, CalendarIcon, SparklesIcon, BankIcon] as const;

export function Booking() {
  const { lang, t } = useI18n();

  return (
    <section
      id="booking"
      className="scroll-mt-20 border-t border-[var(--hm-border)] bg-[var(--hm-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
          {t.booking.kicker}
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
          {t.booking.h2}
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--hm-muted)]">{t.booking.intro}</p>

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-[var(--hm-accent)]/10 via-[var(--hm-accent)]/50 to-[var(--hm-accent)]/10 lg:block"
          />
          {t.booking.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <li key={step.title} className="group relative flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--hm-accent)]/30 bg-[var(--hm-surface-2)] text-[var(--hm-accent)] shadow-[0_0_20px_rgba(74,130,203,0.15)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--hm-accent)] group-hover:shadow-[0_0_28px_rgba(74,130,203,0.35)] motion-reduce:transition-none group-hover:motion-reduce:translate-y-0">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--hm-accent)] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl text-[var(--hm-text)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--hm-muted)]">{step.body}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 flex flex-col items-center gap-3 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-start sm:text-left sm:gap-4">
          <a
            href={whatsappSiteUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-gradient inline-flex w-full max-w-sm items-center justify-center gap-2.5 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,211,102,0.3)] transition-opacity hover:opacity-90 sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.booking.cta}
          </a>
          <span className="text-sm text-[var(--hm-muted)]">{t.booking.confirmedNote}</span>
        </div>
      </div>
    </section>
  );
}
