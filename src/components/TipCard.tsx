import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function TipCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] transition-colors hover:border-[var(--hm-accent)]/40">
      <div
        className="relative flex h-36 items-end p-4"
        style={{
          background: `linear-gradient(135deg, ${post.accentFrom} 0%, ${post.accentTo} 100%)`,
        }}
        aria-hidden
      >
        <span className="rounded-full bg-black/35 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-[var(--hm-muted)]">
          {post.readingTime} min read · {post.date}
        </p>
        <h3 className="mt-2 font-display text-xl leading-snug text-[var(--hm-text)] group-hover:text-[var(--hm-accent)]">
          <Link href={`/tips/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--hm-muted)]">
          {post.excerpt}
        </p>
        <Link
          href={`/tips/${post.slug}`}
          className="mt-4 inline-flex text-sm font-medium text-[var(--hm-accent)] hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
