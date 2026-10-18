"use client";

import Image from "next/image";
import Link from "next/link";
import { ArticleCta, ShareButtons } from "@/components/ArticleExtras";
import { TipCard } from "@/components/TipCard";
import { useI18n } from "@/components/LanguageProvider";
import { getRelatedPosts, localizePost, type BlogPost } from "@/lib/blog";

export function TipArticleBody({ post }: { post: BlogPost }) {
  const { lang, t } = useI18n();
  const localized = localizePost(post, lang);
  const related = getRelatedPosts(post);
  const categoryLabel = t.tipsPage.categories[post.category] ?? post.category;

  return (
    <main className="pt-24 pb-24 md:pb-20">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm text-[var(--hm-muted)]">
          <Link href="/tips" className="text-[var(--hm-accent)] hover:underline">
            {t.tipsPage.backToTips}
          </Link>
          {" · "}
          {categoryLabel}
          {" · "}
          {post.readingTime} {t.tipsPage.minRead}
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight font-medium text-[var(--hm-text)] sm:text-5xl">
          {localized.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--hm-muted)]">{localized.excerpt}</p>
        <div className="relative mt-8 h-48 overflow-hidden rounded-xl sm:h-64">
          <Image
            src={post.coverImage}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="mt-10 space-y-10">
          {localized.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl text-[var(--hm-text)]">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-3 leading-relaxed text-[var(--hm-muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <ShareButtons post={post} />
        <ArticleCta post={post} />
      </article>

      {related.length > 0 && (
        <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-[var(--hm-text)]">{t.tipsPage.related}</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <TipCard post={item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
