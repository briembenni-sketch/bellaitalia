import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata = {
  title: "Róm | Bella Italia",
  description: "Sérhannaðar ferðir til Rómar — einkaskoðunarferðir, vandvalin hótel og matarupplifanir.",
};

const highlights = [
  {
    title: "Colosseum og Forum Romanum",
    desc: "Einkaskoðunarferð um helstu kennileiti Rómar með reyndum leiðsögumanni.",
  },
  {
    title: "Vatíkanið",
    desc: "Forskoðunarferð inn í Sixtínsku kapelluna og Péturskirkju án mannþyrpinga.",
  },
  {
    title: "Trastevere hverfið",
    desc: "Matarferð um fallega götur Trastevere — upprunalegt Róm á bestu forsendum.",
  },
  {
    title: "Huldir gimsteinar",
    desc: "Leyndir staðir sem aðeins heimamenn þekkja — frá Aventine-hæðinni til Appía-veginn.",
  },
];

const includes = [
  "Gisting á 4-5 stjörnu hóteli",
  "Einkaskoðunarferðir með leiðsögumanni",
  "Flugvallarflutningar",
  "Matarupplifanir og vínsmökkun",
  "Sérhannaður ferðaáætlun",
  "24/7 stuðningur á staðnum",
];

export default function RomPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden grain">
          <div className="absolute inset-0 bg-gradient-to-b from-brown via-brown-light to-terracotta/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/60 via-transparent to-brown/40" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl" />

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase animate-fade-up">
              Ferðir til Rómar
            </span>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream tracking-wide animate-fade-up-delay-1 leading-none">
              RÓM
            </h1>
            <p className="mt-6 text-xl text-cream/70 font-light animate-fade-up-delay-2">
              Upplifðu eilífu borgina eins og heimamaður
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-24 bg-cream">
          <div className="mx-auto max-w-6xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <span className="text-terracotta text-sm font-medium tracking-[0.3em] uppercase">
                  Upplifanir
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl text-brown">
                  Hápunktar <span className="text-terracotta italic">ferðarinnar</span>
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((item, i) => (
                <RevealOnScroll key={item.title}>
                  <div className="flex gap-6 p-8 bg-white rounded-sm hover:shadow-lg transition-all duration-500">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-terracotta/10 rounded-full">
                      <span className="font-serif text-xl text-terracotta">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="text-brown/60 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-24 bg-brown text-cream">
          <div className="mx-auto max-w-4xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
                  Innifalið
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl text-cream">
                  Hvað er <span className="text-gold italic">innifalið</span>?
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {includes.map((item) => (
                  <div key={item} className="flex items-center gap-3 py-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-cream/80">{item}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="mt-16 text-center">
                <p className="text-cream/50 text-sm mb-6">
                  Verð hefst frá 250.000 kr. á mann. Verð fer eftir lengd dvalar og óskum.
                </p>
                <Link
                  href="/pantadu"
                  className="inline-block px-10 py-4 bg-terracotta text-cream font-medium tracking-widest text-sm uppercase hover:bg-terracotta-dark transition-colors duration-300"
                >
                  Senda fyrirspurn
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
