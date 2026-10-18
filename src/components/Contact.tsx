"use client";

import { useState, type FormEvent } from "react";
import { SITE, whatsappQuoteUrl, whatsappSiteUrl } from "@/lib/constants";
import { buildLeadFooter, readAdsLead } from "@/lib/lead";
import { useI18n } from "@/components/LanguageProvider";

export function Contact({ asPage = false }: { asPage?: boolean }) {
  const { lang, t } = useI18n();
  const Heading = asPage ? "h1" : "h2";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [helpers, setHelpers] = useState("1");
  const [hours, setHours] = useState("2");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      t.contact.quoteIntro,
      `${t.contact.quoteName}: ${name || "—"}`,
      `${t.contact.quotePhone}: ${phone || "—"}`,
      `Area: ${area || "—"}`,
      `Service: ${t.contact.serviceOptions[serviceIndex]}`,
      `${t.contact.quoteHelpers}: ${helpers}`,
      `${t.contact.quoteHours}: ${hours}`,
      message ? `${t.contact.quoteMessage}: ${message}` : "",
      "",
      buildLeadFooter(window.location.pathname, readAdsLead(), lang),
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappQuoteUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contact"
      className={`scroll-mt-20 bg-[var(--hm-surface)] ${
        asPage ? "pt-8 pb-20 sm:pb-24" : "border-t border-[var(--hm-border)] py-20 sm:py-24"
      }`}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
            {t.contact.kicker}
          </p>
          <Heading className="mt-2 font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
            {t.contact.h2}
          </Heading>
          <p className="mt-3 text-[var(--hm-muted)]">{t.contact.intro}</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <p className="text-lg font-semibold text-[var(--hm-text)]">{SITE.legalName}</p>
              <p className="text-[var(--hm-muted)]">{t.contact.addressNote}</p>
            </li>
            <li>
              <a
                href={whatsappSiteUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[var(--hm-accent)] hover:underline"
              >
                {t.contact.whatsappUs}
              </a>
              <p className="text-[var(--hm-muted)]">{t.contact.whatsappNote}</p>
            </li>
            <li>
              <a
                href={whatsappSiteUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-[var(--hm-text)] hover:text-[var(--hm-accent)]"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="text-[var(--hm-muted)]">{t.contact.callNote}</p>
            </li>
            <li>
              <p className="text-lg font-semibold text-[var(--hm-text)]">{t.contact.hoursLabel}</p>
              <p className="text-[var(--hm-muted)]">{t.contact.hoursNote}</p>
            </li>
            <li>
              <a
                href={SITE.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-[var(--hm-blue)] hover:underline"
              >
                {t.contact.googleLink}
              </a>
              <p className="text-[var(--hm-muted)]">{t.contact.googleNote}</p>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-lg border border-[var(--hm-border)]">
            <iframe
              src={SITE.mapsEmbed}
              title={t.contact.mapTitle}
              className="block h-64 w-full sm:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={SITE.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-sm font-medium text-[var(--hm-accent)] hover:underline"
          >
            {t.contact.googleReviews}
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-[var(--hm-border)] bg-[var(--hm-bg)] p-5 sm:p-6"
          aria-label={t.contact.formAria}
        >
          <p className="font-display text-xl text-[var(--hm-text)]">{t.contact.formTitle}</p>
          <p className="mt-1 text-sm text-[var(--hm-muted)]">{t.contact.formSub}</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm sm:col-span-1">
              <span className="text-[var(--hm-muted)]">{t.contact.name}</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2 text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)]"
                autoComplete="name"
              />
            </label>
            <label className="block text-sm">
              <span className="text-[var(--hm-muted)]">{t.contact.phone}</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2 text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)]"
                autoComplete="tel"
                inputMode="tel"
              />
            </label>
            <label className="block text-sm">
              <span className="text-[var(--hm-muted)]">{t.contact.area}</span>
              <input
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder={t.contact.areaPlaceholder}
                className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2 text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)]"
              />
            </label>
            <label className="block text-sm">
              <span className="text-[var(--hm-muted)]">{t.contact.service}</span>
              <select
                value={serviceIndex}
                onChange={(e) => setServiceIndex(Number(e.target.value))}
                className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2 text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)]"
              >
                {t.contact.serviceOptions.map((option, i) => (
                  <option key={option} value={i}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="text-[var(--hm-muted)]">{t.contact.helpers}</span>
              <input
                type="number"
                min={1}
                max={8}
                value={helpers}
                onChange={(e) => setHelpers(e.target.value)}
                className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2 text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)]"
              />
            </label>
            <label className="block text-sm">
              <span className="text-[var(--hm-muted)]">{t.contact.hours}</span>
              <input
                type="number"
                min={2}
                max={12}
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2 text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)]"
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="text-[var(--hm-muted)]">{t.contact.message}</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2 text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="wa-gradient mt-5 inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:opacity-90 sm:w-auto"
          >
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}
