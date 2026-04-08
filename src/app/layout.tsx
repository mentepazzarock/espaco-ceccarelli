import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Espaço Ceccarelli | Eventos e Casamentos em Rio Bonito/RJ",
  description:
    "O cenário perfeito para o dia mais especial da sua vida. Espaço Ceccarelli em Rio Bonito/RJ — casamentos, festas e eventos corporativos com estrutura completa.",
  keywords: "casamento, eventos, Rio Bonito, RJ, espaço de festas, Ceccarelli",
  openGraph: {
    title: "Espaço Ceccarelli | Eventos e Casamentos em Rio Bonito/RJ",
    description:
      "O cenário perfeito para o dia mais especial da sua vida.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${lato.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
