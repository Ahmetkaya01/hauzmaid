import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { SectionPage } from "@/components/SectionPage";
import { FAQ_ITEMS } from "@/lib/constants";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Part-Time Maid FAQ — Prices, Booking, Aircon",
  description:
    "Hauzmaid FAQ: minimum booking RM80, no deposit, no transport fee, night shift RM60/hr, aircon from RM70. How to book a part-time maid in KL on WhatsApp.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Part-Time Maid FAQ | Hauzmaid",
    description: "Prices, booking, deposits, transport, and aircon — answers before you WhatsApp.",
    url: "/faq",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hauzmaid FAQ" }],
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQ_ITEMS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <SectionPage
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/faq", label: "FAQ" },
        ]}
      >
        <Faq asPage />
      </SectionPage>
    </>
  );
}
