import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LocalLanding } from "@/components/LocalLanding";
import { SERVICE_PAGES, STANDARD_PRICING, areasByDemand } from "@/lib/local-seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const PATH = "/part-time-maid-kl";

const FAQS = [
  {
    question: "What is the minimum booking for a part-time maid in KL?",
    answer:
      "Minimum is 1 helper × 2 hours at RM40/hour = RM80. When total maid-hours is 3 or more, the rate drops to RM35/hour per maid. No deposit and no transport fee.",
  },
  {
    question: "How do I book a part-time maid?",
    answer:
      "WhatsApp 016-356 60 55 with your area, date, number of helpers, and hours. We confirm, helpers arrive, and you pay by bank transfer on arrival.",
  },
  {
    question: "Do you cover Cheras, Subang, KLCC, and Puchong?",
    answer:
      "Yes. Those are our busiest areas, plus Bangsar South, Setapak, Shah Alam, Ampang, and the rest of Klang Valley.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Part Time Maid in KL | From RM80 | No Deposit — Hauzmaid" },
  description:
    "Part-time maid and hourly house cleaning in Kuala Lumpur and Klang Valley. From RM80, no deposit, pay on arrival. WhatsApp 016-356 60 55.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Part Time Maid in KL | From RM80 | No Deposit",
    description:
      "Hourly cleaning in Cheras, Subang, KLCC, Puchong and Klang Valley. Pay when the crew arrives.",
    url: PATH,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hauzmaid part-time maid KL" }],
  },
};

export default function PartTimeMaidKlPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Part-time maid KL", path: PATH },
          ]),
        ]}
      />
      <Header />
      <LocalLanding
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: PATH, label: "Part-time maid KL" },
        ]}
        kicker="Part-time maid · Klang Valley"
        h1="Part time maid in KL — hourly cleaning from RM80"
        intro="Need a part-time maid in Kuala Lumpur? Hauzmaid sends friendly hourly helpers for condos and landed homes. Fast WhatsApp booking, no deposit, pay by transfer when the crew arrives. Same commercial terms as our ads: hourly cleaning, Klang Valley coverage, quick reply."
        priceFrom="From RM80"
        whatsappMessage={`Hi Hauzmaid! I'd like a part-time maid quote.\n\nArea: \nService: part-time maid`}
        lists={[
          {
            heading: "What you get",
            items: [
              "Hourly part-time maid from RM80 (1 helper × 2 hours)",
              "RM35/hour per maid when total maid-hours is 3+",
              "No deposit · no transport fee · pay on arrival",
              "Kitchen, bathrooms, floors, dusting, and bedrooms",
              "Weekly or one-time slots — you choose helpers and hours",
            ],
          },
          {
            heading: "Prices",
            items: [...STANDARD_PRICING],
          },
          {
            heading: "Busiest areas",
            items: [
              "Cheras, Subang Jaya (USJ/SS), KLCC / Bukit Bintang, Puchong",
              "Bangsar South, Setapak, Shah Alam, Ampang, Old Klang Road",
            ],
          },
        ]}
        note="Pembantu sambilan mengikut jam di Lembah Klang — dari RM80, tiada deposit, bayar semasa ketibaan. WhatsApp 016-356 60 55."
        faqs={FAQS}
        related={[
          {
            heading: "Book by area",
            links: areasByDemand().slice(0, 8).map((a) => ({ href: `/areas/${a.slug}`, label: a.name })),
          },
          {
            heading: "Other services",
            links: [
              { href: "/home-aircon-cleaning-kl", label: "Home & aircon cleaning" },
              ...SERVICE_PAGES.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
            ],
          },
        ]}
      />
      <Footer />
    </>
  );
}
