"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { localizePost } from "@/lib/blog";
import { useI18n } from "@/components/LanguageProvider";

export function TipCard({ post }: { post: BlogPost }) {
  const { lang, t } = useI18n();
  const localized = localizePost(post, lang);
  const categoryLabel = t.tipsPage.categories[post.category] ?? post.category;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] transition-colors hover:border-[var(--hm-accent)]/40">
      <Link
        href={`/tips/${post.slug}`}
        className="relative block h-36 overflow-hidden"
        aria-label={localized.title}
      >
        <Image
          src={post.coverImage}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
          aria-hidden
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-black/45 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {categoryLabel}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-[var(--hm-muted)]">
          {post.readingTime} {t.tipsPage.minRead} · {post.date}
        </p>
        <h3 className="mt-2 font-display text-xl leading-snug text-[var(--hm-text)] group-hover:text-[var(--hm-accent)]">
          <Link href={`/tips/${post.slug}`}>{localized.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--hm-muted)]">
          {localized.excerpt}
        </p>
        <Link
          href={`/tips/${post.slug}`}
          className="mt-4 inline-flex text-sm font-medium text-[var(--hm-accent)] hover:underline"
        >
          {t.tipsPage.readMore}
        </Link>
      </div>
    </article>
  );
}
