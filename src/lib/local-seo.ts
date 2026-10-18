export type Faq = { question: string; answer: string };

export type ServicePage = {
  slug: string;
  name: string;
  title: string;
  h1: string;
  metaDescription: string;
  priceFrom: string;
  intro: string;
  includes: string[];
  idealFor: string[];
  pricing: string[];
  faqs: Faq[];
};

export type AreaPage = {
  slug: string;
  name: string;
  /** Known customer volume — used to rank area pages and homepage cards */
  demand?: number;
  /** Administrative state, used for schema and copy */
  state: "Kuala Lumpur" | "Selangor" | "Putrajaya";
  neighbourhoods: string[];
  intro: string;
  localNote: string;
  popularServices: string[];
};

export const STANDARD_PRICING = [
  "Minimum order: 1 helper × 2 hours at RM40/hour per maid = RM80",
  "3+ maid-hours in total: RM35/hour per maid (e.g. 2 helpers × 2 hours = RM140)",
  "Extension after booked time: RM40/hour per maid",
  "Night shift (6PM–12AM): RM60/hour per maid",
  "Optional add-ons: tools & chemicals RM30/job, 4 ft ladder RM40/job",
  "Weekly plan: 1 helper × 3 hours = RM105 per visit (RM35/hr). Four visits ≈ RM420",
  "No deposit, no transport fee — pay by bank transfer when helpers arrive",
] as const;

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "house-cleaning",
    name: "House cleaning",
    title: "House Cleaning Service KL & Klang Valley — From RM80",
    h1: "House cleaning service in KL & Klang Valley",
    metaDescription:
      "Hourly house cleaning and part-time maid service across Kuala Lumpur and Klang Valley. From RM80 (1 maid × 2 hrs), RM35/hr for 3+ maid-hours. No deposit, no transport fee.",
    priceFrom: "From RM80",
    intro:
      "Hauzmaid sends trained part-time maids to condos, apartments, and landed homes across Kuala Lumpur and Selangor. Book a one-time clean before guests arrive, or a weekly or monthly slot so the house stays under control. You choose the number of helpers and hours; we bring the people, and you only pay when they arrive.",
    includes: [
      "Sweeping, vacuuming, and mopping all floors",
      "Kitchen counters, stove top, sink, and cabinet fronts",
      "Bathrooms: toilet, sink, shower area, mirrors, and tiles",
      "Dusting furniture, shelves, switches, and door frames",
      "Bedrooms: bed making, wiping surfaces, tidying",
      "Rubbish removal to your bin area",
      "Extra on request: ironing, folding clothes, fridge, ceiling fan, outdoor areas",
    ],
    idealFor: [
      "Busy working families who want a weekly or fortnightly clean",
      "Condo and apartment owners preparing for guests or festive seasons",
      "Landlords and Airbnb hosts between tenants",
      "Elderly parents who need help keeping the home clean",
    ],
    pricing: [...STANDARD_PRICING],
    faqs: [
      {
        question: "How many hours do I need for a house cleaning?",
        answer:
          "A typical 2–3 bedroom condo takes 1 helper about 3–4 hours, or 2 helpers about 2 hours. Larger landed homes usually need 2 helpers for 3–4 hours. Tell us your unit size on WhatsApp and we will suggest the right booking.",
      },
      {
        question: "Can I book a regular weekly maid?",
        answer:
          "Yes. Many customers book the same day and time every week or every two weeks. Message us with your preferred schedule and area.",
      },
      {
        question: "Do I need to provide cleaning supplies?",
        answer:
          "You can use your own supplies, or add tools and chemicals for RM30 per job and we will bring them.",
      },
    ],
  },
  {
    slug: "move-in-move-out-cleaning",
    name: "Move-in / move-out cleaning",
    title: "Move-In & Move-Out Cleaning KL — Deep Clean From RM80",
    h1: "Move-in & move-out cleaning in KL & Klang Valley",
    metaDescription:
      "Deep cleaning for empty or furnished units before you move in or after you move out. Condos, apartments, and landed homes in KL & Selangor. Hourly rates, no deposit.",
    priceFrom: "From RM80",
    intro:
      "Moving is stressful enough without scrubbing an empty house. Our move-in and move-out cleaning covers the places a normal weekly clean skips — inside cabinets and wardrobes, window tracks, grout, and the dust that collects behind furniture. Tenants use it to get their deposit back; owners and landlords use it to hand over a unit that is ready to live in.",
    includes: [
      "Inside and outside of kitchen cabinets, drawers, and wardrobes",
      "Window panels, grilles, and sliding door tracks",
      "Deep bathroom clean: tiles, grout, fittings, and drains",
      "Kitchen degreasing: stove, hood exterior, backsplash",
      "Walls spot-cleaned, switches and doors wiped",
      "Floors swept, vacuumed, and mopped in every room",
      "Fridge and ceiling fan cleaning on request",
    ],
    idealFor: [
      "Tenants handing back a rental unit",
      "New owners collecting keys to a resale unit",
      "Landlords preparing a unit for the next tenant",
      "Agents staging a property for viewings",
    ],
    pricing: [
      ...STANDARD_PRICING,
      "Empty units usually take less time — send photos for a quick estimate",
    ],
    faqs: [
      {
        question: "Should I book move-out cleaning before or after the movers?",
        answer:
          "After. Once the unit is empty, helpers can reach every corner, inside cabinets, and behind where furniture stood. Book the cleaning for the day after your movers if you can.",
      },
      {
        question: "How long does a move-out clean take?",
        answer:
          "An empty 3-bedroom condo usually takes 2 helpers about 4 hours. Units left in heavier condition need more time — send photos on WhatsApp for an estimate.",
      },
      {
        question: "Is there electricity and water needed?",
        answer:
          "Yes. Please make sure water and electricity are still connected on the cleaning day.",
      },
    ],
  },
  {
    slug: "post-renovation-cleaning",
    name: "Post-renovation cleaning",
    title: "Post-Renovation Cleaning KL — RM40/hr per Maid",
    h1: "Post-renovation cleaning in KL & Klang Valley",
    metaDescription:
      "Remove renovation dust, cement residue, paint marks, and debris after works. Post-renovation cleaning across Kuala Lumpur and Selangor at RM40/hour per maid.",
    priceFrom: "RM40 / hr / maid",
    intro:
      "Renovation dust settles everywhere — on window frames, inside cabinets, on fan blades, and in every tile joint. Our post-renovation cleaning team removes fine dust, cement and paint splashes, sticker residue, and leftover debris so your home is safe and comfortable to move back into.",
    includes: [
      "Fine dust removal from walls, ledges, frames, and fittings",
      "Cement, grout haze, and paint splash removal from floors and tiles",
      "Inside and outside of new cabinets and wardrobes",
      "Windows, grilles, and sliding door tracks",
      "Bathroom fittings and tiles cleaned of construction residue",
      "Small debris bagged and removed to your bin area",
    ],
    idealFor: [
      "New homes after interior design works",
      "Kitchen and bathroom renovations",
      "Shops and offices after fit-out",
      "Units after repainting or flooring work",
    ],
    pricing: [
      "Post-renovation cleaning: RM40/hour per maid",
      "Most jobs need 2–4 helpers depending on unit size and dust level",
      "Optional add-ons: tools & chemicals RM30/job, 4 ft ladder RM40/job",
      "Photos help us give an accurate quote before booking",
      "No deposit, no transport fee — pay by bank transfer when helpers arrive",
    ],
    faqs: [
      {
        question: "When should I book post-renovation cleaning?",
        answer:
          "After the contractor has finished all work, including touch-ups and removal of large debris. Cleaning before the last works are done means dust will settle again.",
      },
      {
        question: "Do you remove large construction waste?",
        answer:
          "We bag and remove small debris and dust. Large items such as leftover tiles, boards, or bulk waste should be cleared by your contractor.",
      },
      {
        question: "How many helpers do I need?",
        answer:
          "A 1,000 sq ft condo after a full renovation usually needs 3 helpers for about 4 hours. Send photos on WhatsApp for a recommendation.",
      },
    ],
  },
  {
    slug: "aircon-cleaning",
    name: "Aircon cleaning & service",
    title: "Aircon Cleaning & Service KL — From RM70",
    h1: "Aircon cleaning & service in KL & Klang Valley",
    metaDescription:
      "Aircon service in Kuala Lumpur & Selangor: non-chemical cleaning RM70, overhaul from RM150, cassette RM330. Free gas top-up up to 20 PSI and 2-week warranty.",
    priceFrom: "From RM70",
    intro:
      "A dirty aircon cools poorly, uses more electricity, and blows dust and mould into the room. Hauzmaid's aircon team handles regular non-chemical cleaning and full overhaul cleaning for wall-mounted and cassette units, with a free gas top-up and a workmanship warranty.",
    includes: [
      "Remove, clean, and service the filter",
      "Clean the cover, cooling coil, and blower",
      "Flush the drainage pipe",
      "Check gas pressure — free top-up up to 20 PSI",
      "Overhaul: unit dismantled and fully washed",
      "2-week workmanship warranty",
    ],
    idealFor: [
      "Units that smell musty or leak water",
      "Aircons that no longer cool well",
      "Regular servicing every 3–6 months",
      "Homes, offices, and shops",
    ],
    pricing: [
      "Non-chemical cleaning (all types): RM70 per unit",
      "Overhaul, wall-mounted below 1.5 HP: RM150",
      "Overhaul, wall-mounted 2 HP: RM190",
      "Overhaul, cassette below 3 HP: RM330",
      "Free gas top-up up to 20 PSI and 2-week warranty included",
    ],
    faqs: [
      {
        question: "How often should I service my aircon in Malaysia?",
        answer:
          "Every 3–6 months for units used daily. Malaysia's heat and humidity mean filters and coils collect dust and mould quickly.",
      },
      {
        question: "What is the difference between normal cleaning and overhaul?",
        answer:
          "Non-chemical cleaning services the filter, coil, blower, and drain without removing the unit. An overhaul dismantles the unit for a full wash — recommended when the aircon leaks, smells, or has not been serviced for a long time.",
      },
    ],
  },
  {
    slug: "office-cleaning",
    name: "Office cleaning",
    title: "Office Cleaning Service KL — Hourly Cleaners From RM80",
    h1: "Office cleaning in KL & Klang Valley",
    metaDescription:
      "Part-time office cleaners for small offices, shops, and studios in Kuala Lumpur and Selangor. One-time or weekly, from RM80. Night shift available.",
    priceFrom: "From RM80",
    intro:
      "Small offices, clinics, shops, and studios do not need a full-time cleaner — they need a reliable one. Hauzmaid provides hourly office cleaning on a one-time, weekly, or monthly basis, including evening slots so cleaning does not disturb your team.",
    includes: [
      "Desks, chairs, and meeting rooms wiped down",
      "Pantry: sink, counters, microwave, and fridge exterior",
      "Toilets cleaned and restocked with your supplies",
      "Floors vacuumed and mopped",
      "Glass doors, partitions, and reception area",
      "Rubbish emptied and taken out",
    ],
    idealFor: [
      "Small and medium offices",
      "Retail shops and showrooms",
      "Clinics, studios, and tuition centres",
      "Offices after events or moving",
    ],
    pricing: [...STANDARD_PRICING],
    faqs: [
      {
        question: "Can you clean after office hours?",
        answer:
          "Yes. Night shift cleaning runs from 6PM to 12AM at RM60 per hour per maid.",
      },
      {
        question: "Do you offer a regular office cleaning schedule?",
        answer:
          "Yes. Many offices book the same helpers weekly. Message us with your office size, area, and preferred days.",
      },
    ],
  },
];

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "kuala-lumpur",
    name: "Kuala Lumpur",
    demand: 85,
    state: "Kuala Lumpur",
    neighbourhoods: ["KLCC", "Bukit Bintang", "Titiwangsa", "Sentul", "Brickfields", "Bukit Jalil", "Sri Petaling", "Taman Tun Dr Ismail"],
    intro:
      "From high-rise condos around KLCC to family homes in TTDI and Bukit Jalil, Hauzmaid provides part-time maids and deep cleaning across the city. Book hourly helpers for a quick weekly clean or a full move-out deep clean.",
    localNote:
      "Most KL bookings are condos with security check-in. Register our helpers with your guardhouse or management office before the booking day so they can go straight up to your unit.",
    popularServices: ["house-cleaning", "move-in-move-out-cleaning", "aircon-cleaning"],
  },
  {
    slug: "petaling-jaya",
    name: "Petaling Jaya",
    state: "Selangor",
    neighbourhoods: ["SS2", "Damansara Utama", "Kelana Jaya", "Ara Damansara", "Section 17", "Bandar Utama", "Kota Damansara"],
    intro:
      "Petaling Jaya mixes older terrace houses in SS2 and Section 17 with newer condos in Ara Damansara and Kelana Jaya. Hauzmaid helpers clean both — weekly home cleaning, office cleaning for PJ businesses, and deep cleans for renovated homes.",
    localNote:
      "Older PJ terrace houses often have outdoor porches and kitchens extended at the back. Mention outdoor areas when you book so we can plan enough hours.",
    popularServices: ["house-cleaning", "office-cleaning", "post-renovation-cleaning"],
  },
  {
    slug: "subang-jaya",
    name: "Subang Jaya",
    demand: 91,
    state: "Selangor",
    neighbourhoods: ["USJ", "SS12", "SS14", "SS15", "SS17", "SS19", "Bandar Sunway", "Putra Heights"],
    intro:
      "House cleaning in Subang Jaya covers USJ, SS12–SS19, Sunway, and Putra Heights. Families book a weekly part-time maid; landlords around Sunway and SS15 use move-in and move-out cleaning between tenancies. From RM80, no transport fee.",
    localNote:
      "Rental units near Sunway and SS15 turn over often at the end of each semester — book move-out cleaning early during those weeks.",
    popularServices: ["house-cleaning", "move-in-move-out-cleaning", "aircon-cleaning"],
  },
  {
    slug: "shah-alam",
    name: "Shah Alam",
    demand: 74,
    state: "Selangor",
    neighbourhoods: ["Section 7", "Section 13", "Setia Alam", "Bukit Jelutong", "Kota Kemuning", "Alam Impian"],
    intro:
      "Shah Alam homes are larger than the Klang Valley average, with many semi-detached and terrace houses in Setia Alam, Bukit Jelutong, and Kota Kemuning. Our helpers handle one-time and weekly cleaning, plus post-renovation cleaning for new and extended homes.",
    localNote:
      "For double-storey and semi-detached homes, 2 helpers for 3–4 hours is a common booking. Ask on WhatsApp if you are unsure.",
    popularServices: ["house-cleaning", "post-renovation-cleaning", "move-in-move-out-cleaning"],
  },
  {
    slug: "ampang",
    name: "Ampang",
    demand: 58,
    state: "Selangor",
    neighbourhoods: ["Ampang Jaya", "Pandan Indah", "Pandan Jaya", "Taman Melawati", "Ampang Hilir", "Taman Dagang"],
    intro:
      "House cleaning in Ampang and Pandan covers Ampang Jaya, Pandan Indah, Taman Melawati, and Ampang Hilir. Part-time maid from RM80, plus move-in/out deep cleans — no transport fee from KL.",
    localNote:
      "Hillside homes around Taman Melawati collect more outdoor dust and leaves — add outdoor cleaning to your booking if needed.",
    popularServices: ["house-cleaning", "move-in-move-out-cleaning", "aircon-cleaning"],
  },
  {
    slug: "cheras",
    name: "Cheras",
    demand: 93,
    state: "Kuala Lumpur",
    neighbourhoods: ["Taman Connaught", "Taman Midah", "Bandar Tun Hussein Onn", "Alam Damai", "Taman Segar", "Cheras Batu 9"],
    intro:
      "House cleaning in Cheras is our highest-volume route — Taman Connaught, Taman Midah, Alam Damai, and Batu 9 condos plus renovated terrace homes. Book a part-time maid from RM80, or a post-renovation clean before furniture arrives.",
    localNote:
      "Collecting keys to a new Cheras condo? Book post-renovation cleaning after your interior works finish and before furniture arrives.",
    popularServices: ["post-renovation-cleaning", "house-cleaning", "move-in-move-out-cleaning"],
  },
  {
    slug: "puchong",
    name: "Puchong",
    demand: 79,
    state: "Selangor",
    neighbourhoods: ["Bandar Puteri Puchong", "Puchong Jaya", "Bandar Kinrara", "Puchong Perdana", "Taman Putra Prima"],
    intro:
      "House cleaning in Puchong is mostly weekly hourly maids for terrace and semi-D homes in Bandar Puteri, Kinrara, and Puchong Jaya. Same-day quotes on WhatsApp, from RM80, no deposit.",
    localNote:
      "Weekend slots in Puchong fill up first — weekday bookings are easier to confirm at short notice.",
    popularServices: ["house-cleaning", "aircon-cleaning", "post-renovation-cleaning"],
  },
  {
    slug: "kajang",
    name: "Kajang",
    state: "Selangor",
    neighbourhoods: ["Kajang town", "Sungai Long", "Saujana Impian", "Bandar Mahkota Cheras", "Sungai Chua"],
    intro:
      "Hauzmaid serves Kajang, Sungai Long, and Bandar Mahkota Cheras with hourly house cleaning, move-in cleaning for new owners, and post-renovation cleaning for homes in new townships.",
    localNote:
      "Many Kajang and Sungai Long homes are new — post-renovation cleaning before move-in is our most common job here.",
    popularServices: ["post-renovation-cleaning", "move-in-move-out-cleaning", "house-cleaning"],
  },
  {
    slug: "damansara",
    name: "Damansara",
    state: "Selangor",
    neighbourhoods: ["Damansara Heights", "Damansara Perdana", "Mutiara Damansara", "Damansara Jaya", "Kota Damansara"],
    intro:
      "From bungalows in Damansara Heights to condos in Damansara Perdana and Mutiara Damansara, Hauzmaid provides careful, hourly house cleaning and deep cleaning on your schedule.",
    localNote:
      "Larger landed homes in Damansara Heights usually book 2–3 helpers. Tell us the number of rooms and bathrooms for an accurate estimate.",
    popularServices: ["house-cleaning", "aircon-cleaning", "move-in-move-out-cleaning"],
  },
  {
    slug: "mont-kiara",
    name: "Mont Kiara",
    state: "Kuala Lumpur",
    neighbourhoods: ["Mont Kiara", "Sri Hartamas", "Desa Sri Hartamas", "Solaris Dutamas"],
    intro:
      "Mont Kiara and Sri Hartamas are mostly serviced residences and expat condos. Hauzmaid provides English-speaking booking on WhatsApp, weekly part-time maids, and move-out cleaning when leases end.",
    localNote:
      "Condo management in Mont Kiara usually requires visitor registration — share your helpers' details with security before the booking.",
    popularServices: ["house-cleaning", "move-in-move-out-cleaning", "aircon-cleaning"],
  },
  {
    slug: "bangsar",
    name: "Bangsar",
    demand: 70,
    state: "Kuala Lumpur",
    neighbourhoods: ["Bangsar Baru", "Bukit Bandaraya", "Lucky Garden", "Pantai Dalam"],
    intro:
      "Hauzmaid cleans landed homes in Bangsar Baru and Bukit Bandaraya, and condos and offices in Bangsar South — one-time cleans, weekly helpers, and office cleaning.",
    localNote:
      "Bangsar South offices often prefer evening cleaning — our night shift runs 6PM–12AM.",
    popularServices: ["house-cleaning", "office-cleaning", "aircon-cleaning"],
  },
  {
    slug: "setapak",
    name: "Setapak",
    demand: 74,
    state: "Kuala Lumpur",
    neighbourhoods: ["Danau Kota", "Taman Melati", "Genting Klang", "Setapak Jaya"],
    intro:
      "Setapak, Danau Kota, and Taman Melati have many apartments and student rentals. Hauzmaid provides affordable hourly cleaning and move-out cleaning for tenants and landlords.",
    localNote:
      "For small apartments, the minimum booking of 1 helper × 2 hours (RM80) is often enough for a regular clean.",
    popularServices: ["house-cleaning", "move-in-move-out-cleaning", "aircon-cleaning"],
  },
  {
    slug: "wangsa-maju",
    name: "Wangsa Maju",
    demand: 74,
    state: "Kuala Lumpur",
    neighbourhoods: ["Wangsa Maju", "Taman Sri Rampai", "Desa Setapak", "Wangsa Melawati"],
    intro:
      "Hauzmaid serves families and tenants in Wangsa Maju, Sri Rampai, and Wangsa Melawati with part-time maids, deep cleaning, and aircon service.",
    localNote:
      "Pair your house cleaning with an aircon service visit to get your home fully refreshed in one day.",
    popularServices: ["house-cleaning", "aircon-cleaning", "move-in-move-out-cleaning"],
  },
  {
    slug: "kepong",
    name: "Kepong",
    state: "Kuala Lumpur",
    neighbourhoods: ["Kepong Baru", "Metro Prima", "Bandar Menjalara", "Jinjang", "Desa ParkCity"],
    intro:
      "From terrace homes in Kepong Baru and Bandar Menjalara to condos in Metro Prima and Desa ParkCity, Hauzmaid provides weekly house cleaning and deep cleaning across Kepong.",
    localNote:
      "Terrace homes with a back kitchen and wet area usually need 3 hours or more for a thorough clean.",
    popularServices: ["house-cleaning", "post-renovation-cleaning", "aircon-cleaning"],
  },
  {
    slug: "seri-kembangan",
    name: "Seri Kembangan",
    state: "Selangor",
    neighbourhoods: ["Taman Equine", "Serdang Raya", "Sri Serdang", "Bandar Putra Permai", "Seri Kembangan town"],
    intro:
      "Hauzmaid serves Seri Kembangan, Taman Equine, and Serdang with hourly house cleaning, move-in and move-out cleaning, and post-renovation cleaning for new homes.",
    localNote:
      "Seri Kembangan is close to both KL and Putrajaya, so helpers can usually fit in same-week bookings — message us to check availability.",
    popularServices: ["house-cleaning", "move-in-move-out-cleaning", "post-renovation-cleaning"],
  },
  {
    slug: "putrajaya",
    name: "Putrajaya",
    state: "Putrajaya",
    neighbourhoods: ["Presint 8", "Presint 9", "Presint 11", "Presint 14", "Presint 16", "Presint 18"],
    intro:
      "Hauzmaid provides house cleaning, move-in cleaning, and aircon service for homes across Putrajaya's precincts — from government quarters to newer landed homes.",
    localNote:
      "Putrajaya bookings work best with a little notice. Message us a few days ahead with your precinct and preferred time.",
    popularServices: ["house-cleaning", "move-in-move-out-cleaning", "aircon-cleaning"],
  },
  {
    slug: "klcc-bukit-bintang",
    name: "KLCC / Bukit Bintang",
    demand: 89,
    state: "Kuala Lumpur",
    neighbourhoods: ["KLCC", "Bukit Bintang", "KL City Centre", "Raja Chulan", "Changkat", "Pavilion area", "Ampang Hilir"],
    intro:
      "KLCC and Bukit Bintang are among our busiest booking zones — high-rise condos, serviced residences, and small offices around the city centre. Hauzmaid sends hourly helpers for weekly house cleaning, move-out cleans between tenancies, and aircon service that fits condo schedules.",
    localNote:
      "City-centre condos almost always need a visitor pass. Register our helpers with your management or guardhouse before the booking day so they can go straight up.",
    popularServices: ["house-cleaning", "office-cleaning", "aircon-cleaning"],
  },
  {
    slug: "bangsar-south-mid-valley",
    name: "Bangsar South / Mid Valley",
    demand: 79,
    state: "Kuala Lumpur",
    neighbourhoods: ["Bangsar South", "Mid Valley City", "The Gardens", "Kerinchi", "Abdullah Hukum", "Pantai Sentral Park"],
    intro:
      "Bangsar South and Mid Valley mix condo living with offices above the mall. Hauzmaid handles weekly home cleaning for residents, evening office cleaning after shop hours, and aircon service for units that run all day.",
    localNote:
      "Offices around Mid Valley often prefer 6PM–12AM so cleaning does not disturb the team. Residences: share your condo parking or visitor instructions when you book.",
    popularServices: ["house-cleaning", "office-cleaning", "aircon-cleaning"],
  },
  {
    slug: "old-klang-road-kuchai-lama",
    name: "Old Klang Road / Kuchai Lama",
    demand: 69,
    state: "Kuala Lumpur",
    neighbourhoods: ["Old Klang Road", "Kuchai Lama", "Taman OUG", "Taman Desa", "Seputeh", "Happy Garden"],
    intro:
      "Old Klang Road and Kuchai Lama are a regular Hauzmaid route — terrace houses, apartments, and condos along OKR. Book hourly house cleaning, move-in or move-out deep cleaning, or post-renovation cleaning after works.",
    localNote:
      "OKR traffic is heaviest at peak hours. Weekday mid-morning and early afternoon slots are easier to confirm at short notice.",
    popularServices: ["house-cleaning", "move-in-move-out-cleaning", "post-renovation-cleaning"],
  },
];

