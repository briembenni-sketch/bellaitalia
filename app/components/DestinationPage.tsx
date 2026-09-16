import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import RevealOnScroll from "./RevealOnScroll";
import InquiryForm from "./InquiryForm";
import type { Destination } from "../data/site";
import { getContent } from "../lib/content";
import { ArrowIcon, CheckIcon } from "./Icons";

/** Sameiginleg uppsetning fyrir Flórens, Napoli·Amalfi·Pompei og Feneyjar. */
export default function DestinationPage({ destination: d }: { destination: Destination }) {
  const { destinations, site } = getContent();
  const others = destinations.filter((o) => o.slug !== d.slug);

  return (
    <>
      <Navbar />
      <main>
        <Hero
          image={d.image}
          imageAlt={d.imageAlt}
          title={d.title}
          text={d.lead}
          actions={
            <>
              <a href="#thjonusta" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                Skoða þjónustu <ArrowIcon className="w-4 h-4" />
              </a>
              <a href="#fyrirspurn" className="inline-flex items-center rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors">
                Senda fyrirspurn
              </a>
            </>
          }
          scrollTo="#um"
        />

        {/* Intro */}
        <section id="um" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-28 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <RevealOnScroll className="lg:col-span-7">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">{d.eyebrow}</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Skoðunarferðir og aðstoð við að skipuleggja ferðina
              </h2>
              <div className="mt-6 space-y-4 text-white/65 leading-relaxed text-[16px] md:text-[17px]">
                {d.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-5">
              <div className="rounded-[1.5rem] md:rounded-[2rem] bg-forest text-white p-6 md:p-9">
                <h3 className="font-display text-2xl font-medium">Við sjáum um</h3>
                <ul className="mt-5 space-y-3 text-[15px] text-white/85">
                  {d.services.map((s) => (
                    <li key={s.title} className="flex gap-3">
                      <CheckIcon className="w-4 h-4 mt-1 text-gold-light shrink-0" />
                      <span>{s.title}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-white/65 leading-relaxed">
                  Sími {site.phoneIS} (Ísland) · {site.phoneIT} (Ítalía / WhatsApp)
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Þjónusta */}
        <section id="thjonusta" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32 scroll-mt-24">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Þjónusta í {d.name}</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Hvað er í boði</h2>
              </div>
              <p className="text-white/60 max-w-md md:text-right">
                Verð fer eftir fjölda og útfærslu – sendið okkur fyrirspurn og við gefum ykkur tilboð.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {d.services.map((s, i) => (
              <RevealOnScroll key={s.title} className="h-full">
                <article className="flex flex-col h-full rounded-3xl bg-white/5 border border-white/10 p-6 md:p-7 hover:border-white/25 transition-colors">
                  <span className="font-display text-4xl font-medium text-gold/70 leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-tight leading-tight">{s.title}</h3>
                  <p className="mt-3 text-[15px] text-white/60 leading-relaxed">{s.text}</p>
                  <a
                    href="#fyrirspurn"
                    className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-white transition-colors"
                  >
                    Fá tilboð <ArrowIcon className="w-4 h-4" />
                  </a>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Skipulagning */}
        <section className="relative mt-20 md:mt-32 min-h-[70svh] flex items-center overflow-hidden">
          <Image src={d.cardImage} alt={d.imageAlt} fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/25" />
          <RevealOnScroll className="relative z-10 w-full">
            <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24 text-white">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="md:col-span-8">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Aðstoð við skipulagningu</span>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                    Við setjum ferðina saman fyrir ykkur
                  </h2>
                  <p className="mt-4 text-white/70 max-w-xl">{d.planning}</p>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <a href="#fyrirspurn" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-4 text-sm font-semibold hover:bg-sand-light transition-colors">
                    Senda fyrirspurn <ArrowIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* Fyrirspurn */}
        <section id="fyrirspurn" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <RevealOnScroll className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">{d.name}</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Senda fyrirspurn</h2>
              <p className="mt-4 text-white/60">Veldu þjónustu og við höfum samband með tilboð og lausa tíma.</p>
              <p className="mt-6 text-sm text-white/50">
                {site.phoneIS} (Ísland)
                <br />
                {site.phoneIT} (Ítalía / WhatsApp)
                <br />
                {site.email}
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-8">
              <div className="rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 p-5 sm:p-6 md:p-10">
                <InquiryForm variant="borg" destination={d.name} options={d.services.map((s) => s.title)} email={site.email} />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Aðrar borgir */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-28 pb-20">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Fleiri borgir</span>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.05]">Hvert annað á Ítalíu?</h2>
              </div>
              <Link href="/villur" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white hover:text-ink transition-colors w-fit">
                Eða vika í villu <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5">
            {others.map((o) => (
              <RevealOnScroll key={o.slug}>
                <Link href={o.custom ? `/${o.slug}` : `/borgir/${o.slug}`} className="group relative block aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-ink">
                  <Image src={o.cardImage} alt={o.imageAlt} fill quality={85} sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
                  <div className="absolute bottom-0 p-5 text-white">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-sand">{o.eyebrow}</span>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl font-medium tracking-tight">{o.title}</h3>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
