import Link from "next/link";
import Image from "next/image";
import { site } from "../data/site";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="px-3 md:px-4 pb-3 md:pb-4 pt-6">
      <div className="mx-auto max-w-[1400px] rounded-[2rem] md:rounded-[2.5rem] bg-ink text-white/70 overflow-hidden">
        <div className="px-6 md:px-12 py-14 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.jpg"
                alt="Bella Italia merki"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover ring-1 ring-white/20"
              />
              <div>
                <span className="block font-display text-2xl font-semibold text-white tracking-tight">
                  Bella Italia
                </span>
                <span className="text-xs text-sand">Róm & Villur á Ítalíu</span>
              </div>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed max-w-sm">
              Villur & hús um alla Ítalíu. Persónuleg þjónusta og öðruvísi ferðir um Róm
              og nágrenni. Þjónusta fyrir einstaklinga og hópa, stóra sem smáa.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: site.instagram, label: "Instagram", icon: <InstagramIcon className="w-4.5 h-4.5" /> },
                { href: site.facebook, label: "Facebook", icon: <FacebookIcon className="w-4.5 h-4.5" /> },
                { href: site.whatsapp, label: "WhatsApp", icon: <WhatsAppIcon className="w-4.5 h-4.5" /> },
              ].map((s) => (
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

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-sand mb-5">Síður</h4>
            <div className="flex flex-col gap-3 text-[15px]">
              {[
                { href: "/", label: "Heim" },
                { href: "/rom", label: "Róm – ferðir & upplifanir" },
                { href: "/villur", label: "Villur á Ítalíu" },
                { href: "/fyrirspurn", label: "Senda fyrirspurn" },
                { href: "/samband", label: "Hafa samband" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-sand mb-5">
              Ertu að fylgja okkur á samfélagsmiðlum?
            </h4>
            <div className="flex flex-col gap-3 text-[15px]">
              <p className="text-white">{site.legalName}</p>
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors break-all">
                {site.email}
              </a>
              <a href={`tel:${site.phoneIS.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                {site.phoneIS} <span className="text-white/40">· Ísland</span>
              </a>
              <a href={`tel:${site.phoneIT.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                {site.phoneIT} <span className="text-white/40">· Ítalía / WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-12 py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} {site.legalName} · Allur réttur áskilinn</span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#009246]" />
            <span className="w-3 h-3 rounded-full bg-white/80" />
            <span className="w-3 h-3 rounded-full bg-[#CE2B37]" />
            <span className="ml-1">Made with amore</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
