"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FinancialCoreProps {
  onHover?: (hovered: boolean) => void;
  onClick?: () => void;
}

export function FinancialCore({ onHover, onClick }: FinancialCoreProps) {
  const outerSphereRef = useRef<THREE.Mesh>(null!);
  const outerLatticeRef = useRef<THREE.Mesh>(null!);
  const innerGemRef = useRef<THREE.Mesh>(null!);
  const gyro1Ref = useRef<THREE.Group>(null!);
  const gyro2Ref = useRef<THREE.Group>(null!);
  const wave1Ref = useRef<THREE.Mesh>(null!);
  const wave2Ref = useRef<THREE.Mesh>(null!);

  const [hovered, setHovered] = useState(false);

  const targetScaleVec = useRef(new THREE.Vector3(1, 1, 1));

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Gentle breathing scale
    const breath = 1 + Math.sin(t * 1.6) * 0.03;
    const targetScale = hovered ? 1.08 * breath : breath;

    // Outer crystal transparent orb
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y += delta * 0.12;
      outerSphereRef.current.rotation.x = Math.sin(t * 0.4) * 0.05;
      targetScaleVec.current.setScalar(targetScale);
      outerSphereRef.current.scale.lerp(targetScaleVec.current, 0.1);
    }

    // Outer delicate facet lattice
    if (outerLatticeRef.current) {
      outerLatticeRef.current.rotation.y += delta * 0.08;
      outerLatticeRef.current.rotation.z -= delta * 0.05;
    }

    // Inner suspended gemstone
    if (innerGemRef.current) {
      innerGemRef.current.rotation.y -= delta * 0.35;
      innerGemRef.current.rotation.x = Math.cos(t * 0.8) * 0.15;
      const gemScale = 0.5 + Math.sin(t * 2) * 0.03;
      innerGemRef.current.scale.set(gemScale, gemScale, gemScale);
    }

    // Inner gyros
    if (gyro1Ref.current) {
      gyro1Ref.current.rotation.z += delta * 0.4;
      gyro1Ref.current.rotation.x = Math.sin(t * 0.6) * 0.2 + 0.3;
    }
    if (gyro2Ref.current) {
      gyro2Ref.current.rotation.z -= delta * 0.3;
      gyro2Ref.current.rotation.y = Math.cos(t * 0.5) * 0.2 - 0.3;
    }

    // Expanding transparent ripple waves
    if (wave1Ref.current) {
      const phase1 = (t * 0.6) % 1;
      const s1 = 1.0 + phase1 * 1.6;
      wave1Ref.current.scale.set(s1, s1, s1);
      const mat = wave1Ref.current.material as THREE.MeshBasicMaterial;
      if (mat) mat.opacity = (1 - phase1) * 0.3;
    }

    if (wave2Ref.current) {
      const phase2 = ((t * 0.6) + 0.5) % 1;
      const s2 = 1.0 + phase2 * 1.6;
      wave2Ref.current.scale.set(s2, s2, s2);
      const mat = wave2Ref.current.material as THREE.MeshBasicMaterial;
      if (mat) mat.opacity = (1 - phase2) * 0.3;
    }
  });

  return (
    <group
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        onHover?.(true);
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover?.(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      {/* 1. Crystal-Clear Ultra-Transparent Glass Sphere */}
      <mesh ref={outerSphereRef}>
        <sphereGeometry args={[1.42, 48, 48]} />
        <meshStandardMaterial
          color="#E6FFF6"
          roughness={0.03}
          metalness={0.05}
          transparent={true}
          opacity={hovered ? 0.22 : 0.15}
        />
      </mesh>

      {/* 2. Delicate Outer Facet Geometry Highlights (Very Subtle Wireframe) */}
      <mesh ref={outerLatticeRef}>
        <icosahedronGeometry args={[1.44, 1]} />
        <meshBasicMaterial
          wireframe
          color={hovered ? "#00FFB2" : "#10B981"}
          transparent
          opacity={hovered ? 0.35 : 0.18}
        />
      </mesh>

      {/* 3. Outer Iridescent Edge Rim */}
      <mesh>
        <ringGeometry args={[1.39, 1.43, 64]} />
        <meshBasicMaterial
          color="#34D399"
          transparent
          opacity={hovered ? 0.4 : 0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 4. Suspended Inner Floating Gemstone (Pure Holographic Crystal) */}
      <mesh ref={innerGemRef}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#059669"
          emissive="#10B981"
          emissiveIntensity={hovered ? 2.8 : 1.8}
          roughness={0.15}
          metalness={0.7}
        />
      </mesh>

      {/* 5. Inner Counter-Rotating Gyroscopic Rings */}
      <group ref={gyro1Ref}>
        <mesh>
          <torusGeometry args={[1.05, 0.008, 16, 64]} />
          <meshBasicMaterial color="#10B981" transparent opacity={0.5} />
        </mesh>
        <mesh position={[1.05, 0, 0]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
      </group>

      <group ref={gyro2Ref}>
        <mesh>
          <torusGeometry args={[1.2, 0.007, 16, 64]} />
          <meshBasicMaterial color="#06B6D4" transparent opacity={0.4} />
        </mesh>
        <mesh position={[-1.2, 0, 0]}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshBasicMaterial color="#00E5FF" />
        </mesh>
      </group>

      {/* 6. Expanding Gravitational Wave Ripples */}
      <mesh ref={wave1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.98, 1.02, 48]} />
        <meshBasicMaterial color="#10B981" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      <mesh ref={wave2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.98, 1.02, 48]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* 7. Inner Ambient Radiance */}
      <pointLight color="#10B981" intensity={2.2} distance={5} />
    </group>
  );
}
