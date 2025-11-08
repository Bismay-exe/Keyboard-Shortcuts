"use client";

import { useEffect, useState } from "react";

export function useSectionIndex() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = [...sections].indexOf(e.target);
            setIndex(i);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return index;
}
