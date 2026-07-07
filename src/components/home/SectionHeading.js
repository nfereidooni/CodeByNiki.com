'use client';

import Reveal from './Reveal';

export default function SectionHeading({ index, title, comment, accent = 'code' }) {
  const accentClass = accent === 'comm' ? 'text-comm' : 'text-code';

  return (
    <Reveal className="mb-12">
      <div className="flex items-baseline gap-4">
        <span className={`font-mono text-sm md:text-base ${accentClass}`}>{index}.</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        <span className="hidden md:block flex-1 h-px bg-line translate-y-[-6px]" aria-hidden="true"></span>
      </div>
      {comment && (
        <p className="mt-3 font-mono text-sm text-ink-faint">
          <span className={accentClass}>$</span> {comment}
        </p>
      )}
    </Reveal>
  );
}
