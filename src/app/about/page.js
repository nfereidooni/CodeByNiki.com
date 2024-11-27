import { Parallax } from "react-scroll-parallax";

export default function About() {
  return (
    <Parallax speed={-10}>
      <section id="about" className="min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-lg">
          I'm a frontend developer.
        </p>
      </section>
    </Parallax>
  );
}
