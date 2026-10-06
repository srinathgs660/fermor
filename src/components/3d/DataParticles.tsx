"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DataParticlesProps {
  count?: number;
  radius?: number;
}

export function DataParticles({ count = 90, radius = 4 }: DataParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const emerald = new THREE.Color("#10B981");
    const cyan = new THREE.Color("#06B6D4");
    const warmGrey = new THREE.Color("#A8A89A");

    for (let i = 0; i < count; i++) {
      // Golden spiral or spherical distribution
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      const r = radius * (0.5 + Math.random() * 0.7);
      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Color selection
      const pick = Math.random();
      const chosen = pick > 0.6 ? emerald : pick > 0.3 ? cyan : warmGrey;
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }

    return [pos, col];
  }, [count, radius]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.06;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
