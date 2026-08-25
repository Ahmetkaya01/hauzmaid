import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/constants";
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
    default: "House Cleaning KL | Hauzmaid Cleaning Services",
    template: "%s | Hauzmaid",
  },
  description:
    "Professional maid & house cleaning in Klang Valley / KL. No deposit, no transport fee. From RM80 (2 hours). Move-in/out, post-renovation & aircon quotes. Call 016-356 60 55.",
  keywords: [
    "maid service near me",
    "residential cleaning services",
    "one time cleaning service",
    "maid cleaning service",
    "part time maid KL",
    "hourly maid service KL",
    "cleaning service KL",
    "move-out cleaning KL",
    "house cleaning KL",
    "post renovation cleaning KL",
    "aircon cleaning KL",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: SITE.url,
    siteName: SITE.name,
    title: "House Cleaning KL | Hauzmaid Cleaning Services",
    description:
      "Reliable house cleaning & aircon service in Klang Valley. No deposit, no transport fee. From RM80.",
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
    title: "House Cleaning KL | Hauzmaid",
    description:
      "Maid cleaning service in Klang Valley — from RM80. No deposit, no transport fee.",
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
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
