import React, { Suspense } from "react";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Knot from '../Models/Knot';

const KnotLoad = () => {
  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault position={[1, 0, 15]} fov={20}/>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Knot/>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </>
  );
};

export default KnotLoad;