import 'styled-components';

export type ThemeMode = 'light' | 'dark';

const lightColors = {
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

const darkColors = {
  background: '#2A2A2A',
  backgroundAlt: '#2A2A2A',
  surface: '#2A2A2A',
  surfaceAlt: '#2A2A2A',
  surfaceMuted: '#2A2A2A',
  primary: '#4D8DFF',
  primaryAccent: '#79AEFF',
  primary500: '#52A3EB',
  primary600: '#2E7FC3',
  secondary: '#FF7A82',
  secondaryAccent: '#FF9AA2',
  text: '#EDF2FF',
  textMuted: '#B8C2DA',
  gray500: '#8A93A7',
  gray600: '#9AA3B8',
  border: '#2A3A5A',
  borderStrong: '#3B4F75',
  gradientStart: '#121B2F',
  gradientCenter: '#17253D',
  gradientEnd: '#1D2F4C',
  accentSky: '#5A8FD4',
  accentSun: '#CDAA82',
  accentGlow: 'rgba(77, 141, 255, 0.24)',
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

const baseTheme = {
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

export interface AppTheme {
  mode: ThemeMode;
  colors: Record<keyof typeof lightColors, string>;
  fontSize: typeof fontSize;
  layout: typeof baseTheme.layout;
  typography: typeof baseTheme.typography;
  shadows: Record<keyof typeof baseTheme.shadows, string>;
}

export const lightTheme: AppTheme = {
  mode: 'light',
  ...baseTheme,
  colors: lightColors,
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  ...baseTheme,
  colors: darkColors,
  shadows: {
    card: '0 16px 36px rgba(0, 0, 0, 0.45)',
    soft: '0 10px 30px rgba(0, 0, 0, 0.38)',
    borderGlow: '0 0 0 1px rgba(77, 141, 255, 0.28)',
  },
};

export const theme = lightTheme;

export const colors = lightColors;

export const themeMap = {
  light: lightTheme,
  dark: darkTheme,
};

export const appThemes = themeMap;

export const defaultThemeMode: ThemeMode = 'light';

export const createTheme = (mode: ThemeMode): AppTheme => themeMap[mode];

export const appTheme = {
  colors,
  ...baseTheme,
} as const;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}


