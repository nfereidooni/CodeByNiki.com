/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // v3 palette (theme-aware via CSS vars)
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        elevated: "var(--elevated)",
        line: "var(--line)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        "ink-faint": "var(--ink-faint)",
        code: "var(--code-accent)",
        comm: "var(--comm-accent)",
        warm: "var(--warm-accent)",

        // Light mode colors
        "light-bg": "var(--light-bg)",
        "light-bg-secondary": "var(--light-bg-secondary)",
        "light-text": "var(--light-text)",
        "light-text-muted": "var(--light-text-muted)",
        "light-border": "var(--light-border)",
        "light-accent": "var(--light-accent)",

        // Dark mode colors
        "dark-bg": "var(--dark-bg)",
        "dark-bg-secondary": "var(--dark-bg-secondary)",
        "dark-text": "var(--dark-text)",
        "dark-text-muted": "var(--dark-text-muted)",
        "dark-border": "var(--dark-border)",
        "dark-accent": "var(--dark-accent)",

        // Forest palette
        "forest-green": "var(--forest-green)",
        "forest-green-light": "var(--forest-green-light)",
        "forest-green-lighter": "var(--forest-green-lighter)",
      },
    },
  },
  plugins: [],
  darkMode: ['selector', '[data-theme="dark"]'],
};
