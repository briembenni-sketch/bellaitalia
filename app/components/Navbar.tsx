"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { destinations } from "../data/site";

const cityLinks = destinations.map((d) => ({
  href: d.custom ? `/${d.slug}` : `/borgir/${d.slug}`,
  label: d.navLabel,
  sub: d.eyebrow,
}));

const navLinks = [
  { href: "/", label: "Heim" },
  { href: "/villur", label: "Villur" },
  { href: "/borgir", label: "Borgir & ferðir", children: cityLinks },
  { href: "/brudkaup", label: "Brúðkaup" },
  { href: "/samband", label: "Hafa samband" },
];

function isActive(pathname: string, href: string, children?: { href: string }[]) {
  if (href === "/") return pathname === "/";
  if (pathname.startsWith(href)) return true;
  return children?.some((c) => pathname.startsWith(c.href)) ?? false;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Loka fellivalmynd við smell utan hennar eða Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

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
              const active = isActive(pathname, link.href, link.children);
              const cls = `px-4 py-2 rounded-full text-[15px] transition-colors duration-300 ${
                active ? "text-white bg-white/12" : "text-white/85 hover:text-white hover:bg-white/10"
              }`;

              if (!link.children) {
                return (
                  <Link key={link.href} href={link.href} className={cls}>
                    {link.label}
                  </Link>
                );
              }

              return (
                <div key={link.href} ref={menuRef} className="relative group/menu">
                  {/* Textinn er tengill á yfirlitssíðuna; örin opnar fellivalmyndina (hover opnar hana líka) */}
                  <div className={`${cls} inline-flex items-center gap-1 !pr-2`}>
                    <Link href={link.href} onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMenuOpen((o) => !o)}
                      aria-expanded={menuOpen}
                      aria-haspopup="menu"
                      aria-label={menuOpen ? "Loka borgavalmynd" : "Opna borgavalmynd"}
                      className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-white/15 transition-colors"
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>

                  <div
                    role="menu"
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto ${
                      menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="glass-dark rounded-3xl p-2 min-w-[280px] shadow-xl shadow-ink/20">
                      {link.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          role="menuitem"
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-baseline justify-between gap-4 rounded-2xl px-4 py-3 transition-colors ${
                            pathname.startsWith(c.href) ? "bg-white/12 text-white" : "text-white/85 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span className="text-[15px]">{c.label}</span>
                          <span className="text-[11px] uppercase tracking-[0.15em] text-sand/80">{c.sub}</span>
                        </Link>
                      ))}
                      <Link
                        href={link.href}
                        role="menuitem"
                        onClick={() => setMenuOpen(false)}
                        className="mt-1 flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-sand hover:bg-white/10 hover:text-white transition-colors border-t border-white/10"
                      >
                        Allar borgir & skipulagning
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/villur#fyrirspurn"
              className="hidden sm:inline-flex items-center rounded-full bg-white text-ink px-5 md:px-6 py-2.5 md:py-3 text-sm font-semibold hover:bg-sand-light transition-colors"
            >
              Fá tilboð í villu
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
          mobileOpen ? "max-h-[85svh] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-dark rounded-3xl px-5 py-5 flex flex-col gap-1 max-h-[85svh] overflow-y-auto">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="py-1">
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white/90 text-base py-2.5 px-3 rounded-xl hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
                <div className="ml-3 pl-3 border-l border-white/15 flex flex-col">
                  {link.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-white/75 text-[15px] py-2 px-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/90 text-base py-2.5 px-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            href="/villur#fyrirspurn"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex justify-center rounded-full bg-white text-ink px-6 py-3 text-sm font-semibold"
          >
            Fá tilboð í villu
          </Link>
        </div>
      </div>
    </header>
  );
}
