import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import InquiryForm from "../components/InquiryForm";
import { site, villaPricing, villaText } from "../data/site";
import { ArrowIcon, CheckIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Villur á Ítalíu | Bella Italia",
  description:
    "Villur og hús með sundlaug um alla Ítalíu – Toskana, Umbria, Le Marche, Puglia og Sikiley – í öllum verðflokkum. Gjaldfrjáls þjónusta þegar bókað er í gegnum Bella Italia.",
};

// Svæðin sem nefnd eru á bellaitalia.is
const regions = [
  { name: "Toskana", note: "Vinsælasta héraðið", image: "/images/gallery-09.jpg" },
  { name: "Umbria", note: "Nágranni Toskana", image: "/images/villa-pool.jpg" },
  { name: "Le Marche", note: "Við Adríahafið", image: "/images/gallery-07.jpg" },
  { name: "Puglia & Sikiley", note: "Suður-Ítalía", image: "/images/gallery-04.webp" },
];

export default function VillurPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/villa-pool.jpg"
          imageAlt="Steinvilla með upplýstri sundlaug í rökkri"
          eyebrow="Villur & hús um alla Ítalíu"
          title="Villur með sundlaug í öllum verðflokkum"
          text="Við erum með fjöldann allan af villum í boði um alla Ítalíu og útbúum tilboð fyrir hverja og eina fjölskyldu, allt eftir óskum hvers og eins."
          actions={
            <>
              <a href="#fyrirspurn" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                Fá tilboð <ArrowIcon className="w-4 h-4" />
              </a>
              <a href={site.villaCatalog} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors">
                Skoða úrval ↗
              </a>
            </>
          }
          scrollTo="#um"
        />

        {/* Intro */}
        <section id="um" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-28 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <RevealOnScroll className="lg:col-span-7">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Að leigja hús á Ítalíu</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Við finnum réttu eignina
              </h2>
              <div className="mt-6 space-y-4 text-ink/65 leading-relaxed text-[16px] md:text-[17px]">
                {villaText.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-5">
              <div className="rounded-[1.5rem] md:rounded-[2rem] bg-forest text-white p-6 md:p-9">
                <h3 className="font-display text-2xl font-medium">Gott að vita</h3>
                <ul className="mt-5 space-y-4 text-[15px] text-white/80 leading-relaxed">
                  {villaText.practical.map((p) => (
                    <li key={p} className="flex gap-3">
                      <CheckIcon className="w-4 h-4 mt-1 text-gold-light shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Svæði */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Svæði</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Hvert á Ítalíu?</h2>
              </div>
              <p className="text-ink/60 max-w-md md:text-right">{villaText.intro[2]}</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {regions.map((r) => (
              <RevealOnScroll key={r.name}>
                <div className="group relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-mist">
                  <Image src={r.image} alt={r.name} fill quality={60} sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                  <div className="absolute bottom-0 p-4 md:p-6 text-white">
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-medium tracking-tight">{r.name}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-white/75">{r.note}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Verð */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <RevealOnScroll className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Verðhugmyndir á leigu</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Viðmið eftir stærð</h2>
              <p className="mt-4 text-ink/60 text-[15px] leading-relaxed">{villaText.pricingNote}</p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-8">
              <div className="rounded-[1.5rem] md:rounded-[2rem] bg-white border border-ink/5 divide-y divide-ink/5 overflow-hidden">
                {villaPricing.map((row) => (
                  <div key={row.size} className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 sm:gap-6 items-baseline px-5 md:px-8 py-4 md:py-5">
                    <span className="font-medium">{row.size}</span>
                    <span className="font-display text-xl md:text-2xl font-medium text-forest">{row.eur}</span>
                    <span className="text-sm text-ink/50 sm:text-right">({row.isk})</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Þjónusta */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <RevealOnScroll>
              <div className="relative aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-mist">
                <Image src="/images/gallery-07.jpg" alt="Villa með sundlaug í Toskana" fill quality={60} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Gjaldfrjáls þjónusta</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Meira en bara húsið</h2>
              <div className="mt-6 space-y-4 text-ink/65 leading-relaxed">
                <p>{villaText.service[0]}</p>
                <p>{villaText.bookingBenefit}</p>
                <p>{villaText.service[1]}</p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {villaText.extras.map((e) => (
                  <li key={e} className="rounded-full bg-mist px-4 py-2 text-sm text-ink/75">{e}</li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </section>

        {/* Fyrirspurn */}
        <section id="fyrirspurn" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32 pb-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <RevealOnScroll className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Villur</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Viltu fá okkur til að finna réttu eignina?
              </h2>
              <p className="mt-4 text-ink/60">
                Þar sem mörg hús eru í boði væri gott að vita dagsetningar, fjölda og
                verðhugmynd fyrir vikudvöl svo við getum þrengt valið. Um leið og við höfum
                svörin finnum við hús sem hentar ykkar hóp sem best.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-8">
              <div className="rounded-[1.5rem] md:rounded-[2rem] bg-white border border-ink/5 p-5 sm:p-6 md:p-10">
                <InquiryForm variant="villur" />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
