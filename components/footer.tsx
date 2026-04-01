import Link from "next/link";
import { Instagram, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";
import { navLinks, services, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#20130d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-heading text-lg font-semibold text-white">
              CT
            </div>
            <div>
              <p className="font-heading text-xl font-semibold">
                Cool Tech Repair
              </p>
              <p className="text-sm text-stone-300">
                AC, fridge, washing machine, and geyser repair in Barhni.
              </p>
            </div>
          </div>

          <p className="max-w-md text-sm leading-7 text-stone-300">
            Trusted local doorstep appliance service for homes and shops in
            Barhni, Siddharth Nagar, and nearby areas.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.primaryTel}
              className="btn-secondary border-white/15 bg-white/10 text-white hover:bg-white hover:text-ink"
            >
              <PhoneCall className="h-4 w-4" />
              {siteConfig.primaryPhone}
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary border-white/15 bg-white/10 text-white hover:bg-white hover:text-ink"
            >
              <MessageCircleMore className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-stone-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-brand-200"
              >
                {link.label}
              </Link>
            ))}
            {services.map((service) => (
              <Link
                key={service.slug}
                href="/services"
                className="transition hover:text-brand-200"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading text-lg font-semibold">Contact Info</h3>
          <div className="space-y-4 text-sm leading-7 text-stone-300">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 flex-none text-brand-300" />
              <div>
                <p>{siteConfig.addressLine1}</p>
                <p>{siteConfig.addressLine2}</p>
              </div>
            </div>
            <div className="space-y-1">
              <a href={siteConfig.primaryTel} className="block hover:text-brand-200">
                {siteConfig.primaryPhone}
              </a>
              <a
                href={siteConfig.secondaryTel}
                className="block hover:text-brand-200"
              >
                {siteConfig.secondaryPhone}
              </a>
            </div>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              @{siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-stone-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Cool Tech Repair. All rights reserved.
      </div>
    </footer>
  );
}
