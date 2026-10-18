export const SITE = {
  name: "Hauzmaid",
  legalName: "Hauzmaid Cleaning Services",
  url: "https://www.hauzmaid.com",
  phoneDisplay: "016-356 60 55",
  phoneTel: "+60163566055",
  whatsapp: "https://wa.me/60163566055",
  email: "contact@hauzmaid.com",
  maps: "https://maps.app.goo.gl/9BShPJjkZq9aHo1A9",
  mapsCid: "https://maps.google.com/?cid=18384063884514091927",
  mapsCidValue: "18384063884514091927",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254965!2d101.6869895!3d3.1385059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xed5c6d2512fd235%3A0xff2150b3348ce397!2sHauzmaid%20Cleaning%20Services!5e0!3m2!1sen!2smy",
  geo: { latitude: 3.1385059, longitude: 101.6869895 },
  addressLocality: "Kuala Lumpur",
  addressRegion: "Wilayah Persekutuan Kuala Lumpur",
  addressCountry: "MY",
  slogan: "No deposit, no transport fee. From RM80.",
  openingHours: "Mo-Su 09:00-18:00",
  opens: "09:00",
  closes: "18:00",
  facebook: "https://www.facebook.com/hauzmaid.com.services/",
  facebookReviews: "https://www.facebook.com/hauzmaid.com.services/reviews",
  instagram: "https://www.instagram.com/hauzmaid/",
  area: "Klang Valley / Kuala Lumpur, Malaysia",
  priceRange: "RM80+",
  foundingDate: "2022",
  gaId: "G-5Q2DCPV01X",
} as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/prices", label: "Prices" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas" },
  { href: "/tips", label: "Tips" },
  { href: "/contact", label: "Contact" },
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
    name: "Cheras",
    blurb: "Our busiest area — weekly cleaning, condos, and post-renovation homes.",
  },
  {
    name: "Subang Jaya",
    blurb: "Hourly maids across USJ, SS12–SS19, Sunway, and Putra Heights.",
  },
  {
    name: "KLCC / Bukit Bintang",
    blurb: "City-centre condos and offices — visitor pass friendly.",
  },
  {
    name: "Puchong",
    blurb: "Weekly home cleaning around Bandar Puteri, Kinrara, and Puchong Jaya.",
  },
  {
    name: "Bangsar South / Mid Valley",
    blurb: "Condo living and evening office cleans next to Mid Valley.",
  },
  {
    name: "Setapak",
    blurb: "Hourly cleaning for apartments and families in Setapak & nearby Wangsa Maju.",
  },
  {
    name: "Shah Alam",
    blurb: "One-time and weekly cleans for larger landed homes.",
  },
  {
    name: "Bangsar",
    blurb: "Landed homes in Bangsar Baru and Bukit Bandaraya.",
  },
  {
    name: "Old Klang Road / Kuchai Lama",
    blurb: "Terrace houses and condos along OKR, Kuchai Lama, OUG, and Taman Desa.",
  },
] as const;

export const AREAS = [
  "Wangsa Maju",
  "Ampang",
  "Kuala Lumpur",
  "Petaling Jaya",
  "Damansara",
  "Mont Kiara",
  "Kajang",
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

/** The prefilled text is visible to the customer, so it stays plain and short. */
export function whatsappQuoteUrl(message: string): string {
  return `${SITE.whatsapp}?text=${encodeURIComponent(message.trim())}`;
}

export function whatsappSiteUrl(lang: "en" | "ms" = "en"): string {
  return whatsappQuoteUrl(
    lang === "ms"
      ? "Hai Hauzmaid! Saya ingin sebut harga pembersihan.\n\nArea: \nService: pembersihan rumah"
      : "Hi Hauzmaid! I'd like a cleaning quote, please.\n\nArea: \nService: house cleaning",
  );
}
