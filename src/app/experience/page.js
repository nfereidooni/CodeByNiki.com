import ExperienceCard from "@/components/ExperienceCard";
import experiences from "@/data/experiences.json";

export default function Experience() {
  return (
      <section id="experience" className="py-50 flex flex-col justify-center">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                timeframe={exp.timeframe}
                role={exp.role}
                company={exp.company}
                companyLink={exp.companyLink}
                description={exp.description}
                technologies={exp.technologies || []}
              />
            ))}
          </div>
        </div>
        Before transitioning to web development, I gained diverse professional experience. See my <a href="http://linkedin.com/in/nfereidooni" target="_blank">LinkedIn</a> for more.
      </section>
  );
}
