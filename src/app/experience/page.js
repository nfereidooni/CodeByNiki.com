import ExperienceCard from "@/components/ExperienceCard";
import experiences from "@/data/experiences.json";

export default function Experience() {
  return (
      <section id="experience" className="py-50 flex flex-col justify-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8 text-white">Experience</h1>
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
      </section>
  );
}
