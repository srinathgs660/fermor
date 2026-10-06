"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { SceneFallback } from "./3d/SceneFallback";
import { ECOSYSTEM_LAYERS } from "./3d/EcosystemScene";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const EcosystemScene = dynamic(
  () => import("./3d/EcosystemScene").then((m) => m.EcosystemScene),
  { ssr: false, loading: () => <SceneFallback /> }
);

export function Signature3DSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLayer = ECOSYSTEM_LAYERS[activeIndex];

  return (
    <section id="universe" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#F4F4EE]/90 border-t border-black/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Financial Cosmos</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
            Your financial life, <br />
            <span className="text-emerald-700">in motion.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6F706B] leading-relaxed">
            A cohesive operating system where every layer of your capital rotates in calibrated harmony. 
            Click any orbital ring or use the controls below to inspect each dimension.
          </p>
        </div>

        {/* High-Impact Modern Showcase Card (Fixes the awkward white layout in Image 1) */}
        <div className="rounded-3xl bg-[#0D1013] border border-white/[0.08] shadow-2xl p-6 sm:p-10 text-white relative overflow-hidden">
          {/* Subtle cosmic backdrop glow */}
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-colors duration-700 opacity-20"
            style={{ backgroundColor: activeLayer.color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left 3D Viewport — Perfectly Centered Reactor */}
            <div className="lg:col-span-7 relative flex flex-col items-center">
              {/* Active orbit label pill */}
              <div className="absolute top-2 left-2 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono text-white">
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ backgroundColor: activeLayer.color }}
                />
                <span>Orbit {activeIndex + 1}: {activeLayer.shortName}</span>
              </div>

              {/* 3D Canvas */}
              <div className="w-full h-[400px] sm:h-[480px]">
                <EcosystemScene
                  activeLayerIndex={activeIndex}
                  onSelectLayer={(idx) => setActiveIndex(idx)}
                />
              </div>

              {/* Orbit Selector Bar */}
              <div className="w-full flex flex-wrap items-center justify-center gap-2 mt-4 pt-4 border-t border-white/10">
                {ECOSYSTEM_LAYERS.map((layer, idx) => (
                  <button
                    key={layer.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                      activeIndex === idx
                        ? "bg-white text-black font-semibold shadow-glow scale-105"
                        : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {layer.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Contextual Inspection Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLayer.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                      {activeLayer.tagline}
                    </span>
                    <span
                      className="w-3 h-3 rounded-full shadow-glow"
                      style={{ backgroundColor: activeLayer.color }}
                    />
                  </div>

                  <h3 className="text-3xl font-bold text-white font-sans">
                    {activeLayer.name}
                  </h3>

                  <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                    <div className="text-3xl font-bold font-mono text-white">
                      {activeLayer.metric}
                    </div>
                    <div className="text-xs text-neutral-400 mt-1 font-mono">
                      {activeLayer.metricSub}
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {activeLayer.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Systemic Impact</span>
                    <span
                      className="font-semibold px-2.5 py-1 rounded-full font-mono text-xs"
                      style={{
                        backgroundColor: `${activeLayer.color}25`,
                        color: activeLayer.color,
                      }}
                    >
                      {activeLayer.impact}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stepper Navigation Controls */}
              <div className="flex items-center justify-between px-2 text-xs font-mono">
                <button
                  onClick={() =>
                    setActiveIndex((prev) => (prev > 0 ? prev - 1 : ECOSYSTEM_LAYERS.length - 1))
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <span className="text-neutral-400">
                  {activeIndex + 1} of {ECOSYSTEM_LAYERS.length}
                </span>

                <button
                  onClick={() =>
                    setActiveIndex((prev) => (prev < ECOSYSTEM_LAYERS.length - 1 ? prev + 1 : 0))
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
