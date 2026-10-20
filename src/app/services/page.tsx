import type { Metadata } from "next";
import { LinkGridPage } from "@/components/LinkGridPage";
import { SERVICE_PAGES } from "@/lib/local-seo";

export const metadata: Metadata = {
  title: "House Cleaning & Aircon Services in KL & Klang Valley",
  description:
    "House cleaning, part-time maid, move-in/move-out, post-renovation, office cleaning, and aircon service in Kuala Lumpur and Selangor. From RM70 / house from RM80.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <LinkGridPage
      kicker="Services"
      h1="House cleaning & aircon services in KL"
      intro="Weekly or one-time maid, move-in/out, post-renovation, office, and aircon cleaning. Clear hourly prices, no deposit."
      cards={SERVICE_PAGES.map((s) => ({
        href: `/services/${s.slug}`,
        title: s.name,
        body: `${s.priceFrom} — ${s.metaDescription.split(".")[0]}.`,
      }))}
    />
  );
}
