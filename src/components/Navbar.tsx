"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Universe", href: "#universe" },
    { name: "Insights", href: "#insights" },
    { name: "Philosophy", href: "#philosophy" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-12 py-3.5 sm:py-4 ${
          isScrolled
            ? "backdrop-blur-md bg-[#F7F7F3]/80 border-b border-black/[0.06] shadow-fine py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Fermor Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600/10 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-emerald-500/20 group-hover:ring-emerald-500/40" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-[#111111] font-sans">
              Fermor
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-black/[0.03] border border-black/[0.04]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-[#6F706B] hover:text-[#111111] transition-colors rounded-full hover:bg-black/[0.03]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-[#6F706B] hover:text-[#111111] transition-colors"
            >
              Log in
            </button>
            <a
              href="#get-started"
              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-sm font-medium bg-[#111111] text-[#F7F7F3] hover:bg-neutral-800 transition-all shadow-sm group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get started</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-black hover:bg-black/5 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#F7F7F3] border-b border-black/[0.08] shadow-card px-6 py-6 md:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-[#111111] hover:bg-black/[0.04] rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-black/[0.06] flex flex-col gap-3">
              <button
                type="button"
                className="w-full py-2.5 text-center text-sm font-medium text-[#111111] rounded-lg border border-black/[0.08] hover:bg-black/[0.03]"
              >
                Log in
              </button>
              <a
                href="#get-started"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-sm font-medium text-white bg-[#111111] rounded-lg shadow hover:bg-neutral-800 flex items-center justify-center gap-2"
              >
                <span>Get started</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
