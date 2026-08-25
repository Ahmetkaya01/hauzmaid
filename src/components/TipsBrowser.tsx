"use client";

import { useMemo, useState } from "react";
import { TipCard } from "@/components/TipCard";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  filterPosts,
  type BlogCategory,
} from "@/lib/blog";

type CategoryFilter = BlogCategory | "All";

export function TipsBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");

  const results = useMemo(
    () => filterPosts(BLOG_POSTS, query, category),
    [query, category],
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="block w-full max-w-md text-sm">
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cleaning tips…"
            className="w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2.5 text-[var(--hm-text)] outline-none placeholder:text-[var(--hm-muted)] focus:border-[var(--hm-accent)]"
          />
        </label>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="group" aria-label="Categories">
          {(["All", ...BLOG_CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`shrink-0 rounded-full px-3 py-2 text-xs transition-colors sm:py-1.5 ${
                category === cat
                  ? "cta-gradient text-white"
                  : "border border-[var(--hm-border)] text-[var(--hm-muted)] hover:text-[var(--hm-text)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="mt-12 text-[var(--hm-muted)]">
          No articles match your search. Try another keyword or category.
        </p>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((post) => (
            <li key={post.slug}>
              <TipCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
