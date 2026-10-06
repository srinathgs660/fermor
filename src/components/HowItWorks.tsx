"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link2, Sparkles, Navigation, Check } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Connect",
    tagline: "Bring your financial picture together",
    description: "Link your bank accounts, loans, and investment brokerages securely in minutes. We read balances and transactions with zero data brokerage or advertising tracking.",
    icon: Link2,
    details: ["Read-only bank-grade sync", "Multi-institution aggregation", "Immediate historical normalization"],
  },
  {
    number: "02",
    title: "Understand",
    tagline: "See patterns, priorities and opportunities",
    description: "Fermor unifies your cash flows into our 3D financial engine. Watch fragmented noise organize into a structured overview of fixed burn, discretionary drift, and growth capital.",
    icon: Sparkles,
    details: ["Automatic subscription isolation", "Net velocity analysis", "Runway stress-testing"],
  },
  {
    number: "03",
    title: "Move Forward",
    tagline: "Turn clarity into confident action",
    description: "Simulate life goals, calculate compound trajectories, and execute calibrated adjustments with total certainty. Financial decisions backed by clear, deterministic math.",
    icon: Navigation,
    details: ["Dynamic milestone tracking", "Yield optimization alerts", "Stress-tested long horizon roadmaps"],
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#F2F2EC]/80 border-t border-black/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Workflow</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
            From chaos to clarity <br />
            <span className="text-emerald-700">in three steps.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6F706B] leading-relaxed">
            No endless manual spreadsheets or complex financial jargon. Just clear, purposeful progression.
          </p>
        </div>

        {/* Desktop Horizontal Connected Stepper / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Animated Horizontal Connection Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-14 left-[15%] right-[15%] h-1 bg-black/[0.08] rounded-full overflow-hidden -z-0">
            {/* Active Base Bar */}
            <div
              className="h-full bg-emerald-600 transition-all duration-500"
              style={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
            />
            {/* Continuously Travelling Light Pulse */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "linear" }}
              className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
            />
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-3xl p-8 bg-white border transition-all duration-300 shadow-card hover:shadow-2xl flex flex-col justify-between relative overflow-hidden group ${
                    isActive
                      ? "border-emerald-500/50 ring-2 ring-emerald-500/15 shadow-glow"
                      : "border-black/[0.08] hover:border-black/20"
                  }`}
                >
                  {/* Subtle top indicator bar on active/hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 transition-opacity ${
                      isActive ? "bg-emerald-500 opacity-100" : "bg-emerald-400 opacity-0 group-hover:opacity-40"
                    }`}
                  />

                  <div>
                    {/* Step Number & Animated Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-lg transition-all duration-300 ${
                            isActive
                              ? "bg-emerald-600 text-white shadow-glow scale-105"
                              : "bg-black/[0.04] text-neutral-600 group-hover:bg-neutral-200"
                          }`}
                        >
                          {step.number}
                        </div>
                        {isActive && (
                          <motion.div
                            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-2xl ring-2 ring-emerald-500 pointer-events-none"
                          />
                        )}
                      </div>

                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-emerald-50 border-emerald-500/30 text-emerald-700 shadow-sm"
                            : "bg-neutral-50 border-black/[0.06] text-neutral-500 group-hover:text-black"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#111111] mb-2 font-sans">
                      {step.title}
                    </h3>

                    <p className="text-sm font-semibold text-emerald-800 mb-4 font-sans">
                      {step.tagline}
                    </p>

                    <p className="text-sm text-[#6F706B] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Bullet Checklist with Hover Stagger */}
                  <div className="pt-4 border-t border-black/[0.06] space-y-2.5">
                    {step.details.map((detail, dIdx) => (
                      <div key={detail} className="flex items-center gap-2 text-xs text-neutral-600">
                        <motion.div
                          animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ delay: dIdx * 0.15, duration: 0.3 }}
                          className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            isActive ? "bg-emerald-100 text-emerald-700" : "bg-black/[0.04] text-neutral-500"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </motion.div>
                        <span className="font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
