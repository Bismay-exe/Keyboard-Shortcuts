import { ReactNode } from "react";
import { Shield, Sparkles, Zap, Layers, Eye, Target } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Polish", desc: "Every detail matters — motion, sound, feel." },
  { icon: Zap, title: "Speed", desc: "Fast interactions, zero friction, instant feedback." },
  { icon: Eye, title: "Clarity", desc: "No clutter. No noise. Pure usability." },
  { icon: Shield, title: "Reliability", desc: "Consistent, predictable, stable UX." },
  { icon: Layers, title: "Depth", desc: "Interaction should feel tactile and immersive." },
  { icon: Target, title: "Focus", desc: "Design for real use, not screenshots." },
];

export default function ValuesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {items.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-[1.02] hover:border-white/20 transition-all"
        >
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
            <Icon size={32} />
          </div>
          <h3 className="font-gendy text-2xl mb-2">{title}</h3>
          <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  );
}
