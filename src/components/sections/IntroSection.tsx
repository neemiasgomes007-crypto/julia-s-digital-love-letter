import { useEffect, useState } from "react";

const IntroSection = () => {
  const [showSubtext, setShowSubtext] = useState(false);
  const title = "Bem-vinda à minha mente, Júlia.";

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtext(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 red-glow-bottom overflow-hidden">
      {/* Heartbeat background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(350 89% 42.7% / 0.06) 0%, transparent 60%)",
          animation: "heartbeat-bg 4s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Letter by letter title */}
        <h1
          className="text-2xl md:text-4xl italic mb-10"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                animation: `letter-appear 0.4s ease forwards`,
                animationDelay: `${i * 0.05}s`,
                opacity: 0,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Spotify embed */}
        <div className="spotify-embed mb-6">
          <iframe
            src="https://open.spotify.com/embed/track/2p8IUWQDrpjuFltbdgLOag?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: "12px" }}
          />
        </div>

        {/* Subtext */}
        <p
          className="text-sm italic transition-opacity duration-1000"
          style={{
            color: "hsl(var(--muted-foreground))",
            opacity: showSubtext ? 1 : 0,
          }}
        >
          Aperte o play e preste atenção.
        </p>

        {/* Scroll indicator */}
        <div
          className="mt-16"
          style={{ animation: "bounce-down 2s ease-in-out infinite" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
            <path d="M6 9l6 6 6-6" stroke="hsl(350, 89%, 42.7%)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
