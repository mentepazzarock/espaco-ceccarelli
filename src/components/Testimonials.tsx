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
    text: "O salão é lindo, bem dividido com vários ambientes, a cozinha é excepcional, os banheiros são perfeitos e tudo de alta qualidade. Sem dúvida um dos melhores espaços de Rio Bonito. O espaço limpo com diversas opções de decoração.",
    rating: 5,
    initials: "NS",
    source: "casamentos.com.br",
  },
  {
    name: "Larissa & Natanael",
    event: "Casamento de Dia",
    text: "Rodeado pela natureza exuberante, o espaço proporciona uma atmosfera única, repleta de verde e contato direto com a beleza natural. O Espaço tornou-se pequeno para a quantidade de amigos e familiares que foram prestigiar — foi mágico!",
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-dark relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 border border-gold/[0.06] rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 border border-gold/[0.06] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold/20 rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-gold/15 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold uppercase tracking-[0.4em] text-[11px] sm:text-xs mb-4 font-medium">
            Depoimentos
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            O que dizem sobre nós
          </h2>
          <div className="divider-gold max-w-[200px] mx-auto">
            <Star size={14} className="text-gold" fill="currentColor" />
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-gold" fill="currentColor" />
              ))}
            </div>
            <span className="text-white/50 text-sm ml-2">4.6/5.0 no Google — 216 avaliações</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-dark-light/60 rounded-2xl p-8 lg:p-10 border border-white/[0.06] hover:border-gold/20 transition-all duration-700 group ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote size={32} className="text-gold/20 group-hover:text-gold/40 transition-colors duration-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-gold" fill="currentColor" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-white/65 leading-[1.8] text-[14px] mb-8">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <div className="w-11 h-11 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full flex items-center justify-center text-gold text-sm font-semibold tracking-wider">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.event} &bull; {t.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
