"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const ArrowButton = ({ direction, onClick, visible }) => {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2 z-10
        p-3 rounded-full
        bg-white/90 backdrop-blur-sm shadow-md border border-border
        text-primary hover:bg-accent hover:text-white hover:border-accent
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
        ${isLeft ? "left-2 md:left-4" : "right-2 md:right-4"}
        
        ${visible ? "opacity-100 translate-x-0 scale-100" : ""}
        ${!visible && isLeft ? "opacity-0 -translate-x-10 scale-90" : ""}
        ${!visible && !isLeft ? "opacity-0 translate-x-10 scale-90" : ""}
      `}
      aria-label={isLeft ? "Previous Slide" : "Next Slide"}
    >
      {isLeft ? (
        <ChevronLeft size={20} strokeWidth={2.5} />
      ) : (
        <ChevronRight size={20} strokeWidth={2.5} />
      )}
    </button>
  );
};

export default React.memo(ArrowButton);