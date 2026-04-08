import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">
            Conheça
          </p>
          <h2 className="text-3xl md:text-5xl text-dark mb-4">
            Espaço Ceccarelli
          </h2>
          <div className="divider-gold max-w-xs mx-auto">
            <span className="text-gold text-2xl">&#10022;</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
                alt="Espaço Ceccarelli - Área externa"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 bg-dark text-white p-6 rounded-xl shadow-xl">
              <p className="text-gold text-3xl font-bold">10+</p>
              <p className="text-white/70 text-sm">Anos realizando sonhos</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl text-dark mb-6 leading-snug">
              Um refúgio de elegância em meio à natureza de{" "}
              <span className="text-gold">Rio Bonito</span>
            </h3>
            <div className="space-y-4 text-dark/70 leading-relaxed">
              <p>
                Localizado em Rio Bonito, no interior do estado do Rio de
                Janeiro, o <strong className="text-dark">Espaço Ceccarelli</strong>{" "}
                é um espaço de eventos que une sofisticação, conforto e o
                encanto de um cenário natural deslumbrante.
              </p>
              <p>
                Nossa propriedade oferece ambientes versáteis para casamentos,
                aniversários, formaturas, eventos corporativos e celebrações
                especiais. Cada detalhe foi pensado para proporcionar momentos
                inesquecíveis aos nossos clientes e seus convidados.
              </p>
              <p>
                Com uma equipe dedicada e uma estrutura completa, cuidamos de
                cada aspecto do seu evento — da cerimônia à festa — garantindo
                que tudo saia perfeito.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: "👥", label: "Até 300 convidados" },
                { icon: "🌿", label: "Área verde exuberante" },
                { icon: "🎶", label: "Estrutura para som e luz" },
                { icon: "🍽️", label: "Espaço gourmet" },
              ].map((feat) => (
                <div key={feat.label} className="flex items-center gap-3">
                  <span className="text-2xl">{feat.icon}</span>
                  <span className="text-dark/80 text-sm font-medium">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
