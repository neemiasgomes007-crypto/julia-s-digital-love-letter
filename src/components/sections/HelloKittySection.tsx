import hkStreet from "@/assets/hk-street.jpg";
import hkHeadphones from "@/assets/hk-headphones.jpg";
import hkBrasil from "@/assets/hk-brasil.jpg";
import hkPink from "@/assets/hk-pink.jpg";

const tags = [
  "iconic", "soft but fierce", "main character", "that girl",
  "unstoppable", "a whole vibe", "too real for this world",
];

const images = [
  { src: hkStreet, alt: "Hello Kitty street style" },
  { src: hkHeadphones, alt: "Hello Kitty headphones" },
  { src: hkBrasil, alt: "Hello Kitty Brasil" },
  { src: hkPink, alt: "Hello Kitty pink" },
];

const HelloKittySection = () => {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "hsl(var(--tribute-section-alt))" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image grid */}
          <div className="reveal w-full md:w-1/2 grid grid-cols-2 gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 20px hsl(346 50% 77.3% / 0.4)" }}
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 stagger-children">
            <span className="reveal section-label block mb-3">Arquivo 003 — O Contraste</span>
            <h2
              className="reveal text-3xl md:text-5xl italic mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(0, 0%, 100%)" }}
            >
              O Protocolo Hello Kitty
            </h2>
            <p className="reveal text-base md:text-lg leading-relaxed mb-4" style={{ color: "hsl(var(--tribute-offwhite))" }}>
              E então, no meio de toda essa atitude, você me desarma completamente. Aparece com um filtro fofo, faz um biquinho e traz uma doçura que me quebra por inteiro.
            </p>
            <p className="reveal text-base md:text-lg leading-relaxed" style={{ color: "hsl(var(--tribute-offwhite))" }}>
              É o meu contraste favorito no mundo inteiro. A garota adorável que rouba o meu sorriso mais sincero e a mina forte que me impressiona sem precisar dizer uma palavra.
            </p>

            {/* Floating tags */}
            <div className="reveal flex flex-wrap gap-2 mt-8">
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs border transition-colors duration-300"
                  style={{
                    animation: `float-tag ${2.5 + i * 0.3}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                    borderColor: i % 2 === 0 ? "hsl(var(--tribute-red))" : "hsl(var(--tribute-red))",
                    background: i % 2 === 0 ? "transparent" : "hsl(var(--tribute-red))",
                    color: i % 2 === 0 ? "hsl(var(--tribute-red))" : "hsl(var(--tribute-black))",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelloKittySection;
