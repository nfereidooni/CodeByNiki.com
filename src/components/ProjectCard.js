import DiagonalArrow from "@/components/icons/DiagonalArrow";

export default function ProjectCard({ title, description, technologies, githubLink, deploymentLink }) {
  return (
    <div className="group relative flex flex-col rounded-lg overflow-hidden shadow-lg transition hover:shadow-2xl bg-light-bg dark:bg-dark-bg-secondary border border-light-border dark:border-dark-accent">
      {/* Clickable Deployment Link */}
      <a
        href={deploymentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-grow p-6 hover:bg-light-border/50 dark:hover:bg-dark-accent/10 transition"
        aria-label="View Live Deployment"
      >
        {/* Title */}
        <h3 className="text-base font-semibold text-light-text dark:text-white mb-2 group-hover:text-light-accent dark:group-hover:text-dark-accent transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-light-text/70 dark:text-gray-200 leading-relaxed mb-4">{description}</p>

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

        {/* Diagonal Arrow */}
        <div className="mt-4">
          <DiagonalArrow />
        </div>
      </a>

      {/* GitHub Button at the Bottom */}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-sm font-semibold text-white bg-light-accent dark:bg-dark-accent dark:text-forest-green py-3 hover:opacity-90 transition"
          aria-label="View GitHub Repository"
        >
          View on GitHub →
        </a>
      )}
    </div>
  );
}
