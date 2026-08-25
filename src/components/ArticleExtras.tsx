import { SITE, whatsappQuoteUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons";
import type { BlogPost } from "@/lib/blog";

export function ArticleCta({ post }: { post: BlogPost }) {
  const message = `Hi Hauzmaid, I read "${post.title}" and I'd like to book a cleaning.`;

  return (
    <aside className="mt-12 rounded-xl border border-[var(--hm-accent)]/30 bg-[color-mix(in_srgb,var(--hm-accent)_8%,var(--hm-surface))] p-6 sm:p-8">
      <h2 className="font-display text-2xl text-[var(--hm-text)]">
        Ready for a spotless home?
      </h2>
      <p className="mt-2 max-w-xl text-sm text-[var(--hm-muted)]">
        Book professional house cleaning in Kuala Lumpur &amp; Klang Valley —
        from RM80, no deposit, no transport fee.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={whatsappQuoteUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-gradient inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Book on WhatsApp
        </a>
        <a
          href={`tel:${SITE.phoneTel}`}
          className="inline-flex items-center rounded-md border border-[var(--hm-border)] px-5 py-3 text-sm text-[var(--hm-text)] hover:border-[var(--hm-accent)]"
        >
          Call {SITE.phoneDisplay}
        </a>
      </div>
    </aside>
  );
}

export function ShareButtons({ post }: { post: BlogPost }) {
  const url = `${SITE.url}/tips/${post.slug}`;
  const text = encodeURIComponent(post.title);
  const encoded = encodeURIComponent(url);

  const links = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${text}%20${encoded}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`,
    },
  ];

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--hm-border)] pt-6">
      <span className="text-sm text-[var(--hm-muted)]">Share:</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[var(--hm-border)] px-3 py-1.5 text-xs text-[var(--hm-text)] transition-colors hover:border-[var(--hm-accent)] hover:text-[var(--hm-accent)]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
