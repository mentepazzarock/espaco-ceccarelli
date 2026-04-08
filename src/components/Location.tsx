"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Wifi,
  Accessibility,
  Car,
  Star,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5521964310877?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20Espa%C3%A7o%20Ceccarelli";

const info = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Rua Júlia Cortines, 64", "Centro — Rio Bonito/RJ", "CEP 28800-000"],
  },
  {
    icon: Phone,
    title: "Contato",
    lines: ["(21) 2734-6860", "(21) 96431-0877 (WhatsApp)"],
  },
  {
    icon: Clock,
    title: "Atendimento",
    lines: ["Seg a Sex: 09h às 18h", "Sáb: 09h às 13h", "Visitas com agendamento"],
  },
  {
    icon: Navigation,
    title: "Como Chegar",
    lines: ["Fácil acesso — centro de Rio Bonito", "~80 km do Rio de Janeiro", "Próximo à BR-101 e RJ-124"],
  },
];

const amenities = [
  { icon: Wifi, label: "Wi-Fi grátis" },
  { icon: Accessibility, label: "Acessibilidade" },
  { icon: Car, label: "Próx. estacionamento" },
];

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="localizacao" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold uppercase tracking-[0.4em] text-[11px] sm:text-xs mb-4 font-medium">
            Venha nos Conhecer
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-dark mb-6">
            Localização
          </h2>
          <div className="divider-gold max-w-[200px] mx-auto">
            <Star size={14} className="text-gold" fill="currentColor" />
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Info cards — 2 cols */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            {info.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 bg-cream rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                  <item.icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-dark font-semibold text-sm mb-1">{item.title}</p>
                  {item.lines.map((line) => (
                    <p key={line} className="text-dark/50 text-[13px] leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Amenities */}
            <div className="flex flex-wrap gap-3 pt-4">
              {amenities.map((a) => (
                <span
                  key={a.label}
                  className="flex items-center gap-1.5 bg-cream text-dark/60 text-[11px] font-medium px-3 py-2 rounded-lg"
                >
                  <a.icon size={13} className="text-gold" />
                  {a.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 text-white uppercase tracking-[0.15em] text-[12px] font-medium px-8 py-4 rounded-full mt-4"
            >
              <MessageCircle size={16} />
              Agende sua Visita
            </a>
          </div>

          {/* Map — 3 cols */}
          <div className={`lg:col-span-3 rounded-2xl overflow-hidden shadow-xl h-[420px] lg:h-auto transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.5!2d-42.6240853!3d-22.7084389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x978218e3a0b7c5%3A0x2e89bf6f5f09df0!2sR.%20J%C3%BAlia%20Cortines%2C%2064%20-%20Centro%2C%20Rio%20Bonito%20-%20RJ%2C%2028800-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Espaço Ceccarelli — Rua Júlia Cortines, 64, Centro, Rio Bonito/RJ"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
