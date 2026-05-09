'use client';

import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

/**
 * App Router에서 styled-components SSR 시 <style>이 문서에 포함되도록
 * ServerStyleSheet + useServerInsertedHTML 패턴을 사용합니다.
 * @see https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components
 */
export default function StyledComponentsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const tree = (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );

  if (typeof window !== 'undefined') {
    return tree;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {tree}
    </StyleSheetManager>
  );
}
