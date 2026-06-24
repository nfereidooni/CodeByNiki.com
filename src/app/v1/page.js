"use client";

import About from "@/app/v1/about/page";
import Experience from "@/app/v1/experience/page";
import Projects from "@/app/v1/projects/page";

export default function V1Home() {
  return (
    <div className="flex flex-col md:space-y-32 md:px-8 md:pt-24 lg:py-24 text-white">
      {/* About Section */}
      <About/>

      {/* Experience Section */}
      <Experience/>

      {/* Projects Section */}
      <Projects/>
    </div>
  );
}
