"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 20, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 350, damping: 20, mass: 0.2 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={className} onClick={onClick}>
          {children}
        </a>
      ) : (
        <button type="button" className={className} onClick={onClick}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}

