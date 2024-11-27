import { Parallax } from "react-scroll-parallax";

export default function Experience() {
  return (
    <Parallax speed={-5}>
      <section id="experience" className="min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-bold">Experience</h1>
        <p className="mt-4 text-lg">
          - Frontend Developer at SearchKings (2022–Present)
          <br />
          - Web Developer at [Company Name] (2020–2021)
        </p>
      </section>
    </Parallax>
  );
}
