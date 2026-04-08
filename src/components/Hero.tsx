import Image from "next/image";
import { MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5521964310877?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20Espa%C3%A7o%20Ceccarelli";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 animate-slow-zoom">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Casamento elegante"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent ml-[8%] hidden lg:block" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent mr-[8%] hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-10 animate-fade-in">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl" />
            <Image
              src="/logo.jpg"
              alt="Espaço Ceccarelli"
              width={144}
              height={144}
              className="relative rounded-full ring-2 ring-gold/40 shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-gold/90 uppercase tracking-[0.4em] text-xs sm:text-sm mb-6 font-light animate-fade-in-up">
          Desde 2011 &bull; Rio Bonito &mdash; RJ
        </p>

        {/* Title */}
        <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          O cenário dos seus
          <span className="block text-gradient-gold italic mt-1">
            sonhos
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Salão sofisticado com mezanino, pé-direito alto e iluminação cênica
          — no coração de Rio Bonito, para casamentos, debutantes e grandes celebrações.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-white uppercase tracking-[0.15em] text-[13px] font-medium px-10 py-4 rounded-full flex items-center gap-3"
          >
            <MessageCircle size={18} strokeWidth={2} />
            Fale Conosco
          </a>
          <a
            href="#sobre"
            className="btn-outline-gold text-white/80 uppercase tracking-[0.15em] text-[13px] font-medium px-10 py-4 rounded-full"
          >
            Conheça o Espaço
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-gold/50 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={20} className="text-gold/50" />
      </div>
    </section>
  );
}
