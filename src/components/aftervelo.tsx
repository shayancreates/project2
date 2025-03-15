"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

import { AuroraTextDemo } from "./text2";

import { InteractiveHoverButtonDemo } from "./btn";

interface GLTFResult {
  scene: THREE.Group;
}

const ModelViewer = () => {
  const { scene } = useGLTF("/models/cute_robot.glb") as GLTFResult; // Ensure path is correct

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
};

const Aftervelo = () => {
  return (
    <section className="w-full max-w-screen min-h-screen px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10  mx-auto bg-black text-white">
      <div>
        <AuroraTextDemo />
        <InteractiveHoverButtonDemo />
      </div>
      <div className="w-full h-[450px]">
        <ModelViewer />
      </div>
    </section>
  );
};

export default Aftervelo;
