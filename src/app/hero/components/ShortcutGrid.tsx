"use client";

import { Shortcut } from "../shortcuts";
import { useState } from "react";
import TiltCard from "./TiltCard";

export default function ShortcutGrid({ list }: { list: Shortcut[] }) {
  const [flash, setFlash] = useState<number | null>(null);

  function copy(i: number, combo: string[]) {
    navigator.clipboard?.writeText(combo.join("+"));
    setFlash(i);
    setTimeout(() => setFlash(null), 800);
  }

  return (
    <section className="grid gap-4 mt-7 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
      {list.map((s, i) => (
        <TiltCard key={i} onClick={() => copy(i, s.combo)}
        style={{ animationDelay: `${i * 35}ms` }}
className="group opacity-0 animate-[pop_.45s_cubic-bezier(.2,.8,.2,1)_forwards]"
>
          <div className="flex justify-between text-neutral-400">
            <strong className="text-white text-sm">{s.title}</strong>
            <span className="text-[11px]">{s.os.toUpperCase()}</span>
          </div>

          <p className="text-neutral-400 text-sm mt-4 mb-3">{s.desc}</p>

          <div className="flex flex-wrap gap-2">
            {s.combo.map((k) => (
              <span
                key={k}
                className="bg-white text-black px-3 py-2 rounded-lg text-xs font-bold"
              >
                {k}
              </span>
            ))}
          </div>

          {flash === i && (
            <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-2 rounded-lg">
              Copied
            </div>
          )}
        </TiltCard>
      ))}
    </section>
  );
}
