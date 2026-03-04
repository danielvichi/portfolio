import type * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

interface ModelProps {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function Model({
  url,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: ModelProps) {
  const { scene } = useGLTF(url) as unknown as { scene: THREE.Group };

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

export default function LogoScene() {
  return (
    <Canvas
      camera={{ position: [-1, -3, 5], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Ambient light for basic illumination */}
      <ambientLight intensity={0.5} />

      {/* Directional light for shadows and highlights */}
      <directionalLight position={[0, 0, 5]} intensity={1} />

      {/* Suspense for loading fallback */}
      <Suspense fallback={null}>
        {/* Load your GLB model */}
        <Model url="/logo.glb" scale={5} position={[0, 0, 0]} />

        {/* Environment lighting for realistic reflections */}
        <Environment preset="city" />
      </Suspense>

      {/* Controls to orbit around the model */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={1}
      />

      {/* Optional grid and axes helpers */}
      {/* <gridHelper args={[10, 10]} /> */}
      {/* <axesHelper args={[5]} /> */}
    </Canvas>
  );
}
