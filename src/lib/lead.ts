import { LANG_STORAGE_KEY } from "@/lib/i18n";

export const LEAD_STORAGE_KEY = "hauzmaid-ads-lead";

export type AdsLead = {
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

function compactLead(lead: AdsLead): AdsLead {
  return Object.fromEntries(
    Object.entries(lead).filter(([, value]) => Boolean(value)),
  ) as AdsLead;
}

export function readAdsLead(): AdsLead {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(LEAD_STORAGE_KEY) ?? "{}") as AdsLead;
  } catch {
    return {};
  }
}

export function captureAdsLeadFromLocation(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const next = compactLead({
    gclid: params.get("gclid") ?? undefined,
    utm_source: params.get("utm_source") ?? undefined,
    utm_medium: params.get("utm_medium") ?? undefined,
    utm_campaign: params.get("utm_campaign") ?? undefined,
  });
  if (Object.keys(next).length === 0) return;
  sessionStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify({ ...readAdsLead(), ...next }));
}

export function readSiteLang(): "en" | "ms" {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem(LANG_STORAGE_KEY) === "ms" ? "ms" : "en";
}

export function buildLeadFooter(path: string, lead: AdsLead, lang: "en" | "ms"): string {
  return [
    `Source: hauzmaid.com${path}`,
    `Lang: ${lang}`,
    lead.gclid ? `Gclid: ${lead.gclid}` : "",
    lead.utm_campaign ? `Campaign: ${lead.utm_campaign}` : "",
    lead.utm_source ? `UtmSource: ${lead.utm_source}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function enrichWhatsAppHref(href: string, path: string, lead: AdsLead, lang: "en" | "ms"): string {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return href;
  }
  if (!/wa\.me|whatsapp\.com/i.test(url.host)) return href;

  const existing = url.searchParams.get("text") ?? "";
  const footer = buildLeadFooter(path, lead, lang);
  const extra = footer
    .split("\n")
    .filter((line) => {
      const key = line.split(":")[0];
      return key ? !existing.includes(`${key}:`) : false;
    })
    .join("\n");
  if (!extra) return href;
  url.searchParams.set("text", existing ? `${existing.trim()}\n\n${extra}` : extra);
  return url.toString();
}
