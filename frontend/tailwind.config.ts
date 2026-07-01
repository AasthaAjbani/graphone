import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: "#f2385a",
          dark: "#e02349",
        },
        ink: "#1a1a1f",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        mesh: "radial-gradient(at 20% 10%, rgba(242,56,90,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(99,102,241,0.10) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(242,56,90,0.08) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
