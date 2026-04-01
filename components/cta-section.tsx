import Link from "next/link";
import { PhoneCall, MessageCircleMore } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function CTASection() {
  return (
    <section className="overflow-hidden rounded-[2.25rem] bg-ink px-6 py-10 text-white shadow-[0_30px_80px_rgba(29,19,13,0.18)] sm:px-8 sm:py-12 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-5">
          <span className="inline-flex rounded-full border border-brand-400/30 bg-brand-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">
            Need urgent appliance help?
          </span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Book a local repair visit and get your appliance working again
          </h2>
          <p className="max-w-2xl text-base leading-8 text-stone-200">
            Call directly for faster support or send details on WhatsApp to
            request a convenient service visit in Barhni and nearby Siddharth
            Nagar areas.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href={siteConfig.primaryTel} className="btn-primary justify-center">
            <PhoneCall className="h-5 w-5" />
            Call Now
          </a>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary justify-center border-white/15 bg-white/10 text-white hover:bg-white hover:text-ink"
          >
            <MessageCircleMore className="h-5 w-5" />
            WhatsApp Now
          </a>
          <Link
            href="/book-service"
            className="btn-secondary justify-center border-white/15 bg-transparent text-white hover:bg-white hover:text-ink"
          >
            Book Service
          </Link>
        </div>
      </div>
    </section>
  );
}
