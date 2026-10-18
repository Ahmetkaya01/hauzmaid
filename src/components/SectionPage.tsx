import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type Crumb = { href: string; label: string };

export function SectionPage({
  breadcrumbs,
  children,
}: {
  breadcrumbs: Crumb[];
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
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
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
