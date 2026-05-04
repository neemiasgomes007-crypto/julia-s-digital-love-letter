import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Particles from "@/components/Particles";
import CustomCursor from "@/components/CustomCursor";
import IntroSection from "@/components/sections/IntroSection";
import DeclarationSection from "@/components/sections/DeclarationSection";
import ArquivoRosaSection from "@/components/sections/ArquivoRosaSection";
import ObraDeArteSection from "@/components/sections/ObraDeArteSection";
import VideoGallerySection from "@/components/sections/VideoGallerySection";
import HelloKittySection from "@/components/sections/HelloKittySection";
import FrequenciaSection from "@/components/sections/FrequenciaSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    // Re-run scroll reveal after all images load
    const handleLoad = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Floating particles */}
      <Particles count={18} />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Sections */}
      <IntroSection />
      <DeclarationSection />
      <ArquivoRosaSection />
      <ObraDeArteSection />
      <VideoGallerySection />
      <HelloKittySection />
      <FrequenciaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
