import Image from "next/image";

const spaces = [
  {
    title: "Salão Principal",
    description:
      "Amplo salão climatizado com capacidade para até 300 convidados, decoração elegante e pista de dança integrada.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
    features: ["Climatizado", "300 lugares", "Pista de dança"],
  },
  {
    title: "Cerimônia ao Ar Livre",
    description:
      "Jardim gramado com paisagismo encantador, pérgola decorativa e vista panorâmica — o cenário dos sonhos para o seu 'sim'.",
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
    features: ["Jardim gramado", "Pérgola", "Vista panorâmica"],
  },
  {
    title: "Lounge & Bar",
    description:
      "Área lounge sofisticada com bar completo, iluminação intimista e mobiliário confortável para os momentos de descontração.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    features: ["Bar completo", "Iluminação intimista", "Mobiliário premium"],
  },
  {
    title: "Espaço Gourmet",
    description:
      "Cozinha profissional equipada para buffets e serviços de catering, garantindo uma experiência gastronômica impecável.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
    features: ["Cozinha industrial", "Área de preparo", "Buffet"],
  },
  {
    title: "Suíte da Noiva",
    description:
      "Suíte exclusiva e aconchegante para a noiva e madrinhas se prepararem com todo conforto e privacidade.",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
    features: ["Suíte privativa", "Espelhos", "Conforto total"],
  },
  {
    title: "Estacionamento",
    description:
      "Amplo estacionamento privativo com segurança para que seus convidados cheguem e saiam com total tranquilidade.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    features: ["Privativo", "Segurança", "Ampla capacidade"],
  },
];

export default function Structure() {
  return (
    <section id="estrutura" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">
            Ambientes
          </p>
          <h2 className="text-3xl md:text-5xl text-dark mb-4">
            Nossa Estrutura
          </h2>
          <div className="divider-gold max-w-xs mx-auto">
            <span className="text-gold text-2xl">&#10022;</span>
          </div>
          <p className="text-dark/60 mt-6 max-w-2xl mx-auto">
            Cada ambiente foi cuidadosamente planejado para oferecer conforto,
            elegância e funcionalidade ao seu evento.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <div
              key={space.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl">
                  {space.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-dark/70 text-sm leading-relaxed mb-4">
                  {space.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {space.features.map((f) => (
                    <span
                      key={f}
                      className="bg-gold/10 text-gold-dark text-xs px-3 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
