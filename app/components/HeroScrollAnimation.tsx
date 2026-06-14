"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

export function HeroScrollAnimation({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, -rect.top / rect.height));
      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const opacity = Math.max(1 - progress * 1.2, 0);
  const scale = 1 - progress * 0.05;

  return (
    <div
      ref={ref}
      style={{ opacity, transform: `scale(${scale})` }}
      className="transition-[transform,opacity] duration-75 ease-linear"
    >
      {children}
    </div>
  );
}
