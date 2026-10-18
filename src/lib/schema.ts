import { SITE, TESTIMONIALS } from "@/lib/constants";
import { AREA_PAGES, SERVICE_PAGES, type AreaPage, type Faq, type ServicePage } from "@/lib/local-seo";

export const BUSINESS_ID = `${SITE.url}/#business`;
export const WEBSITE_ID = `${SITE.url}/#website`;

const STATE_NAME: Record<AreaPage["state"], string> = {
  "Kuala Lumpur": "Wilayah Persekutuan Kuala Lumpur",
  Selangor: "Selangor",
  Putrajaya: "Wilayah Persekutuan Putrajaya",
};

function placeFor(area: AreaPage) {
  return {
    "@type": "City",
    name: area.name,
    containedInPlace: { "@type": "State", name: STATE_NAME[area.state] },
  };
}

function priceFromText(text: string): string | undefined {
  const match = text.match(/RM\s*(\d+)/i);
  return match?.[1];
}

const FACEBOOK_REVIEW = TESTIMONIALS[0];

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: SITE.legalName,
    alternateName: [SITE.name, "Hauzmaid KL"],
    slogan: SITE.slogan,
    url: SITE.url,
    logo: `${SITE.url}/logo-light.png`,
    image: [`${SITE.url}/og-image.png`, `${SITE.url}/logo-light.png`, `${SITE.url}/about-poster.jpg`],
    telephone: SITE.phoneTel,
    email: SITE.email,
    priceRange: SITE.priceRange,
    foundingDate: SITE.foundingDate,
    currenciesAccepted: "MYR",
    paymentAccepted: "Bank transfer",
    additionalType: "https://en.wikipedia.org/wiki/Housekeeping",
    knowsAbout: [
      "house cleaning",
      "part-time maid",
      "hourly maid service",
      "move-in cleaning",
      "move-out cleaning",
      "post-renovation cleaning",
      "office cleaning",
      "aircon cleaning",
    ],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Google Places CID",
      value: SITE.mapsCidValue,
    },
    description:
      "Hauzmaid Cleaning Services provides hourly house cleaning, part-time maids, move-in/move-out cleaning, post-renovation cleaning, office cleaning, and aircon service in Cheras, Subang Jaya, KLCC, Bukit Bintang, Puchong, Bangsar South, and across Kuala Lumpur and the Klang Valley, Malaysia. From RM80, no deposit, no transport fee. Service-area business: we come to your home.",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      addressCountry: SITE.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: {
      "@type": "Map",
      name: "Hauzmaid Cleaning Services on Google Maps",
      url: SITE.maps,
    },
    openingHours: SITE.openingHours,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: SITE.opens,
      closes: SITE.closes,
    },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Book house cleaning on WhatsApp",
      target: SITE.whatsapp,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Klang Valley" },
      ...AREA_PAGES.map(placeFor),
    ],
    knowsLanguage: ["en", "ms"],
    sameAs: [SITE.maps, SITE.mapsCid, SITE.facebook, SITE.facebookReviews, SITE.instagram],
    review: {
      "@type": "Review",
      author: { "@type": "Person", name: "Facebook customer" },
      reviewBody: FACEBOOK_REVIEW.quote,
      publisher: { "@type": "Organization", name: "Facebook" },
      url: SITE.facebookReviews,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning services",
      itemListElement: SERVICE_PAGES.map((service) => {
        const price = priceFromText(service.priceFrom);
        return {
          "@type": "Offer",
          name: service.name,
          url: `${SITE.url}/services/${service.slug}`,
          priceCurrency: "MYR",
          ...(price ? { price } : {}),
          itemOffered: {
            "@type": "Service",
            name: service.name,
            url: `${SITE.url}/services/${service.slug}`,
          },
        };
      }),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneTel,
      contactType: "customer service",
      areaServed: "MY",
      availableLanguage: ["English", "Malay"],
      contactOption: "WhatsApp",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.legalName,
    alternateName: SITE.name,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-MY",
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Hauzmaid",
    url: `${SITE.url}/about`,
    description:
      "Hauzmaid is a Klang Valley house cleaning company offering hourly part-time maids from RM80, with no deposit and no transport fee.",
    mainEntity: { "@id": BUSINESS_ID },
    breadcrumb: breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Hauzmaid",
    url: `${SITE.url}/contact`,
    description: `WhatsApp ${SITE.phoneDisplay} to book house cleaning in Kuala Lumpur and Klang Valley.`,
    mainEntity: { "@id": BUSINESS_ID },
    breadcrumb: breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  };
}

export function faqSchema(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function serviceSchema(service: ServicePage, area?: AreaPage) {
  const price = priceFromText(service.priceFrom);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area ? `${service.name} in ${area.name}` : service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: `${SITE.url}/services/${service.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: area
      ? placeFor(area)
      : [{ "@type": "AdministrativeArea", name: "Klang Valley" }, ...AREA_PAGES.map(placeFor)],
    offers: {
      "@type": "Offer",
      priceCurrency: "MYR",
      ...(price ? { price } : {}),
      description: service.priceFrom,
      url: `${SITE.url}/services/${service.slug}`,
      availability: "https://schema.org/InStock",
    },
  };
}

export function areaSchema(area: AreaPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `House cleaning in ${area.name}`,
    serviceType: "House cleaning",
    url: `${SITE.url}/areas/${area.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: placeFor(area),
    offers: {
      "@type": "Offer",
      price: "80",
      priceCurrency: "MYR",
      description: "From RM80 — 1 helper × 2 hours. No deposit, no transport fee.",
      url: `${SITE.url}/areas/${area.slug}`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Cleaning services in ${area.name}`,
      itemListElement: SERVICE_PAGES.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${service.name} in ${area.name}` },
      })),
    },
  };
}
