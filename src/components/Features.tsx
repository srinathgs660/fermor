"use client";

import { useState } from "react";

export function Features() {
  // Feature 03 interactive state
  const [extraMonthly, setExtraMonthly] = useState(300);

  // Feature 04 interactive growth scenario
  const [strategy, setStrategy] = useState<"conservative" | "balanced" | "growth">("balanced");

  // Compounding math for Feature 03
  const future10YrValue = Math.round(
    extraMonthly * ((Math.pow(1 + 0.08 / 12, 120) - 1) / (0.08 / 12))
  );

  return (
    <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#F7F7F3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] text-[#111111] text-xs font-mono uppercase tracking-wider mb-4">
            <span>Core Architecture</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
            Four dimensions of <br />
            <span className="text-emerald-700">financial control.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6F706B] leading-relaxed">
            Every feature is deliberately engineered to eliminate confusion and turn abstract 
            numbers into decisive, forward-looking moves.
          </p>
        </div>

        {/* Large Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* FEATURE 01 — UNDERSTAND (Span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-10 shadow-card flex flex-col justify-between group hover:border-emerald-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  01 — UNDERSTAND
                </span>
                <span className="text-xs font-mono text-neutral-400">Total Transparency</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-3">
                See exactly where your money goes.
              </h3>

              <p className="text-sm sm:text-base text-[#6F706B] leading-relaxed mb-8 max-w-xl">
                Break free of monolithic statements. Fermor tracks continuous velocity — illuminating 
                fixed baselines, flexible discretionary drift, and wealth capital in one lucid stream.
              </p>
            </div>

            {/* Visual Mini-Experience: Dynamic Cash Flow Spectrum */}
            <div className="p-6 rounded-2xl bg-[#F7F7F3] border border-black/[0.04] space-y-4">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-neutral-500">Consolidated Monthly Inflow: $8,450</span>
                <span className="text-emerald-700 font-semibold">100% Accounted</span>
              </div>

              {/* Stacked Stream Bar */}
              <div className="h-5 w-full bg-neutral-200 rounded-full overflow-hidden flex">
                <div style={{ width: "25%" }} className="bg-neutral-800 h-full relative group/bar" title="Fixed Living (25%)" />
                <div style={{ width: "18%" }} className="bg-neutral-400 h-full relative group/bar" title="Discretionary (18%)" />
                <div style={{ width: "57%" }} className="bg-emerald-500 h-full relative group/bar" title="Wealth Growth Engine (57%)" />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-neutral-800" />
                  <span className="text-neutral-600 font-medium">Fixed 25%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-neutral-400" />
                  <span className="text-neutral-600 font-medium">Lifestyle 18%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-emerald-700 font-semibold">Growth 57%</span>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 02 — PLAN (Span 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-10 shadow-card flex flex-col justify-between group hover:border-emerald-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                  02 — PLAN
                </span>
                <span className="text-xs font-mono text-neutral-400">Deterministic</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-3">
                Turn goals into clear, actionable steps.
              </h3>

              <p className="text-sm sm:text-base text-[#6F706B] leading-relaxed mb-6">
                No vague aspirations. Fermor establishes milestone targets, accounting for inflation 
                and market cycles so you always know your exact required monthly contribution.
              </p>
            </div>

            {/* Visual Mini-Experience: Milestone Pathway */}
            <div className="p-5 rounded-2xl bg-[#F7F7F3] border border-black/[0.04] space-y-3">
              {[
                { title: "Home Down Payment", date: "Nov 2027", progress: 84, color: "bg-emerald-500" },
                { title: "Kid Education Trust", date: "Jan 2034", progress: 42, color: "bg-blue-500" },
                { title: "Early Financial Sovereignty", date: "Aug 2038", progress: 61, color: "bg-teal-500" },
              ].map((m) => (
                <div key={m.title} className="text-xs space-y-1">
                  <div className="flex justify-between font-medium">
                    <span className="text-neutral-800">{m.title}</span>
                    <span className="font-mono text-neutral-500">{m.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                    <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURE 03 — ACT (Span 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-10 shadow-card flex flex-col justify-between group hover:border-emerald-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                  03 — ACT
                </span>
                <span className="text-xs font-mono text-neutral-400">Interactive Modeling</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-3">
                Make decisions with instant context.
              </h3>

              <p className="text-sm sm:text-base text-[#6F706B] leading-relaxed mb-6">
                Simulate the compounding butterfly effect of any allocation shift before executing.
              </p>
            </div>

            {/* Interactive Decision Simulator Slider */}
            <div className="p-5 rounded-2xl bg-[#F7F7F3] border border-black/[0.04] space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-600 font-medium">Simulate Surplus Allocation:</span>
                <span className="font-mono font-bold text-[#111111]">+${extraMonthly} / mo</span>
              </div>

              <input
                type="range"
                min="50"
                max="1500"
                step="50"
                value={extraMonthly}
                onChange={(e) => setExtraMonthly(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-500/20 text-xs text-emerald-900 flex items-center justify-between">
                <span>10-Yr Compounded Impact:</span>
                <span className="font-mono font-bold text-base text-emerald-800">
                  +${future10YrValue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* FEATURE 04 — GROW (Span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-10 shadow-card flex flex-col justify-between group hover:border-emerald-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                  04 — GROW
                </span>
                <span className="text-xs font-mono text-neutral-400">Trajectory Control</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-3">
                Track progress and build toward your future.
              </h3>

              <p className="text-sm sm:text-base text-[#6F706B] leading-relaxed mb-6 max-w-xl">
                Observe the compounding momentum of your net assets across time horizons. Select a 
                strategic posture to simulate stress-tested expected wealth.
              </p>
            </div>

            {/* Interactive Growth Trajectory Posture Selector */}
            <div className="p-6 rounded-2xl bg-[#F7F7F3] border border-black/[0.04] space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "conservative" as const, label: "Defensive (5.5%)" },
                  { id: "balanced" as const, label: "Balanced (8.2%)" },
                  { id: "growth" as const, label: "Long Horizon (11.0%)" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStrategy(s.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      strategy === s.id
                        ? "bg-[#111111] text-white shadow-fine"
                        : "bg-white text-neutral-600 hover:text-black border border-black/[0.06]"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-black/[0.04]">
                  <span className="text-neutral-400 font-mono">5-Year Projected</span>
                  <div className="text-base font-bold font-mono text-[#111111] mt-0.5">
                    {strategy === "conservative" ? "$382,000" : strategy === "balanced" ? "$435,000" : "$512,000"}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-black/[0.04]">
                  <span className="text-neutral-400 font-mono">10-Year Projected</span>
                  <div className="text-base font-bold font-mono text-[#111111] mt-0.5">
                    {strategy === "conservative" ? "$710,000" : strategy === "balanced" ? "$890,000" : "$1,180,000"}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-black/[0.04] col-span-2 sm:col-span-1">
                  <span className="text-neutral-400 font-mono">Compounding Factor</span>
                  <div className="text-base font-bold font-mono text-emerald-700 mt-0.5">
                    {strategy === "conservative" ? "1.9x Capital" : strategy === "balanced" ? "2.6x Capital" : "3.8x Capital"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
