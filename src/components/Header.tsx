"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_GENERIC } from "@/lib/constants";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localizacao" },
];

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
          ? "glass shadow-2xl py-2.5 sm:py-3"
          : "bg-gradient-to-b from-black/60 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-1 ring-white/15 group-hover:ring-gold/50 transition-all duration-500">
            <Image
              src="/logo.jpg"
              alt="Espaco Ceccarelli"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-white text-[14px] sm:text-[16px] leading-tight tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
            Espaco <span className="text-gold font-medium">Ceccarelli</span>
          </p>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-white/55 hover:text-white text-[11px] uppercase tracking-[0.18em] px-4 py-2 transition-colors duration-300 group"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gold/60 transition-all duration-300" />
            </a>
          ))}
          <a
            href={WHATSAPP_LINK_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-5 border border-gold/40 hover:bg-gold hover:border-gold text-gold hover:text-dark text-[10px] uppercase tracking-[0.2em] font-medium px-7 py-2.5 rounded-full transition-all duration-400 flex items-center gap-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <MessageCircle size={13} strokeWidth={2.5} />
            Agende sua Visita
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-1.5 hover:text-gold transition-colors"
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-0 bg-dark/[0.97] backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-5 animate-fade-in"
          onClick={() => setMenuOpen(false)}
        >
          <button
            className="absolute top-4 right-5 text-white/50 hover:text-white p-2"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Logo in mobile menu */}
          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/logo.jpg"
              alt="Espaco Ceccarelli"
              width={48}
              height={48}
              className="rounded-full ring-1 ring-gold/30"
            />
            <p className="text-white text-lg tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
              Espaco <span className="text-gold font-medium">Ceccarelli</span>
            </p>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-gold text-[15px] tracking-[0.15em] uppercase transition-colors py-1.5"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              {link.label}
            </a>
          ))}

          <a
            href={WHATSAPP_LINK_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 btn-gold text-white text-[11px] uppercase tracking-[0.2em] font-medium px-9 py-4 rounded-full flex items-center gap-2.5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <MessageCircle size={14} />
            Agende sua Visita
          </a>
        </div>
      )}
    </header>
  );
}
