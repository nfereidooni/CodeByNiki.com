'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Terminal from './Terminal';
import GithubIcon from '@/components/icons/GithubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

const PHRASES = [
  'builds thoughtful web things.',
  'creates intentional spaces.',
  'ships code & community.',
  'is probably drinking a cortado.',
  'likes to go outside.',
];

function useTypewriter(phrases) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let delay;

    if (!deleting && text === current) {
      delay = 2200; // pause at full phrase
    } else if (deleting && text === '') {
      delay = 400; // pause before next phrase
    } else {
      delay = deleting ? 32 : 58;
    }

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section className="relative min-h-screen flex items-center px-4 md:px-8 pt-24 pb-16 overflow-hidden">
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        }}
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.68, 0.32, 1] }}
        >
          <p className="font-mono text-sm text-code mb-5">
            <span className="text-ink-faint">~/toronto</span> $ whoami
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Niki Fereidooni
          </h1>
          <h2 className="font-mono text-xl md:text-2xl text-ink-muted h-16 md:h-10 mb-6">
            <span className="text-ink-faint">&gt;</span> niki{' '}
            <span className="text-ink">{typed}</span>
            <span className="blinking-cursor text-code" aria-hidden="true">▊</span>
          </h2>
          <p className="text-base md:text-lg text-ink-muted max-w-xl mb-8 leading-relaxed">
            Senior Developer at{' '}
            <a href="https://www.docebo.com" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:text-code transition-colors">Docebo</a>{' '}
            and co-chair of{' '}
            <a href="https://www.techtankto.com" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:text-comm transition-colors">TechTank</a>.
            I build accessible, high-performance websites by day and intentional
            community spaces the rest of the time.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm px-5 py-3 rounded-lg bg-code text-canvas font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all"
            >
              viewProjects()
            </button>
            <button
              onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm px-5 py-3 rounded-lg border border-comm text-comm hover:bg-comm hover:text-canvas hover:-translate-y-0.5 transition-all"
            >
              joinCommunity()
            </button>
            <div className="flex items-center gap-3 ml-1">
              <a
                href="https://github.com/nfereidooni"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-ink-muted hover:text-ink hover:-translate-y-0.5 transition-all"
              >
                <GithubIcon className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://linkedin.com/in/nfereidooni"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-ink-muted hover:text-ink hover:-translate-y-0.5 transition-all"
              >
                <LinkedInIcon className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: interactive terminal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.68, 0.32, 1] }}
        >
          <Terminal />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-ink-faint"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block"
        >
          // scroll ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
