"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Clock, Users, Sparkles, Award, MapPin, Star } from "lucide-react";

const highlights = [
  { icon: Clock, label: "+13 anos", desc: "de tradição" },
  { icon: Users, label: "Ampla capacidade", desc: "para convidados" },
  { icon: Sparkles, label: "Acabamentos", desc: "sofisticados" },
  { icon: Award, label: "4.6/5.0", desc: "avaliação Google" },
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
    <section id="sobre" className="py-16 sm:py-24 md:py-32 bg-cream relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section title */}
        <div className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-[10px] sm:text-[12px] mb-3 sm:mb-4 font-medium" style={{ fontFamily: "var(--font-body)" }}>
            Conheça nosso espaço
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl text-dark mb-5 sm:mb-6">
            Espaço Ceccarelli
          </h2>
          <div className="divider-gold max-w-[160px] sm:max-w-[200px] mx-auto">
            <Star size={12} className="text-gold sm:hidden" fill="currentColor" />
            <Star size={14} className="text-gold hidden sm:block" fill="currentColor" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
          {/* Images */}
          <div className={`relative transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
                  alt="Interior do Espaço Ceccarelli - Salão com pé-direito alto"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating secondary image — hidden on mobile */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-cream hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400&q=80"
                  alt="Cerimônia ao ar livre"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Experience badge — hidden on mobile */}
              <div className="absolute -top-5 -left-5 bg-dark text-white px-6 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-gold text-3xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>2011</p>
                <p className="text-white/50 text-[11px] uppercase tracking-widest mt-0.5">Fundação</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-dark mb-6 sm:mb-8 leading-snug">
              Elegância e sofisticação no
              <span className="text-gradient-gold italic"> coração </span>
              de Rio Bonito
            </h3>

            <div className="space-y-4 sm:space-y-5 text-dark/60 leading-[1.75] sm:leading-[1.8] text-[14px] sm:text-[15px]">
              <p>
                Localizado na <strong className="text-dark font-medium">Rua Júlia Cortines, 64 — Centro</strong>,
                o Espaço Ceccarelli é referência em eventos na região de Rio Bonito.
                Com ambientes climatizados e acabamentos sofisticados, o salão se
                destaca pelo <strong className="text-dark font-medium">pé-direito alto, mezanino elegante</strong> e
                paredes de tijolos aparentes que conferem um charme único.
              </p>
              <p>
                O sistema de iluminação completo com focos internos e externos
                valoriza a fachada moderna e cria atmosferas sob medida para cada
                evento — de casamentos românticos a festas de debutante vibrantes.
              </p>
              <p className="hidden sm:block">
                Sob a gestão atenciosa de <strong className="text-dark font-medium">Walkiria</strong>,
                reconhecida pela hospitalidade e cuidado com cada detalhe, o
                Ceccarelli se consolidou como um dos melhores espaços de eventos
                de Rio Bonito.
              </p>
            </div>

            {/* Location tag */}
            <div className="flex items-center gap-2 mt-5 sm:mt-6 text-gold text-[13px] sm:text-sm">
              <MapPin size={14} className="shrink-0" />
              <span className="font-medium">Rua Júlia Cortines, 64 — Centro, Rio Bonito/RJ</span>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5 mt-8 sm:mt-10">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center sm:items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white shadow-sm"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <h.icon size={16} className="text-gold sm:hidden" />
                    <h.icon size={18} className="text-gold hidden sm:block" />
                  </div>
                  <div>
                    <p className="text-dark font-semibold text-[13px] sm:text-sm leading-tight">{h.label}</p>
                    <p className="text-dark/40 text-[11px] sm:text-xs mt-0.5">{h.desc}</p>
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
