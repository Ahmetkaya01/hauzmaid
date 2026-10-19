export type Lang = "en" | "ms";

export const LANG_STORAGE_KEY = "hauzmaid-lang";

type ServiceItem = {
  id: string;
  badge: string;
  from: string;
  title: string;
  description: string;
  points: string[];
  quoteOnly?: boolean;
};

type AirconPlan = {
  title: string;
  price: string;
  note: string;
  points: string[];
};

type Reason = { title: string; highlight: string; body: string };
type Step = { title: string; body: string };
type FaqItem = { question: string; answer: string };
type Testimonial = { quote: string; source: string };
type FeaturedArea = { name: string; blurb: string };

export type Dictionary = {
  nav: {
    services: string;
    prices: string;
    about: string;
    whyUs: string;
    areas: string;
    reviews: string;
    tips: string;
    contact: string;
    whatsappUs: string;
    closeMenu: string;
    openMenu: string;
  };
  hero: {
    h1: string;
    sub1: string;
    subStrong: string;
    sub2: string;
    sub3: string;
    trust: string[];
    ctaWhatsApp: string;
    ctaPrices: string;
  };
  services: {
    kicker: string;
    h2: string;
    intro1: string;
    intro2: string;
    items: ServiceItem[];
    seeAircon: string;
    seePrices: string;
    learnMore: string;
    nightTitle: string;
    nightBody1: string;
    nightRate: string;
    nightAsk: string;
  };
  prices: {
    kicker: string;
    h2: string;
    intro: string;
    houseTitle: string;
    rows: { minBooking: string; minOrder: string; minTotal: string; threePlus: string; extension: string };
    twoHours: string;
    perHourMaid: string;
    otherTitle: string;
    postReno: string;
    nightShift: string;
    addonTools: string;
    addonLadder: string;
    perJob: string;
    bullets: string[];
    packagesTitle: string;
    packagesHint: string;
    packageLabels: string[];
    packageDetails: string[];
    selectedInEstimate: string;
    estimateTitle: string;
    packageLoaded: string;
    estimateHint: string;
    helpers: string;
    hoursMin: string;
    jobType: string;
    jobHouse: string;
    jobPostReno: string;
    jobNight: string;
    toolsCheckbox: string;
    ladderCheckbox: string;
    maidHours: string;
    addonsSuffix: string;
    confirmWhatsApp: string;
    estimateNote: string;
    quoteIntro: string;
    quoteTools: string;
    quoteLadder: string;
    quoteEstimate: string;
  };
  about: {
    kicker: string;
    h2: string;
    p1: string;
    p2: string;
    imageAlt: string;
    tasksTitle: string;
    tasksSub: string;
    basicTitle: string;
    basicTasks: string[];
    extraTitle: string;
    extraTasks: string[];
    toolsTitle: string;
    toolsBody1: string;
    toolsBody2: string;
    toolsBody3: string;
    toolsNote: string;
    airconTitle: string;
    airconSub1: string;
    airconSub2: string;
    airconPlans: AirconPlan[];
    whatsappQuote: string;
    planQuoteMessage: string;
    whoTitle: string;
    whoBody1: string;
    whoStrong: string;
    whoBody2: string;
    contactUs: string;
  };
  whyUs: {
    kicker: string;
    h2: string;
    intro: string;
    reasons: Reason[];
    ctaWhatsApp: string;
    ctaMaps: string;
  };
  areas: {
    kicker: string;
    h2: string;
    intro: string;
    featured: FeaturedArea[];
    alsoServing: string;
    notSure1: string;
    askWhatsApp: string;
    notSure2: string;
  };
  reviews: {
    kicker: string;
    h2: string;
    intro: string;
    autoRotate: string;
    story: string;
    of: string;
    paused: string;
    prev: string;
    next: string;
    showStory: string;
    chooseReview: string;
    carouselLabel: string;
    testimonials: Testimonial[];
    mapsLink: string;
    fbLink: string;
    proofChips: string[];
  };
  booking: {
    kicker: string;
    h2: string;
    intro: string;
    steps: Step[];
    cta: string;
    confirmedNote: string;
  };
  tipsPreview: {
    kicker: string;
    h2: string;
    intro: string;
    browseAll: string;
  };
  faq: {
    kicker: string;
    h2: string;
    items: FaqItem[];
  };
  contact: {
    kicker: string;
    h2: string;
    intro: string;
    whatsappUs: string;
    whatsappNote: string;
    callNote: string;
    googleLink: string;
    googleNote: string;
    mapTitle: string;
    googleReviews: string;
    addressNote: string;
    hoursLabel: string;
    hoursNote: string;
    formTitle: string;
    formSub: string;
    formAria: string;
    name: string;
    phone: string;
    area: string;
    areaPlaceholder: string;
    service: string;
    serviceOptions: string[];
    helpers: string;
    hours: string;
    message: string;
    send: string;
    quoteIntro: string;
    quoteName: string;
    quotePhone: string;
    quoteArea: string;
    quoteService: string;
    quoteHelpers: string;
    quoteHours: string;
    quoteMessage: string;
  };
  tipsPage: {
    kicker: string;
    h1: string;
    intro: string;
    search: string;
    searchAria: string;
    all: string;
    noResults: string;
    readMore: string;
    minRead: string;
    related: string;
    share: string;
    backToTips: string;
    ctaTitle: string;
    ctaBody: string;
    ctaWhatsApp: string;
    categories: Record<string, string>;
  };
  footer: {
    blurb: string;
    highlights: string;
    explore: string;
    contact: string;
    cleaningTips: string;
    allServices: string;
    serviceAreas: string;
    faq: string;
    copyright: string;
    popularAreas: string;
    partTimeMaid: string;
    homeAircon: string;
    jobs: string;
    nap: string;
    hours: string;
  };
  sticky: {
    label: string;
    aria: string;
  };
};

