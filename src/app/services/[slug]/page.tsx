import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LocalLanding } from "@/components/LocalLanding";
import { AREA_PAGES, SERVICE_PAGES, getServicePage } from "@/lib/local-seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};

  return {
    title: { absolute: `${service.title} | Hauzmaid` },
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: service.h1 }],
    },
  };
}

export default async function ServicePageRoute({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path },
          ]),
        ]}
      />
      <Header />
      <LocalLanding
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: path, label: service.name },
        ]}
        kicker={`${service.name} · Klang Valley`}
        h1={service.h1}
        intro={service.intro}
        priceFrom={service.priceFrom}
        whatsappMessage={`Hi Hauzmaid, I'd like a quote for ${service.name.toLowerCase()}.\n\nArea: \nService: ${service.name.toLowerCase()}`}
        lists={[
          { heading: "What's included", items: service.includes },
          { heading: "Ideal for", items: service.idealFor },
          { heading: "Prices", items: service.pricing },
        ]}
        faqs={service.faqs}
        related={[
          {
            heading: `${service.name} near you`,
            links: AREA_PAGES.map((a) => ({ href: `/areas/${a.slug}`, label: a.name })),
          },
          {
            heading: "Other services",
            links: SERVICE_PAGES.filter((s) => s.slug !== service.slug).map((s) => ({
              href: `/services/${s.slug}`,
              label: s.name,
            })),
          },
        ]}
      />
      <Footer />
    </>
  );
}
