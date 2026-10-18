import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type Card = { href: string; title: string; body: string };

export function LinkGridPage({ kicker, h1, intro, cards }: { kicker: string; h1: string; intro: string; cards: Card[] }) {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">{kicker}</p>
          <h1 className="mt-2 font-display text-4xl font-medium text-[var(--hm-text)] sm:text-5xl">{h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--hm-muted)]">{intro}</p>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li key={card.href}>
                <Link
                  href={card.href}
                  className="block h-full rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] p-5 transition-colors hover:border-[var(--hm-accent)]/50"
                >
                  <h2 className="font-display text-xl text-[var(--hm-text)]">{card.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--hm-muted)]">{card.body}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
