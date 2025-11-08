"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { consoleActiveState } from "@/app/about/components/SecretConsole";

type Command = {
  group: string;
  label: string;
  action: () => void;
};

export default function CommandPalette() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [ranked, setRanked] = useState<Command[]>([]);

  // Static base
  let commands: Command[] = [
    { group: "Navigation", label: "Home", action: () => router.push("/") },
    { group: "Navigation", label: "Shortcuts", action: () => router.push("/hero") },
    { group: "Navigation", label: "About", action: () => router.push("/about") },

    { group: "Links", label: "GitHub", action: () =>
        window.open("https://github.com/Bismay-exe", "_blank")
    },

    { group: "Actions", label: "Toggle Console (~)", action: () => {
        consoleActiveState.active = !consoleActiveState.active;
        window.dispatchEvent(new Event("console-toggle"));
    }},

    { group: "Actions", label: "Restart Animations", action: () => {
        window.dispatchEvent(new Event("reveal-reset"));
    }},
  ];

  // 🔥 Add context-aware commands
  if (pathname === "/hero") {
    commands.push({
      group: "Shortcuts",
      label: "Copy Last Shortcut",
      action: () => window.dispatchEvent(new Event("copy-last-shortcut")),
    });
  }

  if (pathname === "/about") {
    commands.push({
      group: "About",
      label: "Jump to Timeline",
      action: () => {
        document.querySelector("[data-about-timeline]")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      },
    });
  }

  // Worker
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("@/workers/shortcutWorker.ts", import.meta.url)
    );

    workerRef.current.onmessage = (e) => {
      const rankedLabels = e.data as { label: string; group: string }[];
      const mapped = rankedLabels
        .map(r => commands.find(c => c.label === r.label))
        .filter(Boolean) as Command[];

      setRanked(mapped);
    };

    return () => workerRef.current?.terminate();
  }, []);

  // Query change -> ask worker
  useEffect(() => {
    if (!workerRef.current) return;
    workerRef.current.postMessage({
      type: "suggest",
      payload: { 
        query, 
        commands: commands.map(c => ({ label: c.label, group: c.group })) 
      },
    });
    setIndex(0);
  }, [query, pathname]); // include pathname so context list updates

  // 🔔 Micro-haptic feedback
  useEffect(() => {
    function bump() {
      const el = document.body;
      el.style.transform = "translateY(0.6px)";
      setTimeout(() => (el.style.transform = ""), 40);
    }

    window.addEventListener("cmd-haptic", bump);
    return () => window.removeEventListener("cmd-haptic", bump);
  }, []);

  // Keybinds
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(o => !o);
        return;
      }

      if (!open) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setIndex(i => Math.min(i + 1, ranked.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setIndex(i => Math.max(i - 1, 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const cmd = ranked[index];
        if (!cmd) return;

        cmd.action();
        window.dispatchEvent(new Event("cmd-select"));
        window.dispatchEvent(new Event("cmd-haptic")); // 🔥 tactile
        workerRef.current?.postMessage({ type: "record", payload: cmd.label });
        setOpen(false);
      }
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, ranked, index]);

  if (!open) return null;

  function highlight(label: string) {
    if (!query) return label;
    let out = "", li = 0;
    const q = query.toLowerCase();

    for (let char of label) {
      if (li < q.length && char.toLowerCase() === q[li]) {
        out += `<span class="text-white font-semibold">${char}</span>`;
        li++;
      } else {
        out += `<span class="text-white/70">${char}</span>`;
      }
    }
    return out;
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-start justify-center pt-[15vh]">
      <div className="w-full max-w-xl bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.08)] overflow-hidden">
        
        <div className="border-b border-white/10 px-4 py-3">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands…"
            className="w-full bg-transparent outline-none text-white placeholder-white/30 text-sm"
          />
        </div>

        <ul className="max-h-64 overflow-y-auto">
          {ranked.map((cmd, i) => (
            <li key={cmd.label}>
              {(i === 0 || ranked[i].group !== ranked[i - 1].group) && (
                <div className="px-4 pt-3 pb-1 text-[10px] uppercase tracking-wider text-white/40">
                  {cmd.group}
                </div>
              )}

              <button
                onClick={() => {
                  cmd.action();
                  workerRef.current?.postMessage({ type: "record", payload: cmd.label });
                  window.dispatchEvent(new Event("cmd-haptic"));
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm ${
                  index === i
                    ? "bg-white/15 text-white animate-[pulse_0.12s_ease-out]"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                <span dangerouslySetInnerHTML={{ __html: highlight(cmd.label) }} />
              </button>
            </li>
          ))}

          {ranked.length === 0 && (
            <li className="px-4 py-3 text-white/40 text-sm">No matches</li>
          )}
        </ul>
      </div>
    </div>
  );
}
