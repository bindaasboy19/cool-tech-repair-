import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function ServiceCard({
  icon,
  title,
  description
}: ServiceCardProps) {
  return (
    <article className="surface-card group flex h-full flex-col gap-5 rounded-[2rem] p-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="font-heading text-2xl font-semibold text-ink">{title}</h3>
        <p className="text-sm leading-7 text-stone-600">{description}</p>
      </div>
      <Link
        href="/services"
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition group-hover:text-brand-600"
      >
        View service details
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
