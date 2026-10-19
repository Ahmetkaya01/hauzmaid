import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SectionPage } from "@/components/SectionPage";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "We are not hiring — book house cleaning only",
  description:
    "Hauzmaid is not hiring cleaners. Our helper team is full. This website, ads, and WhatsApp are only for customers booking a clean in KL.",
  alternates: { canonical: "/jobs" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "We are not hiring | Hauzmaid",
    description: "Customers only. We already have enough helpers — book a clean, do not apply.",
    url: "/jobs",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hauzmaid" }],
  },
};

const FAQS = [
  {
    question: "Are you hiring part-time maids?",
    answer:
      "No. We already have enough helpers to run our jobs. We are not hiring. This website and WhatsApp are only for new customers booking a clean.",
  },
  {
    question: "I saw a Google ad for part-time maid. Can I apply?",
    answer:
      "No. That ad is for homeowners who want to book a helper for their home. Please do not apply on WhatsApp, email, or this website.",
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
            { name: "Not hiring", path: "/jobs" },
          ]),
        ]}
      />
      <SectionPage
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/jobs", label: "Not hiring" },
        ]}
      >
        <section className="scroll-mt-20 bg-[var(--hm-surface)] pt-8 pb-20 sm:pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
              Customers only
            </p>
            <h1 className="mt-2 font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
              We are not hiring
            </h1>
            <p className="mt-4 text-[var(--hm-muted)]">
              Hauzmaid already has enough helpers to operate our jobs. Ads, this website, and
              WhatsApp ({SITE.phoneDisplay}) are only for <strong>new customers</strong> who want
              to book house or aircon cleaning. We do not accept job applications. Please do not
              write “I am looking for work / cari kerja / apply maid”.
            </p>
            <p className="mt-3 text-[var(--hm-muted)]">
              Kami <strong>tidak mengambil pekerja</strong>. Pasukan pembantu sudah cukup. Iklan,
              laman web dan WhatsApp Hauzmaid hanya untuk pelanggan baru yang nak{" "}
              <strong>tempah cucian</strong>. Jangan mohon kerja di nombor ini.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--hm-accent)]/40 bg-[var(--hm-bg)] p-5">
                <p className="font-medium text-[var(--hm-text)]">Need your house cleaned?</p>
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
                <p className="font-medium text-[var(--hm-text)]">Looking for work?</p>
                <p className="mt-2 text-sm text-[var(--hm-muted)]">
                  We are not hiring. Do not WhatsApp or email to apply. Please look elsewhere.
                </p>
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
