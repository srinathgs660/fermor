"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface FloatingCard3DProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  title: string;
  amount: string;
  subtitle: string;
  badge: string;
  color: string;
  speed?: number;
  onClick?: () => void;
}

export function FloatingCard3D({
  position,
  rotation = [0, 0, 0],
  title,
  amount,
  subtitle,
  badge,
  color,
  speed = 1,
  onClick,
}: FloatingCard3DProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  const initialPos = useRef(new THREE.Vector3(...position));

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() * speed;

    // Organic floating oscillation
    const offsetY = Math.sin(t + initialPos.current.x) * 0.14;
    const rotZ = Math.sin(t * 0.7) * 0.04;
    const rotX = Math.cos(t * 0.5) * 0.03;

    groupRef.current.position.y = initialPos.current.y + offsetY;
    groupRef.current.rotation.z = rotation[2] + rotZ + (hovered ? 0.05 : 0);
    groupRef.current.rotation.x = rotation[0] + rotX;

    const targetScale = hovered ? 1.08 : 1.0;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      {/* 3D Glass Card Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.95, 0.04]} />
        <meshStandardMaterial
          color="#FFFFFF"
          opacity={0.88}
          transparent
          roughness={0.15}
          metalness={0.1}
        />
      </mesh>

      {/* Card Border Wire/Rim */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.52, 0.97, 0.042]} />
        <meshBasicMaterial
          color={hovered ? "#00E599" : color}
          wireframe
          transparent
          opacity={hovered ? 0.7 : 0.25}
        />
      </mesh>

      {/* Metallic Chip / Logo Accent */}
      <mesh position={[-0.5, 0.24, 0.03]}>
        <boxGeometry args={[0.22, 0.16, 0.02]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Dynamic Luminous HTML Content Overlay */}
      <Html
        distanceFactor={6}
        position={[0, 0, 0.04]}
        center
        className="pointer-events-auto select-none"
      >
        <div
          onClick={onClick}
          className={`w-[160px] p-2.5 rounded-xl transition-all duration-300 backdrop-blur-md cursor-pointer ${
            hovered
              ? "bg-white/95 shadow-glow ring-1 ring-emerald-500/50"
              : "bg-white/70 shadow-fine hover:bg-white/85"
          }`}
        >
          <div className="flex items-center justify-between text-[10px] font-mono mb-1">
            <span className="text-neutral-500 uppercase tracking-wider font-semibold">
              {title}
            </span>
            <span
              className="px-1.5 py-0.5 rounded-full text-[9px] font-bold"
              style={{ backgroundColor: `${color}18`, color: color }}
            >
              {badge}
            </span>
          </div>

          <div className="text-sm font-bold font-mono text-[#111111]">
            {amount}
          </div>

          <div className="text-[10px] text-neutral-500 truncate mt-0.5 font-sans">
            {subtitle}
          </div>
        </div>
      </Html>
    </group>
  );
}
