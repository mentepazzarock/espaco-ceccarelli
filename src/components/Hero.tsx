import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-dark">
      {/* Background image */}
      <div className="absolute inset-0 animate-slow-zoom origin-center">
        <Image
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=85"
          alt="Casamento ao por do sol"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Decorative elements */}
      <div className="absolute left-8 lg:left-16 top-1/3 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent hidden lg:block" />
      <div className="absolute right-12 lg:right-20 top-1/4 w-px h-24 bg-gradient-to-b from-gold/20 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 lg:px-16 pb-16 sm:pb-24 lg:pb-28">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Accent line */}
            <div className="w-12 sm:w-20 h-[2px] bg-gradient-to-r from-gold to-gold-dark mb-7 sm:mb-9 animate-line-grow" />

            {/* Eyebrow */}
            <p
              className="text-gold/90 uppercase tracking-[0.3em] text-[10px] sm:text-[11px] font-medium mb-4 sm:mb-5 animate-fade-in-up"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Desde 2011 &middot; Rio Bonito, RJ
            </p>

            {/* Headline */}
            <h1
              className="text-white text-[2.2rem] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.5rem] leading-[1.08] tracking-[-0.02em] mb-6 sm:mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Onde cada momento
              <br />
              se torna{" "}
              <em className="text-gradient-gold not-italic font-medium">eterno</em>
            </h1>

            {/* Body */}
            <p
              className="text-white/55 text-[14px] sm:text-[16px] leading-[1.8] max-w-lg mb-9 sm:mb-11 animate-fade-in-up"
              style={{ animationDelay: "0.2s", fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Salao com mezanino e pe-direito alto, iluminacao cenica
              e jardim com pergola — tudo para o seu dia perfeito.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-white text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium px-8 sm:px-11 py-4 sm:py-[18px] rounded-full inline-flex items-center justify-center gap-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Agende sua Visita
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <a
                href="#sobre"
                className="btn-outline text-white/70 hover:text-white text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium px-8 sm:px-11 py-4 sm:py-[18px] rounded-full text-center"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Conheca o Espaco
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 lg:px-16 pb-6 sm:pb-8 flex items-end justify-between">
          {/* Scroll indicator */}
          <div className="hidden md:flex items-center gap-3 text-white/25">
            <ChevronDown size={14} className="animate-float" />
            <span className="text-[9px] uppercase tracking-[0.3em] font-medium" style={{ fontFamily: "var(--font-body)" }}>
              Scroll
            </span>
          </div>

          {/* Google rating */}
          <div className="flex items-center gap-2 text-white/30 ml-auto">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-wider font-medium" style={{ fontFamily: "var(--font-body)" }}>
              4.6 / 5.0 — 216 avaliacoes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
