import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ModeToggle } from "./ui/ToggleButton";
import { MagicButton } from "./ui/MagicButton";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdDownload } from "react-icons/md";
import { DownloadButton } from "./ui/DownloadButton";
import { FlipWords } from "./ui/FlipWords";

const Hero = () => {
  return (
    <div className="pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Your Vision, My Code
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl border-b-2"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <div className="pt-10">
            <p className="text-center mb-4 text-sm lg:text-2xl">
              Hi, I am Youssef Waheed, an undergraduate{" "}
              <FlipWords
                words={["Web Developer", "Programmer", "Computer Engineer"]}
              />{" "}
              based in Egypt
            </p>
          </div>
          <div className="flex gap-4 mt-2 mb-0 text-sm ">
            <a href="#projects">
              <MagicButton
                title="View my work"
                position="right"
                icon={<CiLocationArrow1 />}
              />
            </a>

            <DownloadButton
              title="Download my CV"
              position="right"
              icon={<MdDownload />}
              cvUrl="/updatedCV_2.pdf"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
