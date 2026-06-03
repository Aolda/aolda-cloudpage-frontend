'use client';

import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import { appThemes, defaultThemeMode, ThemeMode } from '@/styles/theme';
import { ThemeModeProvider } from '@/contexts/ThemeModeContext';

const STORAGE_KEY = 'aolda-theme-mode';

const getInitialThemeMode = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return defaultThemeMode;
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(defaultThemeMode);

  useEffect(() => {
    setThemeMode(getInitialThemeMode());
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, themeMode);
    }
  }, [themeMode]);

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => appThemes[themeMode], [themeMode]);

  return (
    <html lang="ko" data-theme={themeMode}>
      <body>
        <ThemeModeProvider value={{ themeMode, toggleThemeMode }}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </ThemeModeProvider>
      </body>
    </html>
  );
}

