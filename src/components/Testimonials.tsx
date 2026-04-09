"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Cliente Verificado",
    event: "Casamento",
    text: "A festa ficou incrivel e o Espaco Ceccarelli teve grande importancia nesse resultado. Recomendo muito o salao! O espaco e lindo, bem climatizado e a proprietaria Walkiria e uma pessoa de extrema educacao e muito prestativa.",
    rating: 5,
    initials: "CV",
    source: "casamentos.com.br",
  },
  {
    name: "Noivos Satisfeitos",
    event: "Casamento",
    text: "O salao e lindo, bem dividido com varios ambientes, a cozinha e excepcional, os banheiros sao perfeitos e tudo de alta qualidade. Sem duvida um dos melhores espacos de Rio Bonito.",
    rating: 5,
    initials: "NS",
    source: "casamentos.com.br",
  },
  {
    name: "Larissa & Natanael",
    event: "Casamento de Dia",
    text: "Rodeado pela natureza exuberante, o espaco proporciona uma atmosfera unica, repleta de verde e contato direto com a beleza natural. Foi magico!",
    rating: 5,
    initials: "LN",
    source: "Fotografa Josilei Souza",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="depoimentos" className="py-20 sm:py-28 md:py-36 bg-dark relative overflow-hidden noise-overlay" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-20 left-10 w-72 h-72 border border-gold/[0.05] rounded-full" />
        <div className="absolute bottom-16 right-10 w-96 h-96 border border-gold/[0.04] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.01] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section title */}
        <div className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3 sm:mb-4">
            Depoimentos
          </p>
          <h2 className="text-[2rem] sm:text-5xl md:text-6xl text-white mb-5 sm:mb-6">
            O que dizem sobre nos
          </h2>
          <div className="divider-gold max-w-[160px] sm:max-w-[200px] mx-auto">
            <Star size={14} className="text-gold" fill="currentColor" />
          </div>
          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold" fill="currentColor" />
              ))}
            </div>
            <span className="text-white/35 text-[12px] sm:text-sm sm:ml-1" style={{ fontFamily: "var(--font-body)" }}>
              4.6/5.0 no Google — 216 avaliacoes
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 sm:overflow-visible md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-white/[0.04] rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/[0.06] hover:border-gold/20 transition-all duration-700 group shrink-0 w-[82vw] sm:w-auto snap-center backdrop-blur-sm ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Quote icon */}
              <div className="mb-5 sm:mb-6 relative">
                <Quote size={28} className="text-gold/20 group-hover:text-gold/35 transition-colors duration-500 sm:hidden" />
                <Quote size={36} className="text-gold/20 group-hover:text-gold/35 transition-colors duration-500 hidden sm:block" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-5 relative">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-gold" fill="currentColor" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-white/55 leading-[1.75] sm:leading-[1.85] text-[13px] sm:text-[14px] mb-7 sm:mb-8 relative" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-5 sm:pt-6 border-t border-white/[0.06] relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full flex items-center justify-center text-gold text-xs sm:text-sm font-semibold tracking-wider border border-gold/20">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-medium text-[13px] sm:text-sm" style={{ fontFamily: "var(--font-body)" }}>{t.name}</p>
                  <p className="text-white/25 text-[11px] sm:text-xs" style={{ fontFamily: "var(--font-body)" }}>{t.event} &bull; {t.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
