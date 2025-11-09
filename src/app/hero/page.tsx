"use client";

import { useState, useMemo } from "react";
import { SHORTCUTS} from "@/app/data/shortcuts/index";
import Header from "./components/Header";
import Stats from "./components/Stats";
import CategoryChips from "./components/CategoryChips";
import ShortcutGrid from "./components/ShortcutGrid";
import "./styles.css";
import Nav from "./components/Navbar";
import NavBar2 from "../components/Navbar";

export default function HeroPage() {
  const [os, setOs] = useState("all");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    let list = SHORTCUTS.filter(
      (s) => os === "all" || s.os === os
    );

    if (category !== "all") {
      list = list.filter((s) => s.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((s) =>
        `${s.title} ${s.desc} ${s.category} ${s.combo.join(" ")}`.toLowerCase().includes(q)
      );
    }
    return list;
  }, [os, search, category]);

  return (
    <main className="pt-16 md:pt-16 min-h-screen text-white px-6 py-10">
      

      <Header
        os={os}
        setOs={(v) => { setOs(v); setCategory("all"); }}
        search={search}
        setSearch={setSearch}
        shortcuts={SHORTCUTS}
      />

      <Stats count={filtered.length} os={os} />

      <CategoryChips
        shortcuts={SHORTCUTS}
        os={os}
        active={category}
        setActive={setCategory}
      />

      <ShortcutGrid list={filtered} />
    </main>
  );
}
