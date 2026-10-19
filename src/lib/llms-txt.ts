import { BLOG_POSTS } from "@/lib/blog";
import { FAQ_ITEMS, SITE } from "@/lib/constants";
import { SERVICE_PAGES, STANDARD_PRICING, areasByDemand } from "@/lib/local-seo";

export function llmsTxtBody(): string {
  const lines = [
    `# ${SITE.legalName}`,
    "",
    `> ${SITE.legalName} (${SITE.name}) is a house cleaning and part-time maid company serving Kuala Lumpur and the Klang Valley, Malaysia. Hourly cleaning from RM80, no deposit, no transport fee. Bookings via WhatsApp ${SITE.phoneDisplay} (${SITE.phoneTel}).`,
    "",
    "## Key facts",
    `- Website: ${SITE.url}`,
    `- Phone / WhatsApp: ${SITE.phoneTel}`,
    `- Email: ${SITE.email}`,
    `- Google Maps: ${SITE.maps}`,
    `- Google Places CID: ${SITE.mapsCidValue}`,
    `- Legal name (must match Google Maps): ${SITE.legalName}`,
    `- Business type: service-area — we come to the customer's home or office across Klang Valley; no retail shopfront`,
    `- Service area: ${areasByDemand().map((a) => a.name).join(", ")} (Klang Valley, Malaysia)`,
    "- Languages: English, Malay",
    "- Office hours: Monday–Sunday 09:00–18:00 (Malaysia time)",
    "- WhatsApp: also available at night after 18:00",
    "- WhatsApp and Google ads are for customers booking a clean only — not job vacancies. Cleaner applications: email contact@hauzmaid.com",
    "- Payment: bank transfer when helpers arrive; no deposit",
    "",
    "## Prices",
    ...STANDARD_PRICING.map((p) => `- ${p}`),
    "- Post-renovation cleaning: RM40/hour per maid",
    "- Aircon: non-chemical cleaning RM70; overhaul RM150 (wall-mounted <1.5 HP), RM190 (2 HP), RM330 (cassette <3 HP); free gas top-up up to 20 PSI; 2-week warranty",
    "",
    "## Ads landing pages",
    `- [Part-time maid KL](${SITE.url}/part-time-maid-kl): hourly maid from RM80, no deposit, pay on arrival`,
    `- [Home & aircon cleaning KL](${SITE.url}/home-aircon-cleaning-kl): house, office and aircon, pay on arrival`,
    "",
    "## Sitelink pages",
    `- [Prices](${SITE.url}/prices): RM80 minimum, RM35/hr for 3+ maid-hours, weekly ≈ RM105`,
    `- [About](${SITE.url}/about): Klang Valley house cleaning company`,
    `- [Contact](${SITE.url}/contact): WhatsApp ${SITE.phoneDisplay}`,
    `- [FAQ](${SITE.url}/faq): booking, deposit, transport, aircon`,
    `- [Jobs / not hiring](${SITE.url}/jobs): WhatsApp is for customers only; cleaner applications by email`,
    "",
    "## Services",
    ...SERVICE_PAGES.map((s) => `- [${s.name}](${SITE.url}/services/${s.slug}): ${s.metaDescription}`),
    "",
    "## Areas",
    ...areasByDemand().map(
      (a) => `- [Cleaning service in ${a.name}](${SITE.url}/areas/${a.slug}): ${a.neighbourhoods.join(", ")}`,
    ),
    "",
    "## FAQ",
    ...FAQ_ITEMS.flatMap((faq) => [`### ${faq.question}`, faq.answer, ""]),
    "## Cleaning guides",
    ...BLOG_POSTS.map((post) => `- [${post.title}](${SITE.url}/tips/${post.slug}): ${post.metaDescription}`),
    "",
  ];

  return lines.join("\n");
}

export function llmsTxtResponse(): Response {
  return new Response(llmsTxtBody(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
