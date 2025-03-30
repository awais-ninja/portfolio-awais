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
        background: "var(--background)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
        "card-bg": "var(--card-bg)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        galdien: ["Galdien", "sans-serif"],
      },
    },
  },
  plugins: [],
};
