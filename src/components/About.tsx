"use client";

import Image from "next/image";
import { SITE, whatsappQuoteUrl } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { WhatsAppIcon } from "@/components/icons";

export function About({ asPage = false }: { asPage?: boolean }) {
  const { t } = useI18n();
  const Heading = asPage ? "h1" : "h2";

  return (
    <>
      <section
        id="about"
        className={`scroll-mt-20 bg-[var(--hm-bg)] ${
          asPage ? "pt-8 pb-20 sm:pb-24" : "border-t border-[var(--hm-border)] py-20 sm:py-24"
        }`}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-[var(--hm-border)] bg-[var(--hm-surface)] shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:mx-0">
            <Image
              src="/about-cleaner.jpg"
              alt={t.about.imageAlt}
              width={780}
              height={792}
              className="h-full w-full object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 420px"
              priority
            />
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
              {t.about.kicker}
            </p>
            <Heading className="mt-2 font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
              {t.about.h2}
            </Heading>
            <p className="mt-4 leading-relaxed text-[var(--hm-muted)]">{t.about.p1}</p>
            <p className="mt-4 leading-relaxed text-[var(--hm-muted)]">{t.about.p2}</p>
          </div>
        </div>

        {/* Tasks we cover */}
        <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
          <h3 className="font-display text-2xl text-[var(--hm-text)] sm:text-3xl">
            {t.about.tasksTitle}
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--hm-muted)]">{t.about.tasksSub}</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] p-6">
              <p className="text-xs font-medium tracking-wide text-[var(--hm-accent)] uppercase">
                {t.about.basicTitle}
              </p>
              <ul className="mt-4 space-y-2.5">
                {t.about.basicTasks.map((task) => (
                  <li key={task} className="flex gap-2 text-sm text-[var(--hm-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--hm-accent)]" aria-hidden />
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] p-6">
              <p className="text-xs font-medium tracking-wide text-[var(--hm-accent)] uppercase">
                {t.about.extraTitle}
              </p>
              <ul className="mt-4 space-y-2.5">
                {t.about.extraTasks.map((task) => (
                  <li key={task} className="flex gap-2 text-sm text-[var(--hm-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--hm-accent)]" aria-hidden />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-[var(--hm-border)] bg-[var(--hm-surface)]/60 p-5 sm:flex sm:items-start sm:justify-between sm:gap-6">
            <div>
              <p className="font-medium text-[var(--hm-text)]">{t.about.toolsTitle}</p>
              <p className="mt-1 text-sm text-[var(--hm-muted)]">
                {t.about.toolsBody1}
                <strong className="text-[var(--hm-text)]">RM30 / {t.prices.perJob}</strong>
                {t.about.toolsBody2}
                <strong className="text-[var(--hm-text)]">RM40</strong>
                {t.about.toolsBody3}
              </p>
            </div>
            <p className="mt-3 text-xs text-[var(--hm-muted)] sm:mt-0 sm:max-w-xs sm:text-right">
              {t.about.toolsNote}
            </p>
          </div>
        </div>

        {/* Aircon detail */}
        <div id="aircon" className="mx-auto mt-16 max-w-6xl scroll-mt-24 px-4 sm:px-6">
          <h3 className="font-display text-2xl text-[var(--hm-text)] sm:text-3xl">
            {t.about.airconTitle}
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--hm-muted)]">
            {t.about.airconSub1}
            <span className="text-[var(--hm-text)]">RM70</span>
            {t.about.airconSub2}
          </p>

          <ul className="mt-8 grid gap-5 lg:grid-cols-3">
            {t.about.airconPlans.map((plan) => (
              <li
                key={plan.title}
                className="flex flex-col rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] p-6"
              >
                <p className="text-xs font-medium tracking-wide text-[var(--hm-accent)] uppercase">
                  {plan.note}
                </p>
                <h4 className="mt-2 font-display text-xl text-[var(--hm-text)]">{plan.title}</h4>
                <p className="mt-1 font-display text-3xl text-[var(--hm-accent)]">{plan.price}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {plan.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-[var(--hm-muted)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--hm-accent)]" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappQuoteUrl(
                    t.about.planQuoteMessage.replace("{plan}", plan.title),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-gradient mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold text-white hover:opacity-90"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t.about.whatsappQuote}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we are — live-site showreel background (about.mp4) */}
      <section
        id="who-we-are"
        className="relative scroll-mt-20 min-h-[70svh] overflow-hidden border-t border-[var(--hm-border)]"
        aria-label="Who we are"
      >
        <div className="absolute inset-0">
          <BackgroundVideo
            src="/about.mp4"
            poster="/about-poster.jpg"
            label="Hauzmaid Who we are showreel"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,17,24,0.55)_0%,rgba(11,17,24,0.72)_45%,rgba(11,17,24,0.88)_100%)]"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-28">
          <h2 className="font-display text-4xl font-medium tracking-wide text-[var(--hm-text)] sm:text-5xl">
            {t.about.whoTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--hm-text)]/90 sm:text-lg">
            {t.about.whoBody1}
            <strong className="font-semibold text-[var(--hm-text)]">{t.about.whoStrong}</strong>
            {t.about.whoBody2}
          </p>
          <a
            href="/contact"
            className="cta-gradient mt-8 inline-flex min-h-12 items-center rounded-md px-8 text-sm font-semibold text-white hover:opacity-90"
          >
            {t.about.contactUs}
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--hm-muted)] hover:text-[var(--hm-text)]"
            >
              Facebook
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--hm-muted)] hover:text-[var(--hm-text)]"
            >
              Instagram
            </a>
            <a
              href={SITE.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--hm-muted)] hover:text-[var(--hm-text)]"
            >
              Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
