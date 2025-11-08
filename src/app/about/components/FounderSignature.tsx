export default function FounderSignature() {
  return (
    <div
      data-reveal
      className="
        mt-20 max-w-xl mx-auto
        flex flex-col gap-3 text-white/70
      "
    >
      {/* Terminal-style signature mark */}
      <div
        className="
          inline-flex items-center gap-2
          font-mono text-base md:text-lg
          bg-white/5 border border-white/10
          px-4 py-2 rounded-lg
          tracking-tight
          backdrop-blur-sm
          transition-all duration-300
          hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]
          hover:-translate-y-[2px]
        "
      >
        <span className="text-white/60">{">"}</span>
        <span className="text-white font-medium">bismay.exe</span>
      </div>

      {/* Tiny subline */}
      <p className="font-mono text-xs uppercase tracking-widest opacity-50">
        creator & keyboard purist
      </p>
    </div>
  );
}
