"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ultra short, snappy transition (650ms max)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#F7F7F3]"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xl font-semibold tracking-wider text-[#111111]">
                FERMOR
              </span>
            </div>
            
            {/* Subtle orbital animation line */}
            <div className="relative h-1 w-24 overflow-hidden rounded-full bg-black/5">
              <motion.div
                className="h-full w-8 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                animate={{
                  x: [-32, 96],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.9,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
              Initializing Universe
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
