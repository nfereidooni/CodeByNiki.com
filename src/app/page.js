"use client";

import HeroSection from "@/components/HeroSection";
import About from "./about/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import CommunitySection from "@/components/CommunitySection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <About />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 px-4 md:px-8 bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <Experience />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 px-4 md:px-8 bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <Projects />
        </div>
      </section>

      {/* Community Section */}
      <CommunitySection />
    </>
  );
}
