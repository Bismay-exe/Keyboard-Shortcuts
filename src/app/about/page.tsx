"use client";

import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { useScrollPos } from "@/lib/useScrollPos";
import FounderSignature from "./components/FounderSignature";
import Timeline from "./components/Timeline";
import { useSectionPulse } from "@/lib/useSectionPulse";
import DevBadge from "./components/DevBadge";
import SecretConsole, { consoleActiveState } from "./components/SecretConsole";
import SectionIndicator from "./components/SectionIndicator";
import { useSectionIndex } from "@/lib/useSectionIndex";

export default function AboutPage() {
  useReveal();

  const [offset, setOffset] = useState(0);

  useScrollPos((y) => {
    setOffset(y * 0.12); // smooth parallax
  });

  useSectionPulse();


  const sectionIndex = useSectionIndex();


  return (
    <main className="pt-14 md:pt-0 min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">
        <DevBadge active={consoleActiveState.active} />
        <SectionIndicator index={sectionIndex} total={4} />

      
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center" data-section>
        <h1
          className="font-gendy text-[12vw] md:text-[6vw] leading-none mb-3"
          style={{ transform: `translateY(${offset}px)` }}
        >
          About This Project
        </h1>
        <p
          className="text-white/70 text-lg md:text-xl tracking-wider uppercase"
          data-reveal
        >
          Built for speed, clarity, mastery
        </p>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 max-w-3xl mx-auto" data-section>
        <h2 className="text-4xl md:text-5xl font-gendy mb-8" data-reveal>
          Our Mission
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-white/80 mb-6" data-reveal>
          This tool exists for anyone obsessed with efficiency. Keyboard shortcuts are the purest,
          fastest way to communicate with a computer — direct intent to action.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-white/80" data-reveal>
          Our mission is to make discovery and practice frictionless, beautiful, and addictive —
          turning shortcuts into muscle memory through design and motion.
        </p>
      </section>

      {/* Engineered for performance */}
      <section className="py-24 px-6 border-y border-white/10 bg-white/[0.01]" data-section>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-gendy text-4xl md:text-5xl mb-12" data-reveal>
            Engineered for Performance
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6" data-reveal>
              <p className="text-lg text-white/80 leading-relaxed">
                This isn't a UI toy. It's a study in precision — ultra-responsive motion, GPU
                transforms, and zero-noise interaction.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Every micro-interaction is tuned to feel direct, tactile, and satisfying —
                engineered like a tool, not themed like a toy.
              </p>
            </div>

            <div
              className="
                bg-white/5 border border-white/10 rounded-2xl
                p-8 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.06)]
              "
              data-reveal
            >
              <div className="space-y-4 text-sm font-mono text-white/70 tracking-wide">
                <p className="text-white/50 uppercase text-xs">Stack</p>

                <div className="space-y-2">
                  <p>{">"} Next.js (App Router)</p>
                  <p>{">"} RSC + selective client surfaces</p>
                  <p>{">"} Tailwind — zero component library</p>
                  <p>{">"} GPU motion, CSS-driven physics</p>
                  <p>{">"} Intersection reveal engine</p>
                  <p>{">"} Turbopack dev</p>
                </div>

                <p className="text-white/50 uppercase text-xs pt-4">Principles</p>

                <div className="space-y-2">
                  <p>{">"} Minimal JS, maximum feel</p>
                  <p>{">"} Motion with purpose</p>
                  <p>{">"} Craft {">"} complexity</p>
                  <p>{">"} Clarity over flash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Philosophy */}
      <section className="py-28 px-6 max-w-3xl mx-auto" data-section>
        <div data-reveal>
          <h2 className="font-gendy text-4xl md:text-5xl mb-8">Why This Exists</h2>

          <div className="space-y-6 text-white/80 text-lg leading-relaxed">
            <p>Software should feel sharp — precise, intentional, and silent in its excellence.</p>
            <p>
              I built this because tools should <span className="text-white font-medium">
              make you faster</span>, not impress you for 5 seconds and slow you forever.
            </p>
            <p>
              Shortcuts are the purest form of computing: no UI, no hesitation — just thought → action.
            </p>
            <p className="italic text-white/60">
              And yes — if a task requires the mouse, I already hate it.
            </p>
          </div>
        </div>
      </section>

      <FounderSignature />
      <SecretConsole />

      <Timeline />

      {/* Footer */}
      <footer className="py-10 text-center text-white/40 text-sm border-t border-white/10">
        &copy; {new Date().getFullYear()} — Crafted for speed & intent.
      </footer>
    </main>
  );
}
