"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-32 space-y-32">

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="font-[Gendy] text-6xl md:text-8xl font-bold tracking-tight">
          Built For People Who Hate Wasting Time
        </h1>
        <p className="mt-6 text-lg text-white/60">
          No fancy BS. Just speed, clarity, and tools that respect your brain.
        </p>
      </section>

      {/* Minimal Hero Banner */}
      <section className="relative w-full h-[45vh] md:h-[55vh] mb-24 overflow-hidden rounded-2xl border border-white/10 bg-[#111]">

        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-xs tracking-widest">
          <img src="/Keyboard-Shortcuts/assets/logo/hero0.png" alt="" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80" />


        <div className="absolute top-18 md:right-18 right-100">
          <div className="mockup-phone border-[#8d8d8d]">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display">
              <img alt="wallpaper" src="/Keyboard-Shortcuts/assets/logo/mobile.png" />
            </div>
          </div>
        </div>


        <div className="absolute bottom-8 left-8">
          <h2 className="font-[Gendy] text-4xl md:text-6xl font-bold">
            About
          </h2>
          <p className="mt-2 text-white/60 text-sm md:text-base">
            No filler. Just intent, speed & craft.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Why this exists</h2>
        <p className="text-white/70 text-lg leading-relaxed">
          Computers are fast. Humans aren’t — unless we remove friction.
        </p>
        <p className="text-white/70 text-lg leading-relaxed">
          This project trains instinct. Not shortcuts — mindset.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold">Timeline</h2>
        <div className="space-y-6 border-l border-white/10 pl-6">
          {[
            ["2024", "Initial build — keyboard-first UI"],
            ["2025", "Smart search, worker scoring, dev console"],
            ["Future", "AI-driven habit loops & adaptive drills"]
          ].map(([year, text]) => (
            <div key={year} className="flex flex-col">
              <span className="text-sm text-white/40">{year}</span>
              <span className="text-white/80">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Engine</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            "Next.js",
            "React",
            "Tailwind",
            "Web Workers",
            "RSC",
            "GPU Animations",
            "Indexed Cache",
            "Command Palette"
          ].map((item) => (
            <div key={item} className="p-3 border border-white/10 rounded-xl text-center text-white/60">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">The "Team"</h2>
        <p className="text-white/70 text-lg">It's just me. And caffeine. And spite.</p>
      </section>

      {/* Values */}
      <section className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
        {[["Speed","If it slows you down, it's dead."],
          ["Clarity","No clutter. No noise."],
          ["Precision","Every interaction is intentional."]].map(([title, desc]) => (
          <div key={title} className="p-6 border border-white/10 rounded-xl space-y-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-white/60 text-sm">{desc}</p>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
        {[
          ["15k+", "Shortcuts indexed"],
          ["0.7ms", "Search latency"],
          ["∞", "Keyboard hate for mice"],
          ["100%", "Over-engineered"]
        ].map(([num, label]) => (
          <div key={label}>
            <div className="text-2xl font-bold">{num}</div>
            <div className="text-white/50 text-xs uppercase">{label}</div>
          </div>
        ))}
      </section>

      {/* Keyboard Philosophy */}
      <section className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Keyboard {">"} Mouse</h2>
        <p className="text-white/70 text-lg">
          Clicking is hesitation. Keyboard is intent.
          Anything that interrupts flow slows you down.
        </p>
      </section>

      {/* Personal Note */}
      <section className="max-w-3xl mx-auto text-white/70 text-lg">
        I didn’t build this to show off. I built it because I was tired of slow software and slower habits.
        If this helps even one person move faster — mission accomplished.
      </section>

      {/* CTA */}
      <section className="flex justify-center top-4 text-center pb-10">
        <Link
          href="https://github.com/Bismay-exe"
          className="inline-flex items-center px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition"
        >
          GitHub
          <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
            <ArrowRight className="w-5 h-7 ml-3" />
          </motion.div>
        </Link>
      </section>
    </main>
  );
}
