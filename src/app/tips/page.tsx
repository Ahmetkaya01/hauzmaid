import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TipsBrowser } from "@/components/TipsBrowser";

export const metadata: Metadata = {
  title: "Cleaning Tips & Home Care Guides",
  description:
    "Practical cleaning tips for Kuala Lumpur & Klang Valley homes — move-in/out checklists, deep cleaning, kitchen care, and office cleaning KL advice from Hauzmaid.",
  alternates: { canonical: "/tips" },
  openGraph: {
    title: "Cleaning Tips & Home Care | Hauzmaid",
    description:
      "SEO-friendly guides on house cleaning KL, post renovation cleaning, and everyday home care.",
    url: "/tips",
  },
};

export default function TipsIndexPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
            Blog
          </p>
          <h1 className="mt-2 font-display text-4xl font-medium text-[var(--hm-text)] sm:text-5xl">
            Cleaning Tips &amp; Home Care
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hm-muted)]">
            Expert-style guides for house cleaning Kuala Lumpur, Klang Valley homes,
            offices, and deep-clean projects — written to help you decide when DIY
            is enough and when to book the pros.
          </p>
          <div className="mt-10">
            <TipsBrowser />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
