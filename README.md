# CodeByNiki.com

![License](https://img.shields.io/badge/license-MIT-blue.svg)

My development portfolio, v3: a playful developer redesign with an interactive terminal, a `git log` style experience timeline, and a dual identity baked into the color system (terminal green for code, pink for community).

**Live at [codebyniki.com](https://www.codebyniki.com)** (and yes, you can type `sudo hire-niki` in the hero terminal).

## Highlights

- **Interactive terminal**: a working prompt in the hero. Try `help`, `whoami`, `stack`, `coffee`, or `theme` to toggle dark/light mode
- **Experience as `git log`**: a commit-graph timeline with pseudo hashes, tech chips, and a collapsible "before code" chapter for my earlier career in packaging and project management
- **`niki.config.js`**: an About card written as a syntax-highlighted config file
- **Community section**: initiative cards for the TechTank programs I help run (Code Diversity, Build Night TO, Tech Talks) and Girls with Big Ideas, plus a film strip of portrait videos that play while on screen and pause when scrolled away
- **Version history, kept with love**: previous designs live on at [/v1](https://www.codebyniki.com/v1) and [/v2](https://www.codebyniki.com/v2)
- Light/dark theming via CSS variable tokens, a console easter egg, and no em dashes anywhere

## Tech

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Styling**: Tailwind CSS with theme-aware CSS variables
- **Motion**: Framer Motion (scroll reveals, hover micro-interactions, the typewriter)
- **Typography**: Geist Sans and Geist Mono via `next/font/local`
- **Content**: JSON data files (`src/data/`) shared across all three design versions
- **Deployment**: Vercel

## Structure

```
src/
├── app/              # v3 (current design) at the root
│   ├── v1/           # archived first design
│   └── v2/           # archived second design
├── components/
│   ├── home/         # v3 components (Terminal, Hero, Experience, ...)
│   ├── v1/           # archived components
│   └── v2/           # archived components
├── context/          # theme provider
└── data/             # projects, experiences, communities (JSON)
```

## Running locally

```bash
git clone https://github.com/nfereidooni/CodeByNiki.com.git
cd CodeByNiki.com
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## License

MIT. Copyright (c) 2026 Niki Fereidooni.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions

Find me on [GitHub](https://github.com/nfereidooni) or [LinkedIn](https://linkedin.com/in/nfereidooni), or come say hi at a [TechTank](https://www.techtankto.com) event.
