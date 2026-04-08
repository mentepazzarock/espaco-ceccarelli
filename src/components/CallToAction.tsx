import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5521964310877?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20Espa%C3%A7o%20Ceccarelli";

export default function CallToAction() {
  return (
    <section className="relative py-20 sm:py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Decoração de casamento"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-dark/80" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-5 sm:px-10">
        <p className="text-gold uppercase tracking-[0.3em] text-[10px] sm:text-[12px] mb-5 sm:mb-6 font-medium" style={{ fontFamily: "var(--font-body)" }}>
          Realize seu Sonho
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-[4rem] text-white leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-7" style={{ fontWeight: 300 }}>
          Vamos planejar juntos o seu
          <em className="text-gradient-gold not-italic"> evento perfeito</em>?
        </h2>
        <p className="text-white/35 text-[13px] sm:text-base max-w-md mx-auto mb-8 sm:mb-11 leading-[1.8] sm:leading-[1.9]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          Entre em contato e agende uma visita. Conheça pessoalmente
          cada detalhe do nosso espaço.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center gap-2.5 text-white uppercase tracking-[0.2em] text-[11px] sm:text-[12px] font-medium px-8 sm:px-10 py-3.5 sm:py-4 rounded-full"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Agende sua Visita
          <ArrowRight size={14} strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
}
