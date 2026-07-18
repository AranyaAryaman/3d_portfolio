/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // All palette tokens resolve to CSS variables that swap with theme.
        ink: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          800: "rgb(var(--surface) / <alpha-value>)",
          700: "rgb(var(--surface-2) / <alpha-value>)",
          600: "rgb(var(--surface-3) / <alpha-value>)",
          500: "rgb(var(--surface-3) / <alpha-value>)",
        },
        ivory: {
          DEFAULT: "rgb(var(--text) / <alpha-value>)",
          dim: "rgb(var(--text-dim) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          light: "rgb(var(--accent) / <alpha-value>)",
        },
        muted: "rgb(var(--muted) / <alpha-value>)",
        hairline: "rgb(var(--line) / 0.14)",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(var(--line) / 0.06), 0 24px 60px -34px rgb(var(--line) / 0.30)",
      },
    },
  },
  plugins: [],
};
