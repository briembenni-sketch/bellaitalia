import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import InquiryForm from "../components/InquiryForm";
import ServiceCard from "../components/ServiceCard";
import { getContent } from "../lib/content";
import { villaCollections } from "../data/site";
import { ArrowIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Villur á Ítalíu | Bella Italia",
  description:
    "Villur og hús með sundlaug um alla Ítalíu – Toskana, Umbria, Le Marche, Norður-Ítalía og Sikiley – í öllum verðflokkum. Einkakokkur, ljósmyndari, vínsmökkun og akstur í kringum dvölina. Gjaldfrjáls þjónusta þegar bókað er í gegnum Bella Italia.",
};

export default function VillurPage() {
  const { site, villaText, villas, villaServices } = getContent();
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/villa-sundlaug-2.jpg"
          imagePosition="object-[28%_center]"
          imageAlt="Steinvilla með blárri sundlaug, lavender-garði og skógivöxnum hæðum undir bláum himni"
          title="Villur með sundlaug í öllum verðflokkum"
          text="Við finnum réttu villuna fyrir ykkar hóp – það kostar ekkert að fá tilboð."
          actions={
            <>
              <a href="#fyrirspurn" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                Fá tilboð <ArrowIcon className="w-4 h-4" />
              </a>
              <a href="#villur" className="inline-flex items-center rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors">
                Skoða svæðin
              </a>
            </>
          }
          scrollTo="#um"
        />

        {/* Intro */}
        <section id="um" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-12 md:pt-20 scroll-mt-24">
          <RevealOnScroll>
            <div className="mb-8 md:mb-10">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Að leigja hús á Ítalíu</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Við finnum réttu eignina
              </h2>
            </div>
          </RevealOnScroll>
          {/* Gott að vita – stuttir punktar í einni röð */}
          <RevealOnScroll>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-10 lg:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]"
              style={{ "--cols": Math.min(villaText.practical.length, 4) } as React.CSSProperties}
            >
              {villaText.practical.map((p, i) => (
                <li key={p} className="border-t border-white/15 pt-5 pb-7 lg:pb-0">
                  <span className="font-display text-sm text-gold-light tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 font-display text-lg md:text-xl font-medium tracking-tight leading-snug text-white/90 text-balance">{p}</p>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </section>

        {/* Úrvalið eftir svæðum – eitt spjald á hérað, vísar á villurnar þar */}
        <section id="villur" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-10 md:pt-20 scroll-mt-24">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Veldu svæði</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Brot af því úrvali sem við bjóðum uppá</h2>
              </div>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-5">
            {villas.map((v, i) => {
              // Tvö stór spjöld efst og þrjú undir; á síma fær síðasta spjaldið fulla breidd ef fjöldinn er oddatala
              const lastOdd = i === villas.length - 1 && villas.length % 2 === 1;
              const aspect = i < 2 ? "aspect-[4/5] sm:aspect-[16/10]" : lastOdd ? "aspect-[16/9] lg:aspect-[4/3]" : "aspect-[4/5] sm:aspect-[4/3]";
              return (
              <RevealOnScroll key={v.id} className={`${i < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${lastOdd ? "col-span-2" : ""}`}>
                <a
                  href={v.catalogUrl ?? site.villaCatalog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden bg-white/8 ${aspect}`}
                >
                  <Image src={v.image} alt={v.imageAlt} fill quality={85} sizes="(max-width: 1024px) 50vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-ink/35 group-hover:bg-ink/25 transition-colors" />
                  <div className="relative z-10 px-4 text-center text-white">
                    <h3 className={`font-display text-2xl sm:text-3xl ${i < 2 ? "md:text-5xl" : "md:text-4xl"} font-medium tracking-[0.08em] uppercase drop-shadow`}>{v.name}</h3>
                    <span className="mt-3 inline-flex items-center rounded-full bg-white/15 group-hover:bg-white group-hover:text-ink px-3 py-1.5 text-xs font-semibold transition-colors">
                      Skoða villur ↗
                    </span>
                  </div>
                </a>
              </RevealOnScroll>
              );
            })}
          </div>
          <RevealOnScroll>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl bg-white/8 p-5 md:p-6">
              <p className="text-white/65 text-[15px] max-w-2xl">Fleiri hús hjá samstarfsaðila okkar.</p>
              <a href={site.villaCatalog} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white hover:text-ink transition-colors">
                Skoða úrval ↗
              </a>
            </div>
          </RevealOnScroll>
        </section>

        {/* Villur eftir áhugamálum */}
        <section id="ahugamal" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32 scroll-mt-24">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Golf, tennis & stórfjölskyldan</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Villur eftir áhugamálum</h2>
              </div>
              <p className="text-white/60 max-w-md md:text-right">Nokkrar valdar villur í hverjum flokki – við bókum fyrir ykkur.</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {villaCollections.map((c) => (
              <RevealOnScroll key={c.title} className="h-full">
                <article className="group flex flex-col h-full rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/8">
                    <Image src={c.image} alt={c.imageAlt} fill quality={85} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                    <div className="absolute bottom-0 p-5 md:p-6 text-white">
                      <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">{c.title}</h3>
                      <p className="mt-1 text-sm text-white/75">{c.note}</p>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    {c.villas.length > 0 ? (
                      <ul className="divide-y divide-white/10">
                        {c.villas.map((v) => (
                          <li key={v.href}>
                            <a href={v.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 py-2.5 text-[15px] text-white/80 hover:text-white transition-colors">
                              {v.name} <span aria-hidden>↗</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[15px] text-white/60 leading-relaxed">Segðu okkur hvað þið leitið að og við sendum ykkur tillögur að villum.</p>
                    )}
                    <a href="#fyrirspurn" className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-white transition-colors">
                      Fá tillögur <ArrowIcon className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
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
                Dagsetningar, svæði og fjöldi – fullorðnir, börn og börn undir 2 ára – og við finnum
                hús sem hentar.
              </p>
              {villaText.service.map((p) => (
                <p key={p} className="mt-6 text-sm text-white/50">{p}</p>
              ))}
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-8">
              <div className="rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 p-5 sm:p-6 md:p-10">
                <InquiryForm variant="villur" serviceOptions={villaServices.map((s) => ({ id: s.id, title: s.title }))} email={site.email} />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
