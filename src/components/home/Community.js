'use client';

import { useEffect, useRef } from 'react';
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
            Half my week happens in the editor; the other half happens in rooms full
            of people building things. Through{' '}
            <a href={techtank.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-comm transition-colors">TechTank</a>{' '}
            and beyond, I create intentional spaces where real collaboration and
            real friendships happen.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
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
          <div className="flex items-baseline justify-between mb-5">
            <p className="font-mono text-sm text-ink-faint">$ open ~/media/community</p>
            <p className="font-mono text-xs text-ink-faint hidden md:block">scroll →</p>
          </div>
          <div className="flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
            {MEDIA.map((item) => (
              <motion.div
                key={item.src}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className={`relative shrink-0 snap-start h-72 md:h-96 rounded-lg overflow-hidden border border-line shadow-lg ${
                  item.type === 'video' ? 'aspect-[9/16]' : 'aspect-[4/5]'
                }`}
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
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
