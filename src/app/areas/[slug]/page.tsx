import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LocalLanding } from "@/components/LocalLanding";
import {
  AREA_PAGES,
  SERVICE_PAGES,
  STANDARD_PRICING,
  areaFaqs,
  areasByDemand,
  getAreaPage,
  getServicePage,
} from "@/lib/local-seo";
import { areaSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return AREA_PAGES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaPage(slug);
  if (!area) return {};

  const title = `House Cleaning ${area.name} — Part-Time Maid From RM80`;
  const description = `House cleaning and part-time maid in ${area.name} (${area.neighbourhoods.slice(0, 3).join(", ")}). From RM80. Weekly 3-hour slot ≈ RM105. No deposit, no transport fee.`;

  return {
    title: { absolute: `${title} | Hauzmaid` },
    description,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title,
      description,
      url: `/areas/${area.slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Cleaning service in ${area.name}` }],
    },
  };
}

export default async function AreaPageRoute({ params }: Props) {
  const { slug } = await params;
  const area = getAreaPage(slug);
  if (!area) notFound();

  const path = `/areas/${area.slug}`;
  const faqs = areaFaqs(area);
  const popular = area.popularServices.flatMap((s) => getServicePage(s) ?? []);

  return (
    <>
      <JsonLd
        data={[
          areaSchema(area),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas", path: "/areas" },
            { name: area.name, path },
          ]),
        ]}
      />
      <Header />
      <LocalLanding
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/areas", label: "Areas" },
          { href: path, label: area.name },
        ]}
        kicker={`${area.name}, ${area.state}`}
        h1={`House cleaning in ${area.name}`}
        intro={area.intro}
        priceFrom="From RM80"
        whatsappMessage={`Hi Hauzmaid, I'd like a cleaning quote in ${area.name}.\n\nArea: ${area.name}\nService: house cleaning`}
        lists={[
          { heading: `Areas we cover in ${area.name}`, items: area.neighbourhoods },
          {
            heading: `Popular in ${area.name}`,
            items: popular.map((s) => `${s.name} — ${s.priceFrom}`),
          },
          { heading: "Prices", items: STANDARD_PRICING },
        ]}
        note={area.localNote}
        faqs={faqs}
        related={[
          {
            heading: `Services in ${area.name}`,
            links: SERVICE_PAGES.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
          },
          {
            heading: "Book & prices",
            links: [
              { href: "/part-time-maid-kl", label: "Part-time maid KL" },
              { href: "/prices", label: "Prices" },
              { href: "/contact", label: "WhatsApp quote" },
              { href: "/faq", label: "FAQ" },
            ],
          },
          {
            heading: "Nearby areas",
            links: areasByDemand()
              .filter((a) => a.slug !== area.slug)
              .map((a) => ({
                href: `/areas/${a.slug}`,
                label: a.name,
              })),
          },
        ]}
      />
      <Footer />
    </>
  );
}
