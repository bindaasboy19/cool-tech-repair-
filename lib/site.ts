import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cooltechrepair.in";

const googleMapsQuery = encodeURIComponent(
  "Cool Tech Repair Barhni Siddharth Nagar Uttar Pradesh 272201"
);

export const siteConfig = {
  name: "Cool Tech Repair",
  description:
    "Cool Tech Repair provides fast, reliable, doorstep AC, fridge, washing machine, and geyser repair in Barhni, Siddharth Nagar.",
  primaryPhone: "+91 8097710143",
  secondaryPhone: "+91 8173098151",
  primaryTel: "tel:+918097710143",
  secondaryTel: "tel:+918173098151",
  whatsappLink: "https://wa.me/918097710143",
  instagramHandle: "lokesh_air_care",
  instagramUrl: "https://www.instagram.com/lokesh_air_care/",
  addressLine1: "Barhni Siddharth Nagar Near Block,",
  addressLine2: "Barhni Pachperwa Road - 272201",
  areaServed: "Barhni, Siddharth Nagar, Uttar Pradesh",
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`,
  googleReviewUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ||
    `https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`,
  mapEmbed:
    "https://www.google.com/maps?q=Barhni%20Siddharth%20Nagar%20Near%20Block%20Barhni%20Pachperwa%20Road%20272201&output=embed"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/book-service", label: "Book Service" }
];

export const services = [
  {
    name: "AC Repair",
    slug: "ac-repair",
    iconKey: "ac",
    shortDescription:
      "Split AC, window AC, cooling issues, gas filling, servicing, and installation support.",
    description:
      "We repair home AC units with quick fault diagnosis, clean servicing, and reliable cooling restoration for summers in Barhni.",
    issues: [
      "Low cooling or no cooling",
      "Water leakage and drainage problems",
      "Unusual noise or bad smell",
      "Compressor, fan, or thermostat issues"
    ]
  },
  {
    name: "Fridge Repair",
    slug: "fridge-repair",
    iconKey: "fridge",
    shortDescription:
      "Single-door and double-door fridge repair for cooling, compressor, and wiring faults.",
    description:
      "Keep your food safe with doorstep fridge repair for cooling loss, freezer issues, and electrical faults.",
    issues: [
      "Fridge not cooling properly",
      "Ice build-up in freezer",
      "Compressor or relay faults",
      "Door seal and thermostat issues"
    ]
  },
  {
    name: "Washing Machine Repair",
    slug: "washing-machine-repair",
    iconKey: "washing-machine",
    shortDescription:
      "Fully automatic and semi-automatic washing machine repair at home.",
    description:
      "We fix spin, drainage, vibration, inlet, and motor problems so your machine runs smoothly again without delays.",
    issues: [
      "Machine not spinning",
      "Water not draining",
      "Excess vibration or noise",
      "Inlet, motor, or panel issues"
    ]
  },
  {
    name: "Geyser Repair",
    slug: "geyser-repair",
    iconKey: "geyser",
    shortDescription:
      "Fast geyser repair for heating issues, leakage, thermostat faults, and electrical problems.",
    description:
      "Get safe, prompt geyser service for weak heating, tripping, leakage, and thermostat replacement.",
    issues: [
      "No hot water or slow heating",
      "Water leakage",
      "Thermostat and element faults",
      "Tripping, switch, or wiring issues"
    ]
  }
] as const;

export const whyChooseUs = [
  {
    title: "Same Day Service",
    description:
      "Quick response across Barhni and nearby areas so breakdowns do not disrupt your day."
  },
  {
    title: "Experienced Technician",
    description:
      "Practical troubleshooting for common home appliance faults, repairs, and preventive servicing."
  },
  {
    title: "Affordable Pricing",
    description:
      "Clear, fair pricing with repair-first advice that helps customers avoid unnecessary replacement."
  },
  {
    title: "Trusted Local Service",
    description:
      "A nearby repair partner for homes and small businesses in Siddharth Nagar and Barhni."
  }
];

export const testimonials = [
  {
    name: "Ritika Verma",
    location: "Barhni",
    quote:
      "My AC stopped cooling in the afternoon, and the technician came the same day. The service was fast and the charges were reasonable."
  },
  {
    name: "Aman Gupta",
    location: "Near Block Road",
    quote:
      "Very polite service and proper checking of the fridge issue before repair. Cooling was back the same evening."
  },
  {
    name: "Neha Singh",
    location: "Siddharth Nagar",
    quote:
      "The washing machine was making a loud noise. The problem was explained clearly and fixed at home without any hassle."
  },
  {
    name: "Vikash Mishra",
    location: "Barhni Pachperwa Road",
    quote:
      "Good local technician, arrived on time and repaired the geyser quickly. I also liked the easy WhatsApp communication."
  }
];

export const galleryItems = [
  {
    title: "AC Indoor Unit",
    caption: "Before service",
    image: "/images/ac-before.svg",
    alt: "Illustration of an AC indoor unit before repair"
  },
  {
    title: "AC Cooling Restored",
    caption: "After repair",
    image: "/images/ac-after.svg",
    alt: "Illustration of an AC indoor unit after repair"
  },
  {
    title: "Washing Machine Fault",
    caption: "Before service",
    image: "/images/washing-before.svg",
    alt: "Illustration of a washing machine before repair"
  },
  {
    title: "Washing Machine Running Smoothly",
    caption: "After repair",
    image: "/images/washing-after.svg",
    alt: "Illustration of a washing machine after repair"
  }
];

export const seoKeywords = [
  "AC Repair in Barhni",
  "Fridge Repair in Siddharth Nagar",
  "Washing Machine Repair in Barhni",
  "Geyser Repair in Siddharth Nagar",
  "Appliance Repair in Barhni",
  "Cool Tech Repair",
  "AC service near me in Barhni"
];

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = []
}: PageMetadataInput): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords: [...seoKeywords, ...keywords],
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
