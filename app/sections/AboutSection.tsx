import RevealOnScroll from "../components/RevealOnScroll";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <RevealOnScroll>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-terracotta/20 via-gold/10 to-olive/20 rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-6xl text-terracotta/20">BI</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-sm" />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div>
              <span className="text-terracotta text-sm font-medium tracking-[0.3em] uppercase">
                Um okkur
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-brown leading-tight">
                Velkomin til
                <br />
                <span className="text-terracotta italic">Bella Italia</span>
              </h2>
              <div className="mt-8 space-y-4 text-brown/70 leading-relaxed">
                <p>
                  Hildur hefur búið og starfað á Ítalíu í yfir áratug og þekkir
                  landið út og inn. Með persónulega þjónustu og staðbundna
                  þekkingu skapar hún ferðaupplifanir sem enginn ferðaskrifstofa
                  getur boðið.
                </p>
                <p>
                  Hvort sem þú dreymir um rómantískt helgarfrí í Róm eða
                  sólríkar vikur í fallegri Toskana-villu, þá er Bella Italia
                  rétti staðurinn. Við sérsníðum hverja ferð að þínum óskum og
                  tryggjum að upplifunin verði ógleymanleg.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-px bg-terracotta" />
                <span className="text-sm text-terracotta/70 tracking-wider italic">
                  Hildur — Stofnandi Bella Italia
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
