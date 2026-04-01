import { CheckCircle2, MessageCircleMore, PhoneCall } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata, services, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Book Appliance Repair Service",
  description:
    "Book AC repair, fridge repair, washing machine repair, or geyser repair in Barhni with a simple service request form.",
  path: "/book-service",
  keywords: [
    "Book AC repair Barhni",
    "Book fridge repair Siddharth Nagar",
    "Appliance service booking Barhni"
  ]
});

export default function BookServicePage() {
  return (
    <div className="space-y-20 pb-20 pt-8 sm:space-y-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2.5rem] border border-white/80 bg-white/80 px-6 py-10 shadow-[0_30px_90px_rgba(29,19,13,0.08)] backdrop-blur lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
              Book Service
            </span>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Request a doorstep repair visit in minutes
            </h1>
            <p className="text-base leading-8 text-stone-600">
              Share your appliance issue, address, and preferred date. Cool
              Tech Repair can then call or WhatsApp you back to confirm timing
              and service details.
            </p>

            <div className="grid gap-3">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50/60 px-4 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-600" />
                  <div>
                    <p className="font-semibold text-ink">{service.name}</p>
                    <p className="text-sm leading-6 text-stone-600">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a href={siteConfig.primaryTel} className="btn-secondary justify-center">
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
                WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <SectionHeading
              eyebrow="Booking Form"
              title="Share your details and request a repair visit"
              description="Fill in the service type, address, preferred date, and appliance issue so we can contact you with availability."
            />
            <LeadForm variant="booking" />
          </div>
        </div>
      </section>
    </div>
  );
}
