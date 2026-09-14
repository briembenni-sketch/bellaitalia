"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Heim" },
  { href: "/rom", label: "Róm" },
  { href: "/villur", label: "Villur" },
  { href: "/samband", label: "Hafa samband" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-4 pt-3 md:pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto mx-auto max-w-[1400px] rounded-full transition-all duration-500 ${
          solid ? "glass-dark shadow-lg shadow-ink/10" : "glass"
        }`}
      >
        <div className="px-3 md:px-4 h-16 md:h-[72px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 pl-1 md:pl-2">
            <Image
              src="/images/logo.jpg"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover ring-1 ring-white/30"
            />
            <span className="font-display font-semibold text-white text-lg md:text-xl tracking-tight">
              Bella Italia
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-[15px] transition-colors duration-300 ${
                    active ? "text-white bg-white/12" : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/fyrirspurn"
              className="hidden sm:inline-flex items-center rounded-full bg-white text-ink px-5 md:px-6 py-2.5 md:py-3 text-sm font-semibold hover:bg-sand-light transition-colors"
            >
              Bóka núna
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-11 h-11 rounded-full flex flex-col items-center justify-center gap-1.5 text-white hover:bg-white/10 transition-colors"
              aria-label="Opna valmynd"
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`pointer-events-auto md:hidden mx-auto max-w-[1400px] overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-dark rounded-3xl px-5 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/90 text-base py-2.5 px-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/fyrirspurn"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex justify-center rounded-full bg-white text-ink px-6 py-3 text-sm font-semibold"
          >
            Bóka núna
          </Link>
        </div>
      </div>
    </header>
  );
}
