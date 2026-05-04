import { useEffect, useState } from "react";
import juliaBear from "@/assets/julia-bear.jpg";

const IntroSection = () => {
  const [showSubtext, setShowSubtext] = useState(false);
  const title = "Bem-vinda à minha mente, Júlia.";
  const chars = Array.from(title);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtext(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10 red-glow-bottom overflow-hidden">
      {/* Heartbeat background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(350 89% 42.7% / 0.06) 0%, transparent 60%)",
          animation: "heartbeat-bg 4s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 text-center max-w-md mx-auto w-full px-2">
        {/* Letter by letter title */}
        <h1
          className="text-xl sm:text-2xl md:text-4xl italic mb-6 md:mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {chars.map((char, i) => (
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

        {/* Spotify embed - Die For You by The Weeknd */}
        <div className="spotify-embed mb-4 md:mb-6">
          <iframe
            src="https://open.spotify.com/embed/track/05RRxLSg0rJikDPBcNOHiF?utm_source=generator&theme=0"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: "12px" }}
          />
        </div>

        {/* Subtext */}
        <p
          className="text-xs sm:text-sm italic transition-opacity duration-1000 mb-6 md:mb-8"
          style={{
            color: "hsl(var(--muted-foreground))",
            opacity: showSubtext ? 1 : 0,
          }}
        >
          Aperte o play e preste atenção.
        </p>

        {/* Julia's selfie with bear filter */}
        <div className="flex justify-center mb-4">
          <div
            className="relative rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"
            style={{
              boxShadow: "0 0 20px hsl(350 89% 42.7% / 0.5), 0 0 40px hsl(350 89% 42.7% / 0.3)",
              animation: "glow-pulse 3s ease-in-out infinite",
              border: "3px solid hsl(350, 89%, 42.7%)",
            }}
          >
            <img
              src={juliaBear}
              alt="Julia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Cute compliment */}
        <p
          className="text-sm sm:text-base italic mb-6 md:mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "hsl(var(--tribute-rose))",
          }}
        >
          A garota mais linda que eu já vi na vida. 🤍
        </p>

        {/* Scroll indicator */}
        <div style={{ animation: "bounce-down 2s ease-in-out infinite" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
            <path d="M6 9l6 6 6-6" stroke="hsl(350, 89%, 42.7%)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
