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
          Eu amo observar você. Amo ver você em frente ao espelho, ajeitando a blusa do Stranger Things, arrumando os cachos com a perfeição de quem sabe o poder absurdo que tem. Eu reparo em cada detalhe, desde o cuidado com a sua fitagem até o momento em que você se olha e sorri.
        </p>
        <p className="reveal text-lg md:text-xl leading-relaxed" style={{ color: "hsl(var(--tribute-offwhite))" }}>
          {highlightWords(
            "Você tem essa confiança que me fascina e me enlouquece ao mesmo tempo. Aquele desejo quase agressivo de te prender na cabeceira da cama, só para deixar bem claro: sou eu quem está no controle. No controle de te amar, de te proteger, e de garantir que você seja a mulher mais realizada do mundo.",
            ["fascina", "enlouquece", "controle", "te amar"]
          )}
        </p>

        {/* Signature line */}
        <div className="reveal mt-12 mx-auto w-32 h-px" style={{ background: "hsl(var(--tribute-red))" }} />
      </div>
    </section>
  );
};

export default ObraDeArteSection;
