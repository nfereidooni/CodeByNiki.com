import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
      <section id="projects" className="py-50 flex flex-col justify-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-xl md:text-3xl font-bold mb-8 text-white">Projects</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies || []}
                githubLink={project.github_link}
                deploymentLink={project.deployment_link}
              />
            ))}
          </div>
        </div>
      </section>
  );
}
