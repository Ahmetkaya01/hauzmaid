"use client";

import Image from "next/image";
import Link from "next/link";
import { FEATURED_AREAS, SITE, whatsappSiteUrl } from "@/lib/constants";
import { areaSlugForName } from "@/lib/local-seo";
import { useI18n } from "@/components/LanguageProvider";

export function Footer() {
  const { lang, t } = useI18n();

  const navLinks = [
    { href: "/services", label: t.nav.services },
    { href: "/prices", label: t.nav.prices },
    { href: "/about", label: t.nav.about },
    { href: "/areas", label: t.nav.areas },
    { href: "/contact", label: t.nav.contact },
    { href: "/faq", label: t.footer.faq },
  ];

  return (
    <footer className="border-t border-[var(--hm-border)] bg-[var(--hm-bg)] py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <Link href="/" aria-label="Hauzmaid home" className="inline-block">
            <Image src="/logo-light.png" alt="Hauzmaid" width={140} height={33} className="h-8 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-[var(--hm-muted)]">{t.footer.blurb}</p>
          <p className="mt-3 text-sm text-[var(--hm-text)]">{SITE.legalName}</p>
          <p className="mt-1 text-sm text-[var(--hm-muted)]">{t.footer.nap}</p>
          <p className="mt-1 text-sm text-[var(--hm-muted)]">{t.footer.hours}</p>
          <p className="mt-3 text-sm text-[var(--hm-text)]">{t.footer.highlights}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-[var(--hm-text)]">{t.footer.explore}</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--hm-muted)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--hm-accent)]">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/part-time-maid-kl" className="hover:text-[var(--hm-accent)]">
                {t.footer.partTimeMaid}
              </Link>
            </li>
            <li>
              <Link href="/home-aircon-cleaning-kl" className="hover:text-[var(--hm-accent)]">
                {t.footer.homeAircon}
              </Link>
            </li>
            <li>
              <Link href="/tips" className="hover:text-[var(--hm-accent)]">
                {t.footer.cleaningTips}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-[var(--hm-text)]">{t.footer.contact}</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--hm-muted)]">
            <li>
              <a
                href={whatsappSiteUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--hm-accent)]"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappSiteUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--hm-accent)]"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={SITE.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--hm-accent)]"
              >
                Google Maps
              </a>
            </li>
            <li>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--hm-accent)]"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--hm-accent)]"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-[var(--hm-border)] px-4 pt-6 sm:px-6">
        <p className="text-sm font-medium text-[var(--hm-text)]">{t.footer.popularAreas}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {FEATURED_AREAS.map((area) => {
            const slug = areaSlugForName(area.name);
            if (!slug) return null;
            return (
              <li key={area.name}>
                <Link
                  href={`/areas/${slug}`}
                  className="inline-block rounded-full border border-[var(--hm-border)] px-3 py-1 text-xs text-[var(--hm-muted)] hover:border-[var(--hm-accent)] hover:text-[var(--hm-accent)]"
                >
                  {area.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-xs text-[var(--hm-muted)]">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
