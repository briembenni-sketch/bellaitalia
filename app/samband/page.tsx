import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getContent } from "../lib/content";
import { ArrowIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Hafa samband | Bella Italia",
  description:
    "Hafðu samband við Bella Italia – sími +354 869 4556, sími & WhatsApp +39 338 698 5868, hildur.bellaitalia@gmail.com.",
};

const card = "rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 flex items-center gap-4 md:gap-5";
const iconBox = "w-12 h-12 shrink-0 rounded-xl bg-white/10 text-white flex items-center justify-center transition-colors";
const value = "block font-display text-xl xl:text-2xl font-medium tracking-tight whitespace-nowrap";

export default function SambandPage() {
  const { site } = getContent();
  const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;

  return (
    <>
      <Navbar />
      <main>
        {/* Þétt síða: fyrirsögn og tengiliðaupplýsingar sjást strax, myndin til hliðar */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24">
          <div className="animate-fade-up-delay-1">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.05]">
              Hafa samband
            </h1>
            <p className="mt-3 text-white/70 md:text-lg leading-relaxed max-w-xl">
              Það kostar ekkert að fá tilboð. Við svörum yfirleitt innan sólarhrings.
            </p>
          </div>

          {/* Myndin fylgir hæð glugganna: byrjar við efri brún þeirra og endar við hnappana */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-7 flex flex-col animate-fade-up-delay-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {/* Sími – Ísland */}
                <a href={tel(site.phoneIS)} className={`group ${card} hover:border-white/30 transition-colors`}>
                  <span className={`${iconBox} group-hover:bg-forest`}>
                    <PhoneIcon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/50">Sími · Ísland</span>
                    <span className={`${value} group-hover:text-gold-light transition-colors`}>{site.phoneIS}</span>
                  </span>
                </a>

                {/* Sími & WhatsApp – Ítalía */}
                <div className={card}>
                  <span className={iconBox}>
                    <PhoneIcon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/50">Sími & WhatsApp · Ítalía</span>
                    <a href={tel(site.phoneIT)} className={`${value} hover:text-gold-light transition-colors`}>
                      {site.phoneIT}
                    </a>
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" /> Opna í WhatsApp
                    </a>
                  </span>
                </div>

                {/* Netfang */}
                <a href={`mailto:${site.email}`} className={`group sm:col-span-2 ${card} hover:border-white/30 transition-colors`}>
                  <span className={`${iconBox} group-hover:bg-forest`}>
                    <MailIcon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/50">Netfang</span>
                    <span className="block font-display text-base min-[400px]:text-lg sm:text-2xl font-medium tracking-tight break-all group-hover:text-gold-light transition-colors">{site.email}</span>
                  </span>
                </a>
              </div>

              <div className="mt-4 md:mt-auto md:pt-6 flex flex-wrap gap-3">
                <Link href="/fyrirspurn" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                  Senda fyrirspurn <ArrowIcon className="w-4 h-4" />
                </Link>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm hover:bg-white hover:text-ink transition-colors">
                  <InstagramIcon className="w-4 h-4" /> Instagram
                </a>
                <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm hover:bg-white hover:text-ink transition-colors">
                  <FacebookIcon className="w-4 h-4" /> Facebook
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[320px] lg:min-h-0 rounded-2xl overflow-hidden animate-fade-up-delay-2">
              <Image
                src="/images/samband-hero.jpg"
                alt="Gult hús með kaffihúsi og sólhlífum á götuhorni í Róm"
                fill
                preload
                quality={85}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
