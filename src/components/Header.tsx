"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
];

const WHATSAPP_LINK =
  "https://wa.me/5521964310877?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Espa%C3%A7o%20Ceccarelli";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass shadow-2xl py-3"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/20 group-hover:ring-gold/60 transition-all duration-500">
            <Image
              src="/logo.jpg"
              alt="Espaço Ceccarelli"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-white text-[15px] leading-tight tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
              Espaço <span className="text-gold">Ceccarelli</span>
            </p>
            <p className="text-white/30 text-[9px] uppercase tracking-[0.25em]">
              Eventos & Casamentos
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-white/70 hover:text-white text-[13px] uppercase tracking-[0.15em] px-4 py-2 transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5 h-px bg-gold transition-all duration-300" />
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 border border-gold/60 hover:bg-gold hover:border-gold text-gold hover:text-dark text-[11px] uppercase tracking-[0.18em] font-semibold px-6 py-2.5 rounded-full transition-all duration-400 flex items-center gap-2"
          >
            <MessageCircle size={14} strokeWidth={2.5} />
            Agende sua Visita
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2 hover:text-gold transition-colors"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 animate-fade-in"
          onClick={() => setMenuOpen(false)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>
          <Image
            src="/logo.jpg"
            alt="Espaço Ceccarelli"
            width={80}
            height={80}
            className="rounded-full ring-2 ring-gold/40 mb-4"
          />
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-gold text-xl tracking-[0.2em] uppercase transition-colors py-2"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gradient-to-r from-gold to-gold-dark text-dark font-bold text-sm uppercase tracking-wider px-10 py-3.5 rounded-full flex items-center gap-2"
          >
            <MessageCircle size={16} />
            Agende sua Visita
          </a>
        </div>
      )}
    </header>
  );
}
