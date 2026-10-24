import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import { getContent } from "../lib/content";
import { ArrowIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Hafa samband | Bella Italia",
  description:
    "Hafðu samband við Bella Italia – sími +354 869 4556, sími & WhatsApp +39 338 698 5868, hildur.bellaitalia@gmail.com.",
};

export default function SambandPage() {
  const { site } = getContent();
  const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;

  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/samband-hero.jpg"
          imageAlt="Gult hús með kaffihúsi og sólhlífum á götuhorni í Róm"
          title="Hafa samband"
          text="Það kostar ekkert að fá tilboð."
          size="short"
        />

        <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* Gluggi 1: bæði símanúmerin – íslenska og ítalska (líka WhatsApp) */}
            <RevealOnScroll>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-8 h-full">
                <span className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                  <PhoneIcon />
                </span>
                <h2 className="mt-6 text-xs text-white/50">Sími</h2>
                <ul className="mt-2 space-y-4">
                  <li>
                    <a href={tel(site.phoneIS)} className="font-display text-2xl font-medium tracking-tight hover:text-gold-light transition-colors">
                      {site.phoneIS}
                    </a>
                    <p className="mt-0.5 text-sm text-white/50">Ísland</p>
                  </li>
                  <li>
                    <a href={tel(site.phoneIT)} className="font-display text-2xl font-medium tracking-tight hover:text-gold-light transition-colors">
                      {site.phoneIT}
                    </a>
                    <p className="mt-0.5 text-sm text-white/50 flex flex-wrap items-center gap-x-2">
                      Ítalía · ásamt
                      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
                        <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
            {/* Gluggi 2: netfang */}
            <RevealOnScroll>
              <a
                href={`mailto:${site.email}`}
                className="group block rounded-3xl bg-white/5 border border-white/10 p-8 h-full hover:border-white/30 transition-colors"
              >
                <span className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-colors">
                  <MailIcon />
                </span>
                <h2 className="mt-6 text-xs text-white/50">Netfang</h2>
                <p className="mt-2 font-display text-2xl font-medium tracking-tight break-all">{site.email}</p>
                <p className="mt-1 text-sm text-white/50">Við svörum yfirleitt innan sólarhrings</p>
              </a>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-[1.5rem] md:rounded-[2.5rem] text-white p-6 sm:p-8 md:p-14 overflow-hidden relative">
              <Image src="/images/rome-pantheon.jpg" alt="" fill quality={85} sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
              
              <div className="relative lg:col-span-8">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">{site.legalName}</span>
                <h2 className="mt-3 font-display text-3xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                  Bella Italia – Villur & upplifanir á Ítalíu
                </h2>
                <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
                  Við sníðum allt að ykkar óskum.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
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
              <div className="relative lg:col-span-4 flex justify-center lg:justify-end">
                <Image
                  src="/images/logo-bella-italia.png"
                  alt="Bella Italia – Villur & upplifanir á Ítalíu"
                  width={1200}
                  height={501}
                  sizes="(max-width: 1024px) 80vw, 360px"
                  className="w-full max-w-[360px] h-auto rounded-[1.5rem] bg-white p-4 md:p-5"
                />
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
