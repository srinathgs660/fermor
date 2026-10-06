"use client";

import { useEffect, useState } from "react";

export function useMouseParallax(factor: number = 0.05) {
  const [position, setPosition] = useState({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Range: -1 to 1
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const updateLoop = () => {
      // Smooth lerp
      currentX += (targetX - currentX) * factor;
      currentY += (targetY - currentY) * factor;

      setPosition({
        x: currentX * 25,
        y: currentY * 25,
        normalizedX: currentX,
        normalizedY: currentY,
      });

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [factor]);

  return position;
}
