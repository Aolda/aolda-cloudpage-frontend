import 'styled-components';

export const colors = {
  background: '#F6F8FF',
  backgroundAlt: '#EEF3FF',
  surface: '#FFFFFF',
  surfaceAlt: '#F1F5FF',
  surfaceMuted: '#F8FAFF',
  primary: '#0E63FF',
  primaryAccent: '#2B8CFF',
  primary500: '#1A8EE5',
  primary600: '#1572B8',
  secondary: '#FF5A5F',
  secondaryAccent: '#FF8A94',
  text: '#1A1F36',
  textMuted: '#5B6275',
  gray500: '#A0A0A0',
  gray600: '#777777',
  border: '#E2E2E2',
  borderStrong: '#C9D4EE',
  gradientStart: '#FFFFFF',
  gradientCenter: '#F4F7FF',
  gradientEnd: '#E9F0FF',
  accentSky: '#A8D8FF',
  accentSun: '#FFE3C1',
  accentGlow: 'rgba(14, 99, 255, 0.15)',
} as const;

export const fontSize = {
  display1: '4.5rem', // 72px
  h1: '3rem',         // 48px
  h2: '2rem',         // 32px
  h3: '1.5rem',       // 24px
  body1: '1.25rem',   // 20px
  body2: '1.125rem',  // 18px
  base: '1rem',       // 16px
  small: '0.875rem',  // 14px
  smaller: '0.75rem', // 12px
} as const;

export const theme = {
  colors,
  fontSize,
  layout: {
    maxWidth: '1280px',
    contentWidth: '1040px',
    sectionSpacing: '140px',
  },
  typography: {
    fontFamily: "'Pretendard Variable', 'Noto Sans KR', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'Space Mono', monospace",
  },
  shadows: {
    card: '0 18px 40px rgba(15, 35, 95, 0.12)',
    soft: '0 8px 24px rgba(20, 34, 68, 0.14)',
    borderGlow: '0 0 0 1px rgba(14, 99, 255, 0.15)',
  },
} as const;

export type AppTheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}


