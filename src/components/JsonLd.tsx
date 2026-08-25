import { FAQ_ITEMS, SITE } from "@/lib/constants";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    priceRange: SITE.priceRange,
    image: `${SITE.url}/og-image.png`,
    description:
      "Professional house cleaning, move-in/out, post-renovation, and aircon service in Klang Valley / Kuala Lumpur. No deposit, no transport fee. From RM80.",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Klang Valley" },
      { "@type": "City", name: "Kuala Lumpur" },
      { "@type": "City", name: "Petaling Jaya" },
      { "@type": "City", name: "Subang Jaya" },
      { "@type": "City", name: "Shah Alam" },
    ],
    sameAs: [SITE.maps, SITE.facebook, SITE.instagram],
    makesOffer: [
      {
        "@type": "Offer",
        name: "House / office cleaning",
        priceCurrency: "MYR",
        price: "80",
        description: "Minimum 2 hours at RM40/hour per maid. From RM80.",
      },
      {
        "@type": "Offer",
        name: "Post-renovation cleaning",
        priceCurrency: "MYR",
        price: "40",
        description: "RM40 per hour per maid.",
      },
      {
        "@type": "Offer",
        name: "Night shift cleaning",
        priceCurrency: "MYR",
        price: "60",
        description: "6PM–12AM at RM60 per hour per maid.",
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