const en: Dictionary = {
  nav: {
    services: "Services",
    prices: "Prices",
    about: "About",
    whyUs: "Why us",
    areas: "Areas",
    reviews: "Reviews",
    tips: "Tips",
    contact: "Contact",
    whatsappUs: "WhatsApp us",
    closeMenu: "Close menu",
    openMenu: "Open menu",
  },
  hero: {
    h1: "House cleaning in Cheras, Subang, KLCC & Klang Valley",
    sub1: "Reliable maid & cleaning in KL — ",
    subStrong: "no deposit, no transport fee",
    sub2: ". From ",
    sub3: "/hr per maid (min 3 hours).",
    trust: ["Cheras · Subang · KLCC · Puchong", "Customers only", "No deposit", "Pay on arrival"],
    ctaWhatsApp: "WhatsApp us",
    ctaPrices: "See prices",
  },
  services: {
    kicker: "Services",
    h2: "What we clean for you in Klang Valley",
    intro1: "Pick a service below — then WhatsApp us with your area, helpers, and hours. House cleaning starts from ",
    intro2: " (1 helper · 2 hours).",
    items: [
      {
        id: "house-office",
        badge: "Homes & offices",
        from: "From RM80",
        title: "House & office cleaning",
        description:
          "Reliable residential and office cleaning across Klang Valley — one-time, weekly, or monthly.",
        points: ["Home or office", "One-time / weekly / monthly", "Min 2 hours"],
      },
      {
        id: "move",
        badge: "Moving day",
        from: "From RM80",
        title: "Move-in / move-out cleaning",
        description:
          "Deep clean before you move in or after you move out. Ideal for apartments and landed homes.",
        points: ["Empty or furnished units", "Apartments & landed", "Deep clean ready"],
      },
      {
        id: "post-reno",
        badge: "After works",
        from: "RM40 / hr / maid",
        title: "Post-renovation cleaning",
        description:
          "Dust, debris, and construction residue cleared so your space is ready to live in.",
        points: ["Dust & debris", "Construction residue", "Ready to move in"],
      },
      {
        id: "aircon",
        badge: "Cooling units",
        from: "From RM70",
        title: "Aircon service",
        description:
          "Non-chemical cleaning from RM70. Overhaul for wall-mounted (from RM150) and cassette (RM330). Free gas top-up up to 20 PSI + 2-week warranty.",
        points: [
          "Non-chemical from RM70",
          "Overhaul from RM150",
          "Free gas top-up (up to 20 PSI)",
        ],
        quoteOnly: true,
      },
    ],
    seeAircon: "See aircon prices →",
    seePrices: "See prices & packages →",
    learnMore: "Service details →",
    nightTitle: "Night shift (6PM–12AM)",
    nightBody1: "Evening cleaning available at ",
    nightRate: "RM60 / hour / maid",
    nightAsk: "Ask about night shift →",
  },
  prices: {
    kicker: "Prices",
    h2: "Clear hourly rates — from RM80",
    intro:
      "Minimum order is 1 helper × 2 hours at RM40/hr → RM80. When total maid-hours is 3 or more (e.g. 1×3h, or 2 helpers × 2 hours), the rate is RM35/hr per maid — so 2×2h = RM140.",
    houseTitle: "House / office cleaning",
    rows: {
      minBooking: "Minimum booking",
      minOrder: "Min order (1 helper × 2 hrs)",
      minTotal: "Minimum order total",
      threePlus: "3+ maid-hours total",
      extension: "Extension (after booked time)",
    },
    twoHours: "2 hours",
    perHourMaid: "/ hour / maid",
    otherTitle: "Other rates & add-ons",
    postReno: "Post-renovation",
    nightShift: "Night shift (6PM–12AM)",
    addonTools: "Tools & chemicals",
    addonLadder: "4 ft ladder",
    perJob: "job",
    bullets: [
      "· No transport fee",
      "· No deposit",
      "· Pay by bank transfer when helpers arrive",
      "· Weekly plan: 1 helper × 3 hours ≈ RM105 per visit (four visits ≈ RM420)",
      "· Aircon service — non-chemical from RM70; overhaul from RM150",
      "· Extra tasks available: ironing, folding clothes, fridge, ceiling fan, outdoor",
    ],
    packagesTitle: "Example packages",
    packagesHint: "Tap a package to load it into Quick estimate.",
    packageLabels: [
      "1 helper · 2 hours",
      "1 helper · 4 hours",
      "2 helpers · 2 hours",
      "2 helpers · 4 hours",
    ],
    packageDetails: [
      "Minimum order",
      "4 hrs × RM35 (3hrs+ rate)",
      "4 maid-hours × RM35",
      "2 × 4 × RM35",
    ],
    selectedInEstimate: "Selected in estimate ↓",
    estimateTitle: "Quick estimate",
    packageLoaded: "Package loaded:",
    estimateHint: "Helpers × hours with our rate rules. Final quote may vary by scope.",
    helpers: "Helpers",
    hoursMin: "Hours (min 2)",
    jobType: "Job type",
    jobHouse: "House / office",
    jobPostReno: "Post-renovation",
    jobNight: "Night shift",
    toolsCheckbox: "Tools & chemicals (+RM30)",
    ladderCheckbox: "4 ft ladder (+RM40)",
    maidHours: "maid-hours",
    addonsSuffix: "add-ons",
    confirmWhatsApp: "Confirm on WhatsApp",
    estimateNote: "Estimates are a guide — we confirm the final quote on WhatsApp before booking.",
    quoteIntro: "Hi Hauzmaid, I'd like a quote:",
    quoteTools: "tools",
    quoteLadder: "ladder",
    quoteEstimate: "Estimate",
  },
  about: {
    kicker: "About Hauzmaid",
    h2: "Making homes & offices shine across Klang Valley",
    p1: "At Hauzmaid, our goal is to make your home and office shine. We match your request with reliable house cleaning services in KL — on time, with clear pricing and 100% customer focus.",
    p2: "From basic home cleans to ironing, folding clothes, fridge & fan cleaning, post-renovation, and aircon service — tell us what you need when you book.",
    imageAlt: "Hauzmaid cleaner in branded blue uniform",
    tasksTitle: "Tasks we cover",
    tasksSub:
      "Basic cleaning covers common areas (kitchen, bedroom, bathroom, living hall). Extra tasks — please mention when booking.",
    basicTitle: "1 · Basic cleaning",
    basicTasks: [
      "Tidying up your spaces",
      "Cleaning floors (sweeping & mopping)",
      "Wiping kitchen & bathroom surfaces",
      "Taking out the trash",
      "General dusting",
    ],
    extraTitle: "2 · Additional tasks (notify when booking)",
    extraTasks: [
      "Clothes ironing",
      "Folding clothes",
      "Inside fridge cleaning",
      "Ceiling fan cleaning",
      "Outdoor cleaning (car porch, drain, etc.)",
    ],
    toolsTitle: "Cleaning tools add-on",
    toolsBody1: "Tools & chemicals ",
    toolsBody2:
      " — mop, sweeper vacuum, cloths, pails & normal chemicals (1 set per pair of helpers). 4 ft ladder ",
    toolsBody3: ".",
    toolsNote: "Prices & tasks depend on area condition — photos may be needed for a final quote.",
    airconTitle: "Aircon service details",
    airconSub1: "Non-chemical cleaning from ",
    airconSub2: ". All packages include free gas top-up (up to 20 PSI) and a 2-week workmanship warranty.",
    airconPlans: [
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
    ],
    whatsappQuote: "WhatsApp quote",
    planQuoteMessage: "Hi Hauzmaid, I'd like a quote for {plan}.",
    whoTitle: "Who are we?",
    whoBody1: "We are a Malaysia-based cleaning solutions platform, boasting over ",
    whoStrong: "2,000 satisfied customers",
    whoBody2:
      ". Every day, we strive to expand our house cleaning services in Kuala Lumpur, while maintaining the quality that our existing clientele has come to expect. Stay connected and follow us on social media — discover our services, handy cleaning advice, and tips for a healthier home.",
    contactUs: "Contact us",
  },
  whyUs: {
    kicker: "Why Hauzmaid",
    h2: "Four reasons customers choose us",
    intro: "Local cleaning in Klang Valley — honest pricing, no deposit, and booking that starts on WhatsApp.",
    reasons: [
      {
        title: "No deposit",
        highlight: "RM0 upfront",
        body: "Book free. You only pay by bank transfer when helpers arrive at your door.",
      },
      {
        title: "No transport fee",
        highlight: "Klang Valley wide",
        body: "No travel surcharge — same clear rates from KL to Shah Alam, PJ, Cheras and more.",
      },
      {
        title: "Pay on arrival",
        highlight: "Bank transfer",
        body: "See the helpers first, then transfer. Simple, transparent, no surprises.",
      },
      {
        title: "Fast local team",
        highlight: "Google verified",
        body: "Quick WhatsApp replies, a verified Google Business Profile, and cleaners who know KL.",
      },
    ],
    ctaWhatsApp: "WhatsApp to book",
    ctaMaps: "See us on Google Maps →",
  },
  areas: {
    kicker: "Service areas",
    h2: "Cleaning in Cheras, Subang, KLCC & across Klang Valley",
    intro:
      "Looking for a maid service near you? Most Hauzmaid bookings are in Cheras, Subang Jaya (USJ/SS), KLCC / Bukit Bintang, Puchong, and Bangsar South — plus daily and weekly cleans across the rest of Klang Valley, with no transport fee.",
    featured: [
      { name: "Cheras", blurb: "Our busiest area — weekly cleaning, condos, and post-renovation homes." },
      { name: "Subang Jaya", blurb: "Hourly maids across USJ, SS12–SS19, Sunway, and Putra Heights." },
      { name: "KLCC / Bukit Bintang", blurb: "City-centre condos and offices — visitor pass friendly." },
      { name: "Puchong", blurb: "Weekly home cleaning around Bandar Puteri, Kinrara, and Puchong Jaya." },
      { name: "Bangsar South / Mid Valley", blurb: "Condo living and evening office cleans next to Mid Valley." },
      { name: "Setapak", blurb: "Hourly cleaning for apartments and families in Setapak & nearby Wangsa Maju." },
      { name: "Shah Alam", blurb: "One-time and weekly cleans for larger landed homes." },
      { name: "Bangsar", blurb: "Landed homes in Bangsar Baru and Bukit Bandaraya." },
      { name: "Old Klang Road / Kuchai Lama", blurb: "Terrace houses and condos along OKR, Kuchai Lama, OUG, and Taman Desa." },
    ],
    alsoServing: "Also serving nearby areas",
    notSure1: "Not sure if we cover your neighbourhood? ",
    askWhatsApp: "Ask us on WhatsApp",
    notSure2: " — we usually do.",
  },
  reviews: {
    kicker: "Reviews",
    h2: "What customers say",
    intro: "Real feedback and trust highlights from people who booked Hauzmaid across Klang Valley.",
    autoRotate: "Auto-rotates every 2s · tap pause",
    story: "Story",
    of: "of",
    paused: " · paused",
    prev: "Previous review",
    next: "Next review",
    showStory: "Show story",
    chooseReview: "Choose a review",
    carouselLabel: "Customer reviews",
    testimonials: [
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
    ],
    mapsLink: "Find us on Google Maps →",
    fbLink: "Read more Facebook reviews →",
    proofChips: [
      "Google Business Profile verified",
      "2,000+ bookings in Klang Valley",
      "Pay on arrival · no deposit",
    ],
  },
  booking: {
    kicker: "How booking works",
    h2: "From message to spotless in four simple steps",
    intro: "No deposit, no paperwork — one WhatsApp message starts your booking.",
    steps: [
      { title: "WhatsApp us", body: "Share your area, date, helpers, and hours — or use our quote form." },
      { title: "Confirm booking", body: "We confirm availability, rate rules, and any add-ons within minutes." },
      { title: "Helpers arrive", body: "Your cleaners arrive on time with everything agreed upfront." },
      { title: "Pay by transfer", body: "No deposit. Pay by bank transfer when helpers arrive." },
    ],
    cta: "Start your booking on WhatsApp",
    confirmedNote: "Usually confirmed within minutes.",
  },
  tipsPreview: {
    kicker: "Cleaning tips & home care",
    h2: "Guides for cleaner homes in Klang Valley",
    intro:
      "Short, practical articles on house cleaning KL, move-in/out prep, and everyday home care — from the Hauzmaid team.",
    browseAll: "Browse all tips →",
  },
  faq: {
    kicker: "FAQ",
    h2: "Common questions about hourly maid service in KL",
    items: [
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
        answer: "Night shift cleaning (6PM–12AM) is RM60 per hour per maid.",
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
      {
        question: "Are you hiring? I am looking for a maid job.",
        answer:
          "No. We already have enough helpers. This website, ads, and WhatsApp are only for new customers booking a clean. We are not hiring — please do not apply.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    h2: "Book a maid cleaning service today",
    intro:
      "WhatsApp is for new customers booking a clean — not job applications. Tell us your area, helpers, and hours.",
    whatsappUs: "WhatsApp us",
    whatsappNote: "Quotes & booking only — we are not hiring",
    callNote: "WhatsApp only — save our number",
    googleLink: "Open Google Maps",
    googleNote: "Hauzmaid Cleaning Services — verified on Google",
    mapTitle: "Hauzmaid Cleaning Services on Google Maps",
    googleReviews: "Read our Google reviews →",
    addressNote: "Kuala Lumpur, Malaysia — we come to your home across Klang Valley.",
    hoursLabel: "Mon–Sun 09:00–18:00",
    hoursNote: "WhatsApp is also open at night.",
    formTitle: "Quick quote",
    formSub: "Opens WhatsApp with your details — no account signup required.",
    formAria: "Quote request form",
    name: "Name",
    phone: "Phone",
    area: "Area",
    areaPlaceholder: "e.g. Cheras, USJ, KLCC",
    service: "Service",
    serviceOptions: [
      "House / office cleaning",
      "Move-in / move-out",
      "Post-renovation",
      "Aircon service (quote)",
      "Night shift",
    ],
    helpers: "Helpers",
    hours: "Hours",
    message: "Message",
    send: "Send via WhatsApp",
    quoteIntro: "Hi Hauzmaid, I'd like a quote.",
    quoteName: "Name",
    quotePhone: "Phone",
    quoteArea: "Area",
    quoteService: "Service",
    quoteHelpers: "Helpers",
    quoteHours: "Hours",
    quoteMessage: "Message",
  },
  tipsPage: {
    kicker: "Blog",
    h1: "Cleaning Tips & Home Care",
    intro:
      "Expert-style guides for house cleaning Kuala Lumpur, Klang Valley homes, offices, and deep-clean projects — written to help you decide when DIY is enough and when to book the pros.",
    search: "Search cleaning tips…",
    searchAria: "Search articles",
    all: "All",
    noResults: "No articles match your search. Try another keyword or category.",
    readMore: "Read more →",
    minRead: "min read",
    related: "Related articles",
    share: "Share:",
    backToTips: "Cleaning tips",
    ctaTitle: "Ready for a spotless home?",
    ctaBody:
      "Book professional house cleaning in Kuala Lumpur & Klang Valley — from RM80, no deposit, no transport fee.",
    ctaWhatsApp: "Book on WhatsApp",
    categories: {
      "Home Cleaning": "Home Cleaning",
      "Office Cleaning": "Office Cleaning",
      "Deep Cleaning": "Deep Cleaning",
      "Tips & Guides": "Tips & Guides",
    },
  },
  footer: {
    blurb:
      "Hauzmaid Cleaning Services — professional house cleaning, move-in/out, post-renovation, and aircon service across Klang Valley / Kuala Lumpur, Malaysia.",
    highlights: "From RM80 · No deposit · No transport fee",
    explore: "Explore",
    contact: "Contact",
    cleaningTips: "Cleaning tips",
    allServices: "All services",
    serviceAreas: "Service areas",
    faq: "FAQ",
    copyright: "© 2022 Hauzmaid. Serving Klang Valley, Malaysia.",
    popularAreas: "Popular areas",
    partTimeMaid: "Part-time maid KL",
    homeAircon: "Home & aircon cleaning",
    jobs: "We are not hiring",
    nap: "Kuala Lumpur, Malaysia · Service area: Klang Valley (we come to your home)",
    hours: "Mon–Sun 09:00–18:00 · WhatsApp also open at night",
  },
  sticky: {
    label: "WhatsApp for a quote",
    aria: "WhatsApp Hauzmaid for a cleaning quote",
  },
};

const ms: Dictionary = {
  nav: {
    services: "Perkhidmatan",
    prices: "Harga",
    about: "Tentang Kami",
    whyUs: "Kenapa Kami",
    areas: "Kawasan",
    reviews: "Ulasan",
    tips: "Tip",
    contact: "Hubungi",
    whatsappUs: "WhatsApp kami",
    closeMenu: "Tutup menu",
    openMenu: "Buka menu",
  },
  hero: {
    h1: "Pembersihan rumah di Cheras, Subang, KLCC & Lembah Klang",
    sub1: "Khidmat pembantu & pembersihan yang boleh dipercayai di KL — ",
    subStrong: "tiada deposit, tiada caj pengangkutan",
    sub2: ". Dari ",
    sub3: "/jam per pembantu (min 3 jam).",
    trust: ["Cheras · Subang · KLCC · Puchong", "Pelanggan sahaja", "Tiada deposit", "Bayar semasa ketibaan"],
    ctaWhatsApp: "WhatsApp kami",
    ctaPrices: "Lihat harga",
  },
  services: {
    kicker: "Perkhidmatan",
    h2: "Apa yang kami bersihkan untuk anda di Lembah Klang",
    intro1:
      "Pilih perkhidmatan di bawah — kemudian WhatsApp kami dengan kawasan, bilangan pembantu dan jam anda. Pembersihan rumah bermula dari ",
    intro2: " (1 pembantu · 2 jam).",
    items: [
      {
        id: "house-office",
        badge: "Rumah & pejabat",
        from: "Dari RM80",
        title: "Pembersihan rumah & pejabat",
        description:
          "Pembersihan kediaman dan pejabat yang boleh dipercayai di seluruh Lembah Klang — sekali, mingguan, atau bulanan.",
        points: ["Rumah atau pejabat", "Sekali / mingguan / bulanan", "Minimum 2 jam"],
      },
      {
        id: "move",
        badge: "Hari pindah",
        from: "Dari RM80",
        title: "Pembersihan pindah masuk / keluar",
        description:
          "Pembersihan menyeluruh sebelum anda pindah masuk atau selepas pindah keluar. Sesuai untuk pangsapuri dan rumah bertanah.",
        points: ["Unit kosong atau berperabot", "Pangsapuri & rumah bertanah", "Sedia untuk pembersihan menyeluruh"],
      },
      {
        id: "post-reno",
        badge: "Selepas kerja ubah suai",
        from: "RM40 / jam / pembantu",
        title: "Pembersihan selepas ubah suai",
        description:
          "Habuk, sisa dan kotoran pembinaan dibersihkan supaya ruang anda sedia untuk didiami.",
        points: ["Habuk & sisa", "Kotoran pembinaan", "Sedia untuk diduduki"],
      },
      {
        id: "aircon",
        badge: "Unit penyaman udara",
        from: "Dari RM70",
        title: "Servis aircond",
        description:
          "Cucian tanpa bahan kimia dari RM70. Overhaul untuk jenis dinding (dari RM150) dan kaset (RM330). Top-up gas percuma sehingga 20 PSI + jaminan 2 minggu.",
        points: [
          "Tanpa bahan kimia dari RM70",
          "Overhaul dari RM150",
          "Top-up gas percuma (sehingga 20 PSI)",
        ],
        quoteOnly: true,
      },
    ],
    seeAircon: "Lihat harga aircond →",
    seePrices: "Lihat harga & pakej →",
    learnMore: "Butiran perkhidmatan →",
    nightTitle: "Syif malam (6 petang–12 malam)",
    nightBody1: "Pembersihan waktu malam tersedia pada ",
    nightRate: "RM60 / jam / pembantu",
    nightAsk: "Tanya tentang syif malam →",
  },
  prices: {
    kicker: "Harga",
    h2: "Kadar mengikut jam yang jelas — dari RM80",
    intro:
      "Pesanan minimum ialah 1 pembantu × 2 jam pada RM40/jam → RM80. Apabila jumlah jam pembantu 3 atau lebih (cth. 1×3j, atau 2 pembantu × 2 jam), kadarnya ialah RM35/jam bagi setiap pembantu — jadi 2×2j = RM140.",
    houseTitle: "Pembersihan rumah / pejabat",
    rows: {
      minBooking: "Tempahan minimum",
      minOrder: "Pesanan min (1 pembantu × 2 jam)",
      minTotal: "Jumlah pesanan minimum",
      threePlus: "Jumlah 3+ jam pembantu",
      extension: "Lanjutan (selepas masa ditempah)",
    },
    twoHours: "2 jam",
    perHourMaid: "/ jam / pembantu",
    otherTitle: "Kadar lain & tambahan",
    postReno: "Selepas ubah suai",
    nightShift: "Syif malam (6 petang–12 malam)",
    addonTools: "Peralatan & bahan kimia",
    addonLadder: "Tangga 4 kaki",
    perJob: "kerja",
    bullets: [
      "· Tiada caj pengangkutan",
      "· Tiada deposit",
      "· Bayar melalui pindahan bank apabila pembantu tiba",
      "· Pelan mingguan: 1 pembantu × 3 jam ≈ RM105 setiap lawatan (empat lawatan ≈ RM420)",
      "· Servis aircond — tanpa bahan kimia dari RM70; overhaul dari RM150",
      "· Tugas tambahan tersedia: menggosok, melipat pakaian, peti sejuk, kipas siling, kawasan luar",
    ],
    packagesTitle: "Contoh pakej",
    packagesHint: "Tekan pakej untuk memasukkannya ke Anggaran pantas.",
    packageLabels: [
      "1 pembantu · 2 jam",
      "1 pembantu · 4 jam",
      "2 pembantu · 2 jam",
      "2 pembantu · 4 jam",
    ],
    packageDetails: [
      "Pesanan minimum",
      "4 jam × RM35 (kadar 3j+)",
      "4 jam pembantu × RM35",
      "2 × 4 × RM35",
    ],
    selectedInEstimate: "Dipilih dalam anggaran ↓",
    estimateTitle: "Anggaran pantas",
    packageLoaded: "Pakej dimuatkan:",
    estimateHint:
      "Pembantu × jam mengikut peraturan kadar kami. Sebut harga akhir mungkin berbeza mengikut skop.",
    helpers: "Pembantu",
    hoursMin: "Jam (min 2)",
    jobType: "Jenis kerja",
    jobHouse: "Rumah / pejabat",
    jobPostReno: "Selepas ubah suai",
    jobNight: "Syif malam",
    toolsCheckbox: "Peralatan & bahan kimia (+RM30)",
    ladderCheckbox: "Tangga 4 kaki (+RM40)",
    maidHours: "jam pembantu",
    addonsSuffix: "tambahan",
    confirmWhatsApp: "Sahkan di WhatsApp",
    estimateNote:
      "Anggaran hanyalah panduan — kami sahkan sebut harga akhir di WhatsApp sebelum tempahan.",
    quoteIntro: "Hai Hauzmaid, saya ingin sebut harga:",
    quoteTools: "peralatan",
    quoteLadder: "tangga",
    quoteEstimate: "Anggaran",
  },
  about: {
    kicker: "Tentang Hauzmaid",
    h2: "Menjadikan rumah & pejabat berseri di seluruh Lembah Klang",
    p1: "Di Hauzmaid, matlamat kami adalah menjadikan rumah dan pejabat anda berseri. Kami memadankan permintaan anda dengan perkhidmatan pembersihan rumah yang boleh dipercayai di KL — tepat pada masa, dengan harga yang jelas dan fokus 100% kepada pelanggan.",
    p2: "Daripada pembersihan asas rumah hingga menggosok baju, melipat pakaian, cucian peti sejuk & kipas, selepas ubah suai, dan servis aircond — beritahu kami keperluan anda semasa menempah.",
    imageAlt: "Pencuci Hauzmaid dalam uniform biru berjenama",
    tasksTitle: "Tugas yang kami lakukan",
    tasksSub:
      "Pembersihan asas merangkumi ruang utama (dapur, bilik tidur, bilik air, ruang tamu). Tugas tambahan — sila nyatakan semasa menempah.",
    basicTitle: "1 · Pembersihan asas",
    basicTasks: [
      "Mengemas ruang anda",
      "Mencuci lantai (menyapu & mengemop)",
      "Mengelap permukaan dapur & bilik air",
      "Membuang sampah",
      "Mengelap habuk secara am",
    ],
    extraTitle: "2 · Tugas tambahan (maklumkan semasa menempah)",
    extraTasks: [
      "Menggosok baju",
      "Melipat pakaian",
      "Cucian dalam peti sejuk",
      "Cucian kipas siling",
      "Pembersihan luar (car porch, longkang, dll.)",
    ],
    toolsTitle: "Tambahan peralatan pembersihan",
    toolsBody1: "Peralatan & bahan kimia ",
    toolsBody2:
      " — mop, penyapu vakum, kain, baldi & bahan kimia biasa (1 set bagi setiap pasangan pembantu). Tangga 4 kaki ",
    toolsBody3: ".",
    toolsNote:
      "Harga & tugas bergantung pada keadaan kawasan — gambar mungkin diperlukan untuk sebut harga akhir.",
    airconTitle: "Butiran servis aircond",
    airconSub1: "Cucian tanpa bahan kimia dari ",
    airconSub2:
      ". Semua pakej termasuk top-up gas percuma (sehingga 20 PSI) dan jaminan kerja 2 minggu.",
    airconPlans: [
      {
        title: "Cucian tanpa bahan kimia",
        price: "RM70",
        note: "Semua jenis aircond",
        points: [
          "Tanggal, cuci & servis penapis",
          "Semak paras gas",
          "Top-up gas percuma sehingga 20 PSI",
          "Jaminan kerja 2 minggu",
        ],
      },
      {
        title: "Overhaul — jenis dinding",
        price: "Dari RM150",
        note: "Bawah 1.5 HP · RM190 untuk 2 HP",
        points: [
          "Tanggal penuh unit dalaman & cucian kimia",
          "Semakan bearing kipas, papan litar & dulang saliran",
          "Rawatan gegelung & penapis untuk bau",
          "Bilasan saliran + top-up gas percuma (sehingga 20 PSI)",
        ],
      },
      {
        title: "Overhaul — kaset",
        price: "RM330",
        note: "Bawah 3 HP",
        points: [
          "Overhaul kimia untuk unit kaset",
          "Cucian bahagian yang sama teliti seperti jenis dinding",
          "Top-up gas percuma sehingga 20 PSI",
          "Jaminan kerja 2 minggu",
        ],
      },
    ],
    whatsappQuote: "Sebut harga WhatsApp",
    planQuoteMessage: "Hai Hauzmaid, saya ingin sebut harga untuk {plan}.",
    whoTitle: "Siapa kami?",
    whoBody1: "Kami ialah platform penyelesaian pembersihan berpangkalan di Malaysia dengan lebih ",
    whoStrong: "2,000 pelanggan berpuas hati",
    whoBody2:
      ". Setiap hari kami berusaha mengembangkan perkhidmatan pembersihan rumah kami di Kuala Lumpur sambil mengekalkan kualiti yang diharapkan oleh pelanggan sedia ada. Kekal berhubung dan ikuti kami di media sosial — terokai perkhidmatan kami, panduan pembersihan berguna, dan tip untuk rumah yang lebih sihat.",
    contactUs: "Hubungi kami",
  },
  whyUs: {
    kicker: "Kenapa Hauzmaid",
    h2: "Empat sebab pelanggan memilih kami",
    intro:
      "Pembersihan tempatan di Lembah Klang — harga jujur, tiada deposit, dan tempahan bermula di WhatsApp.",
    reasons: [
      {
        title: "Tiada deposit",
        highlight: "RM0 pendahuluan",
        body: "Tempah secara percuma. Anda hanya membayar melalui pindahan bank apabila pembantu tiba di rumah anda.",
      },
      {
        title: "Tiada caj pengangkutan",
        highlight: "Seluruh Lembah Klang",
        body: "Tiada caj perjalanan — kadar sama yang jelas dari KL ke Shah Alam, PJ, Cheras dan banyak lagi.",
      },
      {
        title: "Bayar semasa ketibaan",
        highlight: "Pindahan bank",
        body: "Lihat pembantu dahulu, kemudian buat pindahan. Mudah, telus, tiada kejutan.",
      },
      {
        title: "Pasukan tempatan yang pantas",
        highlight: "Disahkan Google",
        body: "Balasan WhatsApp yang pantas, Profil Perniagaan Google yang disahkan, dan pencuci yang mahir selok-belok KL.",
      },
    ],
    ctaWhatsApp: "WhatsApp untuk menempah",
    ctaMaps: "Lihat kami di Google Maps →",
  },
  areas: {
    kicker: "Kawasan perkhidmatan",
    h2: "Pembersihan di Cheras, Subang, KLCC & seluruh Lembah Klang",
    intro:
      "Mencari khidmat pembantu berdekatan anda? Tempahan Hauzmaid paling ramai di Cheras, Subang Jaya (USJ/SS), KLCC / Bukit Bintang, Puchong dan Bangsar South — serta pembersihan harian dan mingguan di seluruh Lembah Klang, tanpa caj pengangkutan.",
    featured: [
      { name: "Cheras", blurb: "Kawasan paling ramai tempahan — pembersihan mingguan, kondo dan selepas ubah suai." },
      { name: "Subang Jaya", blurb: "Pembantu mengikut jam di USJ, SS12–SS19, Sunway dan Putra Heights." },
      { name: "KLCC / Bukit Bintang", blurb: "Kondo dan pejabat pusat bandar — sesuai dengan pas pelawat." },
      { name: "Puchong", blurb: "Pembersihan rumah mingguan di Bandar Puteri, Kinrara dan Puchong Jaya." },
      { name: "Bangsar South / Mid Valley", blurb: "Kondo dan pembersihan pejabat petang bersebelahan Mid Valley." },
      { name: "Setapak", blurb: "Pembersihan mengikut jam untuk pangsapuri dan keluarga di Setapak & Wangsa Maju." },
      { name: "Shah Alam", blurb: "Cucian sekali dan mingguan untuk rumah bertanah yang lebih besar." },
      { name: "Bangsar", blurb: "Rumah bertanah di Bangsar Baru dan Bukit Bandaraya." },
      { name: "Old Klang Road / Kuchai Lama", blurb: "Rumah teres dan kondo di OKR, Kuchai Lama, OUG dan Taman Desa." },
    ],
    alsoServing: "Turut berkhidmat di kawasan berhampiran",
    notSure1: "Tidak pasti sama ada kami meliputi kawasan anda? ",
    askWhatsApp: "Tanya kami di WhatsApp",
    notSure2: " — biasanya kami meliputinya.",
  },
  reviews: {
    kicker: "Ulasan",
    h2: "Apa kata pelanggan",
    intro:
      "Maklum balas sebenar dan sorotan kepercayaan daripada mereka yang menempah Hauzmaid di seluruh Lembah Klang.",
    autoRotate: "Berputar automatik setiap 2s · tekan untuk jeda",
    story: "Kisah",
    of: "daripada",
    paused: " · dijeda",
    prev: "Ulasan sebelumnya",
    next: "Ulasan seterusnya",
    showStory: "Tunjukkan kisah",
    chooseReview: "Pilih ulasan",
    carouselLabel: "Ulasan pelanggan",
    testimonials: [
      {
        quote:
          "Amazing and efficient service. Admin was very fast to respond to my inquiries, pricing is also very reasonable. Cleaners were friendly and helpful, definitely will book their service again! Good job Houzmaid",
        source: "Ulasan pelanggan · Facebook",
      },
      {
        quote:
          "Lebih 2,000 pelanggan berpuas hati telah menempah Hauzmaid di seluruh Lembah Klang — dan terus bertambah.",
        source: "Pencapaian Hauzmaid",
      },
      {
        quote:
          "Profil Perniagaan Google yang disahkan — syarikat pembersihan tempatan KL yang sebenar dan boleh ditemui di Google Maps.",
        source: "Perniagaan disahkan Google",
      },
    ],
    mapsLink: "Cari kami di Google Maps →",
    fbLink: "Baca lagi ulasan Facebook →",
    proofChips: [
      "Profil Perniagaan Google disahkan",
      "2,000+ tempahan di Lembah Klang",
      "Bayar semasa ketibaan · tiada deposit",
    ],
  },
  booking: {
    kicker: "Cara tempahan",
    h2: "Daripada mesej kepada rumah berkilau dalam empat langkah mudah",
    intro: "Tiada deposit, tiada kertas kerja — satu mesej WhatsApp memulakan tempahan anda.",
    steps: [
      {
        title: "WhatsApp kami",
        body: "Kongsi kawasan, tarikh, bilangan pembantu dan jam anda — atau gunakan borang sebut harga kami.",
      },
      {
        title: "Sahkan tempahan",
        body: "Kami mengesahkan ketersediaan, peraturan kadar dan sebarang tambahan dalam beberapa minit.",
      },
      {
        title: "Pembantu tiba",
        body: "Pencuci anda tiba tepat pada masa dengan semuanya dipersetujui lebih awal.",
      },
      {
        title: "Bayar melalui pindahan",
        body: "Tiada deposit. Bayar melalui pindahan bank apabila pembantu tiba.",
      },
    ],
    cta: "Mulakan tempahan anda di WhatsApp",
    confirmedNote: "Biasanya disahkan dalam beberapa minit.",
  },
  tipsPreview: {
    kicker: "Tip pembersihan & penjagaan rumah",
    h2: "Panduan untuk rumah yang lebih bersih di Lembah Klang",
    intro:
      "Artikel ringkas dan praktikal tentang pembersihan rumah KL, persediaan pindah masuk/keluar dan penjagaan rumah harian — daripada pasukan Hauzmaid.",
    browseAll: "Lihat semua tip →",
  },
  faq: {
    kicker: "Soalan Lazim",
    h2: "Soalan lazim tentang khidmat pembantu mengikut jam di KL",
    items: [
      {
        question: "Apakah tempahan minimum?",
        answer:
          "Tempahan minimum ialah 2 jam setiap sesi. Pada kadar RM40 sejam bagi setiap pembantu, pesanan minimum ialah RM80 (1 pembantu × 2 jam).",
      },
      {
        question: "Kenapa RM40/jam untuk 2 jam tetapi RM35 untuk tempahan lebih besar?",
        answer:
          "Kadar RM40/jam hanya terpakai untuk pesanan minimum: 1 pembantu × 2 jam (= 2 jam pembantu → RM80). Apabila jumlah jam pembantu 3 atau lebih — contohnya 1 pembantu × 3 jam, atau 2 pembantu × 2 jam (= 4 jam pembantu) — kadarnya ialah RM35/jam bagi setiap pembantu. Jadi 2 pembantu × 2 jam = RM140. Lanjutan selepas masa tempahan ialah RM40/jam bagi setiap pembantu.",
      },
      {
        question: "Perlukah saya membayar deposit?",
        answer:
          "Tidak. Hauzmaid tidak memerlukan deposit. Anda membayar melalui pindahan bank apabila pembantu tiba.",
      },
      {
        question: "Adakah terdapat caj pengangkutan?",
        answer:
          "Tidak. Tiada caj pengangkutan untuk tempahan di seluruh kawasan perkhidmatan Lembah Klang kami.",
      },
      {
        question: "Adakah peralatan pembersihan disediakan?",
        answer:
          "Peralatan dan bahan kimia boleh disediakan sebagai tambahan dengan harga RM30 setiap kerja. Tangga 4 kaki tersedia pada harga RM40 setiap kerja.",
      },
      {
        question: "Berapakah kadar syif malam?",
        answer: "Pembersihan syif malam (6 petang–12 malam) ialah RM60 sejam bagi setiap pembantu.",
      },
      {
        question: "Adakah anda menawarkan cucian aircond?",
        answer:
          "Ya. Cucian tanpa bahan kimia ialah RM70 untuk semua jenis. Cucian overhaul bermula dari RM150 (jenis dinding bawah 1.5 HP), RM190 (2 HP), dan RM330 untuk kaset bawah 3 HP. Semuanya termasuk top-up gas percuma sehingga 20 PSI dan jaminan kerja 2 minggu.",
      },
      {
        question: "Bolehkah anda menggosok atau melipat pakaian?",
        answer:
          "Ya — menggosok dan melipat pakaian ialah tugas tambahan. Sila nyatakan semasa menempah supaya kami dapat merancang jam yang sesuai.",
      },
      {
        question: "Bagaimanakah cara menempah?",
        answer:
          "Hantar mesej WhatsApp kepada kami dengan kawasan, tarikh pilihan, bilangan pembantu dan jam. Kami sahkan tempahan, pembantu tiba, dan anda membayar melalui pindahan bank semasa ketibaan.",
      },
      {
        question: "Adakah anda mengambil pekerja? Saya cari kerja pembantu.",
        answer:
          "Tidak. Pasukan pembantu kami sudah cukup. Laman, iklan dan WhatsApp ini hanya untuk pelanggan baru yang nak tempah cucian. Kami tidak mengambil pekerja — jangan mohon.",
      },
    ],
  },
  contact: {
    kicker: "Hubungi",
    h2: "Tempah khidmat pembersihan hari ini",
    intro:
      "WhatsApp hanya untuk pelanggan baru yang nak tempah cucian — bukan permohonan kerja. Beritahu kawasan, bilangan pembantu dan jam.",
    whatsappUs: "WhatsApp kami",
    whatsappNote: "Sebut harga & tempahan sahaja — kami tidak ambil pekerja",
    callNote: "WhatsApp sahaja — simpan nombor kami",
    googleLink: "Buka Google Maps",
    googleNote: "Hauzmaid Cleaning Services — disahkan di Google",
    mapTitle: "Hauzmaid Cleaning Services di Google Maps",
    googleReviews: "Baca ulasan Google kami →",
    addressNote: "Kuala Lumpur, Malaysia — kami datang ke rumah anda di seluruh Lembah Klang.",
    hoursLabel: "Isn–Ahad 09:00–18:00",
    hoursNote: "WhatsApp juga dibuka pada waktu malam.",
    formTitle: "Sebut harga pantas",
    formSub: "Membuka WhatsApp dengan butiran anda — tiada pendaftaran akaun diperlukan.",
    formAria: "Borang permintaan sebut harga",
    name: "Nama",
    phone: "Telefon",
    area: "Kawasan",
    areaPlaceholder: "cth. Cheras, USJ, KLCC",
    service: "Perkhidmatan",
    serviceOptions: [
      "Pembersihan rumah / pejabat",
      "Pindah masuk / keluar",
      "Selepas ubah suai",
      "Servis aircond (sebut harga)",
      "Syif malam",
    ],
    helpers: "Pembantu",
    hours: "Jam",
    message: "Mesej",
    send: "Hantar melalui WhatsApp",
    quoteIntro: "Hai Hauzmaid, saya ingin sebut harga.",
    quoteName: "Nama",
    quotePhone: "Telefon",
    quoteArea: "Kawasan",
    quoteService: "Perkhidmatan",
    quoteHelpers: "Pembantu",
    quoteHours: "Jam",
    quoteMessage: "Mesej",
  },
  tipsPage: {
    kicker: "Blog",
    h1: "Tip Pembersihan & Penjagaan Rumah",
    intro:
      "Panduan praktikal untuk pembersihan rumah di Kuala Lumpur dan Lembah Klang, pejabat, serta projek cucian menyeluruh — supaya anda tahu bila DIY mencukupi dan bila perlu menempah profesional.",
    search: "Cari tip pembersihan…",
    searchAria: "Cari artikel",
    all: "Semua",
    noResults: "Tiada artikel yang sepadan. Cuba kata kunci atau kategori lain.",
    readMore: "Baca lagi →",
    minRead: "minit bacaan",
    related: "Artikel berkaitan",
    share: "Kongsi:",
    backToTips: "Tip pembersihan",
    ctaTitle: "Sedia untuk rumah yang berkilau?",
    ctaBody:
      "Tempah pembersihan rumah profesional di Kuala Lumpur & Lembah Klang — dari RM80, tiada deposit, tiada caj pengangkutan.",
    ctaWhatsApp: "Tempah di WhatsApp",
    categories: {
      "Home Cleaning": "Pembersihan Rumah",
      "Office Cleaning": "Pembersihan Pejabat",
      "Deep Cleaning": "Cucian Menyeluruh",
      "Tips & Guides": "Tip & Panduan",
    },
  },
  footer: {
    blurb:
      "Hauzmaid Cleaning Services — pembersihan rumah profesional, pindah masuk/keluar, selepas ubah suai dan servis aircond di seluruh Lembah Klang / Kuala Lumpur, Malaysia.",
    highlights: "Dari RM80 · Tiada deposit · Tiada caj pengangkutan",
    explore: "Terokai",
    contact: "Hubungi",
    cleaningTips: "Tip pembersihan",
    allServices: "Semua perkhidmatan",
    serviceAreas: "Kawasan servis",
    faq: "Soalan Lazim",
    copyright: "© 2022 Hauzmaid. Berkhidmat di Lembah Klang, Malaysia.",
    popularAreas: "Kawasan popular",
    partTimeMaid: "Pembantu sambilan KL",
    homeAircon: "Cucian rumah & aircond",
    jobs: "Kami tidak ambil pekerja",
    nap: "Kuala Lumpur, Malaysia · Kawasan servis: Lembah Klang (kami datang ke rumah anda)",
    hours: "Isn–Ahad 09:00–18:00 · WhatsApp juga dibuka malam",
  },
  sticky: {
    label: "WhatsApp untuk sebut harga",
    aria: "WhatsApp Hauzmaid untuk sebut harga pembersihan",
  },
};

export const DICTIONARIES: Record<Lang, Dictionary> = { en, ms };
