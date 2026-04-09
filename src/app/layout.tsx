import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
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
      className={`${cormorant.variable} ${montserrat.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventVenue",
              name: "Espaco Ceccarelli",
              description:
                "Salao de eventos e casamentos em Rio Bonito/RJ com mezanino, pe-direito alto, iluminacao cenica e jardim com pergola.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Julia Cortines, 64",
                addressLocality: "Rio Bonito",
                addressRegion: "RJ",
                postalCode: "28800-000",
                addressCountry: "BR",
              },
              telephone: "+55-21-96431-0877",
              url: "https://espaco-ceccarelli.vercel.app",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "216",
                bestRating: "5",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-22.7084389",
                longitude: "-42.6240853",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
