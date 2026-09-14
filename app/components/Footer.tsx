import Link from "next/link";
import Image from "next/image";
import { site } from "../data/site";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0D0905] text-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.jpg"
                alt="Bella Italia merki"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full ring-1 ring-gold/30 object-cover"
              />
              <div>
                <span className="block font-serif text-2xl font-semibold tracking-[0.15em] text-cream">
                  BELLA ITALIA
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
                  Róm & Villur á Ítalíu
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              Villur & hús um alla Ítalíu. Persónuleg þjónusta og öðruvísi ferðir
              um Róm og nágrenni. Þjónusta fyrir einstaklinga og hópa, stóra sem
              smáa.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Flýtileiðir</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Heim" },
                { href: "/rom", label: "Róm – ferðir & upplifanir" },
                { href: "/villur", label: "Villur á Ítalíu" },
                { href: "/fyrirspurn", label: "Senda fyrirspurn" },
                { href: "/samband", label: "Hafa samband" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">
              Ertu að fylgja okkur á samfélagsmiðlum?
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-cream">{site.legalName}</p>
              <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">
                {site.email}
              </a>
              <a href={`tel:${site.phoneIS.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">
                {site.phoneIS} <span className="text-cream/40">· Ísland</span>
              </a>
              <a href={`tel:${site.phoneIT.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">
                {site.phoneIT} <span className="text-cream/40">· Ítalía / WhatsApp</span>
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <span>
            © {new Date().getFullYear()} {site.legalName} · Allur réttur áskilinn
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#009246]" />
            <span className="w-4 h-[2px] bg-cream/60" />
            <span className="w-4 h-[2px] bg-[#CE2B37]" />
            <span className="ml-2 tracking-[0.2em] uppercase">Made with amore</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
