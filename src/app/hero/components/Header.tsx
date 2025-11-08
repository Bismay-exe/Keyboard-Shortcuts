import type { Shortcut } from "@/app/data/shortcuts/types";

interface Props {
  os: string;
  setOs: (v: string) => void;
  search: string;
  setSearch: (v: string) => void;
  shortcuts: Shortcut[];
}

export default function Header({ os, setOs, search, setSearch, shortcuts }: Props) {
  const osOptions = Array.from(new Set(shortcuts.map(s => s.os)));

  return (
    <header className="mb-6">
      <h1 className="text-6xl font-bold font-[Gendy] mb-2">Keyboard Shortcuts</h1>
      <p className="text-neutral-400 mb-4">Quickly find and copy shortcuts across OSes & apps</p>

      <div className="flex gap-3 flex-wrap">
        {/* OS / App Selector */}
        <select
          value={os}
          onChange={(e) => {
            setOs(e.target.value);
          }}
          className="bg-neutral-900 border border-neutral-700 px-3 py-2 rounded-xl"
        >
          <option value="all">All</option>
          {osOptions.sort().map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>

        {/* Search box */}
        <input
          type="text"
          placeholder="Search shortcuts..."
          value={search}
          onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
          className="bg-neutral-900 border border-neutral-700 px-3 py-2 rounded-xl w-72"
        />
      </div>
    </header>
  );
}
