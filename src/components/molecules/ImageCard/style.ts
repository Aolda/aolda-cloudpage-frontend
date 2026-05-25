import styled, { css } from 'styled-components';

type CardTone = 'blue' | 'red';

export const ImageCard = styled.div<{
  $tone: CardTone;
  $isBackground?: boolean;
  $solidThumbnail?: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: ${({ $isBackground }) => ($isBackground ? 'flex-start' : 'center')};
  padding: ${({ $isBackground }) => ($isBackground ? '3rem' : '1.25rem')};
  gap: ${({ $isBackground }) => ($isBackground ? '0.625rem' : '1.25rem')};
  width: ${({ $isBackground }) => ($isBackground ? '49.5rem' : '22.5rem')};
  min-height: ${({ $isBackground }) => ($isBackground ? '28.25rem' : 'auto')};
  height: ${({ $isBackground }) => ($isBackground ? '28.25rem' : '7.5rem')};
  background: ${({ $isBackground, theme }) =>
    $isBackground
      ? 'transparent'
      : theme.mode === 'dark'
        ? 'var(--Mode-Background, #2A2A2A)'
        : '#FFFFFF'};
  border: ${({ $isBackground, theme, $solidThumbnail }) =>
    $isBackground
      ? 'none'
      : $solidThumbnail
        ? '1px solid transparent'
        : theme.mode === 'dark'
          ? '1px solid var(--Mode-Border, #636363)'
          : 'none'};
  border-radius: ${({ $isBackground }) => ($isBackground ? '0.75rem' : '0')};
  flex: none;
  order: 0;
  flex-grow: 0;
  overflow: hidden;
  position: relative;
  ${({ $isBackground }) =>
    $isBackground &&
    css`
      box-shadow: none;
    `}
`;

export const Overlay = styled.div<{ $isBackground?: boolean }>`
  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
      z-index: 1;
      border-radius: 0.75rem;
    `}
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 7.5rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/** Figma Rectangle 7 — 파트너 카드 등 이미지 대체 */
export const SolidThumbnail = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 0.75rem;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? '#FAFAFA' : '#232527'};
`;

export const Image = styled.img<{ $isBackground?: boolean }>`
  width: ${({ $isBackground }) => ($isBackground ? '100%' : '100%')};
  height: ${({ $isBackground }) => ($isBackground ? '100%' : '100%')};
  object-fit: cover;
  border-radius: ${({ $isBackground }) => ($isBackground ? '0.75rem' : '0.5rem')};
  background: ${({ $isBackground, theme }) =>
    $isBackground ? 'transparent' : theme.mode === 'dark' ? '#FAFAFA' : '#ffffff'};
  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      max-height: none;
    `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`;

export const ImageTitle = styled.h3<{ $isBackground?: boolean }>`
  margin: 0;
  font-size: ${({ $isBackground }) => ($isBackground ? '2.5rem' : '1.125rem')};
  font-weight: 700;
  color: ${({ $isBackground, theme }) =>
    $isBackground ? '#ffffff' : theme.mode === 'dark' ? theme.colors.text : '#333333'};
  white-space: pre-line;
  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: relative;
      z-index: 2;
      line-height: 100%;
      padding: 3rem;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
    `}
`;

export const ImageDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.textMuted : '#999999')};
  line-height: 1.5;
`;

export const ImagePeriod = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.textMuted : '#999999')};
  line-height: 1.5;
`;

