import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import { Parallax } from "react-scroll-parallax";

export default function Projects() {
  return (
    <Parallax speed={-5}>
      <section id="projects" className="min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies || []}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
    </Parallax>
  );
}
