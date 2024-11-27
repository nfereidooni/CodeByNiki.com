import { Parallax } from "react-scroll-parallax";

export default function About() {
  return (
    <Parallax speed={-10}>
      <section id="about" className="min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <div className="mt-4 text-lg">
            <p class="mb-2">I’m a frontend developer passionate about crafting accessible, high-performance websites that combine thoughtful design with efficient, scalable code. I thrive on creating digital experiences that are visually appealing, user-friendly, and optimized for speed and performance.</p>

            <p class="mb-2">Currently, I’m a Frontend Developer at SearchKings, where I build sites using JavaScript, Tailwind CSS, Jekyll, WordPress, and Shopify to help businesses generate leads. In a fast-paced agency environment, I focus on writing clean, maintainable code while ensuring accessibility and usability are top priorities. I also leverage tools like Lighthouse and PageSpeed Insights to deliver high-performing web solutions.</p>

            <p class="mb-2">Outside of work, I volunteer with TechTank, where I run a monthly meeting called Code Diversity. This initiative is designed as a casual coffee chat to support women and non-binary folks in tech, fostering connection and inclusivity.</p>

            <p class="mb-2">Before transitioning into web development, I worked in consumer packaged goods at a print agency and later at Loblaws as a packaging specialist. My introduction to UX testing during that time sparked my interest in creating better digital experiences, eventually leading me to pursue web development as my career. In 2020, I joined a bootcamp to refine my skills and learn modern development tools.</p>

            <p class="mb-2">When I’m not coding, you can find me hiking through the city, playing board games, or catching up with friends over a good cup of coffee.</p>
        </div>
      </section>
    </Parallax>
  );
}
