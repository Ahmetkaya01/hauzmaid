import type { Metadata } from "next";
import { LinkGridPage } from "@/components/LinkGridPage";
import { areasByDemand } from "@/lib/local-seo";

export const metadata: Metadata = {
  title: "House Cleaning Areas KL — Cheras, Subang, KLCC, Puchong",
  description:
    "House cleaning, part-time maid and aircon service in Cheras, Subang Jaya, KLCC, Puchong, Bangsar South, PJ, Shah Alam and Klang Valley. No transport fee.",
  alternates: { canonical: "/areas" },
};

export default function AreasIndexPage() {
  return (
    <LinkGridPage
      kicker="Service areas"
      h1="House cleaning service across Klang Valley"
      intro="Book a weekly or one-time maid in Cheras, Subang Jaya, KLCC / Bukit Bintang, and Puchong — plus aircon cleaning. No transport fee. Pick your area for local details."
      cards={areasByDemand().map((a) => ({
        href: `/areas/${a.slug}`,
        title: a.name,
        body: a.neighbourhoods.slice(0, 4).join(" · "),
      }))}
    />
  );
}
