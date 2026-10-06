"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface OrbitProps {
  radius?: number;
  rotation?: [number, number, number];
  speed?: number;
  color?: string;
  beaconColor?: string;
  showBeacon?: boolean;
}

export function Orbit({
  radius = 2.4,
  rotation = [0, 0, 0],
  speed = 0.4,
  color = "#10B981",
  beaconColor = "#34D399",
  showBeacon = true,
}: OrbitProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const beacon1Ref = useRef<THREE.Mesh>(null!);
  const beacon2Ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * speed * 0.4;
    }

    if (showBeacon) {
      const t = state.clock.getElapsedTime() * speed;
      if (beacon1Ref.current) {
        beacon1Ref.current.position.x = Math.cos(t) * radius;
        beacon1Ref.current.position.y = Math.sin(t) * radius;
      }
      if (beacon2Ref.current) {
        beacon2Ref.current.position.x = Math.cos(t + Math.PI) * radius;
        beacon2Ref.current.position.y = Math.sin(t + Math.PI) * radius;
      }
    }
  });

  return (
    <group rotation={rotation}>
      <group ref={groupRef}>
        {/* Sleek Torus Tube Orbit */}
        <mesh>
          <torusGeometry args={[radius, 0.012, 16, 100]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Outer Fine Accent Ring */}
        <mesh>
          <torusGeometry args={[radius + 0.06, 0.004, 8, 80]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.15}
          />
        </mesh>
      </group>

      {/* Travelling Beacons / Energy Packets */}
      {showBeacon && (
        <>
          <mesh ref={beacon1Ref}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial
              color={beaconColor}
              emissive={beaconColor}
              emissiveIntensity={3}
            />
          </mesh>

          <mesh ref={beacon2Ref}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshStandardMaterial
              color={beaconColor}
              emissive={beaconColor}
              emissiveIntensity={2}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
