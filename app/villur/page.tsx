import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import InquiryForm from "../components/InquiryForm";
import VillaCard from "../components/VillaCard";
import ServiceCard from "../components/ServiceCard";
import { getContent } from "../lib/content";
import { ArrowIcon, CheckIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Villur á Ítalíu | Bella Italia",
  description:
    "Villur og hús með sundlaug um alla Ítalíu – Toskana, Umbria, Le Marche, Puglia og Sikiley – í öllum verðflokkum. Einkakokkur, ljósmyndari, vínsmökkun og akstur í kringum dvölina. Gjaldfrjáls þjónusta þegar bókað er í gegnum Bella Italia.",
};

// Svæðin sem nefnd eru á bellaitalia.is
const regions = [
  { name: "Toskana", note: "Vinsælasta héraðið", image: "/images/toskana-hills.jpg" },
  { name: "Umbria", note: "Græna hjarta Ítalíu", image: "/images/region-umbria.jpg" },
  { name: "Le Marche", note: "Við Adríahafið", image: "/images/villa-marche-2.jpg" },
  { name: "Puglia", note: "Trulli & ólífulundir", image: "/images/villa-puglia.jpg" },
  { name: "Sikiley", note: "Stórkostleg eyja", image: "/images/region-sikiley.jpg" },
];

export default function VillurPage() {
  const { site, villaPricing, villaText, villas, villaServices } = getContent();
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/villur-hero.jpg"
          imageAlt="Sundlaug við villu í sólsetri"
          title="Villur með sundlaug í öllum verðflokkum"
          text="Við erum með fjöldann allan af villum í boði um alla Ítalíu og útbúum tilboð fyrir hverja og eina fjölskyldu, allt eftir óskum hvers og eins."
          actions={
            <>
              <a href="#fyrirspurn" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                Fá tilboð <ArrowIcon className="w-4 h-4" />
              </a>
              <a href="#villur" className="inline-flex items-center rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors">
                Skoða dæmi um villur
              </a>
            </>
          }
          scrollTo="#um"
        />

        {/* Intro */}
        <section id="um" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-28 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <RevealOnScroll className="lg:col-span-7">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Að leigja hús á Ítalíu</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Við finnum réttu eignina
              </h2>
              <div className="mt-6 space-y-4 text-white/65 leading-relaxed text-[16px] md:text-[17px]">
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

        {/* Dæmi um villur */}
        <section id="villur" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32 scroll-mt-24">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Úrval húsa</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Dæmi um villur</h2>
              </div>
              <p className="text-white/60 max-w-md md:text-right">
                Nokkur dæmi um gerðir af húsum sem eru í boði. Úrvalið er miklu stærra og við finnum
                eign sem passar stærð hópsins, svæði og verðhugmynd.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {villas.map((v) => (
              <RevealOnScroll key={v.id} className="h-full">
                <VillaCard villa={v} ctaHref="#fyrirspurn" large />
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl bg-white/8 p-5 md:p-6">
              <p className="text-white/65 text-[15px] max-w-2xl">
                Viltu skoða fleiri hús? Hér er hluti af úrvalinu hjá samstarfsaðila okkar – en best er
                að senda okkur fyrirspurn svo við getum þrengt valið fyrir ykkur.
              </p>
              <a href={site.villaCatalog} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white hover:text-ink transition-colors">
                Skoða úrval ↗
              </a>
            </div>
          </RevealOnScroll>
        </section>

        {/* Viðbótarþjónusta */}
        <section id="thjonusta" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32 scroll-mt-24">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Viðbótarþjónusta í villuna</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Meira en bara húsið</h2>
              </div>
              <p className="text-white/60 max-w-md md:text-right">{villaText.bookingBenefit}</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {villaServices.map((s) => (
              <RevealOnScroll key={s.id} className="h-full">
                <ServiceCard service={s} />
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-3xl">
              {villaText.service[0]}
            </p>
          </RevealOnScroll>
        </section>

        {/* Svæði */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Svæði</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Hvert á Ítalíu?</h2>
              </div>
              <p className="text-white/60 max-w-md md:text-right">{villaText.intro[2]}</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5">
            {regions.map((r) => (
              <RevealOnScroll key={r.name}>
                <div className="group relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-white/8">
                  <Image src={r.image} alt={r.name} fill quality={85} sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                  <div className="absolute bottom-0 p-4 md:p-5 text-white">
                    <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight">{r.name}</h3>
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
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Verðhugmyndir á leigu</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Viðmið eftir stærð</h2>
              <p className="mt-4 text-white/60 text-[15px] leading-relaxed">{villaText.pricingNote}</p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-8">
              <div className="rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 divide-y divide-white/10 overflow-hidden">
                {villaPricing.map((row) => (
                  <div key={row.size} className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 sm:gap-6 items-baseline px-5 md:px-8 py-4 md:py-5">
                    <span className="font-medium">{row.size}</span>
                    <span className="font-display text-xl md:text-2xl font-medium text-gold-light">{row.eur}</span>
                    <span className="text-sm text-white/50 sm:text-right">({row.isk})</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Fyrirspurn */}
        <section id="fyrirspurn" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32 pb-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <RevealOnScroll className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Villur</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Viltu fá okkur til að finna réttu eignina?
              </h2>
              <p className="mt-4 text-white/60">
                Þar sem mörg hús eru í boði þurfum við að vita dagsetningar, hvaða svæði koma til
                greina og hve mörg þið eruð – fullorðnir, börn og börn undir 2 ára – svo við getum
                þrengt valið. Um leið og við höfum svörin finnum við hús sem hentar ykkar hóp.
              </p>
              <p className="mt-6 text-sm text-white/50">{villaText.service[1]}</p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-8">
              <div className="rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 p-5 sm:p-6 md:p-10">
                <InquiryForm variant="villur" serviceOptions={villaServices.map((s) => s.title)} email={site.email} />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
