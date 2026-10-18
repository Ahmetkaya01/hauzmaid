import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/constants";
import { SERVICE_PAGES, areasByDemand } from "@/lib/local-seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const tips = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/tips/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const services = SERVICE_PAGES.map((service) => ({
    url: `${SITE.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const areas = areasByDemand().map((area) => ({
    url: `${SITE.url}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: (area.demand ?? 0) >= 70 ? 0.9 : 0.75,
  }));

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: `${SITE.url}/part-time-maid-kl`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE.url}/home-aircon-cleaning-kl`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE.url}/prices`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...services,
    { url: `${SITE.url}/areas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...areas,
    {
      url: `${SITE.url}/tips`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...tips,
    {
      url: `${SITE.url}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ];
}
