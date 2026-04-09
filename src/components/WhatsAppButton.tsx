"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_GENERIC } from "@/lib/constants";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_LINK_GENERIC}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 w-13 h-13 sm:w-[60px] sm:h-[60px] bg-[#25D366] hover:bg-[#1EBE5A] rounded-full flex items-center justify-center shadow-xl transition-all duration-700 hover:scale-110 animate-pulse-whatsapp ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <MessageCircle size={22} className="text-white sm:hidden" fill="white" strokeWidth={0} />
      <MessageCircle size={26} className="text-white hidden sm:block" fill="white" strokeWidth={0} />
    </a>
  );
}
