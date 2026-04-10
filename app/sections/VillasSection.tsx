import Link from "next/link";
import RevealOnScroll from "../components/RevealOnScroll";

export default function VillasSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-light">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <span className="text-terracotta text-sm font-medium tracking-[0.3em] uppercase">
              Toskana
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
              Villur í <span className="text-terracotta italic">Toskana</span>
            </h2>
            <p className="mt-6 text-brown/60 max-w-2xl mx-auto leading-relaxed">
              Draumkennd dvöl í fallegri villu umkringd vínekrum, ólífutrjám og
              ítölskum sólskinsdögum. Fullkomin lausn fyrir fjölskyldur og
              vinahópa.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Villa Toscana",
              guests: "6-8 gestir",
              desc: "Glæsileg villa með sundlaug og útsýni yfir vínekrur Chianti-héraðsins.",
            },
            {
              title: "Villa Firenze",
              guests: "4-6 gestir",
              desc: "Notaleg villa skammt frá Flórens með einkagarði og hefðbundnu ítölsku eldhúsi.",
            },
            {
              title: "Villa Siena",
              guests: "8-12 gestir",
              desc: "Stórglæsileg eign með fjölmörgum svefnherbergjum, sundlaug og tennisvalll.",
            },
          ].map((villa, i) => (
            <RevealOnScroll key={villa.title}>
              <div
                className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-olive/20 via-gold/10 to-terracotta/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-6xl text-olive/10">
                      {i + 1}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/10 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-brown">
                      {villa.title}
                    </h3>
                    <span className="text-xs text-terracotta tracking-wider uppercase">
                      {villa.guests}
                    </span>
                  </div>
                  <p className="mt-3 text-brown/60 text-sm leading-relaxed">
                    {villa.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="text-center mt-12">
          <RevealOnScroll>
            <Link
              href="/villur"
              className="inline-block px-8 py-4 bg-olive text-cream font-medium tracking-widest text-sm uppercase hover:bg-olive-light transition-colors duration-300"
            >
              Skoða Villur
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
