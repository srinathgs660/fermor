"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  TrendingUp,
  Receipt,
  PiggyBank,
  Target,
  Building,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

type Stage = "fragmented" | "connected" | "clear";

interface CardItem {
  id: string;
  category: string;
  name: string;
  amount: string;
  icon: React.ComponentType<{ className?: string }>;
  fragmentedPos: { x: number; y: number; rotate: number };
  connectedPos: { x: number; y: number; rotate: number };
  color: string;
  fragmentedNote: string;
  clearNote: string;
  orbitRadius: number;
  orbitSpeed: number;
}

const FRAGMENTED_CARDS: CardItem[] = [
  {
    id: "bank",
    category: "Checking & Savings",
    name: "Primary Checking",
    amount: "$12,450",
    icon: Building,
    fragmentedPos: { x: -160, y: -90, rotate: -8 },
    connectedPos: { x: -130, y: -45, rotate: -2 },
    color: "#3B82F6",
    fragmentedNote: "Idle cash earning 0.05%",
    clearNote: "Optimized sweep active",
    orbitRadius: 160,
    orbitSpeed: 24,
  },
  {
    id: "investments",
    category: "Brokerage & Equity",
    name: "Growth Portfolio",
    amount: "$84,200",
    icon: TrendingUp,
    fragmentedPos: { x: 170, y: -110, rotate: 10 },
    connectedPos: { x: 130, y: -45, rotate: 2 },
    color: "#10B981",
    fragmentedNote: "Unbalanced asset allocation",
    clearNote: "Auto-rebalanced quarterly",
    orbitRadius: 180,
    orbitSpeed: 28,
  },
  {
    id: "expenses",
    category: "Discretionary",
    name: "Monthly Outflow",
    amount: "$3,850",
    icon: CreditCard,
    fragmentedPos: { x: -200, y: 70, rotate: 7 },
    connectedPos: { x: -95, y: 55, rotate: -1 },
    color: "#F59E0B",
    fragmentedNote: "6 apps, zero category sync",
    clearNote: "Real-time unified burn rate",
    orbitRadius: 190,
    orbitSpeed: -22,
  },
  {
    id: "bills",
    category: "Fixed Commitments",
    name: "Bills & Subscriptions",
    amount: "$1,420",
    icon: Receipt,
    fragmentedPos: { x: 175, y: 80, rotate: -12 },
    connectedPos: { x: 95, y: 55, rotate: 1 },
    color: "#EF4444",
    fragmentedNote: "$140/mo unnoticed creep",
    clearNote: "Audited & trimmed recurring",
    orbitRadius: 170,
    orbitSpeed: -26,
  },
  {
    id: "savings",
    category: "Liquidity Reserve",
    name: "Emergency Fund",
    amount: "$35,000",
    icon: PiggyBank,
    fragmentedPos: { x: -35, y: -150, rotate: -5 },
    connectedPos: { x: 0, y: -85, rotate: 0 },
    color: "#06B6D4",
    fragmentedNote: "Split across 3 institutions",
    clearNote: "Guaranteed 8-mo cushion",
    orbitRadius: 140,
    orbitSpeed: 20,
  },
  {
    id: "goals",
    category: "Life Milestone",
    name: "Real Estate Deposit",
    amount: "$50,000",
    icon: Target,
    fragmentedPos: { x: 30, y: 145, rotate: 6 },
    connectedPos: { x: 0, y: 85, rotate: 0 },
    color: "#8B5CF6",
    fragmentedNote: "Target date uncertain",
    clearNote: "Target: Nov 2027 (On Track)",
    orbitRadius: 150,
    orbitSpeed: -24,
  },
];

