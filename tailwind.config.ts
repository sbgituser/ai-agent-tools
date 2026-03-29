import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        accent: "var(--accent)",
        bg: "var(--bg)",
        "bg-card": "var(--bg-card)",
        "text-main": "var(--text)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};

export default config;
