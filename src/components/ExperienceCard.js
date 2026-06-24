import DiagonalArrow from "@/components/icons/DiagonalArrow";

export default function ExperienceCard({ timeframe, role, company, companyLink, description, technologies }) {
  return (
    <a
      href={companyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-lg overflow-hidden shadow-lg transition hover:shadow-2xl bg-light-bg dark:bg-dark-bg-secondary border border-light-border dark:border-dark-accent"
      aria-label={`Visit ${company}`}
    >
      <div className="p-6 hover:bg-light-border/50 dark:hover:bg-dark-accent/10 transition">
        {/* Timeframe */}
        <header className="mb-2 text-xs font-semibold uppercase tracking-wide text-light-accent dark:text-dark-accent">
          {timeframe}
        </header>

        {/* Role and Company */}
        <h3 className="text-base font-semibold text-light-text dark:text-white mb-3 group-hover:text-light-accent dark:group-hover:text-dark-accent transition">
          {role} · {company}
        </h3>

        {/* Description */}
        <p className="text-sm text-light-text/70 dark:text-gray-200 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        {technologies && (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
            {technologies.map((tech, i) => (
              <li key={i}>
                <span className="px-2.5 py-1 text-xs font-medium bg-light-accent text-white dark:bg-dark-accent dark:text-dark-bg rounded-full">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Arrow */}
        <div className="mt-4">
          <DiagonalArrow />
        </div>
      </div>
    </a>
  );
}
