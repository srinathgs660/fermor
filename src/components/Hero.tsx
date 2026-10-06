"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Sparkles, Layers } from "lucide-react";
import { SceneFallback } from "./3d/SceneFallback";
import { MagneticButton } from "./MagneticButton";

// Dynamic import with SSR disabled for Three.js WebGL canvas
const HeroScene = dynamic(
  () => import("./3d/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <SceneFallback />,
  }
);

export function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 sm:pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-12 flex flex-col justify-center overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-1/3 left-10 w-[380px] h-[380px] bg-cyan-400/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Column: Editorial Copy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-start z-10"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            The Future of Financial Clarity
          </div>

          {/* Large Dominant Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-6 font-sans">
            Understand your money.{" "}
            <span className="text-emerald-600 block sm:inline">
              Grow with confidence.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[#6F706B] leading-relaxed max-w-xl mb-8 font-normal">
            Fermor brings your financial world into one clear, intelligent experience — 
            helping you understand where you are today and make calibrated decisions about 
            where you&apos;re going next.
          </p>

          {/* Magnetic CTA Group */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <MagneticButton href="#product" strength={0.25}>
              <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] text-[#F7F7F3] font-medium text-base hover:bg-neutral-800 transition-all shadow-md group hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]">
                <span>Explore Fermor</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticButton>

            <MagneticButton href="#how-it-works" strength={0.25}>
              <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/70 hover:bg-white text-[#111111] border border-black/[0.08] font-medium text-base transition-all shadow-sm group hover:scale-[1.02] active:scale-[0.98]">
                <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Play className="w-3 h-3 text-neutral-800 group-hover:text-emerald-700 ml-0.5 fill-current" />
                </div>
                <span>See how it works</span>
              </span>
            </MagneticButton>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-10 pt-6 border-t border-black/[0.06] flex flex-wrap items-center gap-6 text-xs text-[#6F706B]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero commissions or ad biases</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Deterministic financial engines</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Privacy-first architecture</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Financial Universe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative w-full flex items-center justify-center"
        >
          <div className="w-full relative">
            <HeroScene />
            
            {/* Interactive Hint Indicator — Comfortably positioned at top-right */}
            <div className="absolute top-3 right-4 z-10 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-[11px] font-mono text-neutral-600 border border-black/[0.05] shadow-fine">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Interactive Cosmos • Click Nodes</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-8 flex justify-center items-center">
        <a
          href="#trust-strip"
          className="flex flex-col items-center gap-1.5 text-xs text-[#6F706B] hover:text-[#111111] transition-colors group cursor-pointer"
        >
          <span className="tracking-widest uppercase text-[10px] font-medium font-mono">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-black/20 flex items-start justify-center p-1 group-hover:border-black/40 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-emerald-600"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
