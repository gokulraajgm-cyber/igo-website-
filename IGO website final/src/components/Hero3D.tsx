import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const FloatingLeaf = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <dodecahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} roughness={0.6} />
      </mesh>
    </Float>
  );
};

const FloatingSphere = ({ position, color, size }: { position: [number, number, number]; color: string; size: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.3;
    }
  });

  return (
    <Float speed={2} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial color={color} transparent opacity={0.35} roughness={0.8} />
      </mesh>
    </Float>
  );
};

const Scene = () => (
  <>
    <ambientLight intensity={0.4} />
    <directionalLight position={[5, 5, 5]} intensity={0.6} color="#C8A951" />
    <pointLight position={[-3, 2, 4]} intensity={0.4} color="#1B5E20" />

    <FloatingLeaf position={[-2.5, 1, -1]} color="#2E7D32" scale={1.2} />
    <FloatingLeaf position={[2.8, -0.5, -2]} color="#1B5E20" scale={0.8} />
    <FloatingLeaf position={[0, 2, -3]} color="#4CAF50" scale={1} />
    <FloatingLeaf position={[-1.5, -1.5, -1.5]} color="#388E3C" scale={0.6} />
    <FloatingLeaf position={[3.5, 1.5, -2.5]} color="#C8A951" scale={0.9} />

    <FloatingSphere position={[-3, 0, -4]} color="#C8A951" size={0.5} />
    <FloatingSphere position={[3, -1, -3]} color="#1B5E20" size={0.4} />
    <FloatingSphere position={[0.5, 2.5, -5]} color="#6B4F2A" size={0.6} />

    <Sparkles count={60} scale={10} size={2} speed={0.3} color="#C8A951" opacity={0.3} />
  </>
);

const Hero3D = () => (
  <div className="absolute inset-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);

export default Hero3D;
