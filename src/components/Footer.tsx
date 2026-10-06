"use client";

export function Footer() {
  return (
    <footer className="bg-[#0A0C0E] text-neutral-400 py-16 px-4 sm:px-6 lg:px-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Fermor
              </span>
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Financial clarity, without the complexity. A cohesive 3D operating system 
              to understand, act, and grow your money with confidence.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-400">
              © {new Date().getFullYear()} Fermor Technologies Inc. All rights reserved.
            </div>
          </div>

          {/* Links: Product */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#product" className="hover:text-emerald-400 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#universe" className="hover:text-emerald-400 transition-colors">
                  Financial Cosmos
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-emerald-400 transition-colors">
                  Insights Engine
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#philosophy" className="hover:text-emerald-400 transition-colors">
                  About & Manifesto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  Careers <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 rounded">Hiring</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Security Architecture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            Designed for financial clarity. Modeled with deterministic computation.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              X / Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
