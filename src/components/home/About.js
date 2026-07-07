'use client';

import Image from 'next/image';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

function ConfigCard() {
  return (
    <div className="rounded-xl border border-line bg-surface overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line bg-elevated">
        <span className="font-mono text-xs text-ink-faint">niki.config.js</span>
      </div>
      <pre className="p-4 md:p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
        <code>
          <span className="text-comm">export default</span> <span className="text-ink">{'{'}</span>{'\n'}
          {'  '}<span className="text-ink">role</span>: <span className="text-code">&quot;Senior Developer @ Docebo&quot;</span>,{'\n'}
          {'  '}<span className="text-ink">location</span>: <span className="text-code">&quot;Toronto, Canada&quot;</span>,{'\n'}
          {'  '}<span className="text-ink">community</span>: [{'\n'}
          {'    '}<span className="text-code">&quot;TechTank&quot;</span>, <span className="text-code">&quot;Code Diversity&quot;</span>,{'\n'}
          {'    '}<span className="text-code">&quot;Build Night TO&quot;</span>, <span className="text-code">&quot;Girls with Big Ideas&quot;</span>{'\n'}
          {'  '}],{'\n'}
          {'  '}<span className="text-ink">exploring</span>: <span className="text-code">&quot;AI-driven workflows&quot;</span>,{'\n'}
          {'  '}<span className="text-ink">offHours</span>: [<span className="text-code">&quot;Bruce Trail 🌲&quot;</span>, <span className="text-code">&quot;board games&quot;</span>, <span className="text-code">&quot;cortados ☕&quot;</span>],{'\n'}
          {'  '}<span className="text-ink">openTo</span>: <span className="text-code">&quot;interesting conversations&quot;</span>, <span className="text-ink-faint">// always</span>{'\n'}
          <span className="text-ink">{'}'}</span>;
        </code>
      </pre>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01" title="About" comment="cat README.md" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <Reveal className="min-w-0 lg:col-span-3 space-y-5 text-base md:text-lg leading-relaxed text-ink-muted">
            <p>
              I&apos;m a product-minded web developer who bridges code, design, product,
              and AI. At{' '}
              <a href="https://www.docebo.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-code transition-colors">Docebo</a>{' '}
              I build and maintain the marketing infrastructure: native Gutenberg
              development, custom React blocks, and a healthy obsession with
              accessibility, performance, and scalability. Before that, I honed my
              ship-fast instincts building lead-generation sites at{' '}
              <a href="https://www.searchkings.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-code transition-colors">SearchKings</a>.
            </p>
            <p>
              The other half of my life is Toronto&apos;s tech community. Through{' '}
              <a href="https://www.techtankto.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-comm transition-colors">TechTank</a>{' '}
              I help run Code Diversity (monthly coffee chats for women and
              gender-diverse folks in tech), Tech Talks, and the newly launched Build
              Night TO. I also co-created{' '}
              <a href="https://luma.com/qyw4ntm7" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-comm transition-colors">Girls with Big Ideas</a>,
              a space for early-stage founders to find cofounders.
            </p>
            <p>
              My favourite lesson came from building{' '}
              <span className="font-semibold text-ink">My Jane&apos;s Walk</span>, a tool I made to
              plan my own weekend walking tours. When I shared it, the Jane&apos;s Walk
              organization built their own version. The best tools start by solving
              your own problem; sharing them is what makes them matter.
            </p>
            <p>
              Offline, you&apos;ll find me hiking the{' '}
              <a href="https://torontobrucetrailclub.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-code transition-colors">Bruce Trail</a>,
              losing gracefully at board games, or deep in a coffee chat.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="min-w-0 lg:col-span-2 space-y-6">
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-code to-comm opacity-60 blur-sm group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                <Image
                  src="/images/niki-headshot-circle.webp"
                  alt="Niki Fereidooni"
                  width={160}
                  height={160}
                  className="relative rounded-full border-2 border-line group-hover:rotate-3 transition-transform duration-300"
                />
              </div>
            </div>
            <ConfigCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
