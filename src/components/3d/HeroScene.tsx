"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { FinancialCore } from "./FinancialCore";
import { Orbit } from "./Orbit";
import { FinancialNode, NodeData } from "./FinancialNode";
import { DataParticles } from "./DataParticles";
import { SceneFallback } from "./SceneFallback";
import { useReducedMotion } from "@/hooks/useMediaQuery";

// Perfectly balanced nodes inside the visible 3D frustum
const FINANCIAL_NODES: NodeData[] = [
  {
    id: "income",
    label: "Income Velocity",
    value: "$8,450/mo",
    subtext: "2 active verified streams",
    color: "#10B981",
    badge: "+4.2%",
    position: [-1.45, 1.15, 0.3],
    speed: 0.9,
  },
  {
    id: "spending",
    label: "Living Outflow",
    value: "$3,620/mo",
    subtext: "Controlled at 38% burn",
    color: "#64748B",
    badge: "-8% vs last mo",
    position: [1.4, 0.85, -0.2],
    speed: 0.85,
  },
  {
    id: "savings",
    label: "Emergency Moat",
    value: "$42,500",
    subtext: "11.7 months liquid buffer",
    color: "#06B6D4",
    badge: "Optimal",
    position: [-1.35, -1.15, 0.4],
    speed: 0.75,
  },
  {
    id: "growth",
    label: "Index Growth",
    value: "+14.8% CAGR",
    subtext: "Systematic monthly DCA",
    color: "#059669",
    badge: "+$6,120 YoY",
    position: [1.35, -0.95, -0.2],
    speed: 1.1,
  },
  {
    id: "goals",
    label: "Sovereignty Goal",
    value: "78% Paced",
    subtext: "14 months ahead of curve",
    color: "#3B82F6",
    badge: "On Track",
    position: [0.0, 1.75, 0.2],
    speed: 0.7,
  },
];

function CameraRig() {
  const { camera } = useThree();
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion) return;

    // Smooth, deep 3D parallax tracking directly via R3F state.pointer
    const targetX = state.pointer.x * 0.9;
    const targetY = state.pointer.y * 0.7;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function SceneContent({
  onSelectNode,
  activeNodeId,
}: {
  onSelectNode: (data: NodeData) => void;
  activeNodeId?: string;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (groupRef.current && !prefersReducedMotion) {
      // Gentle overall celestial rotation
      groupRef.current.rotation.y += delta * 0.06;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.03;
    }
  });

  return (
    <>
      <CameraRig />

      {/* Atmospheric Soft Studio Lighting */}
      <ambientLight intensity={1.0} />
      <directionalLight position={[10, 12, 8]} intensity={1.6} color="#FFFFFF" />
      <directionalLight position={[-10, -6, -5]} intensity={0.6} color="#A7F3D0" />
      <pointLight position={[0, 0, 0]} intensity={2.0} color="#10B981" distance={6} />

      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.35}>
        <group ref={groupRef}>
          {/* Central Transparent Crystal Glass Core */}
          <FinancialCore />

          {/* Transparent Glowing Torus Orbits */}
          <Orbit radius={2.0} rotation={[0.4, 0.3, 0]} speed={0.4} color="#10B981" />
          <Orbit radius={2.6} rotation={[-0.5, 0.6, 0.2]} speed={-0.3} color="#06B6D4" />
          <Orbit radius={3.2} rotation={[0.8, -0.4, 0.5]} speed={0.25} color="#3B82F6" />

          {/* Ambient Starlight & Data Particles */}
          <DataParticles count={80} radius={3.8} />

          {/* Interactive Transparent Financial Nodes */}
          {FINANCIAL_NODES.map((node) => (
            <FinancialNode
              key={node.id}
              data={node}
              isActive={activeNodeId === node.id}
              onSelect={onSelectNode}
            />
          ))}
        </group>
      </Float>
    </>
  );
}

export function HeroScene() {
  const [activeNode, setActiveNode] = useState<NodeData | null>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }

    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "150px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (!webglSupported) {
    return <SceneFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[620px] lg:h-[680px] flex items-center justify-center select-none"
    >
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          frameloop={isInView ? "always" : "never"}
          camera={{ position: [0, 0, 6.6], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <SceneContent
            onSelectNode={(node) => setActiveNode(node)}
            activeNodeId={activeNode?.id}
          />
        </Canvas>
      </Suspense>

      {/* Interactive Detail Modal Flyout when a node is selected */}
      {activeNode && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 p-5 rounded-2xl glass-panel shadow-card border border-emerald-500/20 z-20 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: activeNode.color }}
              />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
                {activeNode.label}
              </span>
            </div>
            <button
              onClick={() => setActiveNode(null)}
              className="text-xs text-neutral-400 hover:text-black p-1"
            >
              ✕
            </button>
          </div>
          <div className="text-2xl font-bold font-mono text-[#111111]">
            {activeNode.value}
          </div>
          <p className="text-xs text-neutral-600 mt-1">
            {activeNode.subtext}
          </p>
          <div className="mt-3 pt-2.5 border-t border-black/[0.06] flex items-center justify-between text-[11px]">
            <span className="text-neutral-400">Optimization Vector</span>
            <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-mono">
              {activeNode.badge}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
