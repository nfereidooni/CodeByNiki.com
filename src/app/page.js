"use client";

import RightContent from "@/components/RightContent";
import { Parallax } from "react-scroll-parallax";
import About from "./about/page";
import Experience from "./experience/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <RightContent>
      <div className="flex flex-col space-y-32 px-8">
        {/* About Section */}
        <Parallax speed={-10}>
          <About/>
        </Parallax>

        {/* Experience Section */}
        <Parallax speed={-5}>
          <Experience/>
        </Parallax>

        {/* Projects Section */}
        <Parallax speed={0}>
          <Projects/>
        </Parallax>
      </div>
    </RightContent>
  );
}
