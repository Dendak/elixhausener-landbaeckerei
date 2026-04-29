import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crust: {
          50: "#fbf6ee",
          100: "#f5e9d3",
          200: "#ead0a0",
          300: "#deb46d",
          400: "#cf9a4a",
          500: "#b97e35",
          600: "#9c632a",
          700: "#7c4c25",
          800: "#5e3a20",
          900: "#3f2716",
        },
        rye: {
          50: "#f7f3ed",
          100: "#ede4d2",
          500: "#8a6a3b",
          900: "#3a2a17",
        },
        flour: "#f9f5ef",
        ink: "#1a1410",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
