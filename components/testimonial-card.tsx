import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  location: string;
};

export function TestimonialCard({
  quote,
  name,
  location
}: TestimonialCardProps) {
  return (
    <article className="surface-card flex h-full flex-col gap-5 rounded-[2rem] p-6">
      <div className="flex gap-1 text-brand-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-sm leading-7 text-stone-600">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-auto border-t border-stone-200 pt-4">
        <p className="font-heading text-lg font-semibold text-ink">{name}</p>
        <p className="text-sm text-stone-500">{location}</p>
      </div>
    </article>
  );
}
