import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LocalLanding } from "@/components/LocalLanding";
import { SERVICE_PAGES, STANDARD_PRICING, areasByDemand } from "@/lib/local-seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const PATH = "/home-aircon-cleaning-kl";

const FAQS = [
  {
    question: "Do you clean both the house and the aircon?",
    answer:
      "Yes. Book hourly house cleaning from RM80, and add aircon service in the same WhatsApp chat. Non-chemical aircon cleaning is RM70; overhaul starts from RM150.",
  },
  {
    question: "What does pay on arrival / pay on delivery mean?",
    answer:
      "No deposit. Helpers arrive, do the agreed work, and you pay by bank transfer when they arrive. Same as “pay on delivery” in our ads.",
  },
  {
    question: "Is aircon cleaning chemical-free?",
    answer:
      "The RM70 service is non-chemical (filter clean, gas check, top-up up to 20 PSI, 2-week warranty). Overhaul uses a chemical clean of the indoor unit.",
  },
  {
    question: "Are you hiring cleaners?",
    answer:
      "No. This page is for customers booking a clean. Job applications: contact@hauzmaid.com, not WhatsApp.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Home & Aircon Cleaning KL | Pay on Arrival — Hauzmaid" },
  description:
    "Professional home, office and aircon cleaning in Klang Valley. Book now and pay when the crew arrives. From RM70. WhatsApp 016-356 60 55.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Home & Aircon Cleaning KL | Pay on Arrival",
    description:
      "House, office and aircon cleaning in KL. Pay on arrival. No deposit, no transport fee.",
    url: PATH,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hauzmaid home and aircon cleaning" }],
  },
};

export default function HomeAirconCleaningKlPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Home & aircon cleaning", path: PATH },
          ]),
        ]}
      />
      <Header />
      <LocalLanding
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: PATH, label: "Home & aircon cleaning" },
        ]}
        kicker="Home · office · aircon"
        h1="Home and aircon cleaning in Klang Valley — pay on arrival"
        intro="Professional home, office and aircon cleaning across Kuala Lumpur and Selangor. Book on WhatsApp and pay when the crew arrives — no deposit, no transport fee. Matches our ad promise: sparkling home and AC cleaning, pay on delivery."
        priceFrom="From RM70"
        customerOnly="Looking for work / cari kerja? Do not WhatsApp this number."
        whatsappMessage={`Hi Hauzmaid! I want to BOOK home / aircon cleaning. I am the customer (not applying for a job).\n\nArea: \nService: home and aircon cleaning`}
        lists={[
          {
            heading: "House & office",
            items: [
              "Hourly house and office cleaning from RM80",
              "Move-in / move-out and post-renovation deep cleans",
              "Weekly or one-time — you set helpers and hours",
            ],
          },
          {
            heading: "Aircon",
            items: [
              "Non-chemical clean RM70 (all types)",
              "Wall-mounted overhaul from RM150; cassette RM330",
              "Free gas top-up up to 20 PSI + 2-week warranty",
            ],
          },
          {
            heading: "House prices",
            items: [...STANDARD_PRICING],
          },
        ]}
        note="Cucian rumah, pejabat dan aircond di Lembah Klang. Tempah sekarang, bayar bila pasukan tiba. WhatsApp 016-356 60 55."
        faqs={FAQS}
        related={[
          {
            heading: "Service pages",
            links: SERVICE_PAGES.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
          },
          {
            heading: "Top areas",
            links: areasByDemand().slice(0, 8).map((a) => ({ href: `/areas/${a.slug}`, label: a.name })),
          },
        ]}
      />
      <Footer />
    </>
  );
}
