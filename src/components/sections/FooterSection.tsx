import { useEffect, useRef, useState } from "react";

const FooterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [confettiTriggered, setConfettiTriggered] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !confettiTriggered) {
          setConfettiTriggered(true);
          setTimeout(() => setShowText(true), 500);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [confettiTriggered]);

  const confettiColors = ["hsl(350,89%,42.7%)", "hsl(0,0%,3.1%)", "hsl(346,50%,77.3%)"];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Confetti */}
      {confettiTriggered &&
        Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${Math.random() * 100}%`,
              background: confettiColors[i % 3],
              animationDelay: `${Math.random() * 1.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              borderRadius: Math.random() > 0.5 ? "50%" : "2px",
              width: `${6 + Math.random() * 6}px`,
              height: `${6 + Math.random() * 6}px`,
            }}
          />
        ))}

      {/* Beating heart */}
      <div
        className="text-5xl md:text-7xl mb-10"
        style={{ animation: "heartbeat 1.5s ease-in-out infinite" }}
      >
        ❤️
      </div>

      {/* Text */}
      <div
        className="text-center transition-opacity duration-1000"
        style={{ opacity: showText ? 1 : 0 }}
      >
        <p
          className="text-lg md:text-xl italic mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "hsl(var(--tribute-offwhite))",
          }}
        >
          Feito com amor. Só pra você. Só porque você merece.
        </p>
        <p
          className="text-sm tracking-widest mt-6"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Julia. Sempre.
        </p>
      </div>

      {/* Hello Kitty bow SVG */}
      <div className="mt-16 opacity-40">
        <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
          <ellipse cx="10" cy="14" rx="10" ry="12" fill="hsl(350,89%,42.7%)" />
          <ellipse cx="30" cy="14" rx="10" ry="12" fill="hsl(350,89%,42.7%)" />
          <circle cx="20" cy="14" r="5" fill="hsl(350,89%,42.7%)" />
        </svg>
      </div>
    </section>
  );
};

export default FooterSection;
