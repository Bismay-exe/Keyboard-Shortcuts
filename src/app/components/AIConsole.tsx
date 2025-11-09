"use client";

import { useEffect, useState } from "react";

export default function AIConsole() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState<string[]>(["type 'help'"]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "~" && e.shiftKey) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function run(cmdRaw: string) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;
    setLog((p) => [...p, `> ${cmdRaw}`]);

    if (cmd === "help") {
      setLog((p) => [...p, "help, whoami, stack, shortcuts, exit"]);
    } else if (cmd === "whoami") {
      setLog((p) => [...p, "system: keyboard-shortcuts / developer mode"]);
    } else if (cmd === "stack") {
      setLog((p) => [...p, "Next.js • RSC • Tailwind • Web Workers"]);
    } else if (cmd === "shortcuts") {
      setLog((p) => [...p, "Press ⌘K / Ctrl+K for command palette"]);
    } else if (cmd === "exit") {
      setOpen(false);
    } else {
      setLog((p) => [...p, "unknown command"]);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[min(720px,92vw)] z-[9999]">
      <div className="rounded-2xl border border-white/15 bg-black/70 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.08)] overflow-hidden">
        <div className="p-3 text-xs font-mono text-white/80 max-h-[40vh] overflow-auto space-y-1">
          {log.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>

        <form
          className="flex border-t border-white/10"
          onSubmit={(e) => {
            e.preventDefault();
            run(value);
            setValue("");
          }}
        >
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 bg-transparent px-3 py-2 outline-none text-sm"
            placeholder="ai> help"
          />
          <button className="px-3 text-xs text-white/70 hover:text-white">run</button>
        </form>
      </div>
    </div>
  );
}
