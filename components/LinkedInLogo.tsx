import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import gsap from "gsap";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";

interface LinkedInLogoProps extends GroupProps {}

const LinkedInLogo = ({ ...props }: LinkedInLogoProps) => {
  const targetRef = useRef(null);
  useGSAP(() => {
    gsap.to((targetRef?.current as any)?.position as any, {
      y: (targetRef?.current as any)?.position.y + 0.5,
      z: (targetRef?.current as any)?.position.z + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });
  const { nodes, materials } = useGLTF("/models/linkedin_logo.glb");
  return (
    <group
      ref={targetRef}
      position={[-16, 10, 6]}
      scale={0.7}
      {...props}
      dispose={null}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_4 as THREE.Mesh).geometry}
        material={materials.glossy_linkedin}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_5 as THREE.Mesh).geometry}
        material={materials.glossy_putih}
      />
    </group>
  );
};

useGLTF.preload("/models/linkedin_logo.glb");

export default LinkedInLogo;
