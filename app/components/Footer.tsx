import Link from "next/link";
import Image from "next/image";
import { site, destinations } from "../data/site";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./Icons";

const pageLinks = [
  { href: "/", label: "Heim" },
  { href: "/villur", label: "Villur á Ítalíu" },
  { href: "/villur#thjonusta", label: "Viðbótarþjónusta í villuna" },
  { href: "/brudkaup", label: "Brúðkaup & sérstök tilefni" },
  { href: "/fyrirspurn", label: "Senda fyrirspurn" },
  { href: "/samband", label: "Hafa samband" },
];

const cityLinks = [
  { href: "/borgir", label: "Skoðunarferðir & skipulagning" },
  ...destinations.map((d) => ({ href: d.custom ? `/${d.slug}` : `/borgir/${d.slug}`, label: d.navLabel })),
];

export default function Footer() {
  return (
    <footer className="px-2.5 md:px-4 pb-2.5 md:pb-4 pt-6">
      <div className="mx-auto max-w-[1400px] rounded-[1.5rem] md:rounded-[2.5rem] bg-ink text-white/70 overflow-hidden">
        <div className="px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.jpg"
                alt="Bella Italia merki"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover ring-1 ring-white/20"
              />
              <div>
                <span className="block font-display text-2xl font-semibold text-white tracking-tight">Bella Italia</span>
                <span className="text-xs text-sand">{site.tagline}</span>
              </div>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed max-w-sm">
              Villur & hús með sundlaug um alla Ítalíu, viðbótarþjónusta í villuna og aðstoð við
              skoðunarferðir í Róm, Flórens, Napoli, Amalfi, Pompei og Feneyjum. Persónuleg þjónusta
              fyrir einstaklinga og hópa, stóra sem smáa.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: site.instagram, label: "Instagram", icon: <InstagramIcon className="w-[18px] h-[18px]" /> },
                { href: site.facebook, label: "Facebook", icon: <FacebookIcon className="w-[18px] h-[18px]" /> },
                { href: site.whatsapp, label: "WhatsApp", icon: <WhatsAppIcon className="w-[18px] h-[18px]" /> },
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
              {pageLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-sand mb-5">Borgir</h4>
            <div className="flex flex-col gap-3 text-[15px]">
              {cityLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-sand mb-5">Hafa samband</h4>
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

        <div className="px-6 md:px-12 py-5 border-t border-white/10 text-xs text-white/40">
          © {new Date().getFullYear()} {site.legalName}
        </div>
      </div>
    </footer>
  );
}
