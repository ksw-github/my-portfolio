"use client";

import { useState, useEffect } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="맨 위로 이동"
      className={[
        "fixed bottom-8 right-8 z-[200] w-12 h-12 rounded-full border-none cursor-pointer",
        "flex items-center justify-center text-[20px]",
        "backdrop-blur-[8px] text-coral",
        "dark:bg-white/[0.12] bg-coral/[0.15]",
        "hover:bg-coral hover:text-white hover:shadow-[0_8px_28px_rgba(255,107,107,0.4)] hover:-translate-y-[3px] hover:scale-[1.08]",
        "shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
        "transition-[opacity,transform,background,color,box-shadow] duration-300",
        visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-[0.8] pointer-events-none",
      ].join(" ")}
    >
      ↑
    </button>
  );
}
