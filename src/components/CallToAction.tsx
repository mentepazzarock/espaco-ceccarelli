import Image from "next/image";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5521964310877?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20Espa%C3%A7o%20Ceccarelli";

export default function CallToAction() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Casamento romântico"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-dark/75" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-5 sm:px-8">
        <p className="text-gold uppercase tracking-[0.4em] text-[11px] mb-6 font-medium">
          Realize seu Sonho
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
          Vamos planejar juntos o seu
          <span className="text-gradient-gold"> evento perfeito</span>?
        </h2>
        <p className="text-white/45 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Entre em contato e agende uma visita. Conheça pessoalmente
          cada detalhe do nosso espaço.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center gap-3 text-white uppercase tracking-[0.18em] text-[12px] font-semibold px-10 py-4 rounded-full"
        >
          <MessageCircle size={17} strokeWidth={2} />
          Fale pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
