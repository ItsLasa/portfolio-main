import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Manoj ", "Student", "Developer"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="mx-auto font-normal text-black text-7xl ">
      <span className="mr-4">Hey </span>I&apos;m  
         <FlipWords words={words} /> <br />
       
      </div>
    </div>
  );
}
