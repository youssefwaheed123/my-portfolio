/* eslint-disable react/no-unknown-property */

/* eslint-disable no-unused-vars */
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GroupProps } from "@react-three/fiber";

interface TargetLogoProps extends GroupProps {}
const Target = ({ ...props }: TargetLogoProps) => {
  const targetRef = useRef(null);
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    gsap.to((targetRef?.current as any)?.position as any, {
      y: (targetRef?.current as any)?.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group {...props} dispose={null}>
      <mesh ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.7}>
        <primitive object={scene} />
      </mesh>
    </group>
  );
};

export default Target;
