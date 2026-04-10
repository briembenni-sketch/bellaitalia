import Link from "next/link";
import RevealOnScroll from "../components/RevealOnScroll";

export default function RomeSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brown via-brown-light to-olive/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-terracotta/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
                Róm
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
                Eilífa borgin
                <br />
                <span className="text-gold italic">bíður þín</span>
              </h2>
              <div className="mt-8 space-y-4 text-cream/70 leading-relaxed">
                <p>
                  Upplifðu Róm eins og heimamaður. Við leiðbeinum þér í gegnum
                  huldar götur, bestu veitingastaðina og sögufrægu
                  kennileitina — allt sérsniðið að þínum áhuga.
                </p>
                <p>
                  Ferðirnar okkar innihalda gistingu á vandvöldum hótelum,
                  einkaskoðunarferðir, matarupplifanir og flutning.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Einkaskoðunarferðir",
                  "Vandvalin hótel",
                  "Matarupplifanir",
                  "Staðbundin þekking",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-cream/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/rom"
                className="mt-10 inline-block px-8 py-4 bg-terracotta text-cream font-medium tracking-widest text-sm uppercase hover:bg-terracotta-dark transition-colors duration-300"
              >
                Skoða Rómar ferðir
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-terracotta/30 via-gold/20 to-olive/30 rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-8xl text-cream/10">R</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20 rounded-sm" />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
