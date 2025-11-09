"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Github } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/hero", label: "Shortcuts" },
  { href: "/about", label: "About" },
];

export default function NavBar2() {
  const pathname = usePathname();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Cursor glow */}
      {/* const active = pathname === link.href; */}
      <div
        className="fixed pointer-events-none blur-2xl opacity-25 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, #00eaff 0%, transparent 60%)",
          width: 350,
          height: 350,
          left: cursor.x - 175,
          top: cursor.y - 175,
          zIndex: 8,
        }}
      />

      <nav className="
        fixed top-0 left-0 w-full z-[999]
        backdrop-blur-xl border-b border-white/10
        px-8 py-4 flex items-center justify-between
      ">
        
        {/* Brand */}
        <div className="font-[Gendy] text-xl tracking-tight text-white">
          KSC<span className="text-cyan-400">.</span>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className="
                  relative uppercase tracking-wider group text-white/60
                  hover:text-white transition
                "
              >
                {n.label}

                {/* active underline */}
                {active && (
                  <span className="
                    absolute -bottom-1 left-0 w-full h-[1.5px] bg-cyan-400 
                    shadow-[0_0_8px_#00eaff] animate-[pulse_1.8s_infinite]
                  " />
                )}

                {/* hover neon trace */}
                <span className="
                  absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-400 opacity-0 
                  group-hover:opacity-60 transition-all duration-200 scale-x-0 group-hover:scale-x-100
                  origin-left
                " />
              </Link>
            );
          })}
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/Bismay-exe"
          target="_blank"
          className="
            p-2 rounded-lg border border-white/10 text-white/60 
            hover:text-white hover:border-cyan-400 hover:shadow-[0_0_10px_#00eaff]
            transition flex items-center justify-center
          "
        >
          <Github size={18} />
        </a>
      </nav>
    </>
  );
}
