import Image from "next/image";
import { galleryItems } from "@/lib/site";

export function BeforeAfterGallery() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {galleryItems.map((item, index) => (
        <figure
          key={item.title}
          className="group overflow-hidden rounded-[2rem] border border-brand-100 bg-white shadow-[0_20px_60px_rgba(29,19,13,0.06)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-orange-100">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              priority={index < 2}
            />
          </div>
          <figcaption className="space-y-2 p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="font-heading text-xl font-semibold text-ink">
                {item.title}
              </p>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {item.caption}
              </span>
            </div>
            <p className="text-sm leading-6 text-stone-600">
              Typical repair outcome from quick diagnosis, part checks, and
              proper servicing.
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
