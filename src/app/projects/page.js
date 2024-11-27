import { Parallax } from "react-scroll-parallax";

export default function Projects() {
  return (
    <Parallax speed={0}>
      <section id="projects" className="min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <ul className="mt-4 space-y-4">
          <li>
            <h2 className="text-2xl font-semibold">Coffee Tracker</h2>
            <p>A React app to log cortados and rate coffee shops.</p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">Portfolio</h2>
            <p>Your current portfolio built with Next.js and Tailwind.</p>
          </li>
        </ul>
      </section>
    </Parallax>
  );
}
