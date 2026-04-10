import RevealOnScroll from "../components/RevealOnScroll";

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-terracotta text-sm font-medium tracking-[0.3em] uppercase">
              Samband
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-brown">
              Hafa <span className="text-terracotta italic">samband</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RevealOnScroll>
            <div className="text-center p-8 bg-white rounded-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta/10 text-terracotta mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Netfang</h3>
              <a
                href="mailto:hildur.bellaitalia@gmail.com"
                className="text-brown/60 text-sm hover:text-terracotta transition-colors"
              >
                hildur.bellaitalia@gmail.com
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="text-center p-8 bg-white rounded-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta/10 text-terracotta mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Sími</h3>
              <p className="text-brown/60 text-sm">+354 869 4556</p>
              <p className="text-brown/60 text-sm">+39 338 698 5868</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="text-center p-8 bg-white rounded-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta/10 text-terracotta mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Samfélagsmiðlar</h3>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/bellaitaliarome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown/60 text-sm hover:text-terracotta transition-colors"
                >
                  @bellaitaliarome
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="mt-16 text-center">
            <p className="font-serif text-2xl text-brown/40 italic">
              Bella Italia slf.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
