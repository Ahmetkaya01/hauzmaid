import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TipArticleBody } from "@/components/TipArticleBody";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog";
import { SITE } from "@/lib/constants";
import { BUSINESS_ID } from "@/lib/schema";

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
      images: [{ url: post.coverImage, width: 1600, height: 900, alt: post.title }],
    },
  };
}

export default async function TipArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleUrl = `${SITE.url}/tips/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
    mainEntityOfPage: articleUrl,
    articleSection: post.category,
    image: `${SITE.url}${post.coverImage}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <TipArticleBody post={post} />
      <Footer />
    </>
  );
}
