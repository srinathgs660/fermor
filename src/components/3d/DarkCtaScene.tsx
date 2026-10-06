"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 2]} />
        <meshStandardMaterial
          wireframe
          color="#10B981"
          emissive="#059669"
          emissiveIntensity={0.8}
        />
      </mesh>

      <group ref={ringRef} rotation={[0.8, 0.4, 0]}>
        <mesh>
          <ringGeometry args={[2.2, 2.24, 64]} />
          <meshBasicMaterial color="#34D399" transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}

export function DarkCtaScene() {
  const [isInView, setIsInView] = useState(false);
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
    <div ref={containerRef} className="absolute inset-0 pointer-events-none opacity-40">
      <Suspense fallback={null}>
        <Canvas
          frameloop={isInView ? "always" : "never"}
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#10B981" />
          <RotatingCore />
        </Canvas>
      </Suspense>
    </div>
  );
}
