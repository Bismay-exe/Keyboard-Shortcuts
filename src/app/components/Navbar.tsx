"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Shortcuts", href: "/hero" },
  { label: "About", href: "/about" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [hoverX, setHoverX] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        backdrop-blur-xl bg-white/[0.03]
        border border-white/10 rounded-2xl
        shadow-[0_0_40px_rgba(255,255,255,0.1)]
        h-14 w-[90vw] max-w-3xl px-6
        flex items-center justify-between
        group
      "
    >
      {/* Magnetic glow */}
      <div
        className="absolute top-0 left-0 w-40 h-40 bg-white/5 blur-2xl rounded-full pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ transform: `translate(${hoverX - 80}px, -60px)` }}
      />

      {/* Logo */}
      <Link
        href="/"
        className="font-gendy text-xl text-white relative"
        onMouseMove={(e) => setHoverX(e.clientX)}
      >
        <img className="size-6" src="/assets/logo/ks-white.png" alt="Logo" />
      </Link>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex gap-6 font-medium text-sm flex-1 justify-center">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onMouseMove={(e) => setHoverX(e.clientX)}
              className={`
                relative px-1 transition
                ${active ? "text-white" : "text-white/60 hover:text-white"}
              `}
            >
              {link.label}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] w-full rounded-full
                  transition-all duration-300
                  ${
                    active
                      ? "bg-white shadow-[0_0_8px_white]"
                      : "bg-transparent group-hover:bg-white/20"
                  }
                `}
              />
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white/70 hover:text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </button>

      {/* GitHub */}
      <button
        onClick={() => window.dispatchEvent(new Event("open-cmd"))}
        className="
          hidden md:flex content-between items-center gap-1 text-black/60 hover:text-black 
          text-xs border border-white px-2 py-1 rounded-lg
          bg-white backdrop-blur-md transition"
      >
      <a
        href="https://github.com/Bismay-exe"
        target="_blank"
        className="hidden md:block text-black/80 hover:text-black transition"
        onMouseMove={(e) => setHoverX(e.clientX)}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.77-1.34-1.77-1.1-.74.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.84 1.32 3.54 1.01.11-.8.42-1.32.76-1.63-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.51.12-3.14 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.63.26 2.84.13 3.15.77.84 1.23 1.9 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 .5z"/>
        </svg>
      </a>
        <div className="font-bold">
            GitHub
        </div>
      </button>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90vw] bg-black border border-white/10 rounded-xl shadow-lg p-4 z-40 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 ${
                pathname === link.href ? "text-white font-bold" : "text-white/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
