'use client';

import { useEffect } from 'react';
import GithubIcon from '@/components/icons/GithubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

export default function Footer() {
  useEffect(() => {
    console.log(
      '%c👋 hello, fellow dev.\n%cCurious how this was built? → https://github.com/nfereidooni/CodeByNiki.com\nOr come say hi at a TechTank event → https://techtankto.com',
      'font-size: 16px; font-weight: bold;',
      'font-size: 12px;'
    );
  }, []);

  return (
    <footer className="border-t border-line px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-ink-faint mb-8">/* thanks for scrolling all the way down */</p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-semibold mb-1.5">Designed &amp; built by Niki Fereidooni</p>
            <p className="text-sm text-ink-muted">
              Next.js · Tailwind · Framer Motion · an unreasonable amount of coffee ☕
            </p>
            <p className="font-mono text-xs text-ink-faint mt-4">
              previous versions:{' '}
              <a href="/v1" className="hover:text-code underline underline-offset-4 transition-colors">v1</a>
              {' · '}
              <a href="/v2" className="hover:text-code underline underline-offset-4 transition-colors">v2</a>
              {' · '}
              <span className="text-code">v3 (you are here)</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nfereidooni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-muted hover:text-ink transition-colors"
            >
              <GithubIcon className="w-5 h-5 fill-current" />
            </a>
            <a
              href="https://linkedin.com/in/nfereidooni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted hover:text-ink transition-colors"
            >
              <LinkedInIcon className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>

        <p className="font-mono text-xs text-ink-faint mt-10">
          © {new Date().getFullYear()} · exit code 0
        </p>
      </div>
    </footer>
  );
}
