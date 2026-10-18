import type { Metadata } from "next";
import { LinkGridPage } from "@/components/LinkGridPage";
import { SERVICE_PAGES } from "@/lib/local-seo";

export const metadata: Metadata = {
  title: "Cleaning Services in KL & Klang Valley — House, Move-Out, Post-Reno, Aircon",
  description:
    "House cleaning, move-in/move-out cleaning, post-renovation cleaning, office cleaning, and aircon service in Kuala Lumpur and Selangor. From RM70.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <LinkGridPage
      kicker="Services"
      h1="Cleaning services in KL & Klang Valley"
      intro="Hourly helpers, clear prices, no deposit. Choose a service for details and pricing."
      cards={SERVICE_PAGES.map((s) => ({
        href: `/services/${s.slug}`,
        title: s.name,
        body: `${s.priceFrom} — ${s.metaDescription.split(".")[0]}.`,
      }))}
    />
  );
}
