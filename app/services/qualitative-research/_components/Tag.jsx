import React from "react";

export const Tag = ({ text }) => (
  <span className="px-2 py-0.5 text-[10px] font-bold bg-white/20 text-white rounded backdrop-blur-sm">
    {text}
  </span>
);