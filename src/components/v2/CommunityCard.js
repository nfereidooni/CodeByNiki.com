'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function CommunityCard({ initiative }) {
  const { theme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <div className="group relative flex flex-col rounded-lg overflow-hidden shadow-lg transition hover:shadow-2xl bg-light-bg dark:bg-dark-bg-secondary border border-light-border dark:border-dark-accent">
      {/* Video Section */}
      {initiative.video && (
        <div className="w-full h-80 bg-light-border dark:bg-dark-border overflow-hidden">
          <video
            src={initiative.video}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 20%' }}
            playsInline
            muted
            loop
            autoPlay
          />
        </div>
      )}

      {/* Clickable Initiative Link */}
      <Link
        href={initiative.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-grow p-6 hover:bg-light-border/50 dark:hover:bg-dark-accent/10 transition flex flex-col"
        aria-label={`Learn more about ${initiative.name}`}
      >

        {/* Title with Logo */}
        <div className="flex items-center gap-2 mb-1">
          {initiative.logo && (
            <Image
              src={theme === 'dark' ? initiative.logo.replace('-light', '-dark') : initiative.logo}
              alt={`${initiative.name} logo`}
              width={20}
              height={20}
              className="flex-shrink-0"
            />
          )}
          <h3 className="text-base font-semibold text-light-text dark:text-white group-hover:text-light-accent dark:group-hover:text-dark-accent transition">
            {initiative.name}
          </h3>
        </div>

        {/* Tagline */}
        <p className="text-sm font-medium text-light-accent dark:text-dark-accent mb-3">
          {initiative.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-light-text/70 dark:text-gray-200 leading-relaxed mb-4 flex-grow">
          {initiative.description}
        </p>

        {/* Meta Info - Audience Tags */}
        {initiative.audience && initiative.audience.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {initiative.audience.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium bg-light-accent text-white dark:bg-dark-accent dark:text-dark-bg rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>

      {/* Frequency Info at Bottom */}
      <div className="px-6 py-3 bg-light-border/50 dark:bg-dark-accent/10 text-xs text-light-text/60 dark:text-gray-400 border-t border-light-border dark:border-dark-accent/30">
        📅 {initiative.frequency}
      </div>
    </div>
  );
}
