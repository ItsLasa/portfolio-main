"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import profile from "../assets/images/profile.jpeg";
const people = [
  {
    id: 1,
    name: "Manoj Lasantha",
    designation: "Software Engineer",
    image:
      profile,
  },
 
];

export function AnimatedTooltipPreview() {
  return ( 
    <div className="flex flex-row items-center justify-center w-full gap-6">
      <AnimatedTooltip items={people} /> <h2 className=" font-Shadows font-medium text-lg">Manoj Lasantha</h2>
    </div>
  );
}
