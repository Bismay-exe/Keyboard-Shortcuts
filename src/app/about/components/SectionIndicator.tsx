"use client";

export default function SectionIndicator({ index, total }: { index: number; total: number }) {
  if (typeof window !== "undefined" && window.innerWidth < 768) return null; // hide on mobile

  const step = 100 / (total - 1);
  const top = `${index * step}%`;

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[9998] h-[60vh] flex flex-col justify-between pointer-events-none">
      <div
        className="w-[2px] h-full bg-white/10 rounded-full relative"
      >
        <div
          className="
            absolute left-1/2 -translate-x-1/2 w-[8px] h-[8px] rounded-full bg-white
            shadow-[0_0_10px_rgba(255,255,255,0.8)]
            transition-all duration-300
          "
          style={{ top }}
        />
      </div>
    </div>
  );
}
