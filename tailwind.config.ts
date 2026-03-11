import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fbfbfd",
        "bg-alt": "#f5f5f7",
        "t-primary": "#1d1d1f",
        "t-secondary": "#424245",
        "t-tertiary": "#86868b",
        accent: "#0071e3",
        "accent-hover": "#0077ed",
        "accent-soft": "rgba(0,113,227,0.07)",
        "border-main": "#d2d2d7",
        "border-light": "#e8e8ed",
      },
      fontFamily: {
        sans: [
          "SF Pro Text",
          "SF Pro Display",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        pill: "980px",
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.04)",
        "card-hover": "0 10px 36px rgba(0,0,0,0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
