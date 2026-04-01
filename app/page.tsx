import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Droplets,
  Flame,
  IndianRupee,
  MessageCircleMore,
  PhoneCall,
  ShieldCheck,
  Snowflake,
  Wind,
  Wrench
} from "lucide-react";
import { BeforeAfterGallery } from "@/components/before-after-gallery";
import { CTASection } from "@/components/cta-section";
import { ReviewSection } from "@/components/review-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { createPageMetadata, siteConfig, whyChooseUs } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "AC, Fridge & Washing Machine Repair in Barhni",
  description:
    "Book fast and affordable AC, fridge, washing machine, and geyser repair in Barhni with trusted local doorstep service and quick WhatsApp support.",
  path: "/",
  keywords: [
    "Local AC technician in Barhni",
    "Doorstep fridge repair Barhni",
    "Washing machine service Siddharth Nagar"
  ]
});

const serviceCards = [
  {
    title: "AC Repair",
    description:
      "Cooling issues, leakage, service, gas charging, and quick AC fault diagnosis.",
    icon: <Wind className="h-7 w-7" />
  },
  {
    title: "Fridge Repair",
    description:
      "No cooling, freezer problems, compressor checks, and thermostat repair.",
    icon: <Snowflake className="h-7 w-7" />
  },
  {
    title: "Washing Machine Repair",
    description:
      "Spin, drain, inlet, vibration, and motor repair for home washing machines.",
    icon: <Droplets className="h-7 w-7" />
  },
  {
    title: "Geyser Repair",
    description:
      "Heating, element, thermostat, leakage, and safety-related geyser repair.",
    icon: <Flame className="h-7 w-7" />
  }
];

const reasonIcons = [Clock3, Wrench, IndianRupee, ShieldCheck];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20 pt-6 sm:space-y-24 sm:pt-8">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/80 px-6 py-10 shadow-[0_30px_90px_rgba(29,19,13,0.08)] backdrop-blur sm:px-8 lg:px-12 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-7">
              <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                Local doorstep appliance repair
              </span>
              <div className="space-y-5">
                <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  AC, Fridge &amp; Washing Machine Repair in Barhni
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-stone-600">
                  Fast, Reliable &amp; Affordable Service at Your Doorstep
                </p>
                <p className="max-w-2xl text-base leading-8 text-stone-600">
                  Cool Tech Repair helps homes and shops across Barhni,
                  Siddharth Nagar, and nearby roads with same-day appliance
                  support, clean workmanship, and easy WhatsApp booking.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={siteConfig.primaryTel} className="btn-primary justify-center">
                  <PhoneCall className="h-5 w-5" />
                  Call Now
                </a>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary justify-center"
                >
                  <MessageCircleMore className="h-5 w-5" />
                  WhatsApp Now
                </a>
              </div>

              <div className="grid gap-3 text-sm text-stone-600 sm:grid-cols-3">
                <div className="rounded-2xl border border-brand-100 bg-brand-50/60 px-4 py-4">
                  <p className="font-heading text-2xl font-semibold text-ink">
                    Same Day
                  </p>
                  <p>Local visit scheduling available</p>
                </div>
                <div className="rounded-2xl border border-brand-100 bg-brand-50/60 px-4 py-4">
                  <p className="font-heading text-2xl font-semibold text-ink">
                    Repair First
                  </p>
                  <p>Affordable service-focused advice</p>
                </div>
                <div className="rounded-2xl border border-brand-100 bg-brand-50/60 px-4 py-4">
                  <p className="font-heading text-2xl font-semibold text-ink">
                    WhatsApp
                  </p>
                  <p>Fast enquiry and booking support</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-8 hidden h-28 w-28 rounded-full bg-brand-200/50 blur-3xl lg:block" />
              <div className="absolute -right-6 bottom-4 hidden h-24 w-24 rounded-full bg-orange-200/60 blur-3xl lg:block" />
              <div className="surface-card relative overflow-hidden rounded-[2.5rem] p-6 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,106,28,0.16),transparent_32%),linear-gradient(160deg,rgba(255,255,255,0.96),rgba(255,248,242,0.84))]" />
                <div className="relative space-y-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
                        Quick local support
                      </p>
                      <h2 className="mt-3 font-heading text-3xl font-semibold text-ink">
                        Easy to call. Easy to trust.
                      </h2>
                    </div>
                    <div className="w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
                      Barhni
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] bg-ink p-5 text-white">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
                        Popular request
                      </p>
                      <p className="mt-3 font-heading text-2xl font-semibold">
                        AC cooling repair
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone-300">
                        Fast diagnosis for low cooling, bad smell, and leakage.
                      </p>
                    </div>
                    <div className="animate-float rounded-[1.75rem] border border-brand-100 bg-white p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
                        Doorstep convenience
                      </p>
                      <p className="mt-3 font-heading text-2xl font-semibold text-ink">
                        Easy booking for busy households
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone-600">
                        Call directly or send your issue on WhatsApp for a quick
                        response and simple scheduling.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 rounded-[1.75rem] border border-dashed border-brand-200 bg-brand-50/70 p-5 text-sm text-stone-700">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span>Primary contact</span>
                      <a
                        href={siteConfig.primaryTel}
                        className="font-semibold text-brand-700"
                      >
                        {siteConfig.primaryPhone}
                      </a>
                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span>Secondary contact</span>
                      <a
                        href={siteConfig.secondaryTel}
                        className="font-semibold text-brand-700"
                      >
                        {siteConfig.secondaryPhone}
                      </a>
                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span>Instagram</span>
                      <a
                        href={siteConfig.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-brand-700"
                      >
                        @{siteConfig.instagramHandle}
                      </a>
                    </div>
                  </div>

                  <Link href="/book-service" className="btn-primary w-full justify-center">
                    Book a Service Visit
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Repair services built around local home appliance needs"
          description="From urgent cooling issues to noisy washing machines, get practical repair help for the appliances your home depends on every day."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Designed to build trust from the first visit"
          description="Customers choose Cool Tech Repair for fast response, honest communication, and dependable support close to home."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = reasonIcons[index];

            return (
              <article
                key={item.title}
                className="surface-card rounded-[2rem] p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <ReviewSection />

      <section className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Before / After"
          title="A visual gallery section for repair results"
          description="A clean before-and-after section helps visitors imagine the outcome of proper diagnosis, servicing, and repair."
        />
        <BeforeAfterGallery />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </div>
  );
}
