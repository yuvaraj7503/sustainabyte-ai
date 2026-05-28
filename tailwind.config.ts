import type { Config } from "tailwindcss";
import { theme } from "./lib/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapping from theme.ts (Navy & Green palette)
        primary: theme.colors.navyDark,
        secondary: theme.colors.navy,
        accent: theme.colors.accentGreen,
        "accent-hover": theme.colors.brightGreen,
        cyber: theme.colors.cyberGreen,

        // UI & Backgrounds
        "bg-dark": theme.colors.navyDark,
        "bg-light": theme.colors.lightBg,
        white: theme.colors.white,
        gray: theme.colors.gray,

        // Using common semantic names
        "text-primary": theme.colors.white,
        "text-secondary": theme.colors.gray,
      },
      fontFamily: {
        sora: [theme.fonts.sora],
        dm: [theme.fonts.dmSans],
      },
    },
  },
  plugins: [],
};

export default config;
