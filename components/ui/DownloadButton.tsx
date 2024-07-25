"use client";
import React from "react";

export const DownloadButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  cvUrl, // Add this prop to specify the CV file URL
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  cvUrl: string;
}) => {
  const handleDownload = () => {
    // Create a hidden anchor element and trigger the download
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV.pdf"; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button
        onClick={handleDownload} // Use handleDownload if handleClick is not provided
        className={`w-full gap-2 rounded-lg inline-flex h-12 animate-shimmer items-center justify-center md:w-60 md:mt-10 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
      >
        {position === "left" && icon} {title} {position === "right" && icon}
      </button>
    </div>
  );
};
