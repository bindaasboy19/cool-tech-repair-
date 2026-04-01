import { Droplets, Flame, Snowflake, Wind } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceDetail } from "@/components/service-detail";
import { createPageMetadata, services } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Appliance Repair Services in Barhni",
  description:
    "Explore AC repair, fridge repair, washing machine repair, and geyser repair services in Barhni with common issues we fix and quick booking options.",
  path: "/services",
  keywords: [
    "AC service Barhni",
    "Fridge technician Siddharth Nagar",
    "Geyser repair near Barhni"
  ]
});

const serviceIcons = {
  ac: <Wind className="h-7 w-7" />,
  fridge: <Snowflake className="h-7 w-7" />,
  "washing-machine": <Droplets className="h-7 w-7" />,
  geyser: <Flame className="h-7 w-7" />
};

const accentClasses = {
  ac: "from-sky-500 to-cyan-600",
  fridge: "from-brand-500 to-red-600",
  "washing-machine": "from-orange-500 to-amber-600",
  geyser: "from-rose-500 to-brand-700"
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-20 pt-8 sm:space-y-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/80 bg-white/80 px-6 py-10 shadow-[0_30px_90px_rgba(29,19,13,0.08)] backdrop-blur sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Services"
            title="Complete appliance repair services for local homes and shops"
            description="Browse the main repair categories, see the common problems we handle, and choose the fastest way to get help."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        {services.map((service) => (
          <ServiceDetail
            key={service.slug}
            title={service.name}
            description={service.description}
            issues={service.issues}
            icon={serviceIcons[service.iconKey]}
            accent={accentClasses[service.iconKey]}
          />
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </div>
  );
}
