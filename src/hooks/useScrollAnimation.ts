import { useRef, useState, useEffect, CSSProperties } from "react";

interface Options {
  threshold?: number;
  delay?: number;
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>({
  threshold = 0.15,
  delay = 0,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animStyle: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(48px)",
    transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
  };

  return { ref, animStyle };
}
