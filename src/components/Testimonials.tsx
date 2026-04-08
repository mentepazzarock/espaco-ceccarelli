const testimonials = [
  {
    name: "Amanda & Rafael",
    event: "Casamento — Março 2024",
    text: "O Espaço Ceccarelli superou todas as nossas expectativas! Desde o primeiro contato até o grande dia, fomos tratados com muito carinho e profissionalismo. O jardim para a cerimônia é de tirar o fôlego. Nossos convidados não pararam de elogiar!",
    rating: 5,
    initials: "AR",
  },
  {
    name: "Juliana Mendes",
    event: "Aniversário de 15 anos — Julho 2024",
    text: "Realizamos a festa de 15 anos da minha filha no Espaço Ceccarelli e foi mágico! A equipe nos ajudou em cada detalhe, o salão é lindo e a iluminação deu um toque especial. A festa dos sonhos virou realidade.",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Carlos & Beatriz",
    event: "Casamento — Novembro 2023",
    text: "Procurávamos um lugar que unisse natureza e sofisticação, e encontramos no Ceccarelli. O espaço é impecável, a suíte da noiva é um charme e a estrutura do salão atendeu perfeitamente nossos 250 convidados. Recomendamos de olhos fechados!",
    rating: 5,
    initials: "CB",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gold rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-4">
            O que dizem nossos clientes
          </h2>
          <div className="divider-gold max-w-xs mx-auto">
            <span className="text-gold text-2xl">&#10022;</span>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-dark-light/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 leading-relaxed mb-8 text-sm italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-white/40 text-sm">{t.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
