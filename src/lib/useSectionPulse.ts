"use client";

import { useEffect } from "react";

export function useSectionPulse() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;

          const pulse = document.createElement("div");
          pulse.className =
            "absolute left-0 right-0 h-[1px] bg-white opacity-80";
          pulse.style.top = "0"; // pulse on top border

          el.appendChild(pulse);

          pulse.animate(
            [
              { opacity: 0.8 },
              { opacity: 0, transform: "scaleX(1.6)" }
            ],
            { duration: 110, easing: "cubic-bezier(.17,.67,.46,1)" }
          );

          setTimeout(() => pulse.remove(), 120);
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
}
