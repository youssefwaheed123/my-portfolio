"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContentItem {
  title: string;
  description: string;
  content?: string;
}

interface StickyScrollProps {
  content: ContentItem[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  return (
    <motion.div
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 md:p-6 sm:p-4 sm:max-w-full  max-w-[25rem] mx-auto"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl md:max-w-xl sm:max-w-md">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 sm:my-10">
              <motion.div
                className="flex items-start"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
              >
                <div className="flex flex-col gap-10">
                  <div
                    className="block lg:hidden mr-2"
                    dangerouslySetInnerHTML={{ __html: item.content ?? "" }}
                  />
                  <h2 className="text-2xl font-bold text-purple">
                    {item.title}
                  </h2>
                </div>
              </motion.div>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg  text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md sticky top-10 overflow-hidden pl-20",
          contentClassName
        )}
        dangerouslySetInnerHTML={{ __html: content[activeCard].content ?? "" }}
      />
    </motion.div>
  );
};
