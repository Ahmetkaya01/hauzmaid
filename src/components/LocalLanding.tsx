import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { PACKAGES, SITE, whatsappQuoteUrl } from "@/lib/constants";
import type { Faq } from "@/lib/local-seo";

type Crumb = { href: string; label: string };
type LinkItem = { href: string; label: string };
type ListBlock = { heading: string; items: readonly string[] };

type Props = {
  breadcrumbs: Crumb[];
  kicker: string;
  h1: string;
  intro: string;
  priceFrom: string;
  whatsappMessage: string;
  lists: ListBlock[];
  note?: string;
  customerOnly?: string;
  faqs: Faq[];
  related: { heading: string; links: LinkItem[] }[];
};

export function LocalLanding({
  breadcrumbs,
  kicker,
  h1,
  intro,
  priceFrom,
  whatsappMessage,
  lists,
  note,
  customerOnly,
  faqs,
  related,
}: Props) {
  const waUrl = whatsappQuoteUrl(whatsappMessage);

  return (
    <main className="pt-24 pb-24 md:pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-[var(--hm-muted)]">
          <ol className="flex flex-wrap gap-1">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex gap-1">
                {i > 0 && <span aria-hidden>/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="text-[var(--hm-accent)] hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="mt-6 text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
          {kicker}
        </p>
        <h1 className="mt-2 font-display text-4xl leading-tight font-medium text-[var(--hm-text)] sm:text-5xl">
          {h1}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[var(--hm-muted)]">{intro}</p>
        {customerOnly && (
          <p className="mt-4 rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-4 py-3 text-sm text-[var(--hm-muted)]">
            {customerOnly}{" "}
            <Link href="/jobs" className="font-medium text-[var(--hm-accent)] hover:underline">
              Jobs / not hiring
            </Link>
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-gradient inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp {SITE.phoneDisplay}
          </a>
          <span className="rounded-full border border-[var(--hm-accent)]/30 bg-[var(--hm-accent)]/10 px-3 py-1 text-sm font-medium text-[var(--hm-accent)]">
            {priceFrom} · No deposit · No transport fee
          </span>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg) => (
            <li
              key={pkg.label}
              className="rounded-lg border border-[var(--hm-border)] bg-[var(--hm-surface)] px-4 py-3"
            >
              <p className="text-xs text-[var(--hm-muted)]">{pkg.label}</p>
              <p className="mt-1 font-display text-2xl text-[var(--hm-text)]">RM{pkg.price}</p>
              <p className="mt-0.5 text-xs text-[var(--hm-muted)]">{pkg.detail}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {lists.map((block) => (
            <section key={block.heading}>
              <h2 className="font-display text-2xl text-[var(--hm-text)]">{block.heading}</h2>
              <ul className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-[var(--hm-muted)]">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--hm-accent)]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {note && (
          <p className="mt-10 rounded-xl border border-dashed border-[var(--hm-border)] bg-[var(--hm-surface)]/50 px-5 py-4 text-sm text-[var(--hm-muted)]">
            {note}
          </p>
        )}

        <section className="mt-14">
          <h2 className="font-display text-2xl text-[var(--hm-text)]">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-medium text-[var(--hm-text)]">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--hm-muted)]">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <aside className="mt-14 rounded-xl border border-[var(--hm-accent)]/30 bg-[color-mix(in_srgb,var(--hm-accent)_8%,var(--hm-surface))] p-6 sm:p-8">
          <h2 className="font-display text-2xl text-[var(--hm-text)]">Get a quote in minutes</h2>
          <p className="mt-2 max-w-xl text-sm text-[var(--hm-muted)]">
            Send your area, date, number of helpers, and hours on WhatsApp. We reply with a
            confirmed price before you book.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-gradient mt-5 inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book on WhatsApp
          </a>
        </aside>

        {related.map((group) => (
          <section key={group.heading} className="mt-14">
            <h2 className="font-display text-xl text-[var(--hm-text)]">{group.heading}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block rounded-full border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-1.5 text-sm text-[var(--hm-muted)] transition-colors hover:border-[var(--hm-accent)] hover:text-[var(--hm-accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
