'use client';

import Button from '@/components/atoms/Button';
import { useThemeMode } from '@/contexts/ThemeModeContext';

const ThemeToggleButton = () => {
  const { themeMode, toggleThemeMode } = useThemeMode();
  const isDarkMode = themeMode === 'dark';

  return (
    <Button
      label={isDarkMode ? '라이트 모드' : '다크 모드'}
      onClick={toggleThemeMode}
      size="md"
      variant="secondary"
    />
  );
};

export default ThemeToggleButton;

