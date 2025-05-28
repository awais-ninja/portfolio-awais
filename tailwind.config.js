/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--color-background)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          90: "color-mix(in srgb, var(--color-primary) 90%, transparent)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
        },
        "card-bg": {
          DEFAULT: "var(--color-card-bg)",
        },
        border: {
          DEFAULT: "var(--color-border)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["Galdien", "serif"],
        galdien: ["Galdien", "serif"],
      },
    },
  },
  plugins: [],
};
