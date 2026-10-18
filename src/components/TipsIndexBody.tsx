"use client";

import { TipsBrowser } from "@/components/TipsBrowser";
import { useI18n } from "@/components/LanguageProvider";

export function TipsIndexBody() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
        {t.tipsPage.kicker}
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium text-[var(--hm-text)] sm:text-5xl">
        {t.tipsPage.h1}
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--hm-muted)]">{t.tipsPage.intro}</p>
      <div className="mt-10">
        <TipsBrowser />
      </div>
    </div>
  );
}
