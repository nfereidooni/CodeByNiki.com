"use client";

import RightContent from "@/components/RightContent";
import About from "./about/page";
import Experience from "./experience/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <RightContent>
      <div className="flex flex-col md:space-y-32 md:px-8 md:pt-24 lg:py-24">
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
