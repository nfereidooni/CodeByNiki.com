"use client";

import RightContent from "@/components/RightContent";
import About from "./about/page";
import Experience from "./experience/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <RightContent>
      <div className="flex flex-col space-y-32 px-8">
        {/* About Section */}
          <About/>

        {/* Experience Section */}
          <Experience/>

        {/* Projects Section */}
          <Projects/>
      </div>
    </RightContent>
  );
}
