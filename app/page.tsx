import Link from "next/link";
import Navbar from "./components/Navbar";
import RevealOnScroll from "./components/RevealOnScroll";

export default function Home() {
  return (
    <>
      {/* Gold top border */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gold z-50" />

      <Navbar />
      <main className="grain">
        {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&h=1080&fit=crop&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-gold/8 blur-[140px]" />

          <div className="relative z-10 text-center px-6 max-w-5xl">
            <span className="inline-block text-gold/90 text-xs font-medium tracking-[0.5em] uppercase animate-fade-up">
              Bella Italia · Sérhannaðar ferðir
            </span>

            <h1 className="mt-8 font-serif text-7xl sm:text-8xl md:text-[9rem] lg:text-[12rem] font-bold text-cream tracking-[0.04em] animate-fade-up-delay-1 leading-[0.85]">
              UPPLIFÐU
              <br />
              <span className="text-gold">ÍTALÍU</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-cream/60 font-light max-w-2xl mx-auto animate-fade-up-delay-2 leading-relaxed">
              Sérhannaðar ferðir til Rómar og Toskana
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center animate-fade-up-delay-3">
              <Link
                href="/rom"
                className="inline-block px-10 py-4 border border-gold/40 text-gold text-sm font-medium tracking-[0.2em] uppercase hover:bg-gold/10 transition-all duration-500"
              >
                Skoða Ferðir
              </Link>
              <Link
                href="/samband"
                className="inline-block px-10 py-4 bg-terracotta text-cream text-sm font-medium tracking-[0.2em] uppercase hover:bg-terracotta-dark transition-colors duration-300"
              >
                Hafa Samband
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-3">
            <span className="text-cream/30 text-[10px] tracking-[0.3em] uppercase">
              Skruna
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent animate-bounce-subtle" />
          </div>
        </section>

        {/* ═══════════════════════ 2. ABOUT / INTRO ═══════════════════════ */}
        <section className="relative py-28 md:py-36 bg-[#1C0F0A] overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-terracotta/5 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <RevealOnScroll>
                <div className="relative">
                  <div
                    className="aspect-[4/5] bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=1000&fit=crop&q=80')",
                    }}
                  />
                  <div className="absolute -top-4 -left-4 w-full h-full border border-gold/15" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10" />
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <div>
                  <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">
                    Um Bella Italia
                  </span>

                  <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
                    Draumaferðin þín
                    <br />
                    <span className="text-gold italic">byrjar hér</span>
                  </h2>

                  <div className="mt-8 space-y-5 text-cream/60 leading-relaxed">
                    <p className="font-serif text-xl md:text-2xl text-cream/80 italic leading-relaxed">
                      &ldquo;Ég lifi og anda Ítalíu — og vil deila þessari ást
                      með ykkur.&rdquo;
                    </p>
                    <p>
                      Hildur hefur búið og starfað á Ítalíu í yfir áratug og
                      þekkir landið út og inn. Með persónulega þjónustu og
                      staðbundna þekkingu skapar hún ferðaupplifanir sem enginn
                      ferðaskrifstofa getur boðið.
                    </p>
                    <p>
                      Hvort sem þú dreymir um rómantískt helgarfrí í Róm eða
                      sólríkar vikur í fallegri Toskana-villu — Bella Italia
                      sérsníður hverja ferð að þínum óskum.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-px bg-gold" />
                    <span className="text-sm text-gold/70 tracking-wider italic">
                      Hildur — Stofnandi Bella Italia
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ DIAMOND DIVIDER ═══════════════════════ */}
        <DiamondDivider bg="bg-[#F0E6D3]" />

        {/* ═══════════════════════ 3. SERVICES SPLIT ═══════════════════════ */}
        <section className="bg-[#F0E6D3]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">
                  Þjónusta okkar
                </span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                  Veldu þína{" "}
                  <span className="text-terracotta italic">upplifun</span>
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ROME card */}
              <RevealOnScroll>
                <Link href="/rom" className="block">
                  <article className="group relative h-[520px] md:h-[600px] overflow-hidden cursor-pointer">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&h=700&fit=crop&q=80')",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 transition-all duration-500 group-hover:from-black/90 group-hover:via-black/50" />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-all duration-500" />

                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-3 py-1.5 bg-terracotta text-cream text-[10px] font-medium tracking-[0.2em] uppercase">
                        Borgin eilífa
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-10">
                      <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] drop-shadow-lg">
                        RÓM
                      </h3>
                      <p className="mt-4 text-white/70 text-sm md:text-base leading-relaxed max-w-md">
                        Sérhannaðar upplifanir í borginni eilífu — skoðunarferðir,
                        vespuferðir, matreiðslunámskeið og fleira.
                      </p>
                      <div className="mt-5 pt-4 border-t border-white/10">
                        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-gold group-hover:tracking-[0.25em] transition-all duration-500 inline-flex items-center gap-2">
                          Skoða upplifanir
                          <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                            &rarr;
                          </span>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </RevealOnScroll>

              {/* VILLAS card */}
              <RevealOnScroll>
                <Link href="/villur" className="block">
                  <article className="group relative h-[520px] md:h-[600px] overflow-hidden cursor-pointer">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=900&h=700&fit=crop&q=80')",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 transition-all duration-500 group-hover:from-black/90 group-hover:via-black/50" />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-all duration-500" />

                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-3 py-1.5 bg-terracotta text-cream text-[10px] font-medium tracking-[0.2em] uppercase">
                        Toskana
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-10">
                      <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] drop-shadow-lg">
                        VILLUR
                      </h3>
                      <p className="mt-4 text-white/70 text-sm md:text-base leading-relaxed max-w-md">
                        Draumkennd dvöl í fallegri villu umkringd vínekrum,
                        ólífutrjám og ítölskum sólskinsdögum.
                      </p>
                      <div className="mt-5 pt-4 border-t border-white/10">
                        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-gold group-hover:tracking-[0.25em] transition-all duration-500 inline-flex items-center gap-2">
                          Skoða villur
                          <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                            &rarr;
                          </span>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ DIAMOND DIVIDER ═══════════════════════ */}
        <DiamondDivider bg="bg-[#F0E6D3]" />

        {/* ═══════════════════════ 4. WHY BELLA ITALIA ═══════════════════════ */}
        <section className="py-24 md:py-32 bg-[#F0E6D3]">
          <div className="mx-auto max-w-5xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-20">
                <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">
                  Af hverju við
                </span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                  Af hverju{" "}
                  <span className="text-terracotta italic">Bella Italia</span>?
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              {[
                {
                  num: "01",
                  title: "Persónuleg þjónusta",
                  desc: "Hver ferð er sérsniðin að þínum óskum og draumum. Engar staðlaðar pakkaferðir — aðeins einstakar upplifanir.",
                },
                {
                  num: "02",
                  title: "Staðbundin þekking",
                  desc: "Hildur býr á Ítalíu og þekkir landið eins og heimamaður. Hún opnar dyrnar sem ferðabækurnar ná ekki til.",
                },
                {
                  num: "03",
                  title: "Sérsniðnar ferðir",
                  desc: "Frá rómantískum helgarfríum til fjölskyldufrís — við hönnun hverja ferð frá grunni eftir þínum draumum.",
                },
                {
                  num: "04",
                  title: "Tengingar í Ítalíu",
                  desc: "Áratuga tengsl við bestu leiðsögumenn, veitingastaði og faldar gimsteina sem aðeins heimamenn þekkja.",
                },
              ].map((feature, i) => (
                <RevealOnScroll key={feature.num}>
                  <div
                    className={`py-10 ${
                      i < 2 ? "border-b border-gold/20" : ""
                    } ${i % 2 === 0 ? "md:border-r md:border-gold/20 md:pr-16" : "md:pl-16"}`}
                  >
                    <span className="font-serif text-5xl md:text-6xl text-terracotta/30 font-bold leading-none">
                      {feature.num}
                    </span>
                    <h3 className="mt-4 font-serif text-2xl md:text-3xl text-brown">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-brown/60 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ 5. TESTIMONIAL ═══════════════════════ */}
        <section className="relative py-28 md:py-36 bg-[#1C0F0A] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/4 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <RevealOnScroll>
              <div className="mb-6">
                <span className="font-serif text-[10rem] md:text-[14rem] text-gold/15 leading-none select-none block -mb-20 md:-mb-28">
                  &ldquo;
                </span>
              </div>

              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed italic">
                Hildur er frábær leiðsögumaður og vinkona mín í Róm. Hún þekkir
                borgina eins og lófann og er alltaf tilbúin að deila bestu
                leyndarmálunum. Ferðin með henni var besta upplifun sem ég hef
                átt á Ítalíu — ég mæli eindregið með Bella Italia!
              </blockquote>

              <div className="mt-12 flex flex-col items-center gap-3">
                <div className="w-16 h-px bg-gold/50" />
                <cite className="not-italic text-gold text-sm tracking-[0.3em] uppercase mt-2">
                  Elka Ósk Hrólfsdóttir
                </cite>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════ 6. INSTAGRAM / GALLERY STRIP ═══════════════════════ */}
        <section className="relative py-20 md:py-28 bg-[#F0E6D3] overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-14">
                <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">
                  @bellaitaliarome
                </span>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl text-brown">
                  Fylgdu okkur á{" "}
                  <span className="text-gold italic">Instagram</span>
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="flex gap-3 md:gap-4 overflow-hidden">
                {[
                  "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=400&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=400&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=400&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1543429258-bbc744828e46?w=400&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1551801691-f0bce83bcc9b?w=400&h=400&fit=crop&q=80",
                ].map((src, i) => (
                  <a
                    key={i}
                    href="https://www.instagram.com/bellaitaliarome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-1 min-w-0 aspect-square overflow-hidden"
                    style={{ marginTop: i % 2 === 1 ? "-12px" : "12px" }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${src}')` }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <svg
                        className="w-8 h-8 text-white drop-shadow-lg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════ 7. CTA BANNER ═══════════════════════ */}
        <section className="relative overflow-hidden grain">
          <div className="absolute inset-0 bg-[#8B2500]" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-black/10 blur-[80px]" />

          <RevealOnScroll>
            <div className="relative z-10 py-24 md:py-32 px-8 text-center">
              <span className="text-cream/50 text-xs font-medium tracking-[0.4em] uppercase">
                Tilbúin/n?
              </span>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-tight">
                Ertu tilbúin(n) að upplifja{" "}
                <span className="text-gold italic">Ítalíu?</span>
              </h3>
              <p className="mt-6 text-cream/60 text-lg max-w-lg mx-auto">
                Hildur hjálpar þér að hanna þína draumaferð
              </p>
              <div className="mt-10">
                <Link
                  href="/samband"
                  className="inline-block px-12 py-4 border border-cream/30 text-cream text-sm font-medium tracking-[0.2em] uppercase hover:bg-cream/10 transition-all duration-500"
                >
                  Hafa samband
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══════════════════════ 8. FOOTER ═══════════════════════ */}
        <footer className="bg-[#0D0905] text-cream/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <span className="font-serif text-3xl md:text-4xl font-semibold tracking-[0.15em] text-cream">
                  BELLA ITALIA
                </span>
                <p className="mt-6 text-sm leading-relaxed max-w-sm">
                  Sérhannaðar ferðir til Rómar og Toskana. Persónuleg þjónusta
                  og staðbundin þekking frá Hildi sem hefur búið á Ítalíu í
                  yfir áratug.
                </p>
                <div className="flex gap-5 mt-8">
                  <a
                    href="https://www.instagram.com/bellaitaliarome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/bellaitalia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 className="font-serif text-lg text-cream mb-5">
                  Flýtileiðir
                </h4>
                <div className="flex flex-col gap-3">
                  {[
                    { href: "/", label: "Heim" },
                    { href: "/rom", label: "Róm" },
                    { href: "/villur", label: "Villur" },
                    { href: "/pantadu", label: "Pantaðu" },
                    { href: "/samband", label: "Hafa Samband" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-serif text-lg text-cream mb-5">
                  Hafðu samband
                </h4>
                <div className="flex flex-col gap-3 text-sm">
                  <a
                    href="mailto:hildur.bellaitalia@gmail.com"
                    className="hover:text-gold transition-colors duration-300"
                  >
                    hildur.bellaitalia@gmail.com
                  </a>
                  <p>+354 869 4556</p>
                  <p>+39 338 698 5868</p>
                </div>
              </div>
            </div>

            <div className="border-t border-cream/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/30">
              <p>&copy; 2025 Bella Italia slf. Allur réttur áskilinn.</p>
              <p className="font-serif italic text-cream/20">
                La dolce vita
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

/* ─── Diamond Divider ─── */

function DiamondDivider({
  bg = "bg-cream",
  color = "text-brown/15",
  line = "bg-brown/10",
}: {
  bg?: string;
  color?: string;
  line?: string;
}) {
  return (
    <div className={`${bg} flex items-center justify-center py-4`}>
      <div className={`flex-1 h-px ${line} max-w-xs`} />
      <span className={`mx-4 ${color} text-sm`}>&#9670;</span>
      <div className={`flex-1 h-px ${line} max-w-xs`} />
    </div>
  );
}
