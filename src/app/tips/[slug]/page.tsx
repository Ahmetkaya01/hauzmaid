import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCta, ShareButtons } from "@/components/ArticleExtras";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TipCard } from "@/components/TipCard";
import {
  BLOG_POSTS,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { SITE } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/tips/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      url: `/tips/${post.slug}`,
    },
  };
}

export default async function TipArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const articleUrl = `${SITE.url}/tips/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: SITE.legalName,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo-light.png`,
      },
    },
    mainEntityOfPage: articleUrl,
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm text-[var(--hm-muted)]">
            <Link href="/tips" className="text-[var(--hm-accent)] hover:underline">
              Cleaning tips
            </Link>
            {" · "}
            {post.category}
            {" · "}
            {post.readingTime} min read
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight font-medium text-[var(--hm-text)] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--hm-muted)]">{post.excerpt}</p>
          <div
            className="mt-8 h-40 rounded-xl sm:h-52"
            style={{
              background: `linear-gradient(135deg, ${post.accentFrom} 0%, ${post.accentTo} 100%)`,
            }}
            role="img"
            aria-label=""
          />

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl text-[var(--hm-text)]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 leading-relaxed text-[var(--hm-muted)]">
                    {p}
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
            <h2 className="font-display text-2xl text-[var(--hm-text)]">
              Related articles
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <TipCard post={r} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
