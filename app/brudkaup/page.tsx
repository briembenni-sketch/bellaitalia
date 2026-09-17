import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import InquiryForm from "../components/InquiryForm";
import { getContent } from "../lib/content";
import { ArrowIcon, CheckIcon } from "../components/Icons";

export function generateMetadata(): Metadata {
  return {
    title: "Brúðkaup & sérstök tilefni á Ítalíu | Bella Italia",
    description: getContent().wedding.lead,
  };
}

export default function BrudkaupPage() {
  const { site, wedding } = getContent();
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image={wedding.image}
          imageAlt={wedding.imageAlt}
          title={wedding.title}
          text={wedding.lead}
          actions={
            <>
              <a href="#fyrirspurn" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                Senda fyrirspurn <ArrowIcon className="w-4 h-4" />
              </a>
              <Link href="/villur" className="inline-flex items-center rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors">
                Skoða villur
              </Link>
            </>
          }
          scrollTo="#um"
        />

        <section id="um" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-28 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <RevealOnScroll className="lg:col-span-7">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">{wedding.eyebrow}</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Dagurinn sem á að vera fullkominn
              </h2>
              <div className="mt-6 space-y-4 text-white/65 leading-relaxed text-[16px] md:text-[17px]">
                {wedding.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/55 leading-relaxed">{wedding.ideas.join("  ·  ")}</p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-white/8">
                <Image src={wedding.image2} alt={wedding.image2Alt} fill quality={85} sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="relative mt-20 md:mt-32 min-h-[70svh] flex items-center overflow-hidden">
          <Image src="/images/dinner-terrace.jpg" alt="Kvöldverður á verönd í Toskana" fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/60" />
          <RevealOnScroll className="relative z-10 w-full">
            <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24 text-white">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Allt á einum stað</span>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.05]">
                    Við tengjum saman villuna og þjónustuna
                  </h2>
                  <p className="mt-4 text-white/75 leading-relaxed">
                    Sama teymi sem sér um villurnar okkar og viðbótarþjónustuna í þær hjálpar við að
                    útfæra tilefnið – frá húsi fyrir allan hópinn til kokks, ljósmyndara og akstur.
                  </p>
                </div>
                <ul className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {wedding.extras.map((e) => (
                    <li key={e} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3.5 text-[15px]">
                      <CheckIcon className="w-4 h-4 text-gold-light shrink-0" /> {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        <section id="fyrirspurn" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32 pb-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <RevealOnScroll className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Brúðkaup & tilefni</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Segðu okkur frá tilefninu</h2>
              <p className="mt-4 text-white/60">
                Hvenær, hve mörg og hvar á Ítalíu – við komum til baka með hugmyndir og tillögu.
              </p>
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
                <InquiryForm variant="almenn" defaultInterest="Brúðkaup / sérstakt tilefni" email={site.email} />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
