'use client';

import { motion } from 'framer-motion';
import projects from '@/data/projects.json';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import GithubIcon from '@/components/icons/GithubIcon';

const FEATURED_COUNT = 3;

function FolderIcon() {
  return (
    <svg className="w-9 h-9 text-code" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
  );
}

function ExternalIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

function FeaturedCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group relative rounded-xl border border-line bg-surface p-6 flex flex-col hover:border-code transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <FolderIcon />
        <div className="flex items-center gap-3">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="text-ink-muted hover:text-code transition-colors"
            >
              <GithubIcon className="w-5 h-5 fill-current" />
            </a>
          )}
          {project.deployment_link && (
            <a
              href={project.deployment_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="text-ink-muted hover:text-code transition-colors"
            >
              <ExternalIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2">
        <a
          href={project.deployment_link || project.github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="group-hover:text-code transition-colors"
        >
          {project.title}
        </a>
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="font-mono text-xs text-ink-faint">{tech}</span>
        ))}
      </div>
    </motion.article>
  );
}

function ArchiveRow({ project }) {
  return (
    <a
      href={project.deployment_link || project.github_link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 py-3.5 px-4 -mx-4 rounded-lg hover:bg-elevated transition-colors"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="font-mono text-xs text-ink-faint shrink-0" aria-hidden="true">└──</span>
        <span className="font-semibold group-hover:text-code transition-colors truncate">{project.title}</span>
        <span className="hidden md:block font-mono text-xs text-ink-faint truncate">
          {project.technologies.join(' · ')}
        </span>
      </div>
      <ExternalIcon className="w-4 h-4 shrink-0 text-ink-faint group-hover:text-code transition-colors" />
    </a>
  );
}

export default function Projects() {
  const featured = projects.slice(0, FEATURED_COUNT);
  const archive = projects.slice(FEATURED_COUNT);

  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="03" title="Projects" comment="ls -la ~/projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <FeaturedCard project={project} />
            </Reveal>
          ))}
        </div>

        {archive.length > 0 && (
          <Reveal delay={0.1} className="mt-14">
            <p className="font-mono text-sm text-ink-faint mb-3">
              ~/projects/archive <span className="text-ink-muted"># past portfolio versions & the bootcamp era, kept with love</span>
            </p>
            <div className="border-t border-line pt-2">
              {archive.map((project) => (
                <ArchiveRow key={project.title} project={project} />
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
