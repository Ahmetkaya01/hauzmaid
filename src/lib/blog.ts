import { BLOG_MS } from "@/lib/blog-ms";
import type { Lang } from "@/lib/i18n";

export const BLOG_CATEGORIES = [
  "Home Cleaning",
  "Office Cleaning",
  "Deep Cleaning",
  "Tips & Guides",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readingTime: number;
  date: string;
  metaDescription: string;
  /** Cover image under /public/tips/{slug}.jpg */
  coverImage: string;
  /** CSS gradient stops — fallback while image loads */
  accentFrom: string;
  accentTo: string;
  sections: BlogSection[];
};

function tipCover(slug: string): string {
  return `/tips/${slug}.jpg`;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-often-deep-clean-home-kl",
    title: "How Often Should You Deep Clean Your Home in KL?",
    excerpt:
      "Humidity and city dust in Kuala Lumpur mean deep cleans matter more than you think. Here’s a practical schedule for KL homes.",
    category: "Deep Cleaning",
    readingTime: 3,
    date: "2026-06-02",
    metaDescription:
      "Learn how often to deep clean your home in Kuala Lumpur and Klang Valley. Expert tips from Hauzmaid professional cleaning services Malaysia.",
    coverImage: tipCover("how-often-deep-clean-home-kl"),
    accentFrom: "#1a2330",
    accentTo: "#4a82cb",
    sections: [
      {
        heading: "Why KL homes need regular deep cleaning",
        paragraphs: [
          "House cleaning Kuala Lumpur isn’t only about tidy surfaces. High humidity, monsoon dust, and open windows mean kitchens, bathrooms, and AC vents collect grime faster than cooler climates.",
          "A weekly wipe-down keeps things presentable, but a deeper clean reaches skirting boards, inside cabinets, fan blades, and hard-to-reach corners that daily routines miss.",
        ],
      },
      {
        heading: "A simple deep-clean schedule",
        paragraphs: [
          "Most apartments in Klang Valley do well with a thorough deep clean every 3–4 months. Busy family homes, pet households, or units near construction may need one every 6–8 weeks.",
          "Pair that with weekly or bi-weekly home cleaning services KL for floors, bathrooms, and kitchen tops. If you’re short on time, book a professional deep clean and keep lighter tidying yourself between visits.",
        ],
      },
      {
        heading: "When to call the pros",
        paragraphs: [
          "Before festive seasons, after illness in the household, or when you notice mold, sticky grease, or dusty AC residue, it’s smarter to book help than push through alone.",
          "Hauzmaid offers hourly house cleaning across Klang Valley from RM80 — with no deposit and no transport fee — so you can schedule deep cleans without complicated payments.",
        ],
      },
    ],
  },
  {
    slug: "keep-house-dust-free-klang-valley",
    title: "10 Easy Ways to Keep Your House Dust-Free in Klang Valley",
    excerpt:
      "City dust settles fast in PJ, Subang, and Cheras. Ten habits that cut dust without a full weekend of scrubbing.",
    category: "Tips & Guides",
    readingTime: 3,
    date: "2026-06-05",
    metaDescription:
      "10 easy ways to keep your Klang Valley home dust-free. Practical tips for house cleaning KL from Hauzmaid.",
    coverImage: tipCover("keep-house-dust-free-klang-valley"),
    accentFrom: "#121923",
    accentTo: "#356db8",
    sections: [
      {
        heading: "Daily habits that cut dust",
        paragraphs: [
          "Dust in Malaysia often comes from open windows, nearby roads, and AC filters. Start with a 5-minute evening wipe of high-touch surfaces and a quick vacuum of entry mats where grit walks in.",
          "Keep shoes at the door, empty kitchen trash before overnight, and close windows during haze or heavy traffic hours. Small habits reduce how much dust lands on floors overnight.",
        ],
      },
      {
        heading: "Weekly wins for cleaner air",
        paragraphs: [
          "Wash pillowcases and soft furnishings regularly — fabrics trap fine particles. Wipe skirting and window sills weekly; dust often falls downward from these edges.",
          "Clean or replace AC filters on schedule. Dirty filters recirculate dust through every room, undoing your house cleaning Kuala Lumpur efforts.",
        ],
      },
      {
        heading: "When DIY isn’t enough",
        paragraphs: [
          "If dust returns within a day, you likely need a deeper floor and ceiling-fan clean. An hourly maid service can clear under furniture and high shelves while you stay focused on work.",
          "Hauzmaid covers Petaling Jaya, Subang, Shah Alam, Ampang, Cheras, and more across Klang Valley — WhatsApp us for a fast quote.",
        ],
      },
    ],
  },
  {
    slug: "move-in-cleaning-checklist-malaysia",
    title: "Move-In Cleaning Checklist for Malaysian Homes",
    excerpt:
      "Before you unpack, use this move-in cleaning checklist so your new KL or Klang Valley home starts fresh and hygienic.",
    category: "Home Cleaning",
    readingTime: 3,
    date: "2026-06-10",
    metaDescription:
      "Move-in cleaning checklist for Malaysian homes. Book professional move-in cleaning in Kuala Lumpur and Klang Valley with Hauzmaid.",
    coverImage: tipCover("move-in-cleaning-checklist-malaysia"),
    accentFrom: "#0b1118",
    accentTo: "#4a82cb",
    sections: [
      {
        heading: "Why move-in cleaning matters",
        paragraphs: [
          "Previous tenants leave dust in cupboards, bathroom soap scum, and kitchen grease you only notice after unpacking. A targeted move-in clean saves you from scrubbing while boxes block every room.",
          "Landlords and agents in Kuala Lumpur often hand over keys quickly — a professional clean between handover and move-in day is the smoothest path.",
        ],
      },
      {
        heading: "Checklist before the furniture arrives",
        paragraphs: [
          "Focus on kitchens (hob, hood, inside fridge if provided), bathrooms (tiles, grout, toilets), floors, windows within reach, and inside wardrobes. Wipe switches and door handles — high-touch germ spots.",
          "Check AC vents and balcony drains. In Malaysia’s humidity, leftover moisture can lead to musty smells within days of moving in.",
        ],
      },
      {
        heading: "Book help, then unpack",
        paragraphs: [
          "Hauzmaid’s move-in cleaning service covers apartments and landed homes across Klang Valley. Minimum booking is 2 hours from RM80, with no deposit and pay-on-arrival transfer.",
          "Message us with your area, key collection date, and unit size — we’ll confirm helpers and hours so you unpack into a clean space.",
        ],
      },
    ],
  },
  {
    slug: "move-out-cleaning-checklist-kl",
    title: "Move-Out Cleaning Checklist for KL Rentals",
    excerpt:
      "Protect your deposit with a clear move-out cleaning checklist tailored to Kuala Lumpur rental handovers.",
    category: "Home Cleaning",
    readingTime: 3,
    date: "2026-06-12",
    metaDescription:
      "Move-out cleaning checklist for KL rentals. Professional move-out cleaning Kuala Lumpur and Klang Valley by Hauzmaid.",
    coverImage: tipCover("move-out-cleaning-checklist-kl"),
    accentFrom: "#1a2330",
    accentTo: "#2f6bb8",
    sections: [
      {
        heading: "What landlords usually check",
        paragraphs: [
          "Agents in KL typically inspect bathrooms, kitchen grease, floor stains, balcony mess, and empty cupboards. Leaving these unfinished is a common reason deposits are delayed.",
          "A structured move-out clean — not a rushed wipe — shows you returned the unit in good condition and speeds the inspection.",
        ],
      },
      {
        heading: "Room-by-room move-out list",
        paragraphs: [
          "Empty and wipe every cupboard. Degrease hob and hood. Scrub toilets, showers, and mirrors. Vacuum or mop under where beds and sofas stood. Clear balcony leaves and wipe glass if safe.",
          "Don’t forget the entrance grille and shoe area — first impressions for the inspection start at the door.",
        ],
      },
      {
        heading: "Save time with a pro team",
        paragraphs: [
          "Moving day is already stressful. Book Hauzmaid move-out cleaning KL for a fixed window while you handle packing and utilities.",
          "No transport fee across our Klang Valley service area. WhatsApp 016-356 60 55 with your handover date.",
        ],
      },
    ],
  },
  {
    slug: "remove-bathroom-mold-naturally",
    title: "How to Remove Bathroom Mold Naturally in Malaysia",
    excerpt:
      "Humid bathrooms invite mold. Natural methods that help — and when you should call in a deeper professional clean.",
    category: "Tips & Guides",
    readingTime: 3,
    date: "2026-06-18",
    metaDescription:
      "How to remove bathroom mold naturally in Malaysia. Tips for humid KL homes plus when to book home cleaning services KL.",
    coverImage: tipCover("remove-bathroom-mold-naturally"),
    accentFrom: "#121923",
    accentTo: "#3d7bc4",
    sections: [
      {
        heading: "Why mold loves Malaysian bathrooms",
        paragraphs: [
          "Warm, steamy showers and limited ventilation create ideal conditions for mold on silicone, grout, and ceiling corners. Spotting it early prevents stains from spreading.",
          "Open windows after showers, run exhaust fans if available, and squeegee glass to cut moisture left on surfaces.",
        ],
      },
      {
        heading: "Natural cleaning approaches",
        paragraphs: [
          "White vinegar sprays and baking soda pastes can lift mild surface mold on tiles. Always ventilate, wear gloves, and never mix cleaning chemicals.",
          "For stubborn black mold in silicone or porous ceilings, DIY may only bleach the colour temporarily. A deep bathroom clean with proper tools is safer and longer lasting.",
        ],
      },
      {
        heading: "Prevention after cleaning",
        paragraphs: [
          "Keep silicone dry, wash bath mats weekly, and schedule regular home cleaning services KL so bathrooms don’t go months without a thorough scrub.",
          "Hauzmaid helpers can include bathroom-focused hours in your booking — ask on WhatsApp when you quote.",
        ],
      },
    ],
  },
  {
    slug: "why-professional-cleaning-saves-time",
    title: "Why Professional Cleaning Saves You Time in Busy KL Life",
    excerpt:
      "Between traffic and long office hours, outsourcing house cleaning Klang Valley is often the smartest time trade you can make.",
    category: "Tips & Guides",
    readingTime: 2,
    date: "2026-06-22",
    metaDescription:
      "Why professional cleaning services Malaysia save time for busy KL families. Transparent hourly rates from Hauzmaid.",
    coverImage: tipCover("why-professional-cleaning-saves-time"),
    accentFrom: "#0b1118",
    accentTo: "#4a82cb",
    sections: [
      {
        heading: "The real cost of DIY weekends",
        paragraphs: [
          "A deep Saturday clean can eat 4–6 hours — time you could spend with family or resting after a long KL commute. Professional cleaners finish the heavy work while you handle errands or simply relax.",
          "Hourly maid service also scales: book 2 hours for a refresh, or 4 hours with two helpers when guests are coming.",
        ],
      },
      {
        heading: "Transparent pricing builds trust",
        paragraphs: [
          "Hauzmaid keeps rates clear: from RM80 for 2 hours, with RM35/hour per maid when you book 3 hours or more. No deposit, no transport fee, pay by transfer when helpers arrive.",
          "That predictability means you plan your weekend without surprise charges — a key difference among professional cleaning services Malaysia.",
        ],
      },
    ],
  },
  {
    slug: "kitchen-cleaning-tips-busy-families",
    title: "Kitchen Cleaning Tips for Busy Families in KL",
    excerpt:
      "Quick kitchen routines that keep grease and crumbs under control between full house cleaning visits.",
    category: "Home Cleaning",
    readingTime: 3,
    date: "2026-06-26",
    metaDescription:
      "Kitchen cleaning tips for busy families in Kuala Lumpur. Pair daily habits with professional house cleaning KL from Hauzmaid.",
    coverImage: tipCover("kitchen-cleaning-tips-busy-families"),
    accentFrom: "#1a2330",
    accentTo: "#356db8",
    sections: [
      {
        heading: "After every meal (5 minutes)",
        paragraphs: [
          "Wipe the counter and stove splash zone before oil hardens. Load the dishwasher or soak pans immediately — dried curry stains take far longer later.",
          "Sweep or spot-mop high-traffic floor paths near the sink. Crumbs attract ants quickly in tropical homes.",
        ],
      },
      {
        heading: "Weekly kitchen focus",
        paragraphs: [
          "Degrease the hob and wipe the fridge door handles. Empty the bin liner even if it isn’t full — overnight food smells build fast in humidity.",
          "Once a month, pull out the toaster and kettle area and wipe behind appliances where dust mixes with cooking oil.",
        ],
      },
      {
        heading: "Let pros handle the deep grease",
        paragraphs: [
          "Hood filters and under-sink cabinets are where DIY often stops. Include kitchen-heavy hours when you book Hauzmaid home cleaning services KL.",
          "We serve families across Klang Valley — WhatsApp your preferred day and helper count.",
        ],
      },
    ],
  },
  {
    slug: "cleaning-tips-pet-owners-malaysia",
    title: "Best Cleaning Tips for Pet Owners in Malaysia",
    excerpt:
      "Fur, litter, and muddy paws are normal. Here’s how pet owners in KL keep homes fresh between professional cleans.",
    category: "Tips & Guides",
    readingTime: 3,
    date: "2026-07-01",
    metaDescription:
      "Cleaning tips for pet owners in Malaysia. Keep fur and odours under control with habits plus house cleaning Klang Valley support.",
    coverImage: tipCover("cleaning-tips-pet-owners-malaysia"),
    accentFrom: "#121923",
    accentTo: "#4a82cb",
    sections: [
      {
        heading: "Contain the mess zones",
        paragraphs: [
          "Assign feeding and litter areas with washable mats. Vacuum those zones more often than the rest of the house so fur doesn’t migrate to sofas and beds.",
          "Wipe paws after rainy walks — common in Klang Valley — before pets cross living-room floors.",
        ],
      },
      {
        heading: "Odour without harsh overload",
        paragraphs: [
          "Wash pet bedding weekly and ventilate rooms daily. Spot-clean accidents promptly; humidity makes smells linger if liquids soak into grout or rugs.",
          "Avoid overusing strong fragrances that can bother pets — freshness from actual cleaning beats masking sprays.",
        ],
      },
      {
        heading: "Book pet-friendly help",
        paragraphs: [
          "Tell Hauzmaid you have pets when you WhatsApp so helpers know what to expect. Extra vacuum time often helps more than an extra chemical spray.",
          "Hourly bookings from RM80 make it easy to add a mid-week refresh when shedding season hits.",
        ],
      },
    ],
  },
  {
    slug: "post-renovation-cleaning-guide-kl",
    title: "Post-Renovation Cleaning Guide for KL Homes",
    excerpt:
      "Dust from renovation settles everywhere. A clear post renovation cleaning plan so your home is livable again.",
    category: "Deep Cleaning",
    readingTime: 3,
    date: "2026-07-05",
    metaDescription:
      "Post renovation cleaning guide for KL homes. Professional post renovation cleaning Kuala Lumpur & Klang Valley by Hauzmaid.",
    coverImage: tipCover("post-renovation-cleaning-guide-kl"),
    accentFrom: "#0b1118",
    accentTo: "#2f6bb8",
    sections: [
      {
        heading: "Why renovation dust is different",
        paragraphs: [
          "Cutting tiles, sanding, and packing debris leave fine dust that embeds in sockets, AC returns, and cupboard tracks. A normal weekly clean won’t remove it.",
          "Wait until heavy construction work finishes and large debris is cleared before the final clean — otherwise you’ll clean twice.",
        ],
      },
      {
        heading: "What a proper post-reno clean covers",
        paragraphs: [
          "Floors (often multiple passes), window frames, skirting, kitchen interiors, bathrooms, and wiping of built-in carpentry. Safety first on ladders and wet floors.",
          "Hauzmaid prices post-renovation cleaning at RM40 per hour per maid — ask for a scope estimate based on unit size.",
        ],
      },
      {
        heading: "Book before move-back day",
        paragraphs: [
          "Schedule cleaners a day before furniture returns so dust isn’t trapped under sofas. Share photos of the site when you WhatsApp for a clearer quote.",
          "We serve renovation handovers across Kuala Lumpur and Klang Valley with no transport fee.",
        ],
      },
    ],
  },
  {
    slug: "weekly-house-cleaning-checklist",
    title: "Weekly House Cleaning Checklist (KL Edition)",
    excerpt:
      "A realistic weekly house cleaning checklist for apartments and landed homes in Kuala Lumpur.",
    category: "Home Cleaning",
    readingTime: 3,
    date: "2026-07-08",
    metaDescription:
      "Weekly house cleaning checklist for KL homes. Use it yourself or book Hauzmaid home cleaning services KL to cover the list.",
    coverImage: tipCover("weekly-house-cleaning-checklist"),
    accentFrom: "#1a2330",
    accentTo: "#4a82cb",
    sections: [
      {
        heading: "The non-negotiables",
        paragraphs: [
          "Floors (vacuum or mop), bathrooms, kitchen counters and sink, and emptying bins. These four keep a Malaysian home feeling fresh week to week.",
          "Add bed linen changes every 1–2 weeks and a wipe of dining tables and remote controls — high-touch items often skipped.",
        ],
      },
      {
        heading: "Rotate deep tasks",
        paragraphs: [
          "Week 1: inside microwave and fridge shelves. Week 2: fans and light switches. Week 3: balcony and windows within reach. Week 4: skirting and behind sofas.",
          "This rotation prevents the “everything is dusty” feeling without demanding a marathon every Sunday.",
        ],
      },
      {
        heading: "Outsource the weekly block",
        paragraphs: [
          "If the checklist never gets finished, book a recurring 2–4 hour visit. Hauzmaid house cleaning Kuala Lumpur teams work to your priority list.",
          "From RM80, no deposit — confirm on WhatsApp and keep your weekends free.",
        ],
      },
    ],
  },
  {
    slug: "office-cleaning-tips-kuala-lumpur",
    title: "Office Cleaning Tips for Small Teams in Kuala Lumpur",
    excerpt:
      "Keep a small KL office hygienic and client-ready with a light daily routine plus scheduled professional cleans.",
    category: "Office Cleaning",
    readingTime: 3,
    date: "2026-07-12",
    metaDescription:
      "Office cleaning tips for Kuala Lumpur small teams. Book professional office cleaning Kuala Lumpur with Hauzmaid.",
    coverImage: tipCover("office-cleaning-tips-kuala-lumpur"),
    accentFrom: "#121923",
    accentTo: "#356db8",
    sections: [
      {
        heading: "Daily desk hygiene",
        paragraphs: [
          "Wipe keyboards, phones, and meeting-table surfaces at day’s end. Shared gadgets spread germs faster than floors in compact offices.",
          "Empty food bins daily — leftover lunch smells intensify overnight in non-central AC spaces.",
        ],
      },
      {
        heading: "Weekly office priorities",
        paragraphs: [
          "Vacuum high-traffic lanes, clean pantry counters, restock washroom supplies, and dust reception furniture clients see first.",
          "Glass doors and entrance mats deserve attention; they set the tone before any pitch starts.",
        ],
      },
      {
        heading: "When to book office cleaning KL",
        paragraphs: [
          "Growing teams often outgrow DIY pantry duty. Hauzmaid provides office cleaning Kuala Lumpur on flexible hourly bookings — evenings available with night-shift rates if needed.",
          "WhatsApp your square footage and preferred days for a clear estimate. No deposit, no transport fee across Klang Valley.",
        ],
      },
    ],
  },
];

export function localizePost(post: BlogPost, lang: Lang): BlogPost {
  if (lang !== "ms") return post;
  const ms = BLOG_MS[post.slug];
  if (!ms) return post;
  return {
    ...post,
    title: ms.title,
    excerpt: ms.excerpt,
    sections: ms.sections,
  };
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const others = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category !== post.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  return BLOG_POSTS.slice(0, limit);
}

export function filterPosts(
  posts: BlogPost[],
  query: string,
  category: BlogCategory | "All",
): BlogPost[] {
  const q = query.trim().toLowerCase();
  return posts.filter((p) => {
    const catOk = category === "All" || p.category === category;
    if (!catOk) return false;
    if (!q) return true;
    const hay = `${p.title} ${p.excerpt} ${p.category} ${p.metaDescription} ${BLOG_MS[p.slug]?.title ?? ""} ${BLOG_MS[p.slug]?.excerpt ?? ""}`.toLowerCase();
    return hay.includes(q);
  });
}
