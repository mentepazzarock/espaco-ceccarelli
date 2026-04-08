import Image from "next/image";
import { MessageCircle, ArrowDown } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5521964310877?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20Espa%C3%A7o%20Ceccarelli";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
    >
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 animate-slow-zoom origin-center">
        <Image
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=85"
          alt="Noivos em cenário romântico"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlays — dark bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Decorative vertical accent */}
      <div className="absolute left-8 lg:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

      {/* Content — aligned bottom-left for modern editorial feel */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-20 md:pb-28">
        <div className="max-w-3xl">
          {/* Small accent line + label */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
            <div className="w-12 h-px bg-gold" />
            <p className="text-gold uppercase tracking-[0.35em] text-[11px] font-medium">
              Desde 2011 &bull; Rio Bonito, RJ
            </p>
          </div>

          {/* Title — large, editorial */}
          <h1
            className="text-white text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.12s" }}
          >
            Onde cada detalhe<br className="hidden sm:block" />
            conta a <span className="text-gradient-gold">sua história</span>
          </h1>

          {/* Description */}
          <p
            className="text-white/55 text-base sm:text-lg max-w-xl leading-[1.85] mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.24s" }}
          >
            Salão com mezanino, pé-direito alto e iluminação cênica no
            coração de Rio Bonito. Casamentos, debutantes e eventos que
            ficam na memória.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.36s" }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-white uppercase tracking-[0.15em] text-[12px] font-semibold px-9 py-[14px] rounded-full flex items-center gap-2.5"
            >
              <MessageCircle size={16} strokeWidth={2.2} />
              Agende sua Visita
            </a>
            <a
              href="#sobre"
              className="btn-outline-gold text-white/70 uppercase tracking-[0.15em] text-[12px] font-medium px-9 py-[14px] rounded-full hover:text-white"
            >
              Conheça o Espaço
            </a>
          </div>
        </div>

        {/* Scroll indicator — bottom right */}
        <div className="absolute bottom-20 md:bottom-28 right-5 sm:right-8 hidden md:flex flex-col items-center gap-3">
          <span className="text-white/25 text-[10px] uppercase tracking-[0.25em] [writing-mode:vertical-lr]">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
