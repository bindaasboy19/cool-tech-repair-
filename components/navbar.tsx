"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-3 lg:flex-none">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-heading text-lg font-semibold text-white shadow-glow">
            CT
          </div>
          <div className="min-w-0">
            <p className="truncate font-heading text-base font-semibold text-ink sm:text-lg">
              Cool Tech Repair
            </p>
            <p className="truncate text-[10px] uppercase tracking-[0.16em] text-stone-500 sm:text-xs sm:tracking-[0.24em]">
              Barhni Appliance Service
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  isActive ? "text-brand-700" : "text-stone-700 hover:text-brand-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={siteConfig.primaryTel} className="btn-secondary">
            <PhoneCall className="h-4 w-4" />
            Call Now
          </a>
          <Link href="/book-service" className="btn-primary">
            Book Service
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl border border-stone-200 text-stone-700 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              <a href={siteConfig.primaryTel} className="btn-secondary justify-center">
                <PhoneCall className="h-5 w-5" />
                Call Now
              </a>
              <Link href="/book-service" className="btn-primary justify-center">
                Book Service
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
