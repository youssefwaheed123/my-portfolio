"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const PinContainer = ({
  children,
  title,
  href,
  liveLink,
  videoLink,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  liveLink?: string;
  videoLink?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "relative group/pin z-50 flex flex-col bg-transparent rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105",
        containerClassName
      )}
    >
      <div className="flex-grow">{children}</div>
      {isMounted && (
        <div className="flex justify-between p-4">
          <a
            href={href}
            target="_blank"
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
          >
            <div className="flex gap-2">
              <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
                View on GitHub
              </span>
              <span>{<FaGithub />}</span>
            </div>
          </a>

          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
            >
              <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
                View Live Website
              </span>
            </a>
          ) : (
            videoLink && (
              <a
                href={videoLink}
                target="_blank"
                className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
              >
                <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
                  Preview Video
                </span>
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
};
