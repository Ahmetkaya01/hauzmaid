import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TipsIndexBody } from "@/components/TipsIndexBody";

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
      <main className="pt-24 pb-24 md:pb-20">
        <TipsIndexBody />
      </main>
      <Footer />
    </>
  );
}
