"use client";

import { useEffect, useRef } from "react";

export function useScrollPos(callback: (y: number) => void, friction = 0.12) {
  const current = useRef(0);
  const target = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    current.current = window.scrollY;
    target.current = window.scrollY;

    function update() {
      const delta = target.current - current.current;
      current.current += delta * friction;

      // expose smooth y globally for reveal sync
      (window as any).__SMOOTH_SCROLL_Y = current.current;

      callback(current.current);

      if (Math.abs(delta) > 0.1) {
        requestAnimationFrame(update);
      } else {
        ticking.current = false;
      }
    }

    function onScroll() {
      target.current = window.scrollY;
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [callback, friction]);
}
