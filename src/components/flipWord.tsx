import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Manoj ", "Student", "Developer"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="relative z-10 inline-block px-2 mx-auto text-3xl font-normal text-center text-black sm:text-5xl md:text-6xl lg:text-7xl">
      <span className="mr-4">Hey</span>I&apos;m  
         <FlipWords words={words} /> <br />
     
         <div className="flex-col items-center justify-center ">
         {/* <span className="text-2xl ">Get In Touch</span><br /> */}
          {/* <button className="px-4 py-2 text-lg font-medium text-white bg-black rounded-lg ">Contact</button> */}
       
      </div>
      </div>
      
    </div>
  );
}
