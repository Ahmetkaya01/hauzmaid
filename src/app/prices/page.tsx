import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Prices } from "@/components/Prices";
import { SectionPage } from "@/components/SectionPage";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "House Cleaning & Aircon Prices KL — From RM80",
  description:
    "House cleaning from RM80 (1 maid × 2 hours), RM35/hr for 3+ maid-hours. Weekly 3-hour slot ≈ RM105. Aircon cleaning from RM70. No deposit. Klang Valley.",
  alternates: { canonical: "/prices" },
  openGraph: {
    title: "House Cleaning Prices KL — From RM80",
    description: "Clear hourly rates. No deposit, no transport fee. Pay when helpers arrive.",
    url: "/prices",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hauzmaid cleaning prices" }],
  },
};

export default function PricesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Prices", path: "/prices" },
        ])}
      />
      <SectionPage
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/prices", label: "Prices" },
        ]}
      >
        <Prices asPage />
      </SectionPage>
    </>
  );
}
