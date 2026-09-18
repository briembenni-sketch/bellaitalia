import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import { pageLinks, cityLinks } from "./Footer";
import { getContent } from "../lib/content";
import { ArrowIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from "./Icons";

const colTitle = "text-xs font-medium tracking-[0.2em] uppercase text-sand mb-4";

/**
 * Lokahluti forsíðu: „Hafa samband“ og footer í einni skjáfylli.
 * Samskiptaleiðirnar eru aðeins hér – neðri hlutinn er bara leiðakerfi og merki.
 */
export default function ClosingFooter() {
  const { site } = getContent();
  const contacts = [
    { label: "Netfang", value: site.email, href: `mailto:${site.email}` },
    { label: "Sími · Ísland", value: site.phoneIS, href: `tel:${site.phoneIS.replace(/\s/g, "")}` },
    { label: "WhatsApp · Ítalía", value: site.phoneIT, href: site.whatsapp, external: true },
  ];
  const socials = [
    { href: site.instagram, label: "Instagram", icon: <InstagramIcon className="w-[18px] h-[18px]" /> },
    { href: site.facebook, label: "Facebook", icon: <FacebookIcon className="w-[18px] h-[18px]" /> },
    { href: site.whatsapp, label: "WhatsApp", icon: <WhatsAppIcon className="w-[18px] h-[18px]" /> },
  ];

  return (
    <footer id="samband" className="relative min-h-svh flex flex-col overflow-hidden">
      <Image src="/images/gallery-01.jpg" alt="Trevi gosbrunnurinn í Róm" fill quality={85} sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/70 to-ink" />

      {/* Hafa samband */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 pt-28 pb-12 lg:pb-16">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 lg:items-end">
              <div className="lg:col-span-6">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Hafa samband</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-white">
                  Það kostar ekkert að fá tilboð
                </h2>
                <p className="mt-4 text-white/80 text-[15px] md:text-lg leading-relaxed max-w-xl">
                  Við svörum yfirleitt innan sólarhrings.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/villur#fyrirspurn"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors"
                  >
                    Fá tilboð í villu <ArrowIcon className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/fyrirspurn"
                    className="inline-flex items-center gap-2 rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors"
                  >
                    Almenn fyrirspurn
                  </Link>
                </div>
              </div>

              <ul className="lg:col-span-5 lg:col-start-8 border-y border-white/20 divide-y divide-white/20">
                {contacts.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between gap-4 py-5 md:py-6"
                    >
                      <span className="min-w-0">
                        <span className="block text-[11px] font-medium tracking-[0.22em] uppercase text-white/55">{c.label}</span>
                        <span className="mt-1.5 block font-display text-xl sm:text-2xl font-medium tracking-tight text-white truncate group-hover:text-gold-light transition-colors">
                          {c.value}
                        </span>
                      </span>
                      <ArrowIcon className="w-5 h-5 shrink-0 text-white/50 transition-all group-hover:text-gold-light group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Leiðakerfi & merki */}
      <div className="relative z-10 border-t border-white/10 text-white/70">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.jpg"
                alt="Bella Italia merki"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover ring-1 ring-white/20"
              />
              <div>
                <span className="block font-display text-xl font-semibold text-white tracking-tight">Bella Italia</span>
                <span className="text-xs text-sand">{site.tagline}</span>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:bg-white hover:text-ink transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className={colTitle}>Síður</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
              {pageLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className={colTitle}>Borgir</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
              {cityLinks.map((link, i) => (
                <Link key={link.href} href={link.href} className={`hover:text-white transition-colors w-fit ${i === 0 ? "sm:col-span-2" : ""}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 py-5 border-t border-white/10 text-xs text-white/40">
          © {new Date().getFullYear()} {site.legalName}
        </div>
      </div>
    </footer>
  );
}
