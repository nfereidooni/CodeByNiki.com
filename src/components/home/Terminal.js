'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import CortadoPour from './CortadoPour';

const WELCOME = [
  { type: 'output', text: 'welcome to niki.sh, an interactive terminal.' },
  { type: 'output', text: "type 'help' to see what I can do." },
];

const BOOT_LINES = [
  { type: 'output', text: 'booting niki.sh v3.0.0 ...' },
  { type: 'success', text: 'mounting /community .......... ok' },
  { type: 'success', text: 'loading espresso module ...... ok' },
  { type: 'success', text: 'starting theme daemon ........ ok' },
];

const INTRO = [...BOOT_LINES, ...WELCOME];

const QUICK_COMMANDS = ['help', 'whoami', 'neofetch', 'coffee'];

const NEOFETCH_ART = [
  '    ( (      ',
  '     ) )     ',
  '  ._______.  ',
  '  |       |] ',
  '  \\       /  ',
  "   `-----'   ",
];

function NeofetchBlock({ theme }) {
  const years = ((Date.now() - new Date('2022-02-01').getTime()) / (365.25 * 24 * 3600 * 1000)).toFixed(1);
  const rows = [
    ['host', 'CodeByNiki.com v3'],
    ['os', 'Toronto, CA'],
    ['shell', 'niki.sh'],
    ['uptime', `${years} years of shipping`],
    ['packages', '4 (communities)'],
    ['stack', 'React · Next · WP · Tailwind'],
    ['theme', `${theme} mode`],
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2">
      <pre className="text-code text-xs leading-snug" aria-hidden="true">{NEOFETCH_ART.join('\n')}</pre>
      <div className="text-xs leading-relaxed">
        <p>
          <span className="text-code font-bold">niki</span>
          <span className="text-ink-faint">@</span>
          <span className="text-comm font-bold">toronto</span>
        </p>
        <p className="text-ink-faint" aria-hidden="true">--------------</p>
        {rows.map(([k, v]) => (
          <p key={k}>
            <span className="text-code">{k}</span>
            <span className="text-ink-faint">: </span>
            <span className="text-ink-muted">{v}</span>
          </p>
        ))}
        <div className="flex gap-1 mt-2" aria-hidden="true">
          {['bg-code', 'bg-comm', 'bg-warm', 'bg-ink', 'bg-ink-muted', 'bg-ink-faint', 'bg-line', 'bg-elevated'].map((c) => (
            <span key={c} className={`w-3.5 h-3.5 rounded-sm ${c}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showPour, setShowPour] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const rootRef = useRef(null);
  const bootStartedRef = useRef(false);
  const bootDoneRef = useRef(false);
  const bootTimersRef = useRef([]);

  // Print the boot + welcome lines instantly (used when the visitor starts
  // typing before the staged boot finishes)
  const flushIntro = () => {
    if (bootDoneRef.current) return;
    bootDoneRef.current = true;
    bootTimersRef.current.forEach(clearTimeout);
    bootTimersRef.current = [];
    setLines((prev) => (prev.length < INTRO.length ? INTRO : prev));
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || bootStartedRef.current) return;
        bootStartedRef.current = true;
        observer.disconnect();
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          flushIntro();
          return;
        }
        INTRO.forEach((line, i) => {
          bootTimersRef.current.push(
            setTimeout(() => {
              setLines((prev) => [...prev, line]);
              if (i === INTRO.length - 1) bootDoneRef.current = true;
            }, 300 + i * 350)
          );
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(root);
    return () => {
      observer.disconnect();
      bootTimersRef.current.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePourClose = useCallback(() => {
    setShowPour(false);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const run = (raw) => {
    flushIntro();
    const cmd = raw.trim();
    if (!cmd) return;

    const echo = { type: 'input', text: cmd };
    let output = [];

    switch (cmd.toLowerCase()) {
      case 'help':
        output = [
          { type: 'output', text: 'available commands:' },
          { type: 'output', text: '  whoami      who is niki?' },
          { type: 'output', text: '  neofetch    system info, dev edition' },
          { type: 'output', text: '  stack       tools of the trade' },
          { type: 'output', text: '  about       jump to about' },
          { type: 'output', text: '  experience  jump to experience' },
          { type: 'output', text: '  projects    jump to projects' },
          { type: 'output', text: '  community   jump to community' },
          { type: 'output', text: '  coffee      brew something' },
          { type: 'output', text: '  hike        touch grass' },
          { type: 'output', text: '  theme       toggle light/dark' },
          { type: 'output', text: '  clear       clean up' },
        ];
        break;
      case 'whoami':
        output = [
          { type: 'output', text: 'Niki Fereidooni: Senior Developer @ Docebo,' },
          { type: 'output', text: 'Co-chair @ TechTank. Toronto, Canada. 🇨🇦' },
        ];
        break;
      case 'stack':
        output = [
          { type: 'output', text: '[ React, Next.js, WordPress/Gutenberg, PHP,' },
          { type: 'output', text: '  Tailwind, Framer Motion, AI workflows ]' },
        ];
        break;
      case 'about':
      case 'experience':
      case 'projects':
      case 'community':
        output = [{ type: 'success', text: `→ navigating to #${cmd.toLowerCase()}...` }];
        setTimeout(() => scrollToSection(cmd.toLowerCase()), 300);
        break;
      case 'coffee':
        output = [{ type: 'output', text: '☕ pulling a cortado... there is always time for a coffee chat.' }];
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setShowPour(true);
        }
        break;
      case 'neofetch':
        output = [{ type: 'neofetch' }];
        break;
      case 'hike':
        output = [{ type: 'output', text: '🌲 lacing up boots. see you on the Bruce Trail.' }];
        break;
      case 'theme':
        output = [{ type: 'success', text: '✓ theme toggled.' }];
        toggleTheme();
        break;
      case 'sudo hire-niki':
      case 'hire-niki':
      case 'hire niki':
        output = [
          { type: 'success', text: 'permission granted. excellent choice.' },
          { type: 'link', text: 'linkedin.com/in/nfereidooni', href: 'https://linkedin.com/in/nfereidooni' },
        ];
        break;
      case 'clear':
        setLines([]);
        setHistory((h) => [cmd, ...h]);
        setHistoryIndex(-1);
        setInput('');
        return;
      case 'ls':
        output = [{ type: 'output', text: 'about/  experience/  projects/  community/  secrets/' }];
        break;
      case 'cd secrets':
      case 'cd secrets/':
      case 'ls secrets':
      case 'ls secrets/':
        output = [{ type: 'output', text: "nice try. 👀 (hint: 'sudo hire-niki')" }];
        break;
      case 'exit':
        output = [{ type: 'output', text: "there is no exit. only community. try 'community'." }];
        break;
      default:
        output = [
          { type: 'error', text: `zsh: command not found: ${cmd}` },
          { type: 'output', text: "type 'help' for the full list." },
        ];
    }

    setLines((prev) => [...prev, echo, ...output]);
    setHistory((h) => [cmd, ...h]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e) => {
    flushIntro();
    if (e.key === 'Enter') {
      run(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(historyIndex + 1, history.length - 1);
      if (history[next]) {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = historyIndex - 1;
      if (next < 0) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    }
  };

  const lineColor = (type) => {
    switch (type) {
      case 'input': return 'text-ink';
      case 'error': return 'text-comm';
      case 'success': return 'text-code';
      default: return 'text-ink-muted';
    }
  };

  return (
    <div className="w-full" ref={rootRef}>
      <div
        className="rounded-xl border border-line bg-surface shadow-2xl shadow-black/20 overflow-hidden cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-elevated">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" aria-hidden="true"></span>
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" aria-hidden="true"></span>
          <span className="w-3 h-3 rounded-full bg-[#28c840]" aria-hidden="true"></span>
          <span className="ml-3 font-mono text-xs text-ink-faint">niki@toronto: ~/portfolio</span>
        </div>

        {/* Body */}
        <div
          ref={bodyRef}
          role="log"
          aria-live="polite"
          aria-label="Terminal output"
          className="h-64 overflow-y-auto px-4 py-3 font-mono text-sm leading-relaxed"
        >
          {lines.map((line, i) => (
            line.type === 'neofetch' ? (
              <NeofetchBlock key={i} theme={theme} />
            ) : (
            <div key={i} className={lineColor(line.type)}>
              {line.type === 'input' && <span className="text-code mr-2">$</span>}
              {line.type === 'link' ? (
                <a href={line.href} target="_blank" rel="noopener noreferrer" className="text-code underline underline-offset-4 hover:text-ink transition-colors">
                  {line.text} ↗
                </a>
              ) : (
                line.text
              )}
            </div>
            )
          ))}
          <div className="flex items-center">
            <span className="text-code mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-ink min-w-0"
              style={{ caretColor: 'var(--code-accent)' }}
              aria-label="Terminal input"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
        </div>
      </div>

      {/* Quick commands */}
      <div className="flex flex-wrap gap-2 mt-3">
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            onClick={() => run(cmd)}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-line text-ink-muted hover:text-code hover:border-code transition-colors"
          >
            {cmd}
          </button>
        ))}
        <button
          onClick={() => run('sudo hire-niki')}
          className="font-mono text-xs px-3 py-1.5 rounded-full border border-line text-ink-muted hover:text-comm hover:border-comm transition-colors"
        >
          sudo hire-niki
        </button>
      </div>

      {showPour && <CortadoPour onClose={handlePourClose} />}
    </div>
  );
}
