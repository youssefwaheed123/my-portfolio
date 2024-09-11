/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GridGlobe";
import { backendSkills, otherSkills, frontendSkills } from "@/data";
import { CardContainer, CardBody, CardItem } from "./Card";
import CopyButton from "./CopyEmailButton";
import { FaCopy } from "react-icons/fa";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[13rem] grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  spareImg,
  titleClassName,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
  img?: string;
  imgClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,26,55,1) 54%, rgba(22,57,105,1) 100%)",
      }}
    >
      <div className={`flex justify-center h-full ${id === 6 ? "" : ""}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 ? "w-full opacity-80" : ""
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={img}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {id === 1 ? description : description}
          </div>
          <div className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 lg:text-3xl max-w-96 ">
            {id === 1 ? (
              <span className="text-purple mb-10">
                {title}
                <br />
                <br />
              </span>
            ) : id === 4 ? (
              <div className="flex flex-col gap-1">
                <span className="text-purple">{title}</span>

                <div className="flex justify-center items-center">
                  <CopyButton
                    icon=<FaCopy />
                    textToCopy="youssefwaheed@gmail.com"
                  />
                </div>
              </div>
            ) : (
              title
            )}
          </div>
          {id === 1 && (
            <div className="flex flex-col gap-5 lg:gap-8 ">
              <h1>Frontend</h1>
              <CardContainer className="max-w-4xl w-full">
                <CardBody className="flex flex-wrap gap-3 lg:gap-8 border border-white/0.01 p-5 rounded-3xl">
                  {frontendSkills.map((skill, index) => (
                    <CardItem
                      key={index}
                      className="py-2 flex gap-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#16193a]"
                    >
                      {skill.icon && <skill.icon className="text-xl" />}
                      {skill.skill}
                    </CardItem>
                  ))}
                </CardBody>
              </CardContainer>
              <h1>Backend</h1>
              <CardContainer className="max-w-4xl w-full">
                <CardBody className="flex flex-wrap gap-3 lg:gap-8 border border-white/0.01 p-5 rounded-3xl">
                  {backendSkills.map((skill, index) => (
                    <CardItem
                      key={index}
                      className="py-2 flex gap-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#16193a]"
                    >
                      {skill.icon && <skill.icon className="text-xl" />}
                      {skill.skill}
                    </CardItem>
                  ))}
                </CardBody>
              </CardContainer>
              <h1>OTHER</h1>
              <CardContainer className="max-w-4xl w-full">
                <CardBody className="flex flex-wrap gap-3 lg:gap-8 border border-white/0.01 p-5 rounded-3xl">
                  {otherSkills.map((skill, index) => (
                    <CardItem
                      key={index}
                      className="py-2 flex gap-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#16193a]"
                    >
                      {skill.icon && <skill.icon className="text-xl" />}
                      {skill.skill}
                    </CardItem>
                  ))}
                </CardBody>
              </CardContainer>
            </div>
          )}
        </div>
        {id === 2 && <GlobeDemo />}
      </div>
    </div>
  );
};
