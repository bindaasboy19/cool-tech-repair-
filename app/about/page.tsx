import Link from "next/link";
import { Clock3, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About Cool Tech Repair",
  description:
    "Learn about Cool Tech Repair, a trusted local appliance repair business focused on fast, reliable doorstep service in Barhni and Siddharth Nagar.",
  path: "/about",
  keywords: [
    "About appliance repair Barhni",
    "Local AC repair technician Barhni",
    "Trusted repair service Siddharth Nagar"
  ]
});

const values = [
  {
    title: "Fast Response",
    description:
      "Quick communication and local scheduling help reduce waiting time for urgent home appliance issues.",
    icon: Clock3
  },
  {
    title: "Technical Experience",
    description:
      "Real-world repair knowledge across AC units, fridges, washing machines, and geysers.",
    icon: Wrench
  },
  {
    title: "Local Trust",
    description:
      "A neighborhood-focused service business that understands how important reliable doorstep support is.",
    icon: MapPin
  },
  {
    title: "Reliable Work",
    description:
      "Repair-first recommendations, careful checks, and professional communication during every visit.",
    icon: ShieldCheck
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20 pt-8 sm:space-y-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2.5rem] border border-white/80 bg-white/80 px-6 py-10 shadow-[0_30px_90px_rgba(29,19,13,0.08)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
              About Cool Tech Repair
            </span>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              A local appliance repair business built on fast service and clear
              communication
            </h1>
            <p className="text-base leading-8 text-stone-600">
              Cool Tech Repair serves families and households in Barhni,
              Siddharth Nagar, and nearby localities with dependable appliance
              repair at home. The goal is simple: diagnose the problem quickly,
              offer practical repair advice, and restore your appliance without
              unnecessary delay.
            </p>
            <p className="text-base leading-8 text-stone-600">
              From AC cooling problems to fridge faults, washing machine
              breakdowns, and geyser repair, the business focuses on convenient
              local support that customers can trust.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/book-service" className="btn-primary justify-center">
                Book Service
              </Link>
              <Link href="/contact" className="btn-secondary justify-center">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="surface-card rounded-[2rem] p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-semibold text-ink">
                    {value.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Mission"
          title="Fast and reliable home service for everyday appliance problems"
          description="The mission is to deliver dependable doorstep repair with quick response, careful diagnosis, and service people can trust."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="surface-card rounded-[2rem] p-6">
            <h3 className="font-heading text-2xl font-semibold text-ink">
              Business Introduction
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Cool Tech Repair is a local repair service for ACs, fridges,
              washing machines, and geysers with doorstep support in Barhni.
            </p>
          </article>
          <article className="surface-card rounded-[2rem] p-6">
            <h3 className="font-heading text-2xl font-semibold text-ink">
              Experience &amp; Expertise
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Practical fault-finding and service handling for common household
              appliances, with a repair-first approach and clear customer
              communication.
            </p>
          </article>
          <article className="surface-card rounded-[2rem] p-6">
            <h3 className="font-heading text-2xl font-semibold text-ink">
              Local Trust
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              A nearby business has an advantage: quicker service, easier
              follow-up, and stronger word-of-mouth trust in the neighborhood.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </div>
  );
}
