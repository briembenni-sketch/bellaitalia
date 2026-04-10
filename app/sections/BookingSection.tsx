"use client";

import { useState } from "react";
import RevealOnScroll from "../components/RevealOnScroll";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="pantadu" className="py-24 md:py-32 bg-cream-light">
      <div className="mx-auto max-w-4xl px-6">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="text-terracotta text-sm font-medium tracking-[0.3em] uppercase">
              Bókaðu
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-brown">
              Sendu okkur <span className="text-terracotta italic">fyrirspurn</span>
            </h2>
            <p className="mt-4 text-brown/60 max-w-xl mx-auto">
              Fylltu út formið hér að neðan og við munum hafa samband við þig
              innan sólarhrings.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          {submitted ? (
            <div className="text-center py-16 bg-white rounded-sm shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-olive/10 text-olive mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-brown">Takk fyrir!</h3>
              <p className="mt-2 text-brown/60">Við munum hafa samband við þig fljótlega.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="bg-white p-8 md:p-12 rounded-sm shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brown/70 mb-2">
                    Nafn
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-brown/15 bg-cream-light/50 rounded-sm text-brown placeholder:text-brown/30 focus:outline-none focus:border-terracotta transition-colors"
                    placeholder="Fullt nafn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown/70 mb-2">
                    Netfang
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-brown/15 bg-cream-light/50 rounded-sm text-brown placeholder:text-brown/30 focus:outline-none focus:border-terracotta transition-colors"
                    placeholder="netfang@dæmi.is"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown/70 mb-2">
                    Símanúmer
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-brown/15 bg-cream-light/50 rounded-sm text-brown placeholder:text-brown/30 focus:outline-none focus:border-terracotta transition-colors"
                    placeholder="+354 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown/70 mb-2">
                    Tegund ferðar
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-brown/15 bg-cream-light/50 rounded-sm text-brown focus:outline-none focus:border-terracotta transition-colors"
                  >
                    <option value="">Veldu tegund</option>
                    <option value="rome">Róm</option>
                    <option value="villa">Villa í Toskana</option>
                    <option value="custom">Sérsniðin ferð</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown/70 mb-2">
                    Fjöldi ferðamanna
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-4 py-3 border border-brown/15 bg-cream-light/50 rounded-sm text-brown placeholder:text-brown/30 focus:outline-none focus:border-terracotta transition-colors"
                    placeholder="2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown/70 mb-2">
                    Dagsetningar
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-brown/15 bg-cream-light/50 rounded-sm text-brown placeholder:text-brown/30 focus:outline-none focus:border-terracotta transition-colors"
                    placeholder="t.d. 15. júní – 22. júní"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-brown/70 mb-2">
                  Séróskir
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-brown/15 bg-cream-light/50 rounded-sm text-brown placeholder:text-brown/30 focus:outline-none focus:border-terracotta transition-colors resize-none"
                  placeholder="Segðu okkur frá draumaferðinni þinni..."
                />
              </div>
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="px-10 py-4 bg-terracotta text-cream font-medium tracking-widest text-sm uppercase hover:bg-terracotta-dark transition-colors duration-300"
                >
                  Senda fyrirspurn
                </button>
              </div>
            </form>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
