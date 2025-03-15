"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

interface GLTFResult {
  scene: THREE.Group;
}

export default function IPhoneModel() {
  const { scene } = useGLTF("/models/iphone.glb") as GLTFResult; // Ensure path is correct

  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <primitive object={scene} scale={1} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
