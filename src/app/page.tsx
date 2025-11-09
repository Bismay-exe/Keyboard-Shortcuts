"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main
      className={`flex flex-col justify-center items-center min-h-screen bg-black text-white 
      transition-opacity duration-[900ms] ease-out
      ${mounted ? "opacity-100" : "opacity-0"}`}
    >
      {/* Title */}
      <h1 className="text-center font-[Gendy] font-bold leading-none tracking-tight select-none">
        <span className="block text-[12vw] md:text-[8vw]">Keyboard</span>
        <span className="block text-[12vw] md:text-[8vw]">Shortcuts</span>
      </h1>

      {/* Tagline (Apple style fade-up) */}
      <p
        className={`
          mt-4 text-white/50 text-sm md:text-base uppercase tracking-widest
          transition-all duration-[850ms] 
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[4px]"}
        `}
      >
        Speed. Precision. Memory.
      </p>

      {/* CTA */}
      <div
        className={`mt-10 transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <Link href="/hero">
          <button
            className="flex group relative px-8 py-4 rounded-xl border border-white/20
              hover:bg-white/10 hover:border-white/40 transition-all font-medium tracking-wide"
          >
            <span className="text-white text-lg">Enter</span>

            {/* Animated Arrow */}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-7 ml-3" />
            </motion.div>
          </button>
        </Link>

      </div>

      {/* Hint */}
      <div className="absolute bottom-6 text-[10px] text-white/30 tracking-widest select-none">
        PRESS CTRL / CMD + K
      </div>
    </main>
  );
}
