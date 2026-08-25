"use client";

import { useState, type FormEvent } from "react";
import { SITE, whatsappQuoteUrl } from "@/lib/constants";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [service, setService] = useState("House / office cleaning");
  const [helpers, setHelpers] = useState("1");
  const [hours, setHours] = useState("2");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `Hi Hauzmaid, I'd like a quote.`,
      `Name: ${name || "—"}`,
      `Phone: ${phone || "—"}`,
      `Area: ${area || "—"}`,
      `Service: ${service}`,
      `Helpers: ${helpers}`,
      `Hours: ${hours}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappQuoteUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-[var(--hm-border)] bg-[var(--hm-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
            Contact
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
            Book a maid cleaning service today
          </h2>
          <p className="mt-3 text-[var(--hm-muted)]">
            WhatsApp is the fastest way to confirm hours, helpers, and availability
            across Klang Valley.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[var(--hm-accent)] hover:underline"
              >
                WhatsApp us
              </a>
              <p className="text-[var(--hm-muted)]">Preferred for quotes &amp; booking</p>
            </li>
            <li>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="text-lg text-[var(--hm-text)] hover:text-[var(--hm-accent)]"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="text-[var(--hm-muted)]">Call or save our number</p>
            </li>
            <li>
              <a
                href={SITE.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-[var(--hm-blue)] hover:underline"
              >
                Find us on Google
              </a>
              <p className="text-[var(--hm-muted)]">Verified Google Business Profile</p>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-[var(--hm-border)] bg-[var(--hm-bg)] p-5 sm:p-6"
          aria-label="Quote request form"
        >
          <p className="font-display text-xl text-[var(--hm-text)]">Quick quote</p>
          <p className="mt-1 text-sm text-[var(--hm-muted)]">
            Opens WhatsApp with your details — no account signup required.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm sm:col-span-1">
              <span className="text-[var(--hm-muted)]">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2 text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)]"
                autoComplete="name"
              />
            </label>
            <label className="block text-sm">
              <span className="text-[var(--hm-muted)]">Phone</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2 text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)]"
                autoComplete="tel"
                inputMode="tel"
              />
            </label>
            <label className="block text-sm">
              <span className="text-[var(--hm-muted)]">Area</span>
              <input
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="e.g. Petaling Jaya"
                className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2 text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)]"
              />
            </label>
            <label className="block text-sm">
              <span className="text-[var(--hm-muted)]">Service</span>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1 w-full rounded-md border border-[var(--hm-border)] bg-[var(--hm-surface)] px-3 py-2 text-[var(--hm-text)] outline-none focus:border-[var(--hm-accent)]"
              >
                <option>House / office cleaning</option>
                <option>Move-in / move-out</option>
                <option>Post-renovation</option>
                <option>Aircon service (quote)</option>
                <option>Night shift</option>
              </select>
            </label>
            <label className="block text-sm">
              <span className="text-[var(--hm-muted)]">Helpers</span>
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
              <span className="text-[var(--hm-muted)]">Hours</span>
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
              <span className="text-[var(--hm-muted)]">Message</span>
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
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
