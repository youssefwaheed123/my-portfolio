"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Developer from "./Developer";
import CanvasLoader from "./CanvasLoader";

const DeveloperAvatarCanvas = ({
  animationName,
}: {
  animationName: string;
}) => {
  return (
    <div className="work-canvas">
      <Canvas>
        <ambientLight intensity={7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
        <Suspense fallback={<CanvasLoader />} />
        <Developer animationName={animationName} />
      </Canvas>
    </div>
  );
};

export default DeveloperAvatarCanvas;
