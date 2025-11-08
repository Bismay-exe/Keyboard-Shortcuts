"use client";

import { useEffect } from "react";

export function useReveal(selector = "[data-reveal]") {
  useEffect(() => {
    const els = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;

        el.style.transition =
          "opacity .45s cubic-bezier(.2,.8,.2,1), transform .45s cubic-bezier(.2,.8,.2,1), filter .45s cubic-bezier(.2,.8,.2,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0px)";
        el.style.filter = "blur(0px)";

        observer.unobserve(el);
      });
    }, { threshold: 0.12 });

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
