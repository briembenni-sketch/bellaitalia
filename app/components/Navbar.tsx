"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? "bg-[#1C0F0A]/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      {/* Ítalski fáninn sem fín lína efst */}
      <div className="absolute top-0 left-0 right-0 h-[3px] flex">
        <div className="flex-1 bg-[#009246]" />
        <div className="flex-1 bg-cream" />
        <div className="flex-1 bg-[#CE2B37]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-serif text-2xl md:text-3xl font-semibold tracking-[0.15em] text-cream">
            BELLA ITALIA
          </span>
          <span className="hidden lg:inline text-[10px] tracking-[0.3em] uppercase text-gold/70 border-l border-gold/30 pl-3">
            Róm & Villur á Ítalíu
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                  active ? "text-gold" : "text-cream/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/fyrirspurn"
            className="px-5 py-2.5 border border-gold/60 text-gold text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-[#1C0F0A] transition-all duration-300"
          >
            Fyrirspurn
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Opna valmynd"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-cream/80 text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/fyrirspurn"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-block w-fit px-5 py-2.5 border border-gold/60 text-gold text-xs font-semibold tracking-[0.2em] uppercase"
          >
            Senda fyrirspurn
          </Link>
        </div>
      </div>
    </nav>
  );
}
