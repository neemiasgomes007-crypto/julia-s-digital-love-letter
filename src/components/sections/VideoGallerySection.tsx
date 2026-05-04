import { useRef, useState } from "react";

const videos = [
  { src: "/videos/julia-1.mp4", label: "💫" },
  { src: "/videos/julia-2.mp4", label: "🖤" },
  { src: "/videos/julia-3.mp4", label: "🌹" },
  { src: "/videos/julia-4.mp4", label: "✨" },
  { src: "/videos/julia-5.mp4", label: "💋" },
  { src: "/videos/julia-6.mp4", label: "🔥" },
];

const VideoGallerySection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) {
        v.pause();
        v.currentTime = 0;
      }
    });
    setActiveIndex(index);
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center stagger-children mb-14">
          <span className="reveal section-label block mb-3">Arquivo 005 — Em Movimento</span>
          <h2
            className="reveal text-3xl md:text-5xl lg:text-6xl italic mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(0, 0%, 100%)" }}
          >
            Cada Segundo Com Você
          </h2>
          <p className="reveal text-base md:text-lg" style={{ color: "hsl(var(--tribute-offwhite))" }}>
            Momentos que eu guardo como se fossem ouro.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, i) => (
            <div
              key={i}
              className="reveal relative group rounded-2xl overflow-hidden aspect-[9/16] cursor-pointer"
              style={{
                boxShadow: activeIndex === i
                  ? "0 0 30px hsl(350 89% 42.7% / 0.4)"
                  : "0 0 0 transparent",
                transition: "box-shadow 0.5s ease",
              }}
            >
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={video.src}
                className="w-full h-full object-cover"
                playsInline
                loop
                muted
                preload="metadata"
                onClick={(e) => {
                  const v = e.currentTarget;
                  if (v.paused) {
                    v.play();
                    handlePlay(i);
                  } else {
                    v.pause();
                    setActiveIndex(null);
                  }
                }}
              />
              {/* Play overlay */}
              {activeIndex !== i && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/20">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "hsl(350 89% 42.7% / 0.8)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <path d="M2 1.5L16 10L2 18.5V1.5Z" fill="white" />
                    </svg>
                  </div>
                </div>
              )}
              {/* Bottom label */}
              <div className="absolute bottom-3 left-3 text-lg">{video.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;
