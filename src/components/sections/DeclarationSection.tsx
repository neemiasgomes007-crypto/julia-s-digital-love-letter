const DeclarationSection = () => {
  const lines = [
    "Existe um universo inteiro que acontece na minha cabeça toda vez que eu olho para você.",
    "Um mundo pintado nas suas cores favoritas, em preto e vermelho, onde você é a única protagonista.",
    "Eu sempre fui um observador, mas você...",
    "você se tornou o meu foco absoluto.",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 red-glow-bottom overflow-hidden">
      {/* Watermark J */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(300px, 50vw, 600px)",
          fontStyle: "italic",
          color: "hsl(var(--foreground) / 0.04)",
          lineHeight: 1,
        }}
      >
        J
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center stagger-children">
        <h2
          className="reveal text-4xl md:text-6xl lg:text-7xl italic mb-12"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(0, 0%, 100%)" }}
        >
          Existe um universo inteiro
        </h2>

        {lines.map((line, i) => (
          <p
            key={i}
            className="reveal text-base md:text-lg leading-relaxed mb-4"
            style={{ color: "hsl(var(--tribute-offwhite))" }}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default DeclarationSection;
