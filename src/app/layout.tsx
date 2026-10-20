import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { AdsLeadTracker } from "@/components/AdsLeadTracker";
import { JsonLd } from "@/components/JsonLd";
import { LanguageProvider } from "@/components/LanguageProvider";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { SITE } from "@/lib/constants";
import { businessSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b1118",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "House Cleaning & Aircon Service KL | Hauzmaid",
    template: "%s | Hauzmaid",
  },
  description:
    "Professional house cleaning and aircon service in Kuala Lumpur & Klang Valley. Weekly or one-time maid for condos and landed homes from RM80. Aircon cleaning from RM70. No deposit. WhatsApp 016-356 60 55.",
  keywords: [
    "house cleaning KL",
    "house cleaning Klang Valley",
    "maid service KL",
    "part time maid KL",
    "hourly maid service KL",
    "weekly house cleaning KL",
    "pembersihan rumah KL",
    "pembantu rumah sambilan",
    "cucian aircond KL",
    "aircon cleaning KL",
    "aircond chemical wash KL",
    "house cleaning Cheras",
    "maid service Subang Jaya",
    "cleaning service KLCC",
    "house cleaning Bukit Bintang",
    "maid service Puchong",
    "cleaning Bangsar South",
    "house cleaning Setapak",
    "maid service Shah Alam",
    "cleaning Old Klang Road",
    "move-out cleaning KL",
    "post renovation cleaning KL",
  ],
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: SITE.url,
    siteName: SITE.name,
    title: "House Cleaning & Aircon Service KL | Hauzmaid",
    description:
      "Weekly or one-time house cleaning and aircon service across Klang Valley. From RM80 / aircon from RM70. No deposit, no transport fee.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hauzmaid Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Cleaning & Aircon Service KL | Hauzmaid",
    description:
      "House cleaning and aircon service in Cheras, Subang, KLCC and Klang Valley. From RM80. No deposit, no transport fee.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--hm-bg)] text-[var(--hm-text)]">
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        <AdsLeadTracker />
        <LanguageProvider>
          {children}
          <StickyWhatsApp />
        </LanguageProvider>
      </body>
      <GoogleAnalytics gaId={SITE.gaId} />
    </html>
  );
}
