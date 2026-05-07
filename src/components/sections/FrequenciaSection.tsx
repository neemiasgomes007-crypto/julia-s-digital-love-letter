const lines = [
  "A nossa amizade tem uma vibe diferente. Uma conexão com a profundidade de uma letra do The Weeknd.",
  "A verdade, Júlia, é que não importa a distância. Mesmo quando a gente não se vê, mesmo quando a rotina tenta fazer barulho, você tá sempre nos meus pensamentos.",
  "Eu decorei os seus detalhes porque você se tornou a pessoa mais especial da minha vida.",
];

const FrequenciaSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 red-glow-bottom overflow-hidden">
      <div className="max-w-3xl mx-auto text-center stagger-children">
        <span className="reveal section-label block mb-3">Arquivo 004 — A Frequência Final</span>
        <h2
          className="reveal text-4xl md:text-6xl lg:text-[100px] italic mb-14 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(0, 0%, 100%)" }}
        >
          A Nossa Própria Frequência
        </h2>

        {lines.map((line, i) => (
          <p
            key={i}
            className="reveal text-base md:text-lg leading-relaxed mb-6"
            style={{ color: "hsl(var(--tribute-offwhite))" }}
          >
            {line}
          </p>
        ))}

        <p
          className="reveal text-xl md:text-2xl italic mt-12 mb-10 leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "hsl(0, 0%, 100%)",
          }}
        >
          Esse site é apenas uma prova digital de algo que o meu coração já registrou: você é a minha melhor descoberta, a amizade mais valiosa que eu tenho.
        </p>

        <p
          className="reveal text-xs md:text-sm tracking-[0.3em] uppercase mt-8"
          style={{ color: "hsl(var(--tribute-red))" }}
        >
          COM VOCÊ, EU SEMPRE VOU QUERER MAIS.
        </p>
      </div>
    </section>
  );
};

export default FrequenciaSection;