/** Maps homepage service card ids to their landing page slugs. */
export const SERVICE_SLUG_BY_ID: Record<string, string> = {
  "house-office": "house-cleaning",
  move: "move-in-move-out-cleaning",
  "post-reno": "post-renovation-cleaning",
  aircon: "aircon-cleaning",
};

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

export function getAreaPage(slug: string): AreaPage | undefined {
  return AREA_PAGES.find((a) => a.slug === slug);
}

export function areasByDemand(): AreaPage[] {
  return [...AREA_PAGES].sort((a, b) => (b.demand ?? 0) - (a.demand ?? 0));
}

export function areaSlugForName(name: string): string | undefined {
  return AREA_PAGES.find((a) => a.name === name)?.slug;
}

export function areaFaqs(area: AreaPage): Faq[] {
  return [
    {
      question: `Do you provide cleaning services in ${area.name}?`,
      answer: `Yes. Hauzmaid serves homes and offices across ${area.name}, including ${area.neighbourhoods.slice(0, 4).join(", ")}. Message us on WhatsApp with your exact area to confirm availability.`,
    },
    {
      question: `How much does house cleaning cost in ${area.name}?`,
      answer:
        "The minimum order is RM80 for 1 helper × 2 hours. When your booking totals 3 or more maid-hours, the rate drops to RM35 per hour per maid — for example 2 helpers × 2 hours is RM140.",
    },
    {
      question: `Is there a transport fee to ${area.name}?`,
      answer: `No. There is no transport fee and no deposit for bookings in ${area.name} and the rest of Klang Valley. You pay by bank transfer when the helpers arrive.`,
    },
    {
      question: `Can I book a weekly maid in ${area.name}?`,
      answer: `Yes. A common weekly slot in ${area.name} is 1 helper × 3 hours at RM35/hour (RM105 per visit). Four visits is about RM420. Same-day and one-time bookings are also available.`,
    },
    {
      question: "How do I book?",
      answer:
        "WhatsApp us at 016-356 60 55 with your area, preferred date and time, number of helpers, and hours. We confirm the booking and send helpers on the day.",
    },
  ];
}
