"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5521964310877?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Espa%C3%A7o%20Ceccarelli";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-hide tooltip after 5s
  useEffect(() => {
    if (visible && tooltip) {
      const t = setTimeout(() => setTooltip(false), 5000);
      return () => clearTimeout(t);
    }
  }, [visible, tooltip]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Tooltip */}
      {tooltip && (
        <div className="hidden sm:block bg-white text-dark text-[13px] font-medium px-4 py-2.5 rounded-xl shadow-xl animate-fade-in">
          <span>Fale conosco!</span>
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
        </div>
      )}

      {/* Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5A] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-whatsapp"
      >
        <MessageCircle size={26} className="text-white" fill="white" strokeWidth={0} />
      </a>
    </div>
  );
}
