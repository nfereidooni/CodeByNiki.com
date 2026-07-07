'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const WELCOME = [
  { type: 'output', text: 'welcome to niki.sh, an interactive terminal.' },
  { type: 'output', text: "type 'help' to see what I can do." },
];

const QUICK_COMMANDS = ['help', 'whoami', 'stack', 'coffee'];

export default function Terminal() {
  const [lines, setLines] = useState(WELCOME);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const { toggleTheme } = useTheme();
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const run = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;

    const echo = { type: 'input', text: cmd };
    let output = [];

    switch (cmd.toLowerCase()) {
      case 'help':
        output = [
          { type: 'output', text: 'available commands:' },
          { type: 'output', text: '  whoami      who is niki?' },
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
    <div className="w-full">
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
    </div>
  );
}
