"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Fast responsive dot
  const dotX = useSpring(mouseX, { damping: 30, stiffness: 450, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 450, mass: 0.1 });

  // Smooth trail ring
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 220, mass: 0.2 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 220, mass: 0.2 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = !!target.closest("a, button, input, [role='button'], .interactive-hover, [data-interactive]");
        setIsPointer((prev) => (prev !== interactive ? interactive : prev));
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, prefersReducedMotion, mouseX, mouseY]);

  if (prefersReducedMotion || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Central dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-emerald-500 pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.6 : isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      />
      {/* Outer subtle ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-emerald-500/30 pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          backgroundColor: isPointer ? "rgba(16, 185, 129, 0.08)" : "rgba(16, 185, 129, 0.02)",
          borderColor: isPointer ? "rgba(16, 185, 129, 0.6)" : "rgba(16, 185, 129, 0.25)",
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
      />
    </div>
  );
}
