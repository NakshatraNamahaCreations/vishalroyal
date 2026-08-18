/**
 * Single source of truth for all venue content.
 * Edit this file to change text/details across the whole site.
 */

export const site = {
  name: "Vishal Royal Convention Hall",
  shortName: "Vishal Royal",
  tagline: "Where Every Celebration Becomes a Royal Memory",
  description:
    "A premium air-conditioned convention hall for weddings, receptions, engagements, corporate events and celebrations, with in-house catering, ample parking and a dedicated event team.",
  phone: "+91 80504 01728",
  phoneAlt: "+91 99028 01728",
  landline: "080-4890 5617",
  whatsapp: "918050401728",
  email: "vishalroyalbookings@gmail.com",
  chairman: "Vijayakumar A.",
  address: {
    line1: "#1A, Appaji Arcade",
    line2: "Poornapragna Layout, Uttarahalli",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560061",
  },
  mapEmbed:
    "https://www.google.com/maps?q=Appaji+Arcade,+Poornapragna+Layout,+Uttarahalli,+Bengaluru+560061&output=embed",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
  hours: "Open all days · 9:00 AM – 9:00 PM (Office)",
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.state} ${site.address.pincode}`;

/** Header menu. Pricing is deliberately absent here. */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

/** Footer keeps Pricing reachable even though the header doesn't list it. */
export const footerNav = [...nav, { href: "/pricing", label: "Pricing" }] as const;

/** Every indexable route, including pages kept out of the header menu. */
export const indexableRoutes = [...footerNav.map((n) => n.href)] as const;

export const stats = [
  {
    value: "14 yrs",
    label: "Track Record",
    note: "same family, same kitchen since 2012",
  },
  {
    value: "500+",
    label: "Events Hosted",
    note: "and counting",
  },
  {
    value: "7",
    label: "Event Categories",
    note: "weddings, receptions, engagements, corporate, birthdays, naming, housewarming",
  },
  {
    value: "1200",
    label: "Guest Capacity",
    note: "pillar-free hall across 20,000 sq. ft.",
  },
] as const;

export const highlights = [
  {
    title: "Fully Air-Conditioned Hall",
    body: "20,000 sq. ft., pillar-free, with a grand stage and designer lighting for 1200 guests.",
    icon: "hall",
  },
  {
    title: "In-House Catering",
    body: "Veg and non-veg multi-cuisine menus from our own kitchen, with a tasting before you confirm.",
    icon: "catering",
  },
  {
    title: "Bridal & Guest Rooms",
    body: "A bridal suite plus air-conditioned guest rooms, so the whole family stays on site.",
    icon: "rooms",
  },
  {
    title: "Ample Parking",
    body: "Secure parking for 200+ cars and 300+ two-wheelers, with valet and round-the-clock security.",
    icon: "parking",
  },
  {
    title: "Decor & Stage Design",
    body: "Floral, theme and traditional mandap setups, designed and installed by our own team.",
    icon: "decor",
  },
  {
    title: "Power Backup & Sound",
    body: "100% generator backup, professional sound, projector and LED wall support throughout.",
    icon: "power",
  },
] as const;

export const services = [
  {
    slug: "weddings",
    category: "Weddings",
    image: "/ban1.jpg",
    imagePosition: "50% 50%",
    title: "Weddings & Receptions",
    body: "The complete wedding experience, from muhurtham to reception and everything between. Grand mandap setups, bridal suite, priest coordination, guest hospitality and a dedicated event manager for your day.",
    points: [
      "Traditional & themed mandap decor",
      "Seating for up to 1200 guests",
      "Bridal room with makeup area",
      "Dedicated wedding coordinator",
    ],
  },
  {
    slug: "engagement",
    category: "Ceremonies",
    image: "/1J6A0306.jpg",
    imagePosition: "45% 55%",
    title: "Engagements & Betrothals",
    body: "Intimate, elegant setups for engagement ceremonies, ring exchanges and nichayathartham with customised stage decor and photography-friendly lighting.",
    points: [
      "Custom stage & backdrop design",
      "Photo-friendly lighting setup",
      "Compact hall option for 300 guests",
      "Curated snack & dinner menus",
    ],
  },
  {
    slug: "corporate",
    category: "Corporate",
    image: "/1J6A0245.jpg",
    imagePosition: "50% 55%",
    title: "Corporate Events",
    body: "Conferences, product launches, annual meets, dealer conventions and award nights, with projector, LED wall support, stage, podium and business-grade Wi-Fi.",
    points: [
      "Projector, LED wall & PA system",
      "Theatre / cluster / U-shape seating",
      "Business lunch & hi-tea packages",
      "Registration desk & green room",
    ],
  },
  {
    slug: "celebrations",
    category: "Family",
    image: "/1J6A0292.jpg",
    imagePosition: "50% 55%",
    title: "Birthdays & Celebrations",
    body: "Birthdays, naming ceremonies, housewarmings, retirement parties and anniversaries, with colourful decor, kid-friendly space and menus built around your theme.",
    points: [
      "Theme decor & balloon setups",
      "Kids play & activity corner",
      "Live counters and dessert stations",
      "Flexible half-day slots",
    ],
  },
  {
    slug: "catering",
    category: "Catering",
    image: "/1J6A0219.jpg",
    imagePosition: "50% 60%",
    title: "Catering & Menus",
    body: "In-house multi-cuisine catering with South Indian, North Indian, Chinese and continental spreads. Tastings available before you confirm the menu.",
    points: [
      "Pure-veg & non-veg kitchens",
      "Live dosa, chaat & grill counters",
      "Custom menu & tasting session",
      "Trained service staff included",
    ],
  },
  {
    slug: "decor",
    category: "Add-ons",
    image: "/1J6A0290.jpg",
    imagePosition: "50% 45%",
    title: "Decor, Photography & Add-ons",
    body: "A trusted network of decorators, photographers, mehendi artists, DJs and orchestra teams, bundled into your package so you coordinate with one team, not ten.",
    points: [
      "Floral & theme decoration",
      "Photo, video & drone coverage",
      "DJ, orchestra & live band",
      "Mehendi and makeup artists",
    ],
  },
] as const;

export const packages = [
  {
    name: "Silver",
    price: "₹75,000",
    unit: "per day (hall only)",
    highlight: false,
    blurb: "Ideal for engagements, birthdays and small family functions.",
    features: [
      "Hall for up to 300 guests",
      "8 hours of venue access",
      "Basic stage & seating setup",
      "Air conditioning & power backup",
      "Parking for 100 cars",
      "Bring your own caterer",
    ],
  },
  {
    name: "Gold",
    price: "₹1,50,000",
    unit: "per day (hall + catering)",
    highlight: true,
    blurb: "Our most-booked package, perfect for weddings and receptions.",
    features: [
      "Hall for up to 700 guests",
      "Full-day venue access",
      "Floral stage & entrance decor",
      "In-house veg catering (3 meals)",
      "Bridal room + 2 guest rooms",
      "Sound system & event manager",
    ],
  },
  {
    name: "Platinum",
    price: "₹2,75,000",
    unit: "per day (all inclusive)",
    highlight: false,
    blurb: "The full royal experience, end to end, with nothing left to arrange.",
    features: [
      "Full hall for up to 1200 guests",
      "Two-day access (muhurtham + reception)",
      "Premium theme decor & lighting",
      "Multi-cuisine veg & non-veg catering",
      "Bridal suite + 6 guest rooms",
      "Photography, DJ & valet parking",
    ],
  },
] as const;

/**
 * PLACEHOLDER REVIEWS — written as examples, not collected from real clients.
 * Replace every entry with genuine, permission-cleared feedback before launch.
 */
export const testimonials = [
  {
    name: "Priya & Karthik",
    event: "Wedding",
    meta: "900 guests · Mar 2026",
    quote:
      "We booked Vishal Royal for both the muhurtham and the reception. The hall looked stunning, the food was excellent, and the team handled 900 guests without a single hiccup.",
  },
  {
    name: "Ramesh Kumar",
    event: "Corporate Meet",
    meta: "400 guests · Jan 2026",
    quote:
      "Clean, professional and very well organised. The AV setup worked perfectly for our dealer meet and the hi-tea service was on time to the minute.",
  },
  {
    name: "Lakshmi Narayanan",
    event: "Naming Ceremony",
    meta: "150 guests · Nov 2025",
    quote:
      "Beautiful decor and genuinely warm staff. Parking was never an issue for our elderly guests, and the bridal room was a great resting space for the family.",
  },
  {
    name: "Anand & Divya",
    event: "Reception",
    meta: "700 guests · Feb 2026",
    quote:
      "The coordinator called us every week in the run-up and knew our schedule better than we did. On the day we did not have to chase a single vendor.",
  },
  {
    name: "Suresh Babu",
    event: "60th Birthday",
    meta: "250 guests · Aug 2025",
    quote:
      "We used the partitioned hall for a smaller function and it never felt empty. The live counters were the highlight, and guests kept going back for more.",
  },
  {
    name: "Meera Raghavan",
    event: "Engagement",
    meta: "300 guests · Dec 2025",
    quote:
      "The stage decor matched the reference photos we sent almost exactly, and the lighting made every photograph look good. Billing matched the quote to the rupee.",
  },
] as const;

export const faqs = [
  {
    q: "What is the seating capacity of the hall?",
    a: "The main hall seats up to 1200 guests in floating style and around 700 in seated dining. A partition option lets us configure a smaller 300-guest hall for intimate functions.",
  },
  {
    q: "Can we bring our own caterer or decorator?",
    a: "Yes. Our Silver package is hall-only, so you're free to bring your own caterer and decorator. Gold and Platinum packages include our in-house teams, which most clients prefer for the coordination.",
  },
  {
    q: "How far in advance should we book?",
    a: "For wedding season dates (November–February and April–June) we recommend booking 6–9 months ahead. Off-season and weekday dates are often available at shorter notice.",
  },
  {
    q: "What is the advance and cancellation policy?",
    a: "A 30% advance confirms your date. Cancellations more than 90 days before the event are refunded at 70%; within 30 days the advance is adjustable against a future date within one year.",
  },
  {
    q: "Is there parking and power backup?",
    a: "Yes. Secure parking for 200+ cars and 300+ two-wheelers with valet assistance, plus 100% generator backup for the entire venue including the kitchen and AC.",
  },
  {
    q: "Do you allow non-vegetarian food?",
    a: "Yes. We run separate vegetarian and non-vegetarian kitchens, so both menus can be served at the same event without any cross-contamination.",
  },
] as const;

/**
 * Every entry points at a real photo in /public with a crop (`position`) that
 * frames the part of the shot the caption describes. Captions are kept honest
 * to what's actually visible — as more photography arrives, add files to
 * /public and extend this list (and `galleryCategories` below).
 */
export const galleryItems = [
  // --- The hall ---
  { title: "Grand Banquet Hall", category: "Venue", src: "/1J6A0292.jpg", position: "50% 50%", zoom: 1 },
  { title: "Hall from the Entrance", category: "Venue", src: "/1J6A0245.jpg", position: "50% 50%", zoom: 1 },
  { title: "Seating & Lounge Sofas", category: "Venue", src: "/1J6A0219.jpg", position: "50% 50%", zoom: 1 },
  { title: "Guest Seating Facing the Stage", category: "Weddings", src: "/1J6A0306.jpg", position: "50% 50%", zoom: 1 },

  // --- Entrance & common areas ---
  { title: "Entrance Foyer", category: "Venue", src: "/1J6A0169.jpg", position: "50% 50%", zoom: 1 },
  { title: "Lobby, Lift & Staircase", category: "Venue", src: "/1J6A0300.jpg", position: "50% 50%", zoom: 1 },

  // --- Decor detail ---
  { title: "Ceiling & Chandelier Work", category: "Decor", src: "/1J6A0290.jpg", position: "50% 45%", zoom: 1 },
  { title: "Hall Set for a Wedding", category: "Weddings", src: "/ban1.jpg", position: "50% 50%", zoom: 1 },
  { title: "Wedding Stage & Mandap", category: "Weddings", src: "/ban1.jpg", position: "50% 56%", zoom: 2.7 },
  { title: "Floral Stage Decor", category: "Decor", src: "/ban1.jpg", position: "50% 48%", zoom: 3.6 },

  // --- Rooms ---
  { title: "Deluxe Guest Room", category: "Rooms", src: "/1J6A0136.jpg", position: "50% 50%", zoom: 1 },
  { title: "Bridal Suite", category: "Rooms", src: "/ban2.jpg", position: "50% 50%", zoom: 1 },
  { title: "Suite Lounge Corner", category: "Rooms", src: "/ban2.jpg", position: "22% 58%", zoom: 2.4 },
  { title: "Guest Room & Media Wall", category: "Rooms", src: "/ban3.jpg", position: "50% 50%", zoom: 1 },
] as const;

export const galleryCategories = ["All", "Venue", "Weddings", "Decor", "Rooms"] as const;
