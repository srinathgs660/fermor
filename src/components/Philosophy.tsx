"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-28 sm:py-40 px-4 sm:px-6 lg:px-12 bg-[#F7F7F3] relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Editorial Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] text-[#111111] text-xs font-mono uppercase tracking-widest mb-8"
        >
          <span>Design Philosophy</span>
        </motion.div>

        {/* Large Dominant Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-8 font-sans"
        >
          Finance shouldn&apos;t feel complicated.
        </motion.h2>

        {/* Substantive Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl text-[#6F706B] font-light leading-relaxed max-w-3xl mx-auto"
        >
          &ldquo;Good financial technology doesn&apos;t make you think harder. <br className="hidden sm:inline" />
          It helps you see what matters.&rdquo;
        </motion.p>

        {/* Quiet Editorial Commentary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 max-w-xl mx-auto text-sm text-neutral-500 leading-relaxed font-normal"
        >
          Traditional personal finance drowns users in micro-categories and guilt-inducing alerts. 
          Fermor operates on macroscopic clarity — prioritizing high-leverage decisions, 
          resilient cushions, and continuous compounding.
        </motion.div>

        {/* Subtle Central 3D Minimal Accent Ring */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-spin-slow" />
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
