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
  ArrowRight,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const info = [
  {
    icon: MapPin,
    title: "Endereco",
    lines: ["Rua Julia Cortines, 64", "Centro — Rio Bonito/RJ", "CEP 28800-000"],
  },
  {
    icon: Phone,
    title: "Contato",
    lines: ["(21) 2734-6860", "(21) 96431-0877 (WhatsApp)"],
  },
  {
    icon: Clock,
    title: "Atendimento",
    lines: ["Seg a Sex: 09h as 18h", "Sab: 09h as 13h", "Visitas com agendamento"],
  },
  {
    icon: Navigation,
    title: "Como Chegar",
    lines: ["Centro de Rio Bonito", "~80 km do Rio de Janeiro"],
  },
];

const amenities = [
  { icon: Wifi, label: "Wi-Fi gratis" },
  { icon: Accessibility, label: "Acessibilidade" },
  { icon: Car, label: "Prox. estacionamento" },
];

export default function Location() {
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

  return (
    <section id="localizacao" className="py-20 sm:py-28 md:py-36 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section title */}
        <div className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3 sm:mb-4">
            Venha nos Conhecer
          </p>
          <h2 className="text-[2rem] sm:text-5xl md:text-6xl text-dark mb-5 sm:mb-6">
            Localizacao
          </h2>
          <div className="divider-gold max-w-[160px] sm:max-w-[200px] mx-auto">
            <Star size={14} className="text-gold" fill="currentColor" />
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-14">
          {/* Info */}
          <div className={`lg:col-span-2 space-y-5 sm:space-y-6 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            {info.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3.5 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors duration-300 shadow-sm border border-dark/[0.04]">
                  <item.icon size={17} className="text-gold" />
                </div>
                <div>
                  <p className="text-dark font-semibold text-[13px] sm:text-sm mb-1" style={{ fontFamily: "var(--font-body)" }}>{item.title}</p>
                  {item.lines.map((line) => (
                    <p key={line} className="text-dark/45 text-[12px] sm:text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Amenities */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-3 sm:pt-4">
              {amenities.map((a) => (
                <span
                  key={a.label}
                  className="flex items-center gap-1.5 bg-white text-dark/55 text-[10px] sm:text-[11px] font-medium px-3 py-2 rounded-lg shadow-sm border border-dark/[0.04]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <a.icon size={12} className="text-gold" />
                  {a.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white uppercase tracking-[0.15em] text-[11px] sm:text-[12px] font-medium px-8 sm:px-9 py-4 rounded-full mt-3 sm:mt-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Agende sua Visita
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          {/* Map */}
          <div className={`lg:col-span-3 rounded-2xl overflow-hidden shadow-xl h-[320px] sm:h-[440px] lg:h-auto transition-all duration-1000 delay-400 border border-dark/[0.06] ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.5!2d-42.6240853!3d-22.7084389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x978218e3a0b7c5%3A0x2e89bf6f5f09df0!2sR.%20J%C3%BAlia%20Cortines%2C%2064%20-%20Centro%2C%20Rio%20Bonito%20-%20RJ%2C%2028800-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao Espaco Ceccarelli"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
