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
    title: "Salão Principal",
    description:
      "Amplo salão climatizado com pé-direito alto, mezanino sofisticado e paredes de tijolos aparentes.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
    icon: Crown,
    accent: "Climatizado",
  },
  {
    title: "Jardim & Pérgola",
    description:
      "Área externa com jardim gramado e pérgola decorativa, perfeita para cerimônias ao ar livre.",
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
    icon: TreePine,
    accent: "Ao ar livre",
  },
  {
    title: "Lounge & Bar",
    description:
      "Espaço lounge sofisticado com iluminação intimista para momentos de descontração.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    icon: Wine,
    accent: "Iluminação cênica",
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
      "Mezanino elegante com vista panorâmica do salão e acabamentos de alto padrão.",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
    icon: Heart,
    accent: "Vista panorâmica",
  },
  {
    title: "Iluminação Cênica",
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
    <section id="estrutura" className="py-16 sm:py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section title */}
        <div className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-[10px] sm:text-[12px] mb-3 sm:mb-4 font-medium" style={{ fontFamily: "var(--font-body)" }}>
            Ambientes
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl text-dark mb-5 sm:mb-6">
            Nossa Estrutura
          </h2>
          <div className="divider-gold max-w-[160px] sm:max-w-[200px] mx-auto">
            <Star size={14} className="text-gold" fill="currentColor" />
          </div>
          <p className="text-dark/50 mt-6 sm:mt-8 max-w-xl mx-auto text-[13px] sm:text-[15px] leading-relaxed">
            Ambientes versáteis e sofisticados, pensados para que cada detalhe
            do seu evento seja impecável.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {spaces.map((space, i) => (
            <div
              key={space.title}
              className={`group relative bg-cream rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[800ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl flex items-center justify-center border border-white/20">
                  <space.icon size={16} className="text-white sm:hidden" />
                  <space.icon size={18} className="text-white hidden sm:block" />
                </div>

                {/* Accent tag */}
                <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-gold/90 text-dark text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {space.accent}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl text-dark mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300">
                  {space.title}
                </h3>
                <p className="text-dark/50 text-[12px] sm:text-[13px] leading-relaxed">
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
