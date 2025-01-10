export default function About() {
  return (
      <section id="about" className="py-50 flex flex-col justify-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-xl md:text-3xl font-bold mb-8 text-white">About Me</h1>
          <div className="mt-4 text-lg">
              <p className="mb-2 text-base md:text-lg">I’m a web developer passionate about crafting accessible, high-performance websites that combine thoughtful design with efficient, scalable code. I thrive on creating digital experiences that are visually appealing, user-friendly, and optimized for speed and performance.</p>

              <p className="mb-2 text-base md:text-lg">Currently, I’m a Frontend Developer at <a className="font-bold hover:text-pink-300" href="http://searchkings.com" target="_blank">SearchKings</a>, where I build sites to help businesses generate leads. In a fast-paced agency environment, I focus on writing clean, maintainable code while ensuring accessibility and usability are top priorities. I also leverage tools like Lighthouse and PageSpeed Insights to deliver high-performing and accessible web solutions.</p>

              <p className="mb-2 text-base md:text-lg">Outside of work, I volunteer with <a className="font-bold hover:text-pink-300" href="http://techtankto.com" target="_blank">TechTank</a>, where I run a monthly meeting called Code Diversity. This initiative is designed as a casual coffee chat to support women and non-binary folks in tech, fostering connection and inclusivity.</p>

              <p className="mb-2 text-base md:text-lg">When I’m not coding, you can find me hiking through the city, playing board games, or catching up with friends over a good cup of coffee.</p>
          </div>
        </div>
      </section>
  );
}
