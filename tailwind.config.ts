import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff6ee",
          100: "#ffe8d4",
          200: "#ffd0aa",
          300: "#ffb17c",
          400: "#ff8e4b",
          500: "#ff6a1c",
          600: "#e54f0b",
          700: "#b93d0d",
          800: "#933312",
          900: "#7a2d12"
        },
        ink: "#1d130d",
        sand: "#fff9f3"
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        heading: ["var(--font-heading)"]
      },
      boxShadow: {
        glow: "0 18px 45px rgba(229, 79, 11, 0.18)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
