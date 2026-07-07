'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
      <section id="about" className="py-50 flex flex-col justify-center">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-light-text dark:text-dark-text">About Me</h2>
          <div className="mt-4 text-lg leading-relaxed space-y-4">
              <p className="mb-2 text-base md:text-lg">I&apos;m a product-minded web developer who bridges code, design, product, and AI to create accessible, high-performance websites. My approach goes beyond writing clean code. I focus on how digital experiences serve users, scale across teams, and align with business goals.</p>

              <p className="mb-2 text-base md:text-lg">Currently, I&apos;m a Senior Developer at <span className="relative inline-block group"><a className="font-bold hover:text-light-accent dark:text-dark-accent focus:text-light-accent dark:text-dark-accent" href="https://www.docebo.com" target="_blank">Docebo</a>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none whitespace-nowrap">
                  <motion.img
                    src="/logos/docebo-d.png"
                    alt="Docebo logo"
                    className="w-5 h-5"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.img
                    src="/logos/docebo-d.png"
                    alt="Docebo logo"
                    className="w-5 h-5"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.img
                    src="/logos/docebo-d.png"
                    alt="Docebo logo"
                    className="w-5 h-5"
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </span>
              </span>, where I build and maintain our marketing infrastructure. My work centers on native Gutenberg development and custom React blocks, with a strong emphasis on accessibility, performance, and scalability. I collaborate closely with designers, marketers, and product teams to turn concepts into responsive, easy-to-manage interfaces. More recently, I&apos;ve been exploring ways to integrate AI-driven workflows into our web ecosystem.</p>

              <p className="mb-2 text-base md:text-lg">Before Docebo, I worked as a Frontend Developer at <span className="relative inline-block group"><a className="font-bold hover:text-light-accent dark:text-dark-accent focus:text-light-accent dark:text-dark-accent" href="https://www.searchkings.com" target="_blank">SearchKings</a>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none whitespace-nowrap">
                  <motion.img
                    src="/logos/searchkings-sk.webp"
                    alt="SearchKings logo"
                    className="w-5 h-5"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.img
                    src="/logos/searchkings-sk.webp"
                    alt="SearchKings logo"
                    className="w-5 h-5"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.img
                    src="/logos/searchkings-sk.webp"
                    alt="SearchKings logo"
                    className="w-5 h-5"
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </span>
              </span>, building lead-generation websites in a high-velocity agency environment. That experience honed my ability to deliver maintainable, performant code under tight deadlines while keeping usability at the forefront.</p>

              <p className="mb-2 text-base md:text-lg">Outside of work, I&apos;m deeply involved in the Toronto tech and startup community. Through <span className="relative inline-block group"><a className="font-bold hover:text-light-accent dark:text-dark-accent focus:text-light-accent dark:text-dark-accent" href="https://www.techtankto.com" target="_blank">TechTank</a>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none whitespace-nowrap">
                  <motion.img
                    src="/logos/techtank-fish-light.svg"
                    alt="TechTank fish"
                    className="w-5 h-5"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.img
                    src="/logos/techtank-fish-light.svg"
                    alt="TechTank fish"
                    className="w-5 h-5"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.img
                    src="/logos/techtank-fish-light.svg"
                    alt="TechTank fish"
                    className="w-5 h-5"
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </span>
              </span>, I help run Code Diversity (monthly coffee chats for women and gender-diverse people in tech), Tech Talks, the newly launched Build Night TO series, and support the community infrastructure and socials that keep our community alive year-round. I&apos;ve contributed to the TechTank website (built with Next.js), helping shape the digital space where our community gathers.</p>

              <p className="mb-2 text-base md:text-lg">I built My Jane&apos;s Walk (Next.js) as a personal tool to plan which walking tours I wanted to explore each weekend and share discoveries with friends and community. When I shared it with the Jane&apos;s Walk organization, they saw the potential and built their own version. It taught me that the best tools often start by solving your own problem&mdash;and that sharing solutions can inspire others.</p>

              <p className="mb-2 text-base md:text-lg">I also co-created <a className="font-bold hover:text-light-accent dark:text-dark-accent focus:text-light-accent dark:text-dark-accent" href="https://luma.com/qyw4ntm7" target="_blank">Girls with Big Ideas</a>, a space for early-stage founders to connect with potential cofounders. Building community is how I give back: creating intentional spaces where real collaboration and outcomes happen.</p>

              <p className="mb-2 text-base md:text-lg">When I&apos;m not coding, you can find me hiking the <span className="relative inline-block group"><a className="font-bold hover:text-light-accent dark:text-dark-accent focus:text-light-accent dark:text-dark-accent" href="https://torontobrucetrailclub.org/" target="_blank">Bruce Trail</a>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-2xl flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none whitespace-nowrap">
                  <motion.span
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🌲
                  </motion.span>
                  <motion.span
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    🌲
                  </motion.span>
                  <motion.span
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    🌲
                  </motion.span>
                </span>
              </span>, playing board games, or catching up with friends over a good cup of coffee.</p>
          </div>
        </div>
      </section>
  );
}

