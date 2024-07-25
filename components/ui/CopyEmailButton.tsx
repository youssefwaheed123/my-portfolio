"use client";
import React, { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
  buttonText?: string;
  icon: React.ReactNode;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  buttonText = "COPY MY EMAIL",
  icon,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset after 2 seconds
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="w-full h-12 md:w-60 md:mt-10 rounded-lg inline-flex items-center justify-center px-6 font-medium text-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2"
      style={{ fontSize: "1rem" }}
    >
      {copied ? (
        "Copied!"
      ) : (
        <div className="flex items-center gap-2">
          <span>{buttonText}</span>
          <span>{icon}</span>
        </div>
      )}
    </button>
  );
};

export default CopyButton;
