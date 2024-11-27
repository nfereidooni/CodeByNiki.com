"use client";

import RightContent from "@/components/RightContent";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <RightContent>
      <div className="flex flex-col space-y-32 px-8">
        {/* About Section */}
        <Parallax speed={-10}>
          <section id="about" className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="mt-4 text-lg">
              I'm Niki Fereidooni, a frontend developer passionate about building accessible, pixel-perfect digital
              experiences.
            </p>
          </section>
        </Parallax>

        {/* Experience Section */}
        <Parallax speed={-5}>
          <section id="experience" className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
            <h1 className="text-4xl font-bold">Experience</h1>
            <ul className="mt-4 text-lg list-disc list-inside">
              <li>Frontend Developer at [Company Name] (2021–Present)</li>
              <li>Web Developer Intern at [Company Name] (2020–2021)</li>
            </ul>
          </section>
        </Parallax>

        {/* Projects Section */}
        <Parallax speed={0}>
          <section id="projects" className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
            <h1 className="text-4xl font-bold">Projects</h1>
            <ul className="mt-4 space-y-4">
              <li>
                <h2 className="text-2xl font-semibold">Coffee Tracker</h2>
                <p>A React app to log cortados and rate coffee shops.</p>
              </li>
              <li>
                <h2 className="text-2xl font-semibold">Portfolio</h2>
                <p>This portfolio you're currently viewing, built with Next.js and Tailwind.</p>
              </li>
            </ul>
          </section>
        </Parallax>
      </div>
    </RightContent>
  );
}
