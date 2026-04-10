import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata = {
  title: "Villur í Toskana | Bella Italia",
  description: "Leigðu glæsilega villu í Toskana — sundlaugar, vínekrur og ítölsk draumaupplifun.",
};

const villas = [
  {
    title: "Villa Toscana",
    location: "Chianti, Toskana",
    guests: "6-8 gestir",
    bedrooms: "4 svefnherbergi",
    features: ["Sundlaug", "Vínekrur", "Einkagarður", "Útsýni yfir dal"],
    desc: "Glæsileg villa í hjarta Chianti-héraðsins með stórbrotnu útsýni yfir vínekrur. Fullkomin fyrir fjölskyldur eða vinahópa sem vilja upplifun ítalsks landbúnaðarlífs.",
  },
  {
    title: "Villa Firenze",
    location: "Nálægt Flórens",
    guests: "4-6 gestir",
    bedrooms: "3 svefnherbergi",
    features: ["Einkagarður", "Ítalskt eldhús", "Verönd", "Nálægt Flórens"],
    desc: "Notaleg villa aðeins 20 mínútna akstur frá Flórens. Huggulegur garður og hefðbundið ítalskt eldhús — fullkomin til að njóta toskanskrar matarmenningar.",
  },
  {
    title: "Villa Siena",
    location: "Nálægt Siena",
    guests: "8-12 gestir",
    bedrooms: "6 svefnherbergi",
    features: ["Sundlaug", "Tennisvöllur", "Vínkjallari", "Stórt svæði"],
    desc: "Stórglæsileg eign fyrir stóra hópa. Fallegur vínkjallari, sundlaug og tennisvöllur — allt sem þarf fyrir ógleymanleg sumarfrí á Ítalíu.",
  },
];

export default function VillurPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden grain">
          <div className="absolute inset-0 bg-gradient-to-b from-olive via-olive-light/70 to-gold/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/50 via-transparent to-brown/30" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase animate-fade-up">
              Toskana
            </span>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream tracking-wide animate-fade-up-delay-1 leading-none">
              VILLUR
            </h1>
            <p className="mt-6 text-xl text-cream/70 font-light animate-fade-up-delay-2">
              Draumkennd dvöl í hjarta Toskana
            </p>
          </div>
        </section>

        {/* Villas list */}
        <section className="py-24 bg-cream">
          <div className="mx-auto max-w-6xl px-6">
            <div className="space-y-24">
              {villas.map((villa, i) => (
                <RevealOnScroll key={villa.title}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                      i % 2 === 1 ? "md:direction-rtl" : ""
                    }`}
                  >
                    <div className={i % 2 === 1 ? "md:order-2" : ""}>
                      <div className="relative">
                        <div className="aspect-[4/3] bg-gradient-to-br from-olive/20 via-gold/15 to-terracotta/20 rounded-sm overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-serif text-8xl text-olive/10">
                              {i + 1}
                            </span>
                          </div>
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/20 rounded-sm -z-10" />
                      </div>
                    </div>

                    <div className={i % 2 === 1 ? "md:order-1" : ""}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-terracotta tracking-wider uppercase font-medium">
                          {villa.location}
                        </span>
                        <span className="text-brown/20">|</span>
                        <span className="text-xs text-brown/50">
                          {villa.guests}
                        </span>
                        <span className="text-brown/20">|</span>
                        <span className="text-xs text-brown/50">
                          {villa.bedrooms}
                        </span>
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl text-brown">
                        {villa.title}
                      </h2>
                      <p className="mt-4 text-brown/60 leading-relaxed">
                        {villa.desc}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {villa.features.map((f) => (
                          <span
                            key={f}
                            className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-olive/10 text-olive rounded-sm"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/pantadu"
                        className="mt-8 inline-block px-8 py-3 bg-olive text-cream font-medium tracking-widest text-sm uppercase hover:bg-olive-light transition-colors duration-300"
                      >
                        Fyrirspurn
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
