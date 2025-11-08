"use client";

import { useEffect, useState, useRef } from "react";

export const consoleActiveState = { active: false };

export default function SecretConsole() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "~" && e.shiftKey) {
        e.preventDefault();

        setOpen((prev) => {
          const next = !prev;
          if (next) consoleActiveState.active = true;
          return next;
        });

        setTimeout(() => inputRef.current?.focus(), 50);
      }

    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  function handleCommand(cmd: string) {
    const clean = cmd.trim().toLowerCase();

    switch (clean) {
      case "help":
        return [
          "Commands:",
          "help — show commands",
          "whoami — creator info",
          "stack — tech used",
          "exit — close console"
        ];
      case "whoami":
        return ["bismay.exe — builder, shortcut purist, motion snob"];
      case "stack":
        return [
          "Next.js • React Server Components",
          "Tailwind • GPU motion • Custom hooks",
          "No animation libs • No UI kits"
        ];
      case "exit":
        setOpen(false);
        return ["closing console..."];
      default:
        return [`unknown command: ${cmd}`];
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const val = inputRef.current?.value || "";
    if (!val.trim()) return;

    const out = handleCommand(val);
    setLog((prev) => [...prev, `> ${val}`, ...out]);
    inputRef.current!.value = "";
  }

  if (!open) return null;

  return (
    <div
      className="
        mt-6 w-full
        bg-black/60 border border-white/15 rounded-xl
        backdrop-blur-md overflow-hidden
        animate-[fadeIn_.25s_ease-out]
      "
      data-reveal
    >
      <div className="p-4 space-y-2 font-mono text-sm text-white/80 max-h-60 overflow-auto">
        {log.map((line, i) => (
          <div key={i}>{line}</div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-white">{">"}</span>
          <input
            ref={inputRef}
            type="text"
            autoFocus
            className="
              flex-1 bg-transparent outline-none border-none
              text-white placeholder-white/30
            "
            placeholder="type a command..."
          />
        </form>
      </div>
    </div>
  );
}
