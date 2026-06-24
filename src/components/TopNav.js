'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

export default function TopNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  if (pathname.startsWith('/v1')) return null;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'community'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 bg-light-bg-secondary dark:bg-dark-bg backdrop-blur-sm border-b border-light-border dark:border-dark-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <h1 className="text-base font-bold text-light-text dark:text-dark-text">Niki Fereidooni</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-colors py-2 ${
                activeSection === 'about'
                  ? 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent'
                  : 'text-light-text-muted dark:text-dark-text-muted hover:text-light-text dark:hover:text-dark-text border-b-2 border-transparent'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`text-sm font-medium transition-colors py-2 ${
                activeSection === 'experience'
                  ? 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent'
                  : 'text-light-text-muted dark:text-dark-text-muted hover:text-light-text dark:hover:text-dark-text border-b-2 border-transparent'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-sm font-medium transition-colors py-2 ${
                activeSection === 'projects'
                  ? 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent'
                  : 'text-light-text-muted dark:text-dark-text-muted hover:text-light-text dark:hover:text-dark-text border-b-2 border-transparent'
              }`}
            >
              Code
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className={`text-sm font-medium transition-colors py-2 ${
                activeSection === 'community'
                  ? 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent'
                  : 'text-light-text-muted dark:text-dark-text-muted hover:text-light-text dark:hover:text-dark-text border-b-2 border-transparent'
              }`}
            >
              Community
            </button>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-light-accent dark:text-dark-accent hover:bg-light-border dark:hover:bg-dark-border dark:hover:text-forest-green transition-colors"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" className="w-5 h-5" fill="currentColor">
                  <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>
                </svg>
              )}
            </button>
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 rounded-lg text-light-text dark:text-dark-accent hover:bg-light-border dark:hover:bg-dark-border dark:hover:text-forest-green-light transition-colors"
              aria-label="Toggle menu"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-light-border dark:border-dark-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-light-text-muted dark:text-dark-text-muted hover:text-light-text dark:hover:text-forest-green-light hover:bg-light-border dark:hover:bg-dark-border"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-light-text-muted dark:text-dark-text-muted hover:text-light-text dark:hover:text-forest-green-light hover:bg-light-border dark:hover:bg-dark-border"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-light-text-muted dark:text-dark-text-muted hover:text-light-text dark:hover:text-forest-green-light hover:bg-light-border dark:hover:bg-dark-border"
              >
                Code
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-light-text-muted dark:text-dark-text-muted hover:text-light-text dark:hover:text-forest-green-light hover:bg-light-border dark:hover:bg-dark-border"
              >
                Community
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
