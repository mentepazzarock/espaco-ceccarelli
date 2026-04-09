"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Clock, Users, Sparkles, Award, MapPin, Star } from "lucide-react";

const highlights = [
  { icon: Clock, label: "+13 anos", desc: "de tradicao" },
  { icon: Users, label: "Ampla capacidade", desc: "para convidados" },
  { icon: Sparkles, label: "Acabamentos", desc: "sofisticados" },
  { icon: Award, label: "4.6/5.0", desc: "avaliacao Google" },
];

export default function About() {
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
    <section id="sobre" className="py-20 sm:py-28 md:py-36 bg-cream relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/[0.02] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section title */}
        <div className={`text-center mb-14 sm:mb-24 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3 sm:mb-4">
            Conheca nosso espaco
          </p>
          <h2 className="text-[2rem] sm:text-5xl md:text-6xl text-dark mb-5 sm:mb-6">
            Espaco Ceccarelli
          </h2>
          <div className="divider-gold max-w-[160px] sm:max-w-[200px] mx-auto">
            <Star size={12} className="text-gold sm:hidden" fill="currentColor" />
            <Star size={14} className="text-gold hidden sm:block" fill="currentColor" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          {/* Images */}
          <div className={`relative transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
                  alt="Interior do Espaco Ceccarelli - Salao com pe-direito alto"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
              </div>

              {/* Floating secondary image */}
              <div className="absolute -bottom-8 -right-6 w-44 h-44 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl ring-[5px] ring-cream hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400&q=80"
                  alt="Cerimonia ao ar livre"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-dark text-white px-5 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-gold text-3xl font-medium" style={{ fontFamily: "var(--font-heading)" }}>2011</p>
                <p className="text-white/45 text-[10px] uppercase tracking-[0.15em] mt-0.5" style={{ fontFamily: "var(--font-body)" }}>Fundacao</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <h3 className="text-[1.6rem] sm:text-3xl md:text-4xl text-dark mb-7 sm:mb-9 leading-snug">
              Elegancia e sofisticacao no
              <span className="text-gradient-gold italic"> coracao </span>
              de Rio Bonito
            </h3>

            <div className="space-y-4 sm:space-y-5 text-dark/55 leading-[1.8] text-[14px] sm:text-[15px]" style={{ fontFamily: "var(--font-body)" }}>
              <p>
                Localizado na <strong className="text-dark/80 font-medium">Rua Julia Cortines, 64 — Centro</strong>,
                o Espaco Ceccarelli e referencia em eventos na regiao de Rio Bonito.
                Com ambientes climatizados e acabamentos sofisticados, o salao se
                destaca pelo <strong className="text-dark/80 font-medium">pe-direito alto, mezanino elegante</strong> e
                paredes de tijolos aparentes que conferem um charme unico.
              </p>
              <p>
                O sistema de iluminacao completo com focos internos e externos
                valoriza a fachada moderna e cria atmosferas sob medida para cada
                evento — de casamentos romanticos a festas de debutante vibrantes.
              </p>
              <p className="hidden sm:block">
                Sob a gestao atenciosa de <strong className="text-dark/80 font-medium">Walkiria</strong>,
                reconhecida pela hospitalidade e cuidado com cada detalhe, o
                Ceccarelli se consolidou como um dos melhores espacos de eventos
                de Rio Bonito.
              </p>
            </div>

            {/* Location tag */}
            <div className="flex items-center gap-2 mt-6 text-gold text-[13px] sm:text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <MapPin size={15} className="shrink-0" />
              <span className="font-medium">Rua Julia Cortines, 64 — Centro, Rio Bonito/RJ</span>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-9 sm:mt-11">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="card-lift flex items-center sm:items-start gap-3 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white shadow-sm border border-dark/[0.04]"
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gold/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                    <h.icon size={16} className="text-gold sm:hidden" />
                    <h.icon size={18} className="text-gold hidden sm:block" />
                  </div>
                  <div>
                    <p className="text-dark font-semibold text-[13px] sm:text-sm leading-tight" style={{ fontFamily: "var(--font-body)" }}>{h.label}</p>
                    <p className="text-dark/40 text-[11px] sm:text-xs mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
