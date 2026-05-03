import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = window.matchMedia("(pointer: fine)");
    setIsMobile(!check.matches);
    if (!check.matches) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "";
    };
  }, []);

  if (isMobile) return null;

  return (
    <div className="custom-cursor" style={{ left: pos.x, top: pos.y }}>
      ❤️
    </div>
  );
};

export default CustomCursor;
