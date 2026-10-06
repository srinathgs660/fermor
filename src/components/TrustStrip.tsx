"use client";

import { motion } from "framer-motion";
import { Eye, Compass, Target, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: Eye,
    title: "One Clear Picture",
    description: "Every asset, obligation, and cash flow unified without spreadsheet chaos.",
    tag: "Clarity",
  },
  {
    icon: Compass,
    title: "Smarter Decisions",
    description: "Contextual modeling instead of guesswork for major life and capital choices.",
    tag: "Confidence",
  },
  {
    icon: Target,
    title: "Built Around Your Goals",
    description: "Calibrated to your exact timelines, risk appetite, and milestones.",
    tag: "Purpose",
  },
  {
    icon: Sparkles,
    title: "Everyday Simplicity",
    description: "Complex mathematical compounding translated into actionable clarity.",
    tag: "Ecosystem",
  },
];

export function TrustStrip() {
  return (
    <section id="trust-strip" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-y border-black/[0.06] bg-[#F4F4EE]/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 font-mono mb-2">
            Engineered For Depth & Simplicity
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
            Built for people who want true clarity from their finances.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl bg-white border border-black/[0.06] hover:border-emerald-500/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-500/20 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/[0.04] text-neutral-600">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#111111] mb-2 font-sans">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#6F706B] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
