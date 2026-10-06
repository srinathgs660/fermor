"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SceneFallback } from "./SceneFallback";

interface EcosystemSceneProps {
  activeLayerIndex: number;
  onSelectLayer: (index: number) => void;
}

export const ECOSYSTEM_LAYERS = [
  {
    id: "cashflow",
    name: "01 — Cash Flow",
    shortName: "Cash Flow",
    tagline: "Continuous Inflow Dynamics",
    radius: 1.6,
    color: "#10B981",
    speed: 0.6,
    tilt: [0.35, 0.2, 0] as [number, number, number],
    metric: "$8,450 / month",
    metricSub: "Normalized net velocity",
    description: "Tracks incoming liquidity from payroll, dividends, and client disbursements with automated income smoothing.",
    impact: "+$740 surplus retained monthly",
  },
  {
    id: "spending",
    name: "02 — Living Outflow",
    shortName: "Outflow",
    tagline: "Outflow Friction Control",
    radius: 2.1,
    color: "#F43F5E",
    speed: -0.45,
    tilt: [-0.4, 0.45, 0.2] as [number, number, number],
    metric: "$3,620 / month",
    metricSub: "Baseline burn rate",
    description: "Categorizes fixed vs. discretionary outlays into distinct orbits, isolating subscription inflation before it compounds.",
    impact: "Zero unnoticed creep",
  },
  {
    id: "savings",
    name: "03 — Liquidity Moat",
    shortName: "Moat",
    tagline: "Asymmetric Safety Cushion",
    radius: 2.6,
    color: "#06B6D4",
    speed: 0.4,
    tilt: [0.55, -0.3, 0.35] as [number, number, number],
    metric: "$42,500",
    metricSub: "11.7 months living runway",
    description: "Maintains a deterministic liquid moat in high-yield reserves to insulate against external volatility.",
    impact: "Protected against shocks",
  },
  {
    id: "investments",
    name: "04 — Wealth Assets",
    shortName: "Assets",
    tagline: "Capital Allocation Engine",
    radius: 3.1,
    color: "#10B981",
    speed: -0.35,
    tilt: [-0.25, -0.5, 0.15] as [number, number, number],
    metric: "$148,000",
    metricSub: "Global equity & treasury mix",
    description: "Low-cost index diversification balanced continuously against your risk tolerance and withdrawal milestones.",
    impact: "8.4% annualized real return",
  },
  {
    id: "goals",
    name: "05 — Life Milestones",
    shortName: "Milestones",
    tagline: "Target Milestones",
    radius: 3.6,
    color: "#3B82F6",
    speed: 0.45,
    tilt: [0.45, 0.45, -0.25] as [number, number, number],
    metric: "3 Active Targets",
    metricSub: "Paced to exact dates",
    description: "Translates abstract life milestones (home acquisition, child education, sabbatical) into calibrated monthly quotas.",
    impact: "88% milestone fidelity",
  },
  {
    id: "growth",
    name: "06 — Compounded Future",
    shortName: "Horizon",
    tagline: "Compounded Future",
    radius: 4.1,
    color: "#8B5CF6",
    speed: -0.3,
    tilt: [-0.5, 0.25, 0.5] as [number, number, number],
    metric: "$1.24M by 2038",
    metricSub: "Inflation-adjusted projection",
    description: "The holistic synthesis of your financial universe, compounding undisturbed across decades of purposeful alignment.",
    impact: "Freedom horizon secured",
  },
];

// Lightweight, ultra-responsive 3D Core with zero frame drops
function PerformanceCore({ activeColor }: { activeColor: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const latticeRef = useRef<THREE.Mesh>(null!);
  const pulseRingRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x = Math.sin(t * 0.8) * 0.08;
    }
    if (latticeRef.current) {
      latticeRef.current.rotation.y -= delta * 0.35;
      latticeRef.current.rotation.z += delta * 0.15;
    }
    if (pulseRingRef.current) {
      const pulse = 1 + (Math.sin(t * 2) * 0.08);
      pulseRingRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Radiant Central Nucleus */}
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#10B981"
          emissive="#059669"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      {/* Geometric Wireframe Shield */}
      <mesh ref={latticeRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial
          wireframe
          color={activeColor}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Equatorial Aura Ring */}
      <mesh ref={pulseRingRef}>
        <torusGeometry args={[1.35, 0.02, 16, 64]} />
        <meshBasicMaterial color={activeColor} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

// Interactive Orbital Layer Ring
function OrbitLayer({
  radius,
  tilt,
  color,
  speed,
  isActive,
  onClick,
}: {
  radius: number;
  tilt: [number, number, number];
  color: string;
  speed: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const beaconRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * speed * 0.4;
    }
    if (beaconRef.current) {
      const angle = state.clock.getElapsedTime() * speed;
      beaconRef.current.position.x = Math.cos(angle) * radius;
      beaconRef.current.position.y = Math.sin(angle) * radius;
    }
  });

  return (
    <group rotation={tilt}>
      <group ref={groupRef} onClick={onClick}>
        {/* Main Orbit Tube */}
        <mesh>
          <torusGeometry args={[radius, isActive ? 0.03 : 0.012, 16, 80]} />
          <meshBasicMaterial
            color={isActive ? "#00FFB2" : color}
            transparent
            opacity={isActive ? 0.9 : 0.3}
          />
        </mesh>

        {/* Glow halo when active */}
        {isActive && (
          <mesh>
            <torusGeometry args={[radius, 0.065, 8, 80]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.25}
            />
          </mesh>
        )}
      </group>

      {/* Orbiting Satellite Beacon */}
      <mesh ref={beaconRef} onClick={onClick}>
        <sphereGeometry args={[isActive ? 0.1 : 0.06, 16, 16]} />
        <meshBasicMaterial
          color={isActive ? "#FFFFFF" : color}
        />
      </mesh>
    </group>
  );
}

function SceneContent({
  activeLayerIndex,
  onSelectLayer,
}: {
  activeLayerIndex: number;
  onSelectLayer: (idx: number) => void;
}) {
  const currentLayer = ECOSYSTEM_LAYERS[activeLayerIndex];

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[6, 8, 5]} intensity={1.5} color="#FFFFFF" />
      <pointLight position={[0, 0, 0]} intensity={2.5} color="#10B981" distance={6} />

      {/* Perfectly Centered Universe Core */}
      <PerformanceCore activeColor={currentLayer.color} />

      {/* Concentric Interactive Orbital Layers */}
      {ECOSYSTEM_LAYERS.map((layer, idx) => (
        <OrbitLayer
          key={layer.id}
          radius={layer.radius}
          tilt={layer.tilt}
          color={layer.color}
          speed={layer.speed}
          isActive={activeLayerIndex === idx}
          onClick={() => onSelectLayer(idx)}
        />
      ))}
    </>
  );
}

export function EcosystemScene({ activeLayerIndex, onSelectLayer }: EcosystemSceneProps) {
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  return (
    <div ref={containerRef} className="w-full h-full min-h-[440px] sm:min-h-[520px] relative select-none">
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          frameloop={isInView ? "always" : "never"}
          camera={{ position: [0, 0, 5.8], fov: 46 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            depth: true,
            stencil: false,
          }}
          className="w-full h-full cursor-pointer"
        >
          <SceneContent
            activeLayerIndex={activeLayerIndex}
            onSelectLayer={onSelectLayer}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
