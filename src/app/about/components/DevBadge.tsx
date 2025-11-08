"use client";
import { useState, useEffect } from "react";

export default function DevBadge({ active }: { active: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (active) {
      setVisible(true);
      const t = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(t);
    }
  }, [active]);

  return (
    <div
      className={`
        fixed top-4 right-4 z-[9999]
        text-[11px] font-mono tracking-wider uppercase
        px-3 py-1 rounded-md backdrop-blur-md border border-white/20
        bg-white/5 text-white transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      Debug Mode Enabled
    </div>
  );
}
