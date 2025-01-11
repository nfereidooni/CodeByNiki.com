import DiagonalArrow from "@/components/icons/DiagonalArrow";

export default function ExperienceCard({ timeframe, role, company, companyLink, description, technologies }) {
  return (
    <a
      href={companyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block p-6 bg-gray-800 rounded-lg shadow-md transition hover:shadow-lg hover:bg-gray-700 focus:shadow-lg focus:bg-gray-700"
      aria-label={`Visit ${company}`}
    >
      {/* Timeframe */}
      <header className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
        {timeframe}
      </header>

      {/* Role and Company */}
      <h3 className="text-lg font-bold text-white group-hover:text-pink-300 group-focus:text-pink-300">
        {role} · {company}
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
  );
}