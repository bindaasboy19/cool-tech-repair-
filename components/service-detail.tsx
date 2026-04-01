import Link from "next/link";
import type { ReactNode } from "react";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site";

type ServiceDetailProps = {
  icon: ReactNode;
  title: string;
  description: string;
  issues: readonly string[];
  accent: string;
};

export function ServiceDetail({
  icon,
  title,
  description,
  issues,
  accent
}: ServiceDetailProps) {
  return (
    <section className="grid gap-8 rounded-[2rem] border border-brand-100 bg-white p-6 shadow-[0_20px_60px_rgba(29,19,13,0.06)] lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br text-white shadow-glow ${accent}`}
          >
            {icon}
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              Doorstep Appliance Service
            </p>
            <h2 className="font-heading text-3xl font-semibold text-ink">
              {title}
            </h2>
          </div>
        </div>

        <p className="max-w-2xl text-base leading-8 text-stone-600">
          {description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {issues.map((issue) => (
            <div
              key={issue}
              className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-sand/80 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-600" />
              <span className="text-sm font-medium leading-6 text-stone-700">
                {issue}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-ink p-6 text-white">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
            Need help quickly?
          </p>
          <h3 className="font-heading text-2xl font-semibold">
            Speak to Cool Tech Repair now
          </h3>
          <p className="text-sm leading-7 text-stone-200">
            Share the appliance issue, your location, and preferred time. We
            will guide you on the next best step and confirm availability.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link href="/book-service" className="btn-primary justify-center">
            Book This Service
          </Link>
          <a
            href={siteConfig.primaryTel}
            className="btn-secondary justify-center border-white/20 bg-white/10 text-white hover:bg-white hover:text-ink"
          >
            <PhoneCall className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
