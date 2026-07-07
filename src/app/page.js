import { MotionConfig } from 'framer-motion';
import Nav from '@/components/home/Nav';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import Projects from '@/components/home/Projects';
import Community from '@/components/home/Community';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-code focus:text-canvas font-mono text-sm font-semibold"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Community />
      </main>
      <Footer />
    </MotionConfig>
  );
}
