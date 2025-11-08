import type { Shortcut } from "@/app/data/shortcuts/types";

interface Props {
  shortcuts: Shortcut[];
  os: string;
  active: string;
  setActive: (v: string) => void;
}

export default function CategoryChips({ shortcuts, os, active, setActive }: Props) {
  // Categories based on OS, not filtered search/category results
  const relevantShortcuts =
    os === "all"
      ? shortcuts
      : shortcuts.filter(s => s.os === os);

  const cats = Array.from(new Set(relevantShortcuts.map(s => s.category))).sort();

  return (
    <nav className="flex gap-2 flex-wrap my-4">
      {["all", ...cats].map((c) => (
        <button
          key={c}
          onClick={() => setActive(c === active ? "all" : c)}
          className={`
            px-3 py-1.5 font-semibold rounded-full bg-neutral-900 border text-sm transition
            ${c === active
              ? "bg-white text-black border-white"
              : "border-neutral-900 text-neutral-500 hover:-translate-y-1"
            }
          `}
        >
          {c}
        </button>
      ))}
    </nav>
  );
}
