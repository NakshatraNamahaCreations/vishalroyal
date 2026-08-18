import type { Metadata } from "next";
import { fullAddress, site } from "@/lib/site";

export const SITE_URL = "https://vishalroyalconventionhall.com";

/** Default social share image — the hall dressed for a wedding. */
export const OG_IMAGE = "/ban1.jpg";

/**
 * Builds page metadata with a canonical URL and per-page Open Graph / Twitter
 * cards. Every page should use this rather than hand-rolling a Metadata object,
 * so no page can silently ship without a canonical again.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
  keywords,
}: {
  title: string;
  description: string;
  /** Route path, e.g. "/about". Use "/" for the homepage. */
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} · ${site.name}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: image, width: 1800, height: 1200, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/** Structured data describing the venue itself. */
export function venueSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EventVenue", "LocalBusiness"],
    "@id": `${SITE_URL}/#venue`,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: [`${SITE_URL}/ban1.jpg`, `${SITE_URL}/1J6A0169.jpg`, `${SITE_URL}/1J6A0292.jpg`],
    telephone: site.phone,
    email: site.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    maximumAttendeeCapacity: 1200,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.pincode,
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.youtube],
    knowsAbout: [
      "Wedding venue",
      "Reception hall",
      "Engagement ceremony venue",
      "Corporate event venue",
      "Banquet hall catering",
    ],
    hasMap: site.mapEmbed,
  };
}

/** Site-level search metadata. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    description: site.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#venue` },
  };
}

/** Rich-result eligible FAQ markup. */
export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Breadcrumb trail for inner pages. */
export function breadcrumbSchema(label: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: label, item: `${SITE_URL}${path}` },
    ],
  };
}

export { fullAddress };
