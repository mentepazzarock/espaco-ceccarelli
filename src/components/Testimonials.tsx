"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Cliente Verificado",
    event: "Casamento",
    text: "A festa ficou incrível e o Espaço Ceccarelli teve grande importância nesse resultado. Recomendo muito o salão! O espaço é lindo, bem climatizado e a proprietária Walkiria é uma pessoa de extrema educação e muito prestativa.",
    rating: 5,
    initials: "CV",
    source: "casamentos.com.br",
  },
  {
    name: "Noivos Satisfeitos",
    event: "Casamento",
    text: "O salão é lindo, bem dividido com vários ambientes, a cozinha é excepcional, os banheiros são perfeitos e tudo de alta qualidade. Sem dúvida um dos melhores espaços de Rio Bonito.",
    rating: 5,
    initials: "NS",
    source: "casamentos.com.br",
  },
  {
    name: "Larissa & Natanael",
    event: "Casamento de Dia",
    text: "Rodeado pela natureza exuberante, o espaço proporciona uma atmosfera única, repleta de verde e contato direto com a beleza natural. Foi mágico!",
    rating: 5,
    initials: "LN",
    source: "Fotógrafa Josilei Souza",
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
    <section id="depoimentos" className="py-16 sm:py-24 md:py-32 bg-dark relative overflow-hidden" ref={ref}>
      {/* Background decorations — hidden on mobile for perf */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-20 left-10 w-64 h-64 border border-gold/[0.06] rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 border border-gold/[0.06] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section title */}
        <div className={`text-center mb-10 sm:mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-[10px] sm:text-[12px] mb-3 sm:mb-4 font-medium" style={{ fontFamily: "var(--font-body)" }}>
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl text-white mb-5 sm:mb-6">
            O que dizem sobre nós
          </h2>
          <div className="divider-gold max-w-[160px] sm:max-w-[200px] mx-auto">
            <Star size={14} className="text-gold" fill="currentColor" />
          </div>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="text-gold sm:hidden" fill="currentColor" />
              ))}
              {[...Array(5)].map((_, i) => (
                <Star key={`lg-${i}`} size={18} className="text-gold hidden sm:block" fill="currentColor" />
              ))}
            </div>
            <span className="text-white/40 text-[12px] sm:text-sm sm:ml-2" style={{ fontFamily: "var(--font-body)" }}>
              4.6/5.0 no Google — 216 avaliações
            </span>
          </div>
        </div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 sm:overflow-visible md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-dark-light/60 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/[0.06] hover:border-gold/20 transition-all duration-700 group shrink-0 w-[85vw] sm:w-auto snap-center ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Quote icon */}
              <div className="mb-4 sm:mb-6">
                <Quote size={24} className="text-gold/20 group-hover:text-gold/40 transition-colors duration-500 sm:hidden" />
                <Quote size={32} className="text-gold/20 group-hover:text-gold/40 transition-colors duration-500 hidden sm:block" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4 sm:mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} className="text-gold sm:hidden" fill="currentColor" />
                ))}
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={`lg-${j}`} size={14} className="text-gold hidden sm:block" fill="currentColor" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-white/60 leading-[1.7] sm:leading-[1.8] text-[13px] sm:text-[14px] mb-6 sm:mb-8">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-white/[0.06]">
                <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full flex items-center justify-center text-gold text-xs sm:text-sm font-semibold tracking-wider">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-medium text-[13px] sm:text-sm">{t.name}</p>
                  <p className="text-white/25 text-[11px] sm:text-xs">{t.event} &bull; {t.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