export function ProblemSection() {
  const [stage, setStage] = useState<Stage>("fragmented");
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section id="problem" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#F7F7F3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] text-[#111111] text-xs font-mono uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Fragmentation Problem</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
            Money is everywhere. <br className="hidden sm:inline" />
            <span className="text-emerald-700">Clarity isn&apos;t.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6F706B] leading-relaxed">
            Your money sits in checking accounts, brokerages, cards, billers, and retirement funds. 
            When your tools are disconnected, understanding your true trajectory requires mental gymnastics.
          </p>

          {/* Interactive Stage Controller */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-black/[0.05] border border-black/[0.06] shadow-inner">
            <button
              onClick={() => setStage("fragmented")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                stage === "fragmented"
                  ? "bg-white text-[#111111] shadow-fine scale-100 font-semibold"
                  : "text-[#6F706B] hover:text-[#111111]"
              }`}
            >
              1. Fragmented
            </button>

            <button
              onClick={() => setStage("connected")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                stage === "connected"
                  ? "bg-white text-[#111111] shadow-fine scale-100 font-semibold"
                  : "text-[#6F706B] hover:text-[#111111]"
              }`}
            >
              2. Connected
            </button>

            <button
              onClick={() => setStage("clear")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                stage === "clear"
                  ? "bg-emerald-600 text-white shadow-fine scale-100 font-semibold"
                  : "text-[#6F706B] hover:text-[#111111]"
              }`}
            >
              3. Clear
            </button>
          </div>
        </div>

        {/* Visual Stage Arena */}
        <div className="relative min-h-[540px] sm:min-h-[620px] w-full rounded-3xl border border-black/[0.08] bg-white/70 backdrop-blur-sm p-6 sm:p-12 flex items-center justify-center overflow-hidden shadow-card">
          {/* Subtle grid background */}
          <div className="absolute inset-0 noise-bg opacity-70 pointer-events-none" />

          {/* Animated Orbital Background Rings & Beacons */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Pulsing gravitational center */}
            <motion.div
              animate={{
                scale: stage === "connected" ? [1, 1.15, 1] : [1, 1.05, 1],
                opacity: stage === "connected" ? [0.3, 0.6, 0.3] : [0.1, 0.2, 0.1],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-48 h-48 rounded-full bg-emerald-400/20 blur-2xl"
            />

            {/* Orbit Ring 1 (Smooth continuous rotation) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute w-[320px] h-[320px] rounded-full border border-emerald-500/20 border-dashed"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-glow absolute -top-1.5 left-1/2 -translate-x-1/2" />
            </motion.div>

            {/* Orbit Ring 2 (Counter rotation) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="absolute w-[460px] h-[460px] rounded-full border border-black/[0.05]"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-60" />
            </motion.div>
          </div>

          {/* Connected state connector lines */}
          {stage === "connected" && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-emerald-500/40">
              <circle cx="50%" cy="50%" r="130" fill="none" strokeWidth="1.5" strokeDasharray="4 4" className="animate-spin-slow" />
              <circle cx="50%" cy="50%" r="210" fill="none" strokeWidth="1" strokeDasharray="6 6" />
            </svg>
          )}

          {/* STAGE: FRAGMENTED & CONNECTED CARDS WITH ROTATING / FLOATING DRIFT */}
          {stage !== "clear" && (
            <div className="relative w-full max-w-4xl h-[480px] flex items-center justify-center">
              {FRAGMENTED_CARDS.map((card, idx) => {
                const Icon = card.icon;
                const pos = stage === "fragmented" ? card.fragmentedPos : card.connectedPos;
                const isHovered = hoveredCardId === card.id;

                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={false}
                    animate={{
                      x: pos.x,
                      y: pos.y,
                      rotate: pos.rotate,
                      scale: isHovered ? 1.08 : stage === "connected" ? 0.95 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 18,
                    }}
                    onMouseEnter={() => setHoveredCardId(card.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    className={`absolute w-56 sm:w-64 p-4 rounded-2xl bg-white border border-black/[0.08] shadow-card transition-all cursor-pointer select-none ${
                      isHovered ? "z-30 shadow-2xl ring-2 ring-emerald-500/40" : "z-10 hover:shadow-xl"
                    }`}
                  >
                    {/* Continuous floating micro-drift inside card */}
                    <motion.div
                      animate={{
                        y: [0, -4, 0],
                        rotate: [0, (idx % 2 === 0 ? 0.8 : -0.8), 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3 + (idx * 0.5),
                        ease: "easeInOut",
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                          style={{ backgroundColor: card.color }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase">
                          {card.category}
                        </span>
                      </div>

                      <div className="text-xs font-medium text-neutral-500 truncate">
                        {card.name}
                      </div>

                      <div className="text-lg font-bold font-mono text-[#111111] my-1">
                        {card.amount}
                      </div>

                      <div
                        className={`text-[10px] mt-2 pt-2 border-t border-black/[0.04] flex items-center gap-1.5 ${
                          stage === "connected" ? "text-emerald-700 font-medium" : "text-amber-800"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            stage === "connected" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                          }`}
                        />
                        <span>
                          {stage === "connected" ? card.clearNote : card.fragmentedNote}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* STAGE: CLEAR — UNIFIED 3D FINANCIAL ECOSYSTEM */}
          {stage === "clear" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-3xl bg-white rounded-3xl border border-emerald-500/30 p-6 sm:p-10 shadow-glow relative z-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/[0.06]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
                      Unified Fermor Engine
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111] mt-1 font-sans">
                    All Capital Synchronized
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/20 text-emerald-700 text-xs font-mono font-medium">
                    Clarity Score: 98/100
                  </div>
                </div>
              </div>

              {/* Bento Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-2xl bg-[#F7F7F3] border border-black/[0.04]">
                  <span className="text-xs text-neutral-500 uppercase font-mono">Total Net Liquidity</span>
                  <div className="text-2xl font-bold font-mono text-[#111111] mt-1">$181,650</div>
                  <span className="text-[11px] text-emerald-600 font-medium">+$7,420 net cash flow/mo</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F7F3] border border-black/[0.04]">
                  <span className="text-xs text-neutral-500 uppercase font-mono">Runway Buffer</span>
                  <div className="text-2xl font-bold font-mono text-[#111111] mt-1">14.2 Months</div>
                  <span className="text-[11px] text-cyan-600 font-medium">Guaranteed zero-stress safety</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F7F3] border border-black/[0.04]">
                  <span className="text-xs text-neutral-500 uppercase font-mono">Milestone Velocity</span>
                  <div className="text-2xl font-bold font-mono text-[#111111] mt-1">On Track</div>
                  <span className="text-[11px] text-emerald-600 font-medium">3 goals paced to target</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-black/[0.06] flex flex-wrap items-center justify-between text-xs text-neutral-600 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>No missing links, no manual spreadsheets, zero latency.</span>
                </div>
                <button
                  onClick={() => setStage("fragmented")}
                  className="text-neutral-500 hover:text-black font-medium underline underline-offset-4"
                >
                  Reset transformation
                </button>
              </div>
            </motion.div>
          )}

          {/* Stage Bottom Explainer Indicator */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-[#6F706B] font-mono">
            <span className="hidden sm:inline">
              {stage === "fragmented" && "Fragmented: Disjointed accounts drifting without cohesion."}
              {stage === "connected" && "Connected: Gravitational links established across all capital."}
              {stage === "clear" && "Clear: A single cohesive financial organism acting with purpose."}
            </span>
            <span className="ml-auto flex items-center gap-1.5 font-sans font-medium text-emerald-700">
              Interactive Simulation
              <Sparkles className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
