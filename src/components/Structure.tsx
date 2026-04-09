"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Crown,
  TreePine,
  Wine,
  ChefHat,
  Heart,
  Lightbulb,
  Star,
} from "lucide-react";

const spaces = [
  {
    title: "Salao Principal",
    description:
      "Amplo salao climatizado com pe-direito alto, mezanino sofisticado e paredes de tijolos aparentes.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
    icon: Crown,
    accent: "Climatizado",
  },
  {
    title: "Jardim & Pergola",
    description:
      "Area externa com jardim gramado e pergola decorativa, perfeita para cerimonias ao ar livre.",
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
    icon: TreePine,
    accent: "Ao ar livre",
  },
  {
    title: "Lounge & Bar",
    description:
      "Espaco lounge sofisticado com iluminacao intimista para momentos de descontracao.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    icon: Wine,
    accent: "Iluminacao cenica",
  },
  {
    title: "Cozinha Profissional",
    description:
      "Cozinha equipada e elogiada por clientes — perfeita para buffets e catering.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
    icon: ChefHat,
    accent: "Completa",
  },
  {
    title: "Mezanino",
    description:
      "Mezanino elegante com vista panoramica do salao e acabamentos de alto padrao.",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
    icon: Heart,
    accent: "Vista panoramica",
  },
  {
    title: "Iluminacao Cenica",
    description:
      "Sistema completo com focos no interior e exterior, criando atmosferas sob medida.",
    image:
      "https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?w=600&q=80",
    icon: Lightbulb,
    accent: "Interna & externa",
  },
];

export default function Structure() {
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
    <section id="estrutura" className="py-20 sm:py-28 md:py-36 bg-white relative" ref={ref}>
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section title */}
        <div className={`text-center mb-14 sm:mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3 sm:mb-4">
            Ambientes
          </p>
          <h2 className="text-[2rem] sm:text-5xl md:text-6xl text-dark mb-5 sm:mb-6">
            Nossa Estrutura
          </h2>
          <div className="divider-gold max-w-[160px] sm:max-w-[200px] mx-auto">
            <Star size={14} className="text-gold" fill="currentColor" />
          </div>
          <p className="text-dark/45 mt-7 sm:mt-9 max-w-xl mx-auto text-[13px] sm:text-[15px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Ambientes versateis e sofisticados, pensados para que cada detalhe
            do seu evento seja impecavel.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {spaces.map((space, i) => (
            <div
              key={space.title}
              className={`group relative bg-cream rounded-2xl overflow-hidden card-lift border border-dark/[0.04] ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } transition-all duration-700`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/15 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-500">
                  <space.icon size={17} className="text-white" />
                </div>

                {/* Accent tag */}
                <span className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 bg-gold/90 text-dark text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)" }}>
                  {space.accent}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7">
                <h3 className="text-lg sm:text-xl text-dark mb-2.5 group-hover:text-gold transition-colors duration-300">
                  {space.title}
                </h3>
                <p className="text-dark/45 text-[12px] sm:text-[13px] leading-[1.7]" style={{ fontFamily: "var(--font-body)" }}>
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
