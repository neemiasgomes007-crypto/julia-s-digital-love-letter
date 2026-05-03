import babyJulia from "@/assets/baby-julia.jpg";

const ArquivoRosaSection = () => {
  return (
    <section className="relative py-20 px-4 red-glow-bottom overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          {/* Photo */}
          <div className="reveal relative group w-full md:w-2/5 flex-shrink-0">
            <div className="relative overflow-hidden rounded-2xl" style={{
              boxShadow: "0 0 40px hsl(346 50% 77.3% / 0.15)"
            }}>
              <img
                src={babyJulia}
                alt="Baby Julia"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(350,89%,42.7%,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Red thread line */}
            <div className="hidden md:block absolute -left-10 top-1/2 w-10 h-px" style={{ background: "hsl(var(--tribute-red))" }} />
          </div>

          {/* Text */}
          <div className="w-full md:w-3/5 stagger-children">
            <span className="reveal section-label block mb-3">Arquivo 001 — O Início</span>
            <h2
              className="reveal text-3xl md:text-5xl italic mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(0, 0%, 100%)" }}
            >
              O Início do Caos Bonito
            </h2>
            <p className="reveal text-base md:text-lg leading-relaxed" style={{ color: "hsl(var(--tribute-offwhite))" }}>
              Se alguém me dissesse que essa garotinha de rosa, com os braços pro alto e um olhar tão puro, se tornaria a mulher que domina cada um dos meus pensamentos, eu não acreditaria. O mundo ainda não sabia, mas você já estava se preparando para virar a minha vida de cabeça para baixo. A essência inocente sempre esteve aí, apenas aguardando o momento certo para cruzar o meu caminho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArquivoRosaSection;
