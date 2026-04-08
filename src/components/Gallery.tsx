"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Star } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
    alt: "Decoração elegante com flores e velas",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    alt: "Casal no jardim ao pôr do sol",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    alt: "Cerimônia ao ar livre com pérgola",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?w=600&q=80",
    alt: "Iluminação cênica do salão",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "Mesa de doces e bolo",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=900&q=80",
    alt: "Pista de dança durante a festa",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&q=80",
    alt: "Arranjo floral sofisticado",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
    alt: "Detalhes da decoração",
    span: "",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
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

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightbox(null);
        if (e.key === "ArrowRight") setLightbox((p) => (p !== null ? (p + 1) % images.length : null));
        if (e.key === "ArrowLeft") setLightbox((p) => (p !== null ? (p - 1 + images.length) % images.length : null));
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [lightbox]);

  return (
    <section id="galeria" className="py-16 sm:py-24 md:py-32 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section title */}
        <div className={`text-center mb-10 sm:mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-[10px] sm:text-[12px] mb-3 sm:mb-4 font-medium" style={{ fontFamily: "var(--font-body)" }}>
            Momentos Especiais
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl text-dark mb-5 sm:mb-6">
            Galeria
          </h2>
          <div className="divider-gold max-w-[160px] sm:max-w-[200px] mx-auto">
            <Star size={14} className="text-gold" fill="currentColor" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-lg sm:rounded-2xl overflow-hidden cursor-pointer group ${img.span} ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } transition-all duration-700`}
              style={{ transitionDelay: `${i * 60 + 200}ms` }}
              onClick={() => setLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                  <ZoomIn size={18} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in">
          {/* Close */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-4 sm:top-6 sm:left-6 text-white/40 text-xs sm:text-sm z-10" style={{ fontFamily: "var(--font-body)" }}>
            {lightbox + 1} / {images.length}
          </div>

          {/* Previous */}
          <button
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center text-white transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox === 0 ? images.length - 1 : lightbox - 1);
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next */}
          <button
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center text-white transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox === images.length - 1 ? 0 : lightbox + 1);
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Image */}
          <div
            className="relative w-[85vw] h-[70vh] sm:w-[90vw] sm:h-[80vh] max-w-5xl"
            onClick={() => setLightbox(null)}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
