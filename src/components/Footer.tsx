import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--hm-border)] bg-[var(--hm-bg)] py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <Link href="/" aria-label="Hauzmaid home" className="inline-block">
            <Image src="/logo-light.png" alt="Hauzmaid" width={140} height={33} className="h-8 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-[var(--hm-muted)]">
            {SITE.legalName} — professional house cleaning, move-in/out, post-renovation,
            and aircon service across {SITE.area}.
          </p>
          <p className="mt-3 text-sm text-[var(--hm-text)]">
            From RM80 · No deposit · No transport fee
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-[var(--hm-text)]">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--hm-muted)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[var(--hm-accent)]">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/tips" className="hover:text-[var(--hm-accent)]">
                Cleaning tips
              </a>
            </li>
            <li>
              <a href="/#faq" className="hover:text-[var(--hm-accent)]">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-[var(--hm-text)]">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--hm-muted)]">
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-[var(--hm-accent)]">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsapp}
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
                Google Business Profile
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
      <div className="mx-auto mt-10 max-w-6xl border-t border-[var(--hm-border)] px-4 pt-6 text-xs text-[var(--hm-muted)] sm:px-6">
        © 2022 {SITE.name}. Serving Klang Valley, Malaysia.
      </div>
    </footer>
  );
}
