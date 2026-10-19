import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SectionPage } from "@/components/SectionPage";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Not a job ad — customers book cleaning here",
  description:
    "Hauzmaid WhatsApp is for customers booking house cleaning in KL. We are not advertising maid job vacancies. Cleaners: email contact@hauzmaid.com.",
  alternates: { canonical: "/jobs" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Not a job ad | Hauzmaid",
    description: "This site is for homeowners booking a clean — not job vacancies.",
    url: "/jobs",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hauzmaid" }],
  },
};

const FAQS = [
  {
    question: "Are you hiring part-time maids?",
    answer:
      "We are not posting public vacancies on this website or on WhatsApp. This number is for customers who want to book a clean.",
  },
  {
    question: "I saw a Google ad for part-time maid. Can I apply?",
    answer:
      "That ad is for homeowners who want to book a helper. If you are looking for work, do not WhatsApp the booking line. Email contact@hauzmaid.com instead.",
  },
];

export default function JobsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Jobs", path: "/jobs" },
          ]),
        ]}
      />
      <SectionPage
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/jobs", label: "Jobs" },
        ]}
      >
        <section className="scroll-mt-20 bg-[var(--hm-surface)] pt-8 pb-20 sm:pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
              For job seekers
            </p>
            <h1 className="mt-2 font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
              This is not a job vacancy
            </h1>
            <p className="mt-4 text-[var(--hm-muted)]">
              Hauzmaid ads and WhatsApp ({SITE.phoneDisplay}) are for <strong>customers</strong> who
              want to book house cleaning. We do not hire through that chat. Messages like “I am
              looking for work / cari kerja / apply maid” delay real bookings and waste ad spend.
            </p>
            <p className="mt-3 text-[var(--hm-muted)]">
              Ini bukan iklan jawatan. WhatsApp Hauzmaid hanya untuk pelanggan yang nak{" "}
              <strong>tempah cucian rumah</strong>. Jika anda cari kerja, jangan WhatsApp nombor
              tempahan.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--hm-border)] bg-[var(--hm-bg)] p-5">
                <p className="font-medium text-[var(--hm-text)]">If you need your house cleaned</p>
                <p className="mt-2 text-sm text-[var(--hm-muted)]">
                  Book on WhatsApp with your area, date, helpers, and hours.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex text-sm font-semibold text-[var(--hm-accent)] hover:underline"
                >
                  Book a clean →
                </Link>
              </div>
              <div className="rounded-lg border border-[var(--hm-border)] bg-[var(--hm-bg)] p-5">
                <p className="font-medium text-[var(--hm-text)]">If you want to work as a cleaner</p>
                <p className="mt-2 text-sm text-[var(--hm-muted)]">
                  Email a short intro and your area to {SITE.email}. Do not use the customer
                  WhatsApp.
                </p>
                <a
                  href={`mailto:${SITE.email}?subject=Cleaner%20application%20-%20Hauzmaid`}
                  className="mt-4 inline-flex text-sm font-semibold text-[var(--hm-blue)] hover:underline"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
            <dl className="mt-10 space-y-6">
              {FAQS.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-medium text-[var(--hm-text)]">{faq.question}</dt>
                  <dd className="mt-2 text-sm text-[var(--hm-muted)]">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </SectionPage>
    </>
  );
}
