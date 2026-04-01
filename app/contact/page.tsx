import { Instagram, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact Cool Tech Repair",
  description:
    "Call, WhatsApp, or send a message to Cool Tech Repair for appliance repair in Barhni. View address details and map location.",
  path: "/contact",
  keywords: [
    "Contact AC repair Barhni",
    "Cool Tech Repair phone number",
    "Appliance repair contact Siddharth Nagar"
  ]
});

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-20 pt-8 sm:space-y-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/80 bg-white/80 px-6 py-10 shadow-[0_30px_90px_rgba(29,19,13,0.08)] backdrop-blur sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Contact"
            title="Reach Cool Tech Repair in the way that suits you best"
            description="Call directly for the quickest response, send your issue on WhatsApp, or use the form below for a callback."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <a
            href={siteConfig.primaryTel}
            className="surface-card rounded-[2rem] p-6 transition hover:-translate-y-1"
          >
            <PhoneCall className="h-8 w-8 text-brand-600" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-ink">
              Call Primary
            </h2>
            <p className="mt-2 text-sm text-stone-500">Tap to call now</p>
            <p className="mt-4 text-lg font-semibold text-brand-700">
              {siteConfig.primaryPhone}
            </p>
          </a>

          <a
            href={siteConfig.secondaryTel}
            className="surface-card rounded-[2rem] p-6 transition hover:-translate-y-1"
          >
            <PhoneCall className="h-8 w-8 text-brand-600" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-ink">
              Call Secondary
            </h2>
            <p className="mt-2 text-sm text-stone-500">Alternative support number</p>
            <p className="mt-4 text-lg font-semibold text-brand-700">
              {siteConfig.secondaryPhone}
            </p>
          </a>

          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="surface-card rounded-[2rem] p-6 transition hover:-translate-y-1"
          >
            <MessageCircleMore className="h-8 w-8 text-[#25D366]" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-ink">
              WhatsApp
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Share appliance issue and address
            </p>
            <p className="mt-4 text-lg font-semibold text-brand-700">
              Chat on WhatsApp
            </p>
          </a>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="surface-card rounded-[2rem] p-6 transition hover:-translate-y-1"
          >
            <Instagram className="h-8 w-8 text-brand-600" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-ink">
              Instagram
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Follow and message directly
            </p>
            <p className="mt-4 text-lg font-semibold text-brand-700">
              @{siteConfig.instagramHandle}
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="space-y-6">
          <div className="surface-card rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <MapPin className="h-7 w-7" />
              </div>
              <div className="space-y-3">
                <h2 className="font-heading text-3xl font-semibold text-ink">
                  Address
                </h2>
                <p className="text-base leading-8 text-stone-600">
                  {siteConfig.addressLine1}
                  <br />
                  {siteConfig.addressLine2}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-brand-100 bg-white shadow-[0_20px_60px_rgba(29,19,13,0.06)]">
            <iframe
              title="Cool Tech Repair location in Barhni"
              src={siteConfig.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>

        <div className="space-y-6">
          <SectionHeading
            eyebrow="Send A Message"
            title="Simple contact form for quick callbacks"
            description="Share your appliance issue and contact details below. We will call or message you back to confirm the next step."
          />
          <LeadForm variant="contact" />
        </div>
      </section>
    </div>
  );
}
