"use client";

import { experiences } from "@/data";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import React, { Suspense } from "react";
import CanvasLoader from "../CanvasLoader";
import Developer from "../Developer";
import DeveloperAvatarCanvas from "../DeveloperAvatarCanvas";

const Experience = () => {
  const [animation, setAnimation] = React.useState("idle");
  return (
    <section className="my-20" id="experience">
      <div className="w-full text-white-600">
        <h3 className="head-text">Experience</h3>
        <div className="work-container">
          <DeveloperAvatarCanvas animationName={animation} />

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {experiences.map(
                ({ id, name, pos, duration, title, icon, animation }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimation(animation.toLowerCase())}
                    onPointerOver={() => setAnimation(animation.toLowerCase())}
                    onPointerOut={() => setAnimation("idle")}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <Image
                        src={icon}
                        alt={name}
                        width={50}
                        height={50}
                        className="mt-4"
                      />

                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
