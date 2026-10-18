import type { Metadata } from "next";
import { About } from "@/components/About";
import { JsonLd } from "@/components/JsonLd";
import { SectionPage } from "@/components/SectionPage";
import { aboutPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Hauzmaid — Part-Time Maid Company in KL",
  description:
    "Hauzmaid is a Klang Valley house cleaning company. Hourly part-time maids from RM80, no deposit, no transport fee. 2,000+ bookings across Cheras, Subang, KLCC and Puchong.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Hauzmaid — Part-Time Maid Company in KL",
    description: "Hourly house cleaning and part-time maids across Klang Valley. From RM80.",
    url: "/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Hauzmaid" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema()} />
      <SectionPage
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      >
        <About asPage />
      </SectionPage>
    </>
  );
}
