import Image from "next/image";
import { Phone, MapPin, Heart } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521964310877";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socials = [
  { href: "https://www.instagram.com/espaco_ceccarelli/", icon: InstagramIcon, label: "Instagram" },
  { href: "https://www.facebook.com/EspacoCeccarelli/", icon: FacebookIcon, label: "Facebook" },
  { href: WHATSAPP_LINK, icon: WhatsAppIcon, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-14">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <Image
                src="/logo.jpg"
                alt="Espaço Ceccarelli"
                width={40}
                height={40}
                className="rounded-full ring-1 ring-gold/30"
              />
              <div>
                <p className="text-white text-base sm:text-lg tracking-wide" style={{ fontFamily: "var(--font-heading)", fontWeight: 300 }}>
                  Espaço <span className="text-gold">Ceccarelli</span>
                </p>
                <p className="text-white/25 text-[9px] sm:text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-body)" }}>
                  Eventos & Casamentos
                </p>
              </div>
            </div>
            <p className="text-white/35 text-[13px] sm:text-sm leading-[1.8] max-w-sm">
              Há mais de 13 anos transformando sonhos em realidade no coração de Rio
              Bonito. Sofisticação, conforto e um atendimento que faz a diferença.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5 sm:gap-3 mt-5 sm:mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/[0.05] hover:bg-gold/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <s.icon className="text-white/40 group-hover:text-gold transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-gold/70 uppercase tracking-[0.2em] text-[10px] sm:text-[11px] font-semibold mb-4 sm:mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Navegação
            </h4>
            <nav className="flex flex-col gap-2.5 sm:gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/30 hover:text-gold text-[12px] sm:text-[13px] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="text-gold/70 uppercase tracking-[0.2em] text-[10px] sm:text-[11px] font-semibold mb-4 sm:mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Contato
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <MapPin size={14} className="text-gold/50 mt-0.5 shrink-0" />
                <p className="text-white/30 text-[12px] sm:text-[13px] leading-relaxed">
                  R. Júlia Cortines, 64<br />
                  Centro — Rio Bonito/RJ
                </p>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Phone size={14} className="text-gold/50 shrink-0" />
                <div>
                  <p className="text-white/30 text-[12px] sm:text-[13px]">(21) 2734-6860</p>
                  <p className="text-white/30 text-[12px] sm:text-[13px]">(21) 96431-0877</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/15 text-[11px] sm:text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Espaço Ceccarelli. Todos os direitos reservados.
          </p>
          <p className="text-white/10 text-[10px] sm:text-[11px] flex items-center gap-1">
            Demo — feito com <Heart size={9} className="text-gold/30" /> Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
