export default function ProjectCard({ title, description, technologies, link }) {
    return (
      <div className="group relative p-6 bg-gray-800 rounded-lg shadow-md transition hover:shadow-lg hover:bg-gray-700">
        {/* Title */}
        <h3 className="text-lg font-bold text-white">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 focus-visible:text-pink-300"
          >
            {title}
          </a>
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
      </div>
    );
  }
  