"use client";

import Image from "next/image";
import { whatsappSiteUrl } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";
import { WhatsAppIcon } from "@/components/icons";
import { HeroVideo } from "@/components/HeroVideo";

export function Hero() {
  const { lang, t } = useI18n();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden max-[380px]:min-h-[92svh]"
      aria-label="Hauzmaid hero"
    >
      <HeroVideo />
      <div className="hero-overlay absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-24 pb-24 sm:px-6 sm:pt-28 sm:pb-20 lg:pb-24">
        <div className="animate-fade-up">
          <Image
            src="/logo-light.png"
            alt="Hauzmaid"
            width={340}
            height={80}
            className="h-12 w-auto sm:h-16 md:h-20"
            priority
          />
        </div>
        <h1 className="animate-fade-up-delay hero-text-shadow mt-3 max-w-3xl font-display text-[1.75rem] leading-tight font-medium text-[var(--hm-text)] sm:text-4xl md:text-5xl">
          {t.hero.h1}
        </h1>
        <p className="animate-fade-up-delay-2 hero-text-shadow mt-3 max-w-xl text-[0.95rem] leading-relaxed text-[var(--hm-text)] sm:mt-4 sm:text-lg">
          {t.hero.sub1}
          <span className="text-[var(--hm-text)]">{t.hero.subStrong}</span>
          {t.hero.sub2}
          <span className="text-[var(--hm-accent)]">RM35</span>
          {t.hero.sub3}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2" aria-label="Trust highlights">
          {t.hero.trust.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-[var(--hm-border)] bg-[color-mix(in_srgb,var(--hm-surface)_80%,transparent)] px-2.5 py-1 backdrop-blur-sm text-[0.7rem] text-[var(--hm-muted)] sm:px-3 sm:py-1.5 sm:text-sm"
            >
              {chip}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <a
            href={whatsappSiteUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-gradient inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-md px-5 py-3.5 text-base font-semibold text-white shadow-[0_0_32px_rgba(37,211,102,0.35)] transition-opacity hover:opacity-90 sm:w-auto sm:px-6"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.hero.ctaWhatsApp}
          </a>
          <a
            href="#prices"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-[var(--hm-border)] bg-[color-mix(in_srgb,var(--hm-surface)_60%,transparent)] px-5 py-3 text-sm font-medium text-[var(--hm-text)] transition-colors hover:border-[var(--hm-accent)] sm:w-auto"
          >
            {t.hero.ctaPrices}
          </a>
        </div>
      </div>
    </section>
  );
}
