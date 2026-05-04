import { useState, useEffect } from "react";

const WelcomeScreen = ({ onEnter }: { onEnter: () => void }) => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => {
      setVisible(false);
      onEnter();
    }, 800);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center px-6 transition-opacity duration-700"
      style={{
        background: "hsl(var(--tribute-black))",
        opacity: fadeOut ? 0 : 1,
      }}
    >
      {/* Heartbeat glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(350 89% 42.7% / 0.08) 0%, transparent 50%)",
          animation: "heartbeat-bg 3s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 text-center max-w-sm">
        {/* Heart */}
        <div
          className="text-4xl md:text-5xl mb-8"
          style={{ animation: "heartbeat 1.5s ease-in-out infinite" }}
        >
          ❤️
        </div>

        <p
          className="text-sm tracking-[0.3em] uppercase mb-3"
          style={{ color: "hsl(var(--tribute-red))" }}
        >
          07 . 05 . 2026
        </p>

        <h1
          className="text-2xl md:text-3xl italic mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "hsl(var(--tribute-offwhite))",
          }}
        >
          Isso aqui é pra você, Júlia.
        </h1>

        <p
          className="text-sm mb-10 leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Um presente que não cabe em caixa nenhuma. <br />
          Coloca o fone e aperta o play. 🎧
        </p>

        <button
          onClick={handleEnter}
          className="px-8 py-3 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            border: "1px solid hsl(var(--tribute-red))",
            color: "hsl(var(--tribute-red))",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "hsl(350 89% 42.7% / 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          Abrir ❤️
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
