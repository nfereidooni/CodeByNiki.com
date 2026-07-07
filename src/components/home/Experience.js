'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import experiences from '@/data/experiences.json';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const RECENT_COUNT = 5;

// Deterministic pseudo commit hash so server and client render the same thing
function fakeHash(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return h.toString(16).padStart(7, '0').slice(0, 7);
}

function ExperienceEntry({ exp, isLast }) {
  // Compact entries are earlier roles at the same company, shown like a
  // squashed commit: title only, no repeated description or tech chips
  if (exp.compact) {
    return (
      <div className="relative pl-8 md:pl-10 pb-10">
        {!isLast && <span className="absolute left-[7px] md:left-[9px] top-4 bottom-0 w-px bg-line" aria-hidden="true"></span>}
        <span className="absolute left-[3px] md:left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-code bg-canvas" aria-hidden="true"></span>

        <p className="font-mono text-xs text-ink-faint mb-1">
          <span className="text-warm">{fakeHash(exp.role + exp.company + exp.timeframe)}</span>
          {' · '}
          {exp.timeframe}
        </p>
        <h3 className="text-base font-bold">
          {exp.role}{' '}
          <span className="text-ink-muted font-medium">@</span>{' '}
          <a
            href={exp.companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-code hover:underline underline-offset-4"
          >
            {exp.company}
          </a>
          <span className="font-mono text-xs text-ink-faint font-normal ml-2">// where the chapter above began</span>
        </h3>
      </div>
    );
  }

  return (
    <div className="relative pl-8 md:pl-10 pb-10">
      {/* Commit graph line + dot */}
      {!isLast && <span className="absolute left-[7px] md:left-[9px] top-5 bottom-0 w-px bg-line" aria-hidden="true"></span>}
      <span className="absolute left-0 md:left-0.5 top-1.5 w-4 h-4 rounded-full border-2 border-code bg-canvas" aria-hidden="true"></span>

      <p className="font-mono text-xs text-ink-faint mb-1.5">
        <span className="text-warm">{fakeHash(exp.role + exp.company + exp.timeframe)}</span>
        {' · '}
        {exp.timeframe}
      </p>
      <h3 className="text-lg md:text-xl font-bold">
        {exp.role}{' '}
        <span className="text-ink-muted font-medium">@</span>{' '}
        <a
          href={exp.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-code hover:underline underline-offset-4"
        >
          {exp.company}
        </a>
      </h3>
      <p className="mt-2 text-ink-muted leading-relaxed max-w-3xl">{exp.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-2.5 py-1 rounded-full bg-elevated border border-line text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const [showEarlier, setShowEarlier] = useState(false);
  const recent = experiences.slice(0, RECENT_COUNT);
  const earlier = experiences.slice(RECENT_COUNT);

  return (
    <section id="experience" className="py-24 md:py-32 px-4 md:px-8 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="02" title="Experience" comment="git log --graph --all" />

        <Reveal>
          <div>
            {recent.map((exp, i) => (
              <ExperienceEntry
                key={`${exp.company}-${exp.timeframe}`}
                exp={exp}
                isLast={i === recent.length - 1 && !showEarlier}
              />
            ))}
          </div>

          <AnimatePresence initial={false}>
            {showEarlier && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <p className="font-mono text-xs text-ink-faint pl-8 md:pl-10 pt-1 pb-6">
                  // before code: a whole other career in packaging & project management,
                  the origin story of the systems thinking
                </p>
                {earlier.map((exp, i) => (
                  <ExperienceEntry
                    key={`${exp.company}-${exp.timeframe}`}
                    exp={exp}
                    isLast={i === earlier.length - 1}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {earlier.length > 0 && (
            <button
              onClick={() => setShowEarlier(!showEarlier)}
              className="ml-8 md:ml-10 font-mono text-sm text-ink-muted hover:text-code border border-line hover:border-code rounded-lg px-4 py-2.5 transition-colors"
            >
              {showEarlier
                ? '$ git log --since="2022"  # collapse earlier chapters'
                : '$ git log --before="2022"  # show earlier chapters'}
            </button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
