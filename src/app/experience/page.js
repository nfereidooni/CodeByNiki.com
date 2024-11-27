import { Parallax } from "react-scroll-parallax";

const experiences = [
    {
      timeframe: "2022 — Present",
      role: "Frontend Developer",
      company: "SearchKings",
      companyLink: "https://www.searchkings.com",
      description:
        "Develop and maintain lead-generation websites using modern frameworks, with a strong focus on clean code, accessibility, and performance optimization.",
      technologies: ["JavaScript", "Liquid", "Tailwind"],
    },
    {
      timeframe: "2024 - Present",
      role: "Organizer",
      company: "TechTank",
      companyLink: "https://www.techtankto.com/",
      description:
        "Host monthly coffee chats to foster inclusivity and provide support for women and non-binary professionals in tech through the Code Diversity initiative.",
    },
  ];
  

export default function Experience() {
  return (
    <Parallax speed={-5}>
      <section id="experience" className="min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-bold">Experience</h1>
        <p className="mt-4 text-lg">
          - Frontend Developer at SearchKings (2022–Present)
          <br />
          - Web Developer at [Company Name] (2020–2021)
        </p>
      </section>
    </Parallax>
  );
}
