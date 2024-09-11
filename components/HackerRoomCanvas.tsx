"use client";
import React, { Suspense } from "react";
import ReactLogo from "./GitHubLogo";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import { HackerRoom } from "./HackerRoom";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/data";
import Target from "./Target";
import Cube from "./Cube";
import Rings from "./Ring";
import GitHubLogo from "./GitHubLogo";
import Link from "next/link";
import LinkedInLogo from "./LinkedInLogo";

const HackerRoomCanvas = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes({ isSmall, isMobile, isTablet });
  return (
    <div className="sm:h-[800px] h-[300px]  w-screen">
      <div className="w-screen h-full absolute top-45 sm:top-40">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              scale={sizes?.deskScale}
              position={sizes?.deskPosition as [number, number, number]}
              rotation={[0, -Math.PI, 0]}
            />
            <group>
              <Target
                position={sizes.targetPosition as [number, number, number]}
              />
              <GitHubLogo
                position={sizes.githubLogoPosition as [number, number, number]}
                onClick={() =>
                  window.open("https://github.com/youssefwaheedd", "_blank")
                }
                onPointerOver={(e) => (document.body.style.cursor = "pointer")}
                onPointerOut={(e) => (document.body.style.cursor = "auto")}
              />
              <Cube position={sizes.cubePosition as [number, number, number]} />
              <LinkedInLogo
                position={
                  sizes.linkedinLogoPosition as [number, number, number]
                }
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/youssefwaheed/",
                    "_blank"
                  );
                }}
                onPointerOver={(e) => (document.body.style.cursor = "pointer")}
                onPointerOut={(e) => (document.body.style.cursor = "auto")}
              />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default HackerRoomCanvas;
