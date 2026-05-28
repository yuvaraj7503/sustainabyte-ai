/**
 * Sustainabyte Theme Constants
 * This file serves as a central source of truth for the application's design system.
 * It mirrors the values defined in app/globals.css for use in Framer Motion, 
 * inline styles, and other programmatic UI logic.
 */

export const theme = {
  colors: {
    // Primary Brand Colors
    navyDark: '#0D1B3E',      // Base background color
    navy: '#1A2D5A',          // Secondary background / UI elements
    accentGreen: '#4DB846',   // New primary brand green
    brightGreen: '#62C55C',   // Brighter accent for hovers
    tealDark: '#1A3A4A',      // Dark teal accent
    cyberGreen: '#4DB846',    // Synchronized with primary brand green

    // UI Colors
    white: '#FFFFFF',
    gray: '#B0BEC5',          // Secondary text / description color
    lightBg: '#F5F7FA',       // Light mode fallback/bg
    cardBg: 'rgba(255, 255, 255, 0.05)', // Transparent card background

    // Status Colors (example additions)
    error: '#FF5252',
    success: '#3DD68C',
    warning: '#FFC107',
    info: '#2196F3',
  },

  fonts: {
    sora: "'Sora', sans-serif",
    dmSans: "'DM Sans', sans-serif",
  },

  animations: {
    duration: {
      fast: 0.2,
      normal: 0.4,
      slow: 0.8,
    },
    ease: {
      standard: [0.4, 0.0, 0.2, 1],
      decelerate: [0.0, 0.0, 0.2, 1],
      accelerate: [0.4, 0.0, 1, 1],
    }
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
} as const;

export type Theme = typeof theme;
export type ThemeColors = keyof typeof theme.colors;
export type ThemeFonts = keyof typeof theme.fonts;

export default theme;
