import type { Metadata } from "next";
import { About } from "@/components/About";
import { JsonLd } from "@/components/JsonLd";
import { SectionPage } from "@/components/SectionPage";
import { aboutPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Hauzmaid — House Cleaning Company in KL",
  description:
    "Hauzmaid is a Klang Valley house cleaning and aircon company. Hourly part-time maids from RM80, aircon from RM70, no deposit. 2,000+ customer bookings in Cheras, Subang, KLCC and Puchong.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Hauzmaid — House Cleaning Company in KL",
    description: "Hourly house cleaning, part-time maid and aircon service across Klang Valley. From RM80.",
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
