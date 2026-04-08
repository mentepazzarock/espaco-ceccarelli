import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Espaço Ceccarelli | Eventos & Casamentos em Rio Bonito — RJ",
  description:
    "Há mais de 13 anos realizando sonhos em Rio Bonito/RJ. Salão sofisticado com mezanino, pé-direito alto, iluminação cênica e ambientes versáteis para casamentos, debutantes e eventos corporativos.",
  keywords:
    "casamento Rio Bonito, espaço de eventos RJ, Ceccarelli, salão de festas, debutante, evento corporativo",
  openGraph: {
    title: "Espaço Ceccarelli | Eventos & Casamentos em Rio Bonito — RJ",
    description:
      "O cenário perfeito para o dia mais especial da sua vida. Salão com mezanino, pé-direito alto e acabamentos sofisticados no coração de Rio Bonito.",
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
      className={`${cormorant.variable} ${jost.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
