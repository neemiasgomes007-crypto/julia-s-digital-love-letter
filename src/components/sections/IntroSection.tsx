import { useEffect, useRef, useState } from "react";
import juliaBear from "@/assets/julia-bear.jpg";

const IntroSection = () => {
  const [showSubtext, setShowSubtext] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const title = "Bem-vinda à minha mente, Júlia.";
  const chars = Array.from(title);

  useEffect(() => {
    audioRef.current = new Audio("/audio/die-for-you.mp3");
    audioRef.current.loop = true;
    const timer = setTimeout(() => setShowSubtext(true), 2000);
    return () => {
      clearTimeout(timer);
      audioRef.current?.pause();
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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

        {/* Die For You - custom minimal player */}
        <a
          href="https://open.spotify.com/track/2Ch7LmS7r2Gy2kc64wv3Bz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 mx-auto mb-4 md:mb-6 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 group"
          style={{
            background: "hsl(350 89% 42.7% / 0.12)",
            border: "1px solid hsl(350 89% 42.7% / 0.3)",
            maxWidth: "260px",
          }}
        >
          {/* Play icon */}
          <div
            className="flex items-center justify-center w-9 h-9 rounded-full shrink-0 transition-colors duration-300"
            style={{
              background: "hsl(var(--tribute-red))",
            }}
          >
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path d="M2 1.5L12.5 8L2 14.5V1.5Z" fill="hsl(var(--tribute-offwhite))" />
            </svg>
          </div>
          {/* Song info */}
          <div className="text-left">
            <p className="text-xs sm:text-sm font-medium" style={{ color: "hsl(var(--tribute-offwhite))" }}>
              Die For You
            </p>
            <p className="text-[10px] sm:text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
              The Weeknd
            </p>
          </div>
        </a>

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
