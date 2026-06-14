"use client";

import { useState, useEffect } from "react";

export function TypingGreeting({ firstName }: { firstName: string }) {
  const [typedHi, setTypedHi] = useState("");
  const [showWave, setShowWave] = useState(false);
  const [typedRest, setTypedRest] = useState("");
  const [showName, setShowName] = useState(false);
  const [showDot, setShowDot] = useState(false);
  const [done, setDone] = useState(false);

  const hi = "Hi";
  const rest = ", I'm ";

  useEffect(() => {
    if (typedHi.length < hi.length) {
      const t = setTimeout(() => setTypedHi(hi.slice(0, typedHi.length + 1)), 150);
      return () => clearTimeout(t);
    }
    if (typedHi.length === hi.length && !showWave) {
      const t = setTimeout(() => setShowWave(true), 500);
      return () => clearTimeout(t);
    }
    if (showWave && typedRest.length < rest.length && !done) {
      const t = setTimeout(() => setTypedRest(rest.slice(0, typedRest.length + 1)), 120);
      return () => clearTimeout(t);
    }
    if (showWave && typedRest.length === rest.length && !showName) {
      const t = setTimeout(() => setShowName(true), 300);
      return () => clearTimeout(t);
    }
    if (showName && !showDot) {
      const t = setTimeout(() => setShowDot(true), 400);
      return () => clearTimeout(t);
    }
    if (showDot && !done) {
      const t = setTimeout(() => setDone(true), 300);
      return () => clearTimeout(t);
    }
  });

  const isTyping = typedHi.length < hi.length || typedRest.length < rest.length;

  return (
    <h1 className="hero-greeting text-[clamp(2.8rem,9vw,5.5rem)] font-extrabold leading-[1.1] tracking-tight">
      <span style={{ color: "var(--color-text)" }}>
        {typedHi}
      </span>
      {isTyping && <span className="typing-cursor">|</span>}
      {showWave && (
        <span role="img" aria-label="wave" className="inline-block animate-pop-wave">👋</span>
      )}
      <span style={{ color: "var(--color-text)" }}>
        {typedRest}
        {showName && (
          <span className="hero-name-gradient">{firstName}</span>
        )}
        {showDot && <span>.</span>}
      </span>
    </h1>
  );
}
