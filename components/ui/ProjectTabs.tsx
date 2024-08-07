"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PinContainer } from "./ProjectCard";
import {
  FaPython,
  FaJava,
  FaCuttlefish,
  FaHtml5,
  FaNode,
  FaReact,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiInternetcomputer, SiMiro, SiCanva, SiExpress } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { IconType } from "react-icons/lib";

const iconMapping: { [key: string]: IconType } = {
  SiInternetcomputer,
  SiMiro,
  SiCanva,
  SiExpress,
  RiNextjsLine,
  RiTailwindCssFill,
  IoLogoJavascript,
  GrMysql,
  BiLogoPostgresql,
  FaJava,
  FaPython,
  FaCuttlefish,
  FaHtml5,
  FaNode,
  FaReact,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
};

type Tab = {
  title: string;
  value: string;
};

type Project = {
  id: number;
  title: string;
  content: string;
  img: string;
  iconLists?: string[];
  link?: string; // GitHub link
  liveLink?: string; // Live website link
  videoLink?: string; // Video preview link
};

export const Tabs = ({
  tabs: propTabs,
  projects,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  projects: { [key: string]: Project[] };
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [activeTab, setActiveTab] = useState<Tab>(propTabs[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredProjects = projects[activeTab.value];

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
          >
            {activeTab.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      {isMounted && (
        <div
          className={cn(
            "flex flex-wrap justify-center gap-8 mt-8",
            contentClassName
          )}
        >
          {filteredProjects.map((project) => (
            <PinContainer
              key={project.id}
              title={project.title}
              href={project.link}
              liveLink={project.liveLink}
              videoLink={project.videoLink}
              containerClassName="flex flex-col w-80 h-96"
              className="p-4 flex-grow"
            >
              <div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="mt-2 text-sm">{project.content}</p>
                <div className="flex mt-2 space-x-2">
                  {project.iconLists &&
                    project.iconLists.map((iconName, index) => {
                      const IconComponent = iconMapping[iconName];
                      return IconComponent ? (
                        <IconComponent key={index} className="w-6 h-6" />
                      ) : null;
                    })}
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      )}
    </>
  );
};
