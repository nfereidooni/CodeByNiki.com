import DiagonalArrow from "@/components/icons/DiagonalArrow";

export default function ProjectCard({ title, description, technologies, githubLink, deploymentLink }) {
  return (
    <div className="group relative flex flex-col bg-gray-800 rounded-lg shadow-md transition hover:shadow-lg hover:bg-gray-700 focus:shadow-lg focus:bg-gray-700">
      {/* Clickable Deployment Link */}
      <a
        href={deploymentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-grow p-6"
        aria-label="View Live Deployment"
      >
        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-pink-300 group-focus:text-pink-300">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-300 leading-normal">{description}</p>

        {/* Technologies */}
        {technologies && (
          <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech, i) => (
              <li key={i} className="mr-2 mt-2">
                <span className="px-3 py-1 text-xs font-medium bg-pink-400/10 text-pink-300 rounded-full">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Diagonal Arrow */}
        <DiagonalArrow />
      </a>

      {/* GitHub Button at the Bottom */}
      {githubLink && (
        <div className="w-full">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm font-medium text-pink-300 bg-gray-900 py-2 hover:bg-pink-300 hover:text-gray-900 transition rounded-b-lg"
            aria-label="View GitHub Repository"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
}
