import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import { SectionPage } from "@/components/SectionPage";
import { SITE } from "@/lib/constants";
import { contactPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Hauzmaid — WhatsApp House Cleaning KL",
  description: `WhatsApp ${SITE.phoneDisplay} to book house cleaning in Cheras, Subang, KLCC, Puchong and Klang Valley. No deposit. Pay on arrival.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Hauzmaid — WhatsApp House Cleaning KL",
    description: `Book a part-time maid on WhatsApp ${SITE.phoneDisplay}. From RM80.`,
    url: "/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Hauzmaid" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <SectionPage
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      >
        <Contact asPage />
      </SectionPage>
    </>
  );
}
