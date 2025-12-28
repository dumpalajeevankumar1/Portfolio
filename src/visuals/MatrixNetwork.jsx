import { Canvas, useFrame } from "@react-three/fiber";
import { Points } from "@react-three/drei";
import { useRef, useMemo } from "react";

function NetworkPoints() {
  const ref = useRef();
  const count = 2000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 50;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.05;
    ref.current.rotation.x = clock.elapsedTime * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <pointsMaterial
        color="#00ff9c"
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.85}
      />
    </Points>
  );
}

export default function MatrixNetwork() {
  return (
    <div
      className="matrix-bg"
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 40], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <NetworkPoints />
      </Canvas>
    </div>
  );
}
