import Image from "next/image";
import { SITE } from "@/lib/constants";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { WhatsAppIcon } from "@/components/icons";

const BASIC_TASKS = [
  "Tidying up your spaces",
  "Cleaning floors (sweeping & mopping)",
  "Wiping kitchen & bathroom surfaces",
  "Taking out the trash",
  "General dusting",
] as const;

const EXTRA_TASKS = [
  "Clothes ironing",
  "Folding clothes",
  "Inside fridge cleaning",
  "Ceiling fan cleaning",
  "Outdoor cleaning (car porch, drain, etc.)",
] as const;

const AIRCON_PLANS = [
  {
    title: "Non-chemical cleaning",
    price: "RM70",
    note: "All aircon types",
    points: [
      "Remove, clean & service the filter",
      "Check gas level",
      "Free gas top-up up to 20 PSI",
      "2-week workmanship warranty",
    ],
  },
  {
    title: "Overhaul — wall mounted",
    price: "From RM150",
    note: "Below 1.5 HP · RM190 for 2 HP",
    points: [
      "Full indoor unit dismantle & chemical clean",
      "Fan bearings, circuit board & drain pan check",
      "Coil & filter treatment for odour",
      "Drain flush + free gas top-up (up to 20 PSI)",
    ],
  },
  {
    title: "Overhaul — cassette",
    price: "RM330",
    note: "Below 3 HP",
    points: [
      "Chemical overhaul for cassette units",
      "Same thorough parts cleaning as wall-mounted",
      "Free gas top-up up to 20 PSI",
      "2-week workmanship warranty",
    ],
  },
] as const;

export function About() {
  return (
    <>
      <section
        id="about"
        className="scroll-mt-20 border-t border-[var(--hm-border)] bg-[var(--hm-bg)] py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-[var(--hm-border)] bg-[var(--hm-surface)] shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:mx-0">
            <Image
              src="/about-cleaner.jpg"
              alt="Hauzmaid cleaner in branded blue uniform"
              width={780}
              height={792}
              className="h-full w-full object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 420px"
              priority
            />
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
              About Hauzmaid
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
              Making homes &amp; offices shine across Klang Valley
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--hm-muted)]">
              At Hauzmaid, our goal is to make your home and office shine. We match
              your request with reliable house cleaning services in KL — on time,
              with clear pricing and 100% customer focus.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--hm-muted)]">
              From basic home cleans to ironing, folding clothes, fridge &amp; fan
              cleaning, post-renovation, and aircon service — tell us what you need
              when you book.
            </p>
          </div>
        </div>

        {/* Tasks we cover */}
        <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
          <h3 className="font-display text-2xl text-[var(--hm-text)] sm:text-3xl">
            Tasks we cover
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--hm-muted)]">
            Basic cleaning covers common areas (kitchen, bedroom, bathroom, living
            hall). Extra tasks — please mention when booking.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] p-6">
              <p className="text-xs font-medium tracking-wide text-[var(--hm-accent)] uppercase">
                1 · Basic cleaning
              </p>
              <ul className="mt-4 space-y-2.5">
                {BASIC_TASKS.map((task) => (
                  <li key={task} className="flex gap-2 text-sm text-[var(--hm-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--hm-accent)]" aria-hidden />
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] p-6">
              <p className="text-xs font-medium tracking-wide text-[var(--hm-accent)] uppercase">
                2 · Additional tasks (notify when booking)
              </p>
              <ul className="mt-4 space-y-2.5">
                {EXTRA_TASKS.map((task) => (
                  <li key={task} className="flex gap-2 text-sm text-[var(--hm-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--hm-accent)]" aria-hidden />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-[var(--hm-border)] bg-[var(--hm-surface)]/60 p-5 sm:flex sm:items-start sm:justify-between sm:gap-6">
            <div>
              <p className="font-medium text-[var(--hm-text)]">Cleaning tools add-on</p>
              <p className="mt-1 text-sm text-[var(--hm-muted)]">
                Tools &amp; chemicals <strong className="text-[var(--hm-text)]">RM30 / job</strong> —
                mop, sweeper vacuum, cloths, pails &amp; normal chemicals (1 set per pair of helpers).
                4 ft ladder <strong className="text-[var(--hm-text)]">RM40</strong>.
              </p>
            </div>
            <p className="mt-3 text-xs text-[var(--hm-muted)] sm:mt-0 sm:max-w-xs sm:text-right">
              Prices &amp; tasks depend on area condition — photos may be needed for a final quote.
            </p>
          </div>
        </div>

        {/* Aircon detail */}
        <div id="aircon" className="mx-auto mt-16 max-w-6xl scroll-mt-24 px-4 sm:px-6">
          <h3 className="font-display text-2xl text-[var(--hm-text)] sm:text-3xl">
            Aircon service details
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--hm-muted)]">
            Non-chemical cleaning from <span className="text-[var(--hm-text)]">RM70</span>.
            All packages include free gas top-up (up to 20 PSI) and a 2-week workmanship warranty.
          </p>

          <ul className="mt-8 grid gap-5 lg:grid-cols-3">
            {AIRCON_PLANS.map((plan) => (
              <li
                key={plan.title}
                className="flex flex-col rounded-xl border border-[var(--hm-border)] bg-[var(--hm-surface)] p-6"
              >
                <p className="text-xs font-medium tracking-wide text-[var(--hm-accent)] uppercase">
                  {plan.note}
                </p>
                <h4 className="mt-2 font-display text-xl text-[var(--hm-text)]">{plan.title}</h4>
                <p className="mt-1 font-display text-3xl text-[var(--hm-accent)]">{plan.price}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {plan.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-[var(--hm-muted)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--hm-accent)]" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${SITE.whatsapp}?text=${encodeURIComponent(`Hi Hauzmaid, I'd like a quote for ${plan.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-gradient mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold text-white hover:opacity-90"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp quote
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we are — live-site showreel background (about.mp4) */}
      <section
        id="who-we-are"
        className="relative scroll-mt-20 min-h-[70svh] overflow-hidden border-t border-[var(--hm-border)]"
        aria-label="Who we are"
      >
        <div className="absolute inset-0">
          <BackgroundVideo
            src="/about.mp4"
            poster="/about-poster.jpg"
            label="Hauzmaid Who we are showreel"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,17,24,0.55)_0%,rgba(11,17,24,0.72)_45%,rgba(11,17,24,0.88)_100%)]"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-28">
          <h2 className="font-display text-4xl font-medium tracking-wide text-[var(--hm-text)] sm:text-5xl">
            Who are we?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--hm-text)]/90 sm:text-lg">
            We are a Malaysia-based cleaning solutions platform, boasting over{" "}
            <strong className="font-semibold text-[var(--hm-text)]">2,000 satisfied customers</strong>.
            Every day, we strive to expand our house cleaning services in Kuala Lumpur,
            while maintaining the quality that our existing clientele has come to expect.
            Stay connected and follow us on social media — discover our services, handy
            cleaning advice, and tips for a healthier home.
          </p>
          <a
            href="#contact"
            className="cta-gradient mt-8 inline-flex min-h-12 items-center rounded-md px-8 text-sm font-semibold text-white hover:opacity-90"
          >
            Contact us
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--hm-muted)] hover:text-[var(--hm-text)]"
            >
              Facebook
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--hm-muted)] hover:text-[var(--hm-text)]"
            >
              Instagram
            </a>
            <a
              href={SITE.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--hm-muted)] hover:text-[var(--hm-text)]"
            >
              Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
