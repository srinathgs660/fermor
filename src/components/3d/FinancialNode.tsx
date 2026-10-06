"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export interface NodeData {
  id: string;
  label: string;
  value: string;
  subtext: string;
  color: string;
  badge: string;
  position: [number, number, number];
  speed?: number;
}

interface FinancialNodeProps {
  data: NodeData;
  isActive?: boolean;
  onSelect?: (data: NodeData) => void;
}

export function FinancialNode({ data, isActive = false, onSelect }: FinancialNodeProps) {
  const meshRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  const initialPos = useRef(new THREE.Vector3(...data.position));

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    const speed = data.speed || 0.8;

    // Subtle organic floating drift
    const offsetY = Math.sin(t * speed + initialPos.current.x) * 0.1;
    const offsetX = Math.cos(t * speed * 0.7 + initialPos.current.z) * 0.06;

    meshRef.current.position.set(
      initialPos.current.x + offsetX,
      initialPos.current.y + offsetY,
      initialPos.current.z
    );
  });

  return (
    <group ref={meshRef}>
      {/* 3D Glowing Core Sphere for the Node */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onSelect?.(data);
        }}
      >
        <sphereGeometry args={[0.09, 20, 20]} />
        <meshStandardMaterial
          color={data.color}
          emissive={data.color}
          emissiveIntensity={hovered || isActive ? 3.0 : 1.5}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>

      {/* Orbiting Halo Ring on Hover/Active */}
      {(hovered || isActive) && (
        <mesh>
          <ringGeometry args={[0.13, 0.16, 32]} />
          <meshBasicMaterial color={data.color} transparent opacity={0.7} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* Ultra-Transparent Frosted Glass HTML Badge Centered */}
      <Html
        distanceFactor={6.5}
        position={[0, -0.28, 0]}
        center={true}
        className="pointer-events-auto select-none"
      >
        <div
          onClick={() => onSelect?.(data)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`cursor-pointer transition-all duration-300 rounded-xl px-3 py-2 backdrop-blur-xl border shadow-sm min-w-[125px] ${
            hovered || isActive
              ? "bg-white/85 border-emerald-500/50 shadow-glow scale-105"
              : "bg-white/45 border-white/60 hover:bg-white/65"
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-600 font-semibold">
              {data.label}
            </span>
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: data.color }}
            />
          </div>
          <div className="text-sm font-bold text-[#111111] font-mono leading-tight">
            {data.value}
          </div>
          <div className="text-[10px] text-neutral-500 mt-0.5 truncate font-sans">
            {data.subtext}
          </div>
        </div>
      </Html>
    </group>
  );
}
