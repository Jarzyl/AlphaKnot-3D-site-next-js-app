import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Protein63 from '../Models/Protein63';

const ProtLoad = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Protein63/>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ProtLoad;