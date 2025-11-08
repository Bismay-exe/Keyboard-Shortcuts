"use client";

import Link from "next/link";
import { useState } from "react";

const OS_LIST = ["Windows", "macOS", "Linux"];

export default function Nav() {
  const [os, setOs] = useState("Windows");
  const [open, setOpen] = useState(false);

  function triggerCommand() {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  }

  return (
    <header className="
        sticky top-0 z-50
        h-24 px-6
        flex items-center justify-between
        backdrop-blur-xl bg-black/40
        border-b border-white/10
        supports-[backdrop-filter]:backdrop-blur-1xl
      "
    >
      {/* LEFT — title */}
      <Link 
        href="/"
        className="tracking-wide hover:opacity-75 transition-opacity"
      >
      <h1 className="text-3xl font-bold font-[Gendy] mb-2">Keyboard Shortcuts</h1>
      <p className="text-neutral-400 text-[12px] mb-2">Quickly find and copy shortcuts across OSes and apps</p>
      </Link>

        {/* GitHub */}
        <a 
          href="https://github.com"
          target="_blank"
          className="opacity-70 hover:opacity-100 active:scale-95 transition"
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path 
              d="M12 .5A12 12 0 0 0 0 12.54c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.26.8-.57v-2c-3.34.74-4-1.64-4-1.64-.54-1.4-1.34-1.77-1.34-1.77-1.1-.8.08-.78.08-.78 1.2.09 1.84 1.26 1.84 1.26 1.08 1.88 2.84 1.34 3.54 1.03.1-.8.42-1.34.76-1.65-2.66-.32-5.46-1.38-5.46-6.1 0-1.34.46-2.44 1.22-3.3-.12-.32-.54-1.64.1-3.42 0 0 1-.33 3.4 1.26a11.6 11.6 0 0 1 6.2 0c2.38-1.59 3.38-1.26 3.38-1.26.66 1.78.24 3.1.12 3.42.76.86 1.22 1.96 1.22 3.3 0 4.72-2.82 5.76-5.52 6.08.44.38.82 1.12.82 2.28v3.38c0 .33.2.68.82.56A12.03 12.03 0 0 0 12 .5Z"
            />
          </svg>
        </a>
    </header>
  );
}
