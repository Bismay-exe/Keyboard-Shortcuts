"use client";

import { useEffect } from "react";

export function useMagnet(selector = "[data-magnet]", strength = 0.35) {
  useEffect(() => {
    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    function handleMove(e: MouseEvent) {
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(x * x + y * y);
        const maxDist = 160; // distance where effect stops

        if (dist < maxDist) {
          const pull = (1 - dist / maxDist) * strength * 24;
          (el as HTMLElement).style.transform = `translate(${x * pull}px, ${y * pull}px)`;
        } else {
          (el as HTMLElement).style.transform = "";
        }
      });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [selector, strength]);
}
