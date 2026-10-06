"use client";

import { motion } from "framer-motion";

export function SceneFallback() {
  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-500/[0.03] to-transparent">
      {/* Outer ambient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-subtle" />

      {/* Orbit 1 */}
      <div className="absolute w-64 h-64 rounded-full border border-emerald-500/20 border-dashed animate-spin-slow" />

      {/* Orbit 2 */}
      <div className="absolute w-88 h-88 rounded-full border border-black/[0.06] rotate-45" />

      {/* Center financial core fallback */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-emerald-600/20 via-emerald-400/30 to-teal-200/20 backdrop-blur-xl border border-white/60 shadow-glass flex items-center justify-center"
      >
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 blur-md" />
        <div className="w-10 h-10 rounded-full bg-white/80 border border-emerald-500/40 shadow-inner flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-emerald-600 animate-ping" />
        </div>
      </motion.div>

      {/* Floating fallback nodes */}
      <div className="absolute top-1/4 right-1/4 px-3 py-1.5 rounded-full bg-white/90 border border-black/[0.08] shadow-fine text-xs font-medium text-emerald-700 flex items-center gap-1.5 animate-float-slow">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Income +$8,450
      </div>

      <div className="absolute bottom-1/4 left-1/4 px-3 py-1.5 rounded-full bg-white/90 border border-black/[0.08] shadow-fine text-xs font-medium text-neutral-700 flex items-center gap-1.5 animate-float-reverse">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        Savings 32%
      </div>
    </div>
  );
}
