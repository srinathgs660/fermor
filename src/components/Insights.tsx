"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

interface InsightCard {
  id: string;
  category: string;
  title: string;
  metric: string;
  change: string;
  positive: boolean;
  explanation: string;
  actionableStep: string;
}

const INSIGHTS: InsightCard[] = [
  {
    id: "spending-drift",
    category: "Spending Dynamics",
    title: "Discretionary spend contracted this month",
    metric: "-8.4%",
    change: "vs 3-month baseline",
    positive: true,
    explanation: "Dining and subscription trimming freed up an extra $320 without impacting core living standards.",
    actionableStep: "Auto-reallocate $320 into index fund",
  },
  {
    id: "goal-milestone",
    category: "Goal Progression",
    title: "Home deposit milestone pacing ahead",
    metric: "72.4%",
    change: "Target: $100,000",
    positive: true,
    explanation: "At your current pace of contribution and yield, your target deposit will be reached 3 months early.",
    actionableStep: "Lock scheduled target date to Nov 2027",
  },
  {
    id: "recurring-ratio",
    category: "Structural Outflow",
    title: "Recurring expenses account for 34% of inflow",
    metric: "34%",
    change: "Safe zone ceiling: 40%",
    positive: true,
    explanation: "Your fixed overhead ratio gives you an asymmetric 66% flexibility buffer to absorb shocks or invest aggressively.",
    actionableStep: "Maintain existing housing & utility ceiling",
  },
  {
    id: "idle-cash",
    category: "Yield Efficiency",
    title: "Idle checking balances identified",
    metric: "$4,200",
    change: "Earning <0.1%",
    positive: false,
    explanation: "Balancing operating checking to 1.5x monthly expenses leaves $4,200 yielding near-zero in legacy accounts.",
    actionableStep: "Deploy to sovereign 5.1% liquid reserve",
  },
];

export function Insights() {
  const [appliedActions, setAppliedActions] = useState<Record<string, boolean>>({});

  const toggleAction = (id: string) => {
    setAppliedActions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="insights" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#F7F7F3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] text-[#111111] text-xs font-mono uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Predictive Intelligence</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1]">
              Clarity creates <br />
              <span className="text-emerald-700">better decisions.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#6F706B] leading-relaxed mt-4">
              Fermor continuously scans for hidden leverage in your cash flows. No noise or generic 
              tips — only high-signal observations paired with exact mathematical impact.
            </p>
          </div>

          {/* Illustrative Demo Badge */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-mono shadow-sm">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Illustrative modeled scenarios • Click action to simulate</span>
          </div>
        </div>

        {/* Animated Insight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INSIGHTS.map((insight, idx) => {
            const isApplied = !!appliedActions[insight.id];

            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`p-8 rounded-3xl bg-white border transition-all duration-300 shadow-card hover:shadow-2xl flex flex-col justify-between relative overflow-hidden group ${
                  isApplied
                    ? "border-emerald-500/50 ring-2 ring-emerald-500/15"
                    : "border-black/[0.08] hover:border-emerald-500/30"
                }`}
              >
                {/* Subtle top ambient glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      {insight.category}
                    </span>
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-full flex items-center gap-1 ${
                        insight.positive
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-500/20"
                          : "bg-amber-50 text-amber-700 border border-amber-500/20"
                      }`}
                    >
                      {insight.positive ? (
                        <TrendingDown className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <TrendingUp className="w-3 h-3 text-amber-600" />
                      )}
                      <span>{insight.change}</span>
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-bold font-mono text-[#111111] mb-2 flex items-center gap-2">
                    <span>{insight.metric}</span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 3, delay: idx * 0.5 }}
                      className={`w-2 h-2 rounded-full ${insight.positive ? "bg-emerald-500" : "bg-amber-500"}`}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-[#111111] mb-3 font-sans">
                    {insight.title}
                  </h3>

                  <p className="text-sm text-[#6F706B] leading-relaxed mb-6">
                    {insight.explanation}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-mono">Recommended action:</span>
                  
                  <button
                    onClick={() => toggleAction(insight.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-sans transition-all active:scale-95 ${
                      isApplied
                        ? "bg-emerald-600 text-white shadow-fine font-semibold"
                        : "bg-black/[0.04] text-emerald-800 hover:bg-emerald-50 hover:text-emerald-900 border border-black/[0.05]"
                    }`}
                  >
                    {isApplied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        <span>Action Optimized</span>
                      </>
                    ) : (
                      <>
                        <span>{insight.actionableStep}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
