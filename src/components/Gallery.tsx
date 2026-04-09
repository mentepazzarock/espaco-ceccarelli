"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Star } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
    alt: "Decoracao elegante com flores e velas",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    alt: "Casal no jardim ao por do sol",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    alt: "Cerimonia ao ar livre com pergola",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?w=600&q=80",
    alt: "Iluminacao cenica do salao",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "Mesa de doces e bolo",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=900&q=80",
    alt: "Pista de danca durante a festa",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&q=80",
    alt: "Arranjo floral sofisticado",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
    alt: "Detalhes da decoracao",
    span: "",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const touchStart = useRef<number | null>(null);

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

  const goNext = useCallback(() => {
    setLightbox((p) => (p !== null ? (p + 1) % images.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((p) => (p !== null ? (p - 1 + images.length) % images.length : null));
  }, []);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightbox(null);
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [lightbox, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStart.current = null;
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 md:py-36 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section title */}
        <div className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3 sm:mb-4">
            Momentos Especiais
          </p>
          <h2 className="text-[2rem] sm:text-5xl md:text-6xl text-dark mb-5 sm:mb-6">
            Galeria
          </h2>
          <div className="divider-gold max-w-[160px] sm:max-w-[200px] mx-auto">
            <Star size={14} className="text-gold" fill="currentColor" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group ${img.span} ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } transition-all duration-700`}
              style={{ transitionDelay: `${i * 70 + 200}ms` }}
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
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 border border-white/20">
                  <ZoomIn size={18} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with swipe support */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
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
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-gold/20 flex items-center justify-center text-white transition-all z-10 hidden sm:flex"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next */}
          <button
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-gold/20 flex items-center justify-center text-white transition-all z-10 hidden sm:flex"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[70vh] sm:w-[90vw] sm:h-[80vh] max-w-5xl"
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

          {/* Mobile swipe hint */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20 text-[10px] uppercase tracking-[0.2em] sm:hidden" style={{ fontFamily: "var(--font-body)" }}>
            Deslize para navegar
          </p>
        </div>
      )}
    </section>
  );
}
