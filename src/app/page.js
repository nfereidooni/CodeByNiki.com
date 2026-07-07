import Nav from '@/components/home/Nav';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import Projects from '@/components/home/Projects';
import Community from '@/components/home/Community';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Community />
      </main>
      <Footer />
    </>
  );
}
