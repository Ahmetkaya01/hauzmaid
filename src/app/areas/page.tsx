import type { Metadata } from "next";
import { LinkGridPage } from "@/components/LinkGridPage";
import { areasByDemand } from "@/lib/local-seo";

export const metadata: Metadata = {
  title: "Cleaning Service Areas — Cheras, Subang Jaya, KLCC, Puchong & Klang Valley",
  description:
    "House cleaning and part-time maids in Cheras, Subang Jaya (USJ/SS), KLCC, Bukit Bintang, Puchong, Bangsar South, Setapak, Shah Alam, Old Klang Road, and more. No transport fee.",
  alternates: { canonical: "/areas" },
};

export default function AreasIndexPage() {
  return (
    <LinkGridPage
      kicker="Service areas"
      h1="Cleaning services across Klang Valley"
      intro="Most bookings are in Cheras, Subang Jaya, KLCC / Bukit Bintang, and Puchong. No transport fee anywhere we serve — pick your area for local details, prices, and FAQs."
      cards={areasByDemand().map((a) => ({
        href: `/areas/${a.slug}`,
        title: a.name,
        body: a.neighbourhoods.slice(0, 4).join(" · "),
      }))}
    />
  );
}
