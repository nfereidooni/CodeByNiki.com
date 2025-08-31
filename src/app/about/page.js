export default function About() {
  return (
      <section id="about" className="py-50 flex flex-col justify-center">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-xl md:text-3xl font-bold mb-8 text-white">About Me</h2>
          <div className="mt-4 text-lg">
              <p className="mb-2 text-base md:text-lg">I’m a product-minded web developer who bridges code, design, product, and AI to create accessible, high-performance websites. My approach goes beyond writing clean code. I focus on how digital experiences serve users, scale across teams, and align with business goals.</p>

              <p className="mb-2 text-base md:text-lg">Currently, I’m a Web Developer at <a className="font-bold hover:text-pink-300 focus:text-pink-300" href="https://www.docebo.com" target="_blank">Docebo</a>, where I build  and maintainour marketing sites. My work centers on native Gutenberg development, custom React blocks, and Tailwind CSS, with a strong emphasis on accessibility, performance, and scalability. I collaborate closely with designers, marketers, and product teams to turn concepts into responsive, easy-to-manage interfaces. More recently, I’ve been exploring ways to integrate AI-driven workflows into our web ecosystem.</p>

              <p className="mb-2 text-base md:text-lg">Before Docebo, I worked as a Frontend Developer at <a className="font-bold hover:text-pink-300 focus:text-pink-300" href="https://www.searchkings.com" target="_blank">SearchKings</a>, building lead-generation websites in a high-velocity agency environment. That experience honed my ability to deliver maintainable, performant code under tight deadlines while keeping usability at the forefront.</p>

              <p className="mb-2 text-base md:text-lg">Outside of work, I’m deeply involved in the Toronto tech and startup community. Through <a className="font-bold hover:text-pink-300 focus:text-pink-300" href="https://www.techtankto.com" target="_blank">TechTank</a>, I lead Code Diversity, a monthly coffee-chat meetup for women and non-binary people in tech, and this year I hosted my first-ever <a className="font-bold hover:text-pink-300 focus:text-pink-300" href="https://www.torontotechweek.com" target="_blank">Toronto Tech Week</a> event.</p>

              <p className="mb-2 text-base md:text-lg">I also co-created <a className="font-bold hover:text-pink-300 focus:text-pink-300" href="https://luma.com/qyw4ntm7" target="_blank">Girls with Big Ideas</a>, a new event series that helps early-stage founders connect with potential cofounders. Running events is my way of giving back: creating spaces where founders, technologists, and creatives can connect and support one another.</p>

              <p className="mb-2 text-base md:text-lg">When I’m not coding, you can find me hiking the <a className="font-bold hover:text-pink-300 focus:text-pink-300" href="https://torontobrucetrailclub.org/l" target="_blank">Bruce Trail</a>, playing board games, or catching up with friends over a good cup of coffee.</p>
          </div>
        </div>
      </section>
  );
}