import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { Navbar } from "@/components/navbar";
import { services, siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cool Tech Repair | Appliance Repair in Barhni",
    template: "%s | Cool Tech Repair"
  },
  description: siteConfig.description,
  keywords: [
    "AC Repair in Barhni",
    "Fridge Repair in Siddharth Nagar",
    "Washing Machine Repair in Barhni",
    "Geyser Repair in Siddharth Nagar",
    "Appliance Repair in Barhni"
  ],
  applicationName: siteConfig.name,
  category: "Home Services",
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/icon"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteUrl,
  telephone: siteConfig.primaryPhone,
  areaServed: [
    "Barhni",
    "Siddharth Nagar",
    "Uttar Pradesh"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.addressLine1} ${siteConfig.addressLine2}`,
    addressLocality: "Barhni",
    addressRegion: "Uttar Pradesh",
    postalCode: "272201",
    addressCountry: "IN"
  },
  sameAs: [siteConfig.instagramUrl],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.primaryPhone,
      contactType: "customer service",
      areaServed: "IN"
    },
    {
      "@type": "ContactPoint",
      telephone: siteConfig.secondaryPhone,
      contactType: "customer service",
      areaServed: "IN"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Appliance Repair Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description
      }
    }))
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
      </body>
    </html>
  );
}
