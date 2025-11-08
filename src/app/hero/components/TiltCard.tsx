"use client";

import { useRef } from "react";

export default function TiltCard({
  children,
  onClick,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * 10;
    const rotateY = ((x - rect.width / 2) / rect.width) * -10;

    const lift = 12; // magnetic lift amt

    el.style.transform = `
      perspective(700px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-${lift}px)
      scale(1.05)
    `;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `
      perspective(700px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
      scale(1)
    `;
  }

  return (
    <div
      ref={ref}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick?.();
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={`
        relative cursor-pointer select-none
        rounded-xl border border-white/2
        bg-white/2 backdrop-blur-sm px-4 py-5
        transition-transform duration-200 ease-out
        will-change-transform
        overflow-hidden
        hover:shadow-[0_18px_40px_rgba(255,255,255,0.15)]
        group
        ${className}
      `}
      style={{
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      {/* Shine (soft glass streak) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ perspective: "700px" }}
      >
        <div
          className="absolute inset-0 shine"
          style={{
            background:
              "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
            transform: "translateX(-100%) rotate(10deg)",
            filter: "blur(4px)",
            animation: "shine-sweep 1.5s ease-in-out forwards",
          }}
        />
      </div>

      {/* Neon aura glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          blur-xl
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 45%, transparent 70%)",
          zIndex: -1,
        }}
      />

      {/* Neon edge ring */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-xl border border-white
          opacity-0 group-hover:opacity-50
          transition-all duration-300
        "
        style={{ boxShadow: "0 0 30px rgba(255,255,255,0.25)" }}
      />

      {children}
    </div>
  );
}