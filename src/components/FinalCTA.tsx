"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const DarkCtaScene = dynamic(
  () => import("./3d/DarkCtaScene").then((m) => m.DarkCtaScene),
  { ssr: false, loading: () => null }
);

export function FinalCTA() {
  return (
    <section id="get-started" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-12 bg-[#0D0F11] text-[#F7F7F3] relative overflow-hidden">
      {/* Dynamic 3D Scene in background */}
      <DarkCtaScene />

      {/* Atmospheric dark glowing backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Begin Your Financial Universe</span>
        </div>

        {/* Large Contrast Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 font-sans">
          Make your money <br />
          <span className="text-emerald-400">make more sense.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Join people who chose clarity over chaos. Unify your accounts, model your future, 
          and navigate every financial choice with absolute confidence.
        </p>

        {/* Magnetic CTA Group */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton strength={0.3}>
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#0D0F11] font-semibold text-base transition-all shadow-glow hover:scale-105 active:scale-95 group">
              <span>Get started free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>

          <MagneticButton href="#product" strength={0.3}>
            <span className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium text-base transition-all hover:scale-105 active:scale-95">
              <span>Explore Fermor</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </span>
          </MagneticButton>
        </div>

        {/* Privacy Note */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-bit AES encryption</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Read-only credentials</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Zero personal data monetized</span>
          </div>
        </div>
      </div>
    </section>
  );
}
