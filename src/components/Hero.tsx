import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5521964310877?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20Espa%C3%A7o%20Ceccarelli";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[100svh] min-h-[600px] overflow-hidden bg-dark">
      {/* Background image */}
      <div className="absolute inset-0 animate-slow-zoom origin-center">
        <Image
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=85"
          alt="Casamento ao pôr do sol"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

      {/* Decorative vertical accent — desktop only */}
      <div className="absolute left-8 lg:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 lg:px-16 pb-12 sm:pb-20 lg:pb-24">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Accent line */}
            <div className="w-10 sm:w-16 h-px bg-gold mb-6 sm:mb-8 animate-line-grow" />

            {/* Eyebrow */}
            <p
              className="text-gold/80 uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-[12px] font-medium mb-4 sm:mb-5 animate-fade-in-up"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Desde 2011 &middot; Rio Bonito, RJ
            </p>

            {/* Headline */}
            <h1
              className="text-white text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] sm:leading-[1.05] tracking-[-0.01em] mb-5 sm:mb-7 animate-fade-in-up"
              style={{ animationDelay: "0.1s", fontWeight: 300 }}
            >
              Onde cada momento
              <br />
              se torna <em className="text-gradient-gold not-italic">eterno</em>
            </h1>

            {/* Body */}
            <p
              className="text-white/50 text-[14px] sm:text-base leading-[1.8] sm:leading-[1.9] max-w-md mb-8 sm:mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.2s", fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Salão com mezanino e pé-direito alto, iluminação cênica
              e jardim com pérgola — tudo para o seu dia perfeito.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-white text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium px-7 sm:px-10 py-3.5 sm:py-4 rounded-full inline-flex items-center justify-center gap-2.5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Agende sua Visita
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <a
                href="#sobre"
                className="btn-outline text-white/60 hover:text-white text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium px-7 sm:px-10 py-3.5 sm:py-4 rounded-full text-center"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Conheça o Espaço
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 lg:px-16 pb-6 sm:pb-8 flex items-end justify-between">
          <div className="hidden md:flex items-center gap-3 text-white/20">
            <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
            <span className="text-[9px] uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-body)" }}>
              Scroll
            </span>
          </div>

          {/* Google rating — visible on mobile too, smaller */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-white/25 ml-auto">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
              4.6 / 5.0 — 216 avaliações
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
