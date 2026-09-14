import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";
import InquiryForm from "../components/InquiryForm";
import Divider from "../components/Divider";
import { site, villaPricing, villaText } from "../data/site";
import { ArrowIcon, CheckIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Villur á Ítalíu | Bella Italia",
  description:
    "Villur og hús með sundlaug um alla Ítalíu – Toskana, Umbria, Le Marche, Puglia og Sikiley – í öllum verðflokkum. Gjaldfrjáls þjónusta þegar bókað er í gegnum Bella Italia.",
};

const regions = [
  { name: "Toskana", note: "Vinsælasta héraðið – vínekrur, sýprusviðir og miðaldaþorp.", image: "/images/gallery-09.jpg" },
  { name: "Umbria", note: "Græna hjarta Ítalíu, rólegra og nær Róm.", image: "/images/villa-pool.jpg" },
  { name: "Le Marche", note: "Ósnortin sveit milli Apennínafjalla og Adríahafs.", image: "/images/gallery-07.jpg" },
  { name: "Puglia & Sikiley", note: "Suðrið – strendur, trulli-hús og stórkostlegur matur.", image: "/images/gallery-04.webp" },
];

export default function VillurPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grain">
          <Image
            src="/images/villa-pool.jpg"
            alt="Steinvilla með upplýstri sundlaug í rökkri"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85" />

          <div className="relative z-10 text-center px-6 max-w-5xl pt-24">
            <span className="inline-block text-gold/90 text-xs font-medium tracking-[0.4em] uppercase animate-fade-up">
              Bella Italia · Villur & hús um alla Ítalíu
            </span>
            <h1 className="mt-6 font-serif text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-bold text-cream tracking-[0.04em] animate-fade-up-delay-1 leading-[0.85]">
              VILLUR
            </h1>
            <p className="mt-8 text-lg md:text-xl text-cream/70 font-light max-w-2xl mx-auto animate-fade-up-delay-2 leading-relaxed">
              Öll húsin með sundlaug, uppi í sveit í rólegheitum – og við finnum
              réttu eignina fyrir ykkar hóp, í öllum verðflokkum.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
              <a
                href="#fyrirspurn"
                className="inline-block px-10 py-4 bg-gold text-[#1C0F0A] text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
              >
                Fá tilboð
              </a>
              <a
                href={site.villaCatalog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-cream/40 text-cream text-sm font-medium tracking-[0.2em] uppercase hover:bg-cream/10 transition-all"
              >
                Skoða úrval <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ INTRO ═══════════════════════ */}
        <section className="py-24 md:py-32 bg-[#F0E6D3]">
          <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <RevealOnScroll className="md:col-span-7">
              <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">Að leigja hús á Ítalíu</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-brown leading-tight">
                Við finnum <span className="text-terracotta italic">réttu eignina</span>
              </h2>
              <div className="mt-8 space-y-5 text-brown/70 leading-relaxed text-[17px]">
                {villaText.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-5">
              <div className="bg-brown text-cream p-8 md:p-10">
                <h3 className="font-serif text-2xl">Gott að vita</h3>
                <ul className="mt-6 space-y-5 text-sm text-cream/75 leading-relaxed">
                  {villaText.practical.map((p) => (
                    <li key={p} className="flex gap-3">
                      <CheckIcon className="w-4 h-4 mt-1 text-gold shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════ SVÆÐI ═══════════════════════ */}
        <section className="pb-24 md:pb-32 bg-[#F0E6D3]">
          <div className="mx-auto max-w-7xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">Svæði</span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl text-brown leading-tight">
                  Hvert á <span className="text-terracotta italic">Ítalíu?</span>
                </h2>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {regions.map((r) => (
                <RevealOnScroll key={r.name}>
                  <div className="group relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="font-serif text-3xl text-white">{r.name}</h3>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">{r.note}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <Divider bg="bg-[#1C0F0A]" color="text-gold/50" line="bg-cream/10" />

        {/* ═══════════════════════ VERÐHUGMYNDIR ═══════════════════════ */}
        <section className="py-24 md:py-32 bg-[#1C0F0A]">
          <div className="mx-auto max-w-5xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">Verðhugmyndir á leigu</span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl text-cream leading-tight">
                  Viðmið eftir <span className="text-gold italic">stærð</span>
                </h2>
                <p className="mt-5 text-cream/50 max-w-2xl mx-auto text-sm leading-relaxed">{villaText.pricingNote}</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="border border-gold/20 divide-y divide-cream/10">
                {villaPricing.map((row) => (
                  <div
                    key={row.size}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 items-baseline px-6 py-5 hover:bg-cream/[0.03] transition-colors"
                  >
                    <span className="font-serif text-xl text-cream">{row.size}</span>
                    <span className="font-serif text-2xl text-gold">{row.eur}</span>
                    <span className="text-sm text-cream/45 sm:text-right">{row.isk}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-cream/40">
                Verð í krónum eru gróft viðmið og fara eftir gengi hverju sinni.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════ ÞJÓNUSTA ═══════════════════════ */}
        <section className="py-24 md:py-32 bg-[#F0E6D3]">
          <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/gallery-07.jpg" alt="Villa með sundlaug í Toskana" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">Gjaldfrjáls þjónusta</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-brown leading-tight">
                Meira en bara <span className="text-terracotta italic">húsið</span>
              </h2>
              <div className="mt-7 space-y-5 text-brown/70 leading-relaxed">
                {villaText.service.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <p>{villaText.bookingBenefit}</p>
              </div>
              <ul className="mt-7 flex flex-wrap gap-2">
                {villaText.extras.map((e) => (
                  <li key={e} className="px-3 py-1.5 text-[11px] font-medium tracking-wider uppercase bg-brown/5 text-brown border border-brown/10">
                    {e}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════ FYRIRSPURN ═══════════════════════ */}
        <section id="fyrirspurn" className="py-24 md:py-32 bg-[#0D0905] scroll-mt-16">
          <div className="mx-auto max-w-3xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-10">
                <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">Villur</span>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl text-cream">
                  Viltu fá okkur til að aðstoða þig við að finna{" "}
                  <span className="text-gold italic">réttu eignina?</span>
                </h2>
                <p className="mt-4 text-cream/50 text-sm max-w-xl mx-auto">
                  Þar sem mörg hús eru í boði hjálpar að vita dagsetningar, fjölda og
                  verðhugmynd svo við getum þrengt valið. Um leið og við höfum svörin
                  finnum við hús sem hentar ykkar hóp sem best.
                </p>
              </div>
              <InquiryForm variant="villur" />
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
