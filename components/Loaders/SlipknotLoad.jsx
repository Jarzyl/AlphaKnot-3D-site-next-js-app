import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Slipknot from '../Models/Slipknot';

const SlipknotLoad = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Slipknot/>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </>
  );
};

export default SlipknotLoad;