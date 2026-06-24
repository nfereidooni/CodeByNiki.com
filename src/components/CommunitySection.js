'use client';

import communities from '@/data/communities.json';
import CommunityCard from './CommunityCard';
import Link from 'next/link';

export default function CommunitySection() {
  const techtank = communities.techtank;
  const girlsWithBigIdeas = communities.girlsWithBigIdeas;

  return (
    <section id="community" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* TechTank Section */}
        <div className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              Community Infrastructure
            </h2>
            <p className="text-light-text/70 dark:text-dark-text-muted text-lg max-w-2xl">
              I help run spaces and infrastructure that keep Toronto&apos;s tech community alive all year round.
            </p>
          </div>


          {/* TechTank Initiatives Grid - Reordered */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Code Diversity */}
            <CommunityCard key="code-diversity" initiative={techtank.initiatives.find(i => i.id === 'code-diversity')} />

            {/* Tech Talks */}
            <CommunityCard key="tech-talks" initiative={techtank.initiatives.find(i => i.id === 'tech-talks')} />

            {/* Girls with Big Ideas as Card */}
            <div className="group relative flex flex-col rounded-lg overflow-hidden shadow-lg transition hover:shadow-2xl bg-light-bg dark:bg-dark-bg-secondary border border-light-border dark:border-dark-accent">
              {girlsWithBigIdeas.video && (
                <div className="w-full h-80 bg-light-border dark:bg-dark-border overflow-hidden">
                  <video
                    src={girlsWithBigIdeas.video}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    playsInline
                    muted
                    loop
                    autoPlay
                  />
                </div>
              )}
              <Link
                href={girlsWithBigIdeas.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow p-6 hover:bg-light-border/50 dark:hover:bg-dark-accent/10 transition flex flex-col"
                aria-label={`Learn more about Girls with Big Ideas`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-light-text dark:text-white group-hover:text-light-accent dark:group-hover:text-dark-accent transition">
                    Girls with Big Ideas
                  </h3>
                </div>
                <p className="text-sm font-medium text-light-accent dark:text-dark-accent mb-3">
                  {girlsWithBigIdeas.tagline}
                </p>
                <p className="text-sm text-light-text/70 dark:text-gray-200 leading-relaxed mb-4 flex-grow">
                  {girlsWithBigIdeas.description}
                </p>
              </Link>
            </div>
          </div>

          {/* Build Night TO - Next Row, 1/3 Width */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <CommunityCard key="build-night-to" initiative={techtank.initiatives.find(i => i.id === 'build-night-to')} />
          </div>
        </div>
      </div>
    </section>
  );
}
