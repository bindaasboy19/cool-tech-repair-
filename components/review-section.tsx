"use client";

import { useEffect } from "react";
import { BadgeCheck, ExternalLink, Star } from "lucide-react";
import { siteConfig, testimonials } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";

const widgetId =
  process.env.NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_WIDGET_ID || "";

const isWidgetConfigured =
  Boolean(widgetId) && !widgetId.includes("your-elfsight-widget-id");

export function ReviewSection() {
  useEffect(() => {
    if (!isWidgetConfigured) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.dataset.useServiceCore = "";
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionHeading
          eyebrow="Google Reviews"
          title="Let real customer feedback build trust before visitors call"
          description="Showcase Google ratings and recent comments directly on the homepage so new visitors can quickly see proof of quality and reliability."
        />

        <div className="surface-card flex flex-col gap-4 rounded-[2rem] p-6 sm:min-w-[320px]">
          <div className="flex items-center gap-1 text-brand-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <div className="space-y-2">
            <p className="font-heading text-2xl font-semibold text-ink">
              Google review proof matters
            </p>
            <p className="text-sm leading-7 text-stone-600">
              A live review feed helps first-time visitors feel more confident
              about booking repair service with a trusted local technician.
            </p>
          </div>
          <a
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary justify-center"
          >
            Leave a Review on Google
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2.25rem] border border-brand-100 bg-white shadow-[0_22px_70px_rgba(29,19,13,0.06)]">
        {isWidgetConfigured ? (
          <div className="min-h-[420px] p-4 sm:p-6">
            <div
              className={`elfsight-app-${widgetId}`}
              data-elfsight-app-lazy
            />
          </div>
        ) : (
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] bg-ink p-6 text-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-200">
                <BadgeCheck className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-semibold">
                Google Reviews widget preview
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-200">
                Add your Elfsight Google Reviews widget ID in
                ` NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_WIDGET_ID ` and a direct
                Google review URL in ` NEXT_PUBLIC_GOOGLE_REVIEW_URL ` to
                replace this preview with live Google ratings and comments.
              </p>
              <a
                href={siteConfig.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mt-6 justify-center border-white/15 bg-white/10 text-white hover:bg-white hover:text-ink"
              >
                Open Google Listing
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
