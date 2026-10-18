"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE, whatsappSiteUrl } from "@/lib/constants";
import { LanguageToggle, useI18n } from "@/components/LanguageProvider";
import { WhatsAppIcon } from "@/components/icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t } = useI18n();

  const navLinks = [
    { href: "/services", label: t.nav.services },
    { href: "/prices", label: t.nav.prices },
    { href: "/about", label: t.nav.about },
    { href: "/areas", label: t.nav.areas },
    { href: "/tips", label: t.nav.tips },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? "border-b border-[var(--hm-border)] bg-[color-mix(in_srgb,var(--hm-bg)_94%,transparent)] backdrop-blur-md"
          : "nav-scrim"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 cursor-pointer items-center gap-2"
          aria-label="Hauzmaid home"
          onClick={() => {
            setOpen(false);
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/logo-light.png"
            alt="Hauzmaid"
            width={140}
            height={33}
            className="pointer-events-none h-7 w-auto select-none sm:h-8"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-shadow text-sm font-medium text-[var(--hm-text)]/90 transition-colors hover:text-[var(--hm-text)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LanguageToggle />
          <a
            href={whatsappSiteUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-shadow hidden px-2 py-2 text-sm text-[var(--hm-text)]/85 transition-colors hover:text-[var(--hm-text)] lg:inline-flex"
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={whatsappSiteUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-gradient inline-flex min-h-10 items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(37,211,102,0.3)] transition-opacity hover:opacity-90 sm:gap-2 sm:px-3.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="max-[359px]:hidden">WhatsApp</span>
            <span className="min-[360px]:hidden">WA</span>
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--hm-border)] text-[var(--hm-text)] xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-[var(--hm-border)] bg-[var(--hm-bg)] px-3 py-3 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block min-h-12 border-b border-[var(--hm-border)] py-3.5 text-base text-[var(--hm-text)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <a
                href={whatsappSiteUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-gradient flex min-h-12 items-center justify-center gap-2 rounded-md text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon className="h-5 w-5" />
                {t.nav.whatsappUs}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
