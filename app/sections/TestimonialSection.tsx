import RevealOnScroll from "../components/RevealOnScroll";

export default function TestimonialSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta via-terracotta-dark to-brown" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <RevealOnScroll>
          {/* Large decorative quotes */}
          <div className="mb-8">
            <span className="font-serif text-9xl text-cream/20 leading-none select-none">
              &ldquo;
            </span>
          </div>

          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed italic">
            Hildur er frábær leiðsögumaður og vinkona mín í Róm. Hún þekkir
            borgina eins og lófann og er alltaf tilbúin að deila bestu
            leyndarmálunum. Ferðin með henni var besta upplifun sem ég hef átt á
            Ítalíu — ég mæli eindregið með Bella Italia!
          </blockquote>

          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="w-12 h-px bg-gold" />
            <cite className="not-italic text-cream/80 text-sm tracking-wider uppercase mt-4">
              Elka Ósk Hrólfsdóttir
            </cite>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
