import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function CallToAction() {
  return (
    <section className="relative py-24 sm:py-36 md:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Decoracao de casamento"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-dark/80" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/[0.06] rounded-full hidden md:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-gold/[0.04] rounded-full hidden md:block" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-5 sm:px-10">
        <p className="section-label !text-gold/80 mb-5 sm:mb-6">
          Realize seu Sonho
        </p>
        <h2 className="text-[1.8rem] sm:text-5xl md:text-[4rem] text-white leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8">
          Vamos planejar juntos o seu
          <em className="text-gradient-gold not-italic font-medium"> evento perfeito</em>?
        </h2>
        <p className="text-white/40 text-[13px] sm:text-base max-w-md mx-auto mb-9 sm:mb-12 leading-[1.8] sm:leading-[1.9]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          Entre em contato e agende uma visita. Conheca pessoalmente
          cada detalhe do nosso espaco.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center gap-3 text-white uppercase tracking-[0.2em] text-[11px] sm:text-[12px] font-medium px-9 sm:px-12 py-4 sm:py-[18px] rounded-full"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Agende sua Visita
          <ArrowRight size={14} strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
}
