"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Shortcuts", href: "/hero" },
  { name: "About", href: "/about" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">

        {/* Logo */}
        <Link
          href="/"
          className="text-white font-gendy text-xl tracking-wide hover:opacity-80 duration-200"
        >
          ⌘/Keys
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition font-medium ${
                  active
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* GitHub Icon */}
        <a
          href="https://github.com/Bismay-exe"
          target="GitHub"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition text-xl md:text-2xl"
          aria-label="GitHub"
        >
          {/* GitHub Icon (minimal, no deps) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.77-1.34-1.77-1.1-.74.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.84 1.32 3.54 1.01.11-.8.42-1.32.76-1.63-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.51.12-3.14 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.63.26 2.84.13 3.15.77.84 1.23 1.9 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 .5z"/>
          </svg>
        </a>
      </div>
    </header>
  );
}
