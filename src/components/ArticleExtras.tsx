"use client";

import { SITE, whatsappQuoteUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons";
import { useI18n } from "@/components/LanguageProvider";
import { localizePost, type BlogPost } from "@/lib/blog";

export function ArticleCta({ post }: { post: BlogPost }) {
  const { lang, t } = useI18n();
  const localized = localizePost(post, lang);
  const message =
    lang === "ms"
      ? `Hai Hauzmaid, saya baca "${localized.title}" dan ingin menempah pembersihan.`
      : `Hi Hauzmaid, I read "${localized.title}" and I'd like to book a cleaning.`;

  return (
    <aside className="mt-12 rounded-xl border border-[var(--hm-accent)]/30 bg-[color-mix(in_srgb,var(--hm-accent)_8%,var(--hm-surface))] p-6 sm:p-8">
      <h2 className="font-display text-2xl text-[var(--hm-text)]">{t.tipsPage.ctaTitle}</h2>
      <p className="mt-2 max-w-xl text-sm text-[var(--hm-muted)]">{t.tipsPage.ctaBody}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={whatsappQuoteUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-gradient inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {t.tipsPage.ctaWhatsApp}
        </a>
      </div>
    </aside>
  );
}

export function ShareButtons({ post }: { post: BlogPost }) {
  const { lang, t } = useI18n();
  const localized = localizePost(post, lang);
  const url = `${SITE.url}/tips/${post.slug}`;
  const text = encodeURIComponent(localized.title);
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
      <span className="text-sm text-[var(--hm-muted)]">{t.tipsPage.share}</span>
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
