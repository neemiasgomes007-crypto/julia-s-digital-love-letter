const highlightWords = (text: string, words: string[]) => {
  const regex = new RegExp(`(${words.join("|")})`, "gi");
  return text.split(regex).map((part, i) =>
    words.some((w) => w.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="text-accent-red">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const ObraDeArteSection = () => {
  return (
    <section className="relative py-24 px-4 red-glow-bottom overflow-hidden">
      <div className="max-w-3xl mx-auto text-center stagger-children">
        <span className="reveal section-label block mb-3">Arquivo 002 — O Espelho</span>
        <h2
          className="reveal text-3xl md:text-5xl lg:text-6xl italic mb-10"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(0, 0%, 100%)" }}
        >
          A Obra de Arte em Movimento
        </h2>
        <p className="reveal text-base md:text-lg leading-relaxed mb-8" style={{ color: "hsl(var(--tribute-offwhite))" }}>
          Eu adoro observar você. Adoro ver você arrumando os cachos, ajeitando a blusa do Stranger Things com aquela atitude de quem sabe o poder absurdo que tem. Eu reparo em cada detalhe, no cuidado com a sua fitagem, no jeito que você se olha e sorri.
        </p>
        <p className="reveal text-lg md:text-xl leading-relaxed" style={{ color: "hsl(var(--tribute-offwhite))" }}>
          {highlightWords(
            "Você tem essa confiança que me fascina e me encanta ao mesmo tempo. Essa energia que ilumina qualquer lugar. Eu quero estar por perto, te ver brilhar, e garantir que você sempre saiba o quanto é incrível.",
            ["fascina", "encanta", "ilumina", "incrível"]
          )}
        </p>

        {/* Signature line */}
        <div className="reveal mt-12 mx-auto w-32 h-px" style={{ background: "hsl(var(--tribute-red))" }} />
      </div>
    </section>
  );
};

export default ObraDeArteSection;
