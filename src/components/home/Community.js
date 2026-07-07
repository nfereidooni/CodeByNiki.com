'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import communities from '@/data/communities.json';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

// Muted looped clip that only plays while on screen
function MediaVideo({ src, name }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // Respect reduced motion: show the first frame, never autoplay
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.preload = 'metadata';
      return;
    }
    let visible = false;
    // With preload="none" the first play() also triggers loading; if a pause()
    // interleaves before it resolves, retry once the video can actually play
    const tryPlay = () => {
      if (visible) video.play().catch(() => {});
    };
    video.addEventListener('canplay', tryPlay);
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => {
      video.removeEventListener('canplay', tryPlay);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-label={`${name} moments`}
      className="w-full h-full object-cover"
    />
  );
}

// Portrait social clips keep their natural 9:16 shape; photos sit at 4:5
const MEDIA = [
  { type: 'video', src: '/videos/techtankto_3872527193918206449.mp4', name: 'Code Diversity' },
  { type: 'photo', src: '/images/hero/IMG_2649.jpeg' },
  { type: 'video', src: '/videos/techtankto_DZWPNciI8eO.mp4', name: 'Tech Talks' },
  { type: 'photo', src: '/images/hero/IMG-062.jpg' },
  { type: 'video', src: '/videos/girls-with-big-ideas.mp4', name: 'Girls with Big Ideas' },
  { type: 'photo', src: '/images/hero/IMG_5412.jpeg' },
  { type: 'photo', src: '/images/hiking-hero.webp' },
];

function MediaStrip() {
  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf;

    const update = () => {
      setCanLeft(el.scrollLeft > 8);
      setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
      if (reduceMotion) return;
      // Depth effect: tiles shrink and fade slightly as they leave center
      const mid = el.getBoundingClientRect().left + el.clientWidth / 2;
      for (const tile of el.children) {
        const r = tile.getBoundingClientRect();
        const t = Math.min(Math.abs(r.left + r.width / 2 - mid) / el.clientWidth, 1);
        tile.style.transform = `scale(${1 - t * 0.08})`;
        tile.style.opacity = `${1 - t * 0.35}`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // One-time nudge when the strip first enters view, so mobile users
    // discover it scrolls
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (!reduceMotion && el.scrollLeft < 4) {
          el.scrollTo({ left: 72, behavior: 'smooth' });
          setTimeout(() => el.scrollTo({ left: 0, behavior: 'smooth' }), 550);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const page = (dir) => {
    const el = scrollerRef.current;
    el?.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="font-mono text-sm text-ink-faint">$ open ~/media/community</p>
        <p className="font-mono text-xs text-ink-faint md:hidden" aria-hidden="true">swipe →</p>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => page(-1)}
            disabled={!canLeft}
            aria-label="Scroll gallery back"
            className="w-9 h-9 rounded-lg border border-line font-mono text-ink-muted hover:text-comm hover:border-comm disabled:opacity-30 disabled:hover:text-ink-muted disabled:hover:border-line transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => page(1)}
            disabled={!canRight}
            aria-label="Scroll gallery forward"
            className="w-9 h-9 rounded-lg border border-line font-mono text-ink-muted hover:text-comm hover:border-comm disabled:opacity-30 disabled:hover:text-ink-muted disabled:hover:border-line transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Edge fades hinting at more content */}
        <div
          aria-hidden="true"
          className={`absolute inset-y-0 left-0 w-10 md:w-16 z-10 pointer-events-none bg-gradient-to-r from-canvas to-transparent transition-opacity duration-300 ${canLeft ? 'opacity-100' : 'opacity-0'}`}
        ></div>
        <div
          aria-hidden="true"
          className={`absolute inset-y-0 right-0 w-10 md:w-16 z-10 pointer-events-none bg-gradient-to-l from-canvas to-transparent transition-opacity duration-300 ${canRight ? 'opacity-100' : 'opacity-0'}`}
        ></div>

        <div
          ref={scrollerRef}
          className="flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
        >
          {MEDIA.map((item) => (
            <div
              key={item.src}
              className={`relative shrink-0 snap-center md:snap-start h-72 md:h-96 ${
                item.type === 'video' ? 'aspect-[9/16]' : 'aspect-[4/5]'
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 rounded-lg overflow-hidden border border-line shadow-lg"
              >
                {item.type === 'video' ? (
                  <MediaVideo src={item.src} name={item.name} />
                ) : (
                  <Image
                    src={item.src}
                    alt="Community moments"
                    fill
                    sizes="(max-width: 768px) 60vw, 320px"
                    loading="eager"
                    className="object-cover"
                  />
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InitiativeCard({ name, tagline, description, frequency, audience, link, delay }) {
  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2 }}
        className="group h-full rounded-xl border border-line bg-surface p-6 flex flex-col hover:border-comm transition-colors"
      >
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="text-lg font-bold">
            <a href={link} target="_blank" rel="noopener noreferrer" className="group-hover:text-comm transition-colors">
              {name}
            </a>
          </h3>
          {frequency && (
            <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-comm/40 text-comm shrink-0">
              {frequency}
            </span>
          )}
        </div>
        <p className="font-mono text-xs text-comm mb-3">// {tagline}</p>
        <p className="text-sm text-ink-muted leading-relaxed flex-1">{description}</p>
        {audience && (
          <div className="flex flex-wrap gap-2 mt-4">
            {audience.map((a) => (
              <span key={a} className="font-mono text-xs px-2.5 py-1 rounded-full bg-elevated border border-line text-ink-muted">
                {a}
              </span>
            ))}
          </div>
        )}
      </motion.article>
    </Reveal>
  );
}

export default function Community() {
  const { techtank, girlsWithBigIdeas } = communities;

  return (
    <section id="community" className="py-24 md:py-32 px-4 md:px-8 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="04"
          title="Community"
          comment='git commit -m "give back"'
          accent="comm"
        />

        <Reveal className="mb-12">
          <p className="text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
            My days happen in the editor; my evenings happen in rooms full
            of people building things. Through{' '}
            <a href={techtank.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-comm transition-colors">TechTank</a>{' '}
            and beyond, I create intentional spaces where real collaboration and
            real friendships happen.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {techtank.initiatives.map((initiative, i) => (
            <InitiativeCard
              key={initiative.id}
              name={initiative.name}
              tagline={initiative.tagline}
              description={initiative.description}
              frequency={initiative.frequency}
              audience={initiative.audience}
              link={initiative.link}
              delay={i * 0.08}
            />
          ))}
          <InitiativeCard
            name={girlsWithBigIdeas.name}
            tagline={girlsWithBigIdeas.tagline}
            description={girlsWithBigIdeas.description}
            link={girlsWithBigIdeas.link}
            delay={techtank.initiatives.length * 0.08}
          />
        </div>

        {/* Media strip: portrait clips and photos, film-strip style */}
        <Reveal>
          <MediaStrip />
        </Reveal>
      </div>
    </section>
  );
}
