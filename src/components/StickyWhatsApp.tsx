"use client";

import { useEffect, useState } from "react";
import { whatsappSiteUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons";
import { useI18n } from "@/components/LanguageProvider";

export function StickyWhatsApp() {
  const { lang, t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-3 md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={whatsappSiteUrl(lang)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.sticky.aria}
        className="pointer-events-auto wa-gradient mx-auto flex min-h-12 max-w-md items-center justify-center gap-2.5 rounded-full px-5 py-3 text-base font-semibold text-white shadow-[0_8px_32px_rgba(37,211,102,0.45)] transition-transform active:scale-[0.98]"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        {t.sticky.label}
      </a>
    </div>
  );
}
