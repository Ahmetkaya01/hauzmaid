"use client";

import Link from "next/link";
import { useI18n } from "@/components/LanguageProvider";
import { TipCard } from "@/components/TipCard";
import { getFeaturedPosts } from "@/lib/blog";

export function TipsPreview() {
  const { t } = useI18n();
  const posts = getFeaturedPosts(3);

  return (
    <section
      id="tips"
      className="scroll-mt-20 border-t border-[var(--hm-border)] bg-[var(--hm-bg)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
              {t.tipsPreview.kicker}
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
              {t.tipsPreview.h2}
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--hm-muted)]">{t.tipsPreview.intro}</p>
          </div>
          <Link
            href="/tips"
            className="text-sm font-medium text-[var(--hm-accent)] hover:underline"
          >
            {t.tipsPreview.browseAll}
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <TipCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
