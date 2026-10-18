"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";
import {
  captureAdsLeadFromLocation,
  enrichWhatsAppHref,
  readAdsLead,
  readSiteLang,
} from "@/lib/lead";

/** Event names must match the GA4 imports already in Google Ads. */
function trackLeadClick(href: string) {
  if (/wa\.me|whatsapp\.com/i.test(href)) {
    sendGAEvent("event", "whatsapp_clicks");
    return;
  }
  if (href.startsWith("tel:")) sendGAEvent("event", "phone_clicks");
}

export function AdsLeadTracker() {
  useEffect(() => {
    captureAdsLeadFromLocation();

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link?.href) return;

      if (/wa\.me|whatsapp\.com/i.test(link.href)) {
        link.href = enrichWhatsAppHref(
          link.href,
          window.location.pathname,
          readAdsLead(),
          readSiteLang(),
        );
      }
      trackLeadClick(link.href);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
