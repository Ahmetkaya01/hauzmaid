export const SITE = {
  name: "Hauzmaid",
  legalName: "Hauzmaid Cleaning Services",
  url: "https://www.hauzmaid.com",
  phoneDisplay: "016-356 60 55",
  phoneTel: "+60163566055",
  whatsapp: "https://wa.me/60163566055",
  maps: "https://maps.app.goo.gl/CAwzmGEKALeuKQmCA",
  facebook: "https://www.facebook.com/hauzmaid.com.services/",
  facebookReviews: "https://www.facebook.com/hauzmaid.com.services/reviews",
  instagram: "https://www.instagram.com/hauzmaid/",
  area: "Klang Valley / Kuala Lumpur, Malaysia",
  priceRange: "RM80+",
} as const;

export const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#prices", label: "Prices" },
  { href: "/#about", label: "About" },
  { href: "/#why-us", label: "Why us" },
  { href: "/#areas", label: "Areas" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/tips", label: "Tips" },
  { href: "/#contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "house-office",
    title: "House & office cleaning",
    description:
      "Reliable residential and office cleaning across Klang Valley — one-time, weekly, or monthly.",
    keywords: "house cleaning KL · residential cleaning services",
  },
  {
    id: "move",
    title: "Move-in / move-out cleaning",
    description:
      "Deep clean before you move in or after you move out. Ideal for apartments and landed homes.",
    keywords: "move-out cleaning KL · one time cleaning service",
  },
  {
    id: "post-reno",
    title: "Post-renovation cleaning",
    description:
      "Dust, debris, and construction residue cleared so your space is ready to live in.",
    keywords: "post renovation cleaning KL",
  },
  {
    id: "aircon",
    title: "Aircon service",
    description:
      "Non-chemical cleaning from RM70. Overhaul for wall-mounted (from RM150) and cassette (RM330). Free gas top-up up to 20 PSI + 2-week warranty.",
    keywords: "aircon cleaning KL",
    quoteOnly: true,
  },
] as const;

export const PACKAGES = [
  {
    label: "1 helper · 2 hours",
    detail: "Minimum order",
    price: 80,
    helpers: 1,
    hours: 2,
    highlight: true,
  },
  {
    label: "1 helper · 4 hours",
    detail: "4 hrs × RM35 (3hrs+ rate)",
    price: 140,
    helpers: 1,
    hours: 4,
    highlight: false,
  },
  {
    label: "2 helpers · 2 hours",
    detail: "4 maid-hours × RM35",
    price: 140,
    helpers: 2,
    hours: 2,
    highlight: false,
  },
  {
    label: "2 helpers · 4 hours",
    detail: "2 × 4 × RM35",
    price: 280,
    helpers: 2,
    hours: 4,
    highlight: false,
  },
] as const;

export const ADDONS = [
  { label: "Tools & chemicals", price: 30, unit: "job" },
  { label: "4 ft ladder", price: 40, unit: "job" },
] as const;

export const FEATURED_AREAS = [
  {
    name: "Kuala Lumpur",
    blurb: "House cleaning KL — city condos, apartments & landed homes.",
  },
  {
    name: "Petaling Jaya",
    blurb: "Part-time maid service for PJ homes and offices.",
  },
  {
    name: "Subang Jaya",
    blurb: "Hourly cleaning for Subang residences, USJ included.",
  },
  {
    name: "Shah Alam",
    blurb: "One-time and weekly home cleaning across Shah Alam.",
  },
  {
    name: "Ampang",
    blurb: "Move-in / move-out and regular cleaning in Ampang.",
  },
  {
    name: "Cheras",
    blurb: "Post-renovation and residential cleaning in Cheras.",
  },
] as const;

export const AREAS = [
  "Kajang",
  "Puchong",
  "Damansara",
  "Mont Kiara",
  "Bangsar",
  "Setapak",
  "Wangsa Maju",
  "Kepong",
  "Seri Kembangan",
  "Putrajaya",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Amazing and efficient service. Admin was very fast to respond to my inquiries, pricing is also very reasonable. Cleaners were friendly and helpful, definitely will book their service again! Good job Houzmaid",
    source: "Customer review · Facebook",
  },
  {
    quote:
      "Over 2,000 satisfied customers have booked Hauzmaid across Klang Valley — and counting.",
    source: "Hauzmaid milestone",
  },
  {
    quote:
      "Verified Google Business Profile — a real, local KL cleaning company you can find on Google Maps.",
    source: "Google verified business",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is the minimum booking?",
    answer:
      "Minimum booking is 2 hours per session. At RM40 per hour per maid, the minimum order is RM80 (1 maid × 2 hours).",
  },
  {
    question: "Why is RM40/hour for 2 hours but RM35 for larger bookings?",
    answer:
      "The RM40/hour rate applies only to the minimum order: 1 helper × 2 hours (= 2 maid-hours → RM80). When total maid-hours is 3 or more — for example 1 helper × 3 hours, or 2 helpers × 2 hours (= 4 maid-hours) — the rate is RM35/hour per maid. So 2 helpers × 2 hours = RM140. Extensions after booked time are RM40/hour per maid.",
  },
  {
    question: "Do I need to pay a deposit?",
    answer:
      "No. Hauzmaid does not require a deposit. You pay by bank transfer when helpers arrive.",
  },
  {
    question: "Is there a transport fee?",
    answer:
      "No. There is no transport fee for bookings across our Klang Valley service area.",
  },
  {
    question: "Are cleaning tools included?",
    answer:
      "Tools and chemicals can be provided as an add-on for RM30 per job. A 4 ft ladder is available for RM40 per job.",
  },
  {
    question: "What is the night shift rate?",
    answer:
      "Night shift cleaning (6PM–12AM) is RM60 per hour per maid.",
  },
  {
    question: "Do you offer aircon cleaning?",
    answer:
      "Yes. Non-chemical cleaning is RM70 for all types. Overhaul cleaning starts from RM150 (wall-mounted below 1.5 HP), RM190 (2 HP), and RM330 for cassette below 3 HP. All include free gas top-up up to 20 PSI and a 2-week workmanship warranty.",
  },
  {
    question: "Can you iron or fold clothes?",
    answer:
      "Yes — clothes ironing and folding clothes are additional tasks. Please mention them when you book so we can plan the right hours.",
  },
  {
    question: "How do I book?",
    answer:
      "Message us on WhatsApp with your area, preferred date, number of helpers, and hours. We confirm the booking, helpers arrive, and you pay by bank transfer on arrival.",
  },
] as const;

export function whatsappQuoteUrl(message: string): string {
  return `${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
