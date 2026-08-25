import Link from "next/link";
import { TipCard } from "@/components/TipCard";
import { getFeaturedPosts } from "@/lib/blog";

export function TipsPreview() {
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
              Cleaning tips &amp; home care
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
              Guides for cleaner homes in Klang Valley
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--hm-muted)]">
              Short, practical articles on house cleaning KL, move-in/out prep,
              and everyday home care — from the Hauzmaid team.
            </p>
          </div>
          <Link
            href="/tips"
            className="text-sm font-medium text-[var(--hm-accent)] hover:underline"
          >
            Browse all tips →
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
