'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const LINKS = [
  { id: 'about', label: 'about', index: '01' },
  { id: 'experience', label: 'experience', index: '02' },
  { id: 'projects', label: 'projects', index: '03' },
  { id: 'community', label: 'community', index: '04' },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const scrollPosition = window.scrollY + 120;
      let current = '';
      for (const { id } of LINKS) {
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled || mobileMenuOpen
          ? 'bg-canvas/85 backdrop-blur-md border-line'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-base font-semibold group"
            aria-label="Back to top"
          >
            <span className="text-ink-faint group-hover:text-code transition-colors">&lt;</span>
            <span className="text-ink">niki</span>
            <span className="text-ink-faint group-hover:text-code transition-colors"> /&gt;</span>
          </button>

          <div className="hidden sm:flex items-center gap-7">
            {LINKS.map(({ id, label, index }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`font-mono text-sm transition-colors ${
                  activeSection === id
                    ? id === 'community' ? 'text-comm' : 'text-code'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                <span className="text-ink-faint">{index}//</span>{label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-elevated transition-colors"
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                )}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-elevated transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="sm:hidden border-t border-line pb-3 pt-2 space-y-1">
            {LINKS.map(({ id, label, index }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="w-full text-left px-3 py-2 rounded-md font-mono text-base text-ink-muted hover:text-ink hover:bg-elevated transition-colors"
              >
                <span className="text-ink-faint">{index}//</span>{label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
