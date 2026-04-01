import { MessageCircleMore, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_35px_rgba(37,211,102,0.35)] transition hover:scale-105 md:bottom-6 md:right-6"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircleMore className="h-7 w-7" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/70 bg-white/95 p-3 shadow-[0_-12px_30px_rgba(29,19,13,0.08)] backdrop-blur md:hidden">
        <a
          href={siteConfig.primaryTel}
          className="btn-primary w-full justify-center text-base"
        >
          <PhoneCall className="h-5 w-5" />
          Call Now
        </a>
      </div>
    </>
  );
}
