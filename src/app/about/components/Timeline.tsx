"use client";

import { useReveal } from "@/lib/useReveal";
import { useMagnet } from "@/lib/useMagnet"; // if you're using magnetic dots

const events = [
  {
    date: "Early 2024",
    title: "Idea & Notes",
    desc: "Started sketching a better way to learn shortcuts — fast UI, no noise, muscle-memory focused.",
  },
  {
    date: "Mid 2024",
    title: "Prototype & Motion Tests",
    desc: "Experimented with tilt physics, GPU transforms, and interaction feel.",
  },
  {
    date: "Late 2024",
    title: "Interface & Experience",
    desc: "Built dark aesthetic, card system, reveal motion, and polished micro-interactions.",
  },
  {
    date: "2025",
    title: "Public Release",
    desc: "A focused, fast, craft-driven shortcut explorer for people who think with their keyboard.",
  },
];

export default function Timeline() {
  useReveal();
  useMagnet?.("[data-magnet]", 0.45); // safe call, in case you disabled it

  return (
    <section className="py-32 px-6 bg-white/[0.015] border-y border-white/10">
      <div className="max-w-4xl mx-auto">

        <h2 className="font-gendy text-4xl md:text-5xl mb-16 text-center" data-reveal>
          The Journey
        </h2>

        <div className="relative border-l border-white/20 pl-8 space-y-20">

          {/* Spine glow */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-white/10 blur-sm" />

          {events.map((ev, i) => (
            <div
              key={i}
              className="relative"
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Node dot */}
              <div
                data-magnet
                className="absolute -left-[9px] w-4 h-4 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              />

              {/* Content card */}
              <div
                className={`
                  w-full md:w-[85%] 
                  ${i % 2 === 0 ? "ml-0 md:ml-0" : "md:ml-auto"}
                  bg-white/5 border border-white/10 backdrop-blur-lg 
                  rounded-2xl p-6 transition-all
                `}
              >
                <span className="text-white/50 text-sm">{ev.date}</span>
                <h3 className="text-2xl font-gendy mt-1 mb-2">{ev.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{ev.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
