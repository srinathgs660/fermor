"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  PieChart,
  Target,
  Zap,
  Wallet,
} from "lucide-react";

type Tab = "overview" | "spending" | "growth" | "goals";

export function ProductSection() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [savingsSlider, setSavingsSlider] = useState(4830);

  // Dynamic calculations based on slider
  const annualSavings = savingsSlider * 12;
  const projected10Yr = Math.round(savingsSlider * ((Math.pow(1 + 0.08 / 12, 120) - 1) / (0.08 / 12)));

  return (
    <section id="product" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#F2F2EC]/80 border-t border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 border border-emerald-500/20">
            <span>Product Interface</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
            One place to understand <br />
            <span className="text-emerald-700">the bigger picture.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6F706B] leading-relaxed">
            Instead of static spreadsheets and disconnected apps, Fermor models your entire 
            financial trajectory in real-time. Switch perspectives to explore how every account 
            and cash flow interacts.
          </p>

          {/* Interactive Perspective Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { id: "overview", label: "Financial Overview", icon: Wallet },
              { id: "spending", label: "Spending Dynamics", icon: PieChart },
              { id: "growth", label: "Wealth Growth", icon: TrendingUp },
              { id: "goals", label: "Life Goals", icon: Target },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#111111] text-white shadow-fine scale-105 font-semibold"
                      : "bg-white text-neutral-600 hover:text-black hover:bg-neutral-100 border border-black/[0.06]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-neutral-500"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* High-Performance Dashboard Container */}
        <div className="w-full rounded-3xl bg-white border border-black/[0.08] shadow-card p-6 sm:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-xl">
          {/* Dashboard Window Header (Removed '60 FPS') */}
          <div className="flex items-center justify-between pb-6 border-b border-black/[0.06] mb-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-neutral-300" />
                <span className="w-3 h-3 rounded-full bg-neutral-300" />
                <span className="w-3 h-3 rounded-full bg-neutral-300" />
              </div>
              <div className="h-4 w-px bg-neutral-200 mx-1 hidden sm:block" />
              <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
                fermor.app / live-deck / {activeTab}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-mono border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Continuous Trajectory Engine
              </span>
            </div>
          </div>

          {/* Smoothly Animated Tab Content Area */}
          <AnimatePresence mode="wait">
            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                {/* Main Metric & Animated Graph */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="p-6 rounded-2xl bg-[#F7F7F3] border border-black/[0.05]">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                          Consolidated Net Wealth
                        </span>
                        <div className="text-3xl sm:text-4xl font-bold font-mono text-[#111111] mt-1 flex items-center gap-2">
                          <span>$248,390.40</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold font-mono shadow-sm">
                        <TrendingUp className="w-3.5 h-3.5" />
                        +$12,410 (+5.2% YTD)
                      </span>
                    </div>

                    {/* Animated Cash Flow Month Bars with Hover & Wave Effect */}
                    <div className="h-44 w-full flex items-end gap-2 pt-6">
                      {[42, 54, 49, 68, 62, 78, 71, 88, 96, 91, 102, 110].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(val / 115) * 100}%` }}
                            transition={{ duration: 0.6, delay: idx * 0.04, ease: "easeOut" }}
                            whileHover={{ scaleY: 1.08, originY: 1 }}
                            className="w-full bg-gradient-to-t from-emerald-600/30 to-emerald-500 rounded-t-sm transition-colors group-hover:from-emerald-600 group-hover:to-emerald-400 group-hover:shadow-glow"
                          />
                          <span className="text-[10px] font-mono text-neutral-400 group-hover:text-black font-semibold">
                            {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][idx]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="p-5 rounded-2xl bg-[#F7F7F3] border border-black/[0.04] transition-shadow hover:shadow-fine"
                    >
                      <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        Monthly Free Cash Flow
                      </span>
                      <div className="text-2xl font-bold font-mono text-[#111111] mt-1">
                        +${savingsSlider.toLocaleString()}
                      </div>
                      <div className="text-xs text-emerald-700 mt-2 font-medium flex items-center gap-1">
                        <span>58% automatically converted to productive assets</span>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -2 }}
                      className="p-5 rounded-2xl bg-[#F7F7F3] border border-black/[0.04] transition-shadow hover:shadow-fine"
                    >
                      <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        Emergency Living Runway
                      </span>
                      <div className="text-2xl font-bold font-mono text-[#111111] mt-1">
                        11.4 Months
                      </div>
                      <div className="text-xs text-neutral-500 mt-2 flex items-center gap-1">
                        <span>Liquid high-yield sovereign reserves</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Side Insights Column */}
                <div className="lg:col-span-4 space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-50/60 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-2 text-emerald-800 text-xs font-semibold uppercase font-mono">
                      <Zap className="w-4 h-4 text-emerald-600 animate-pulse" />
                      Fermor System Insight
                    </div>
                    <p className="text-sm text-neutral-800 font-medium leading-relaxed">
                      Shifting $1,200 from idle checking into short-duration treasuries increases annual yield by $62 without compromising liquidity.
                    </p>
                  </motion.div>

                  <div className="p-5 rounded-2xl bg-[#F7F7F3] border border-black/[0.04] space-y-3.5">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                      Active Allocations
                    </span>
                    {[
                      { name: "Equities & Index Funds", pct: "62%", color: "bg-emerald-500", glow: "from-emerald-400 to-emerald-600" },
                      { name: "Safe Cash Buffer", pct: "24%", color: "bg-cyan-500", glow: "from-cyan-400 to-cyan-600" },
                      { name: "Sovereign Debt", pct: "14%", color: "bg-blue-500", glow: "from-blue-400 to-blue-600" },
                    ].map((item, idx) => (
                      <div key={item.name} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-700 font-medium">{item.name}</span>
                          <span className="font-mono font-semibold">{item.pct}</span>
                        </div>
                        <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: item.pct }}
                            transition={{ duration: 0.8, delay: 0.1 + idx * 0.1, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${item.glow} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: SPENDING */}
            {activeTab === "spending" && (
              <motion.div
                key="spending"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                <div className="p-6 rounded-2xl bg-[#F7F7F3] border border-black/[0.05]">
                  <span className="text-xs font-mono text-neutral-500 uppercase">Fixed Commitments</span>
                  <div className="text-2xl font-bold font-mono text-[#111111] mt-1">$2,100 / mo</div>
                  <p className="text-xs text-neutral-600 mt-2">Mortgage, utilities, insured health</p>
                  <div className="mt-4 pt-3 border-t border-black/[0.05] text-xs font-mono text-emerald-700 font-semibold">
                    Within healthy 28% ceiling
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#F7F7F3] border border-black/[0.05]">
                  <span className="text-xs font-mono text-neutral-500 uppercase">Discretionary Outflow</span>
                  <div className="text-2xl font-bold font-mono text-[#111111] mt-1">$1,520 / mo</div>
                  <p className="text-xs text-neutral-600 mt-2">Dining, travel, spontaneous leisure</p>
                  <div className="mt-4 pt-3 border-t border-black/[0.05] text-xs font-mono text-neutral-500">
                    -4.1% below 3-month baseline
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#F7F7F3] border border-black/[0.05]">
                  <span className="text-xs font-mono text-neutral-500 uppercase">Recurring Leaks Detected</span>
                  <div className="text-2xl font-bold font-mono text-emerald-700 mt-1">0 Active Leaks</div>
                  <p className="text-xs text-neutral-600 mt-2">Zero forgotten trials or duplicate services</p>
                  <div className="mt-4 pt-3 border-t border-black/[0.05] text-xs font-mono text-emerald-700 font-semibold">
                    Audited automatically
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: GROWTH */}
            {activeTab === "growth" && (
              <motion.div
                key="growth"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl bg-[#F7F7F3] border border-black/[0.05] space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-neutral-500 uppercase">
                      Interactive Compounding Simulator
                    </span>
                    <div className="text-3xl font-bold font-mono text-[#111111] mt-1">
                      10-Year Horizon: ${projected10Yr.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                    Annual Deployment: ${annualSavings.toLocaleString()} / yr
                  </div>
                </div>

                {/* Interactive Monthly Allocation Slider */}
                <div className="p-4 rounded-xl bg-white border border-black/[0.05] space-y-3 shadow-fine">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-neutral-700">Simulate Monthly Investment Deployment:</span>
                    <span className="font-mono font-bold text-emerald-700 text-sm">${savingsSlider} / mo</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="250"
                    value={savingsSlider}
                    onChange={(e) => setSavingsSlider(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Based on your current monthly surplus deployed methodically into diversified index vehicles,
                  your capital efficiency matches the top tier of disciplined long-term builders.
                </p>
              </motion.div>
            )}

            {/* TAB 4: GOALS */}
            {activeTab === "goals" && (
              <motion.div
                key="goals"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="p-5 rounded-2xl bg-[#F7F7F3] border border-black/[0.04]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-[#111111]">Primary Residence Deposit</span>
                    <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold">84%</span>
                  </div>
                  <div className="h-2.5 w-full bg-black/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "84%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-emerald-600 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-neutral-500 mt-2 font-mono">
                    <span>$84,000 saved</span>
                    <span>Target: $100,000 (ETA: 4 mos)</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F7F7F3] border border-black/[0.04]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-[#111111]">Sabbatical & Adventure Fund</span>
                    <span className="text-xs font-mono text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full font-semibold">100%</span>
                  </div>
                  <div className="h-2.5 w-full bg-black/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-neutral-500 mt-2 font-mono">
                    <span>$25,000 funded</span>
                    <span>Ready for deployment</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
