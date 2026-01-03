import styled, { css } from 'styled-components';

type CardTone = 'blue' | 'red';

export const ImageCard = styled.div<{ $tone: CardTone; $isBackground?: boolean }>`
  padding: ${({ $isBackground }) => ($isBackground ? '0' : '2.4rem')};
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-height: 200px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;
  position: relative;

  ${({ $tone, theme, $isBackground }) =>
    $isBackground
      ? css`
          border: none;
          background: transparent;
          box-shadow: none;
          min-height: 100%;
        `
      : $tone === 'blue'
        ? css`
            border-color: rgba(14, 99, 255, 0.2);
            background: ${theme.colors.surfaceAlt};
          `
        : css`
            border-color: rgba(255, 90, 95, 0.3);
            background: #fff7f6;
          `}
`;

export const Overlay = styled.div<{ $isBackground?: boolean }>`
  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%);
      z-index: 1;
      border-radius: 10px;
    `}
`;

export const Image = styled.img<{ $isBackground?: boolean }>`
  width: 100%;
  height: ${({ $isBackground }) => ($isBackground ? '100%' : 'auto')};
  object-fit: cover;
  border-radius: ${({ $isBackground }) => ($isBackground ? '10px' : '1.2rem')};
  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      max-height: none;
    `}
  ${({ $isBackground }) => !$isBackground && 'max-height: 200px;'}
`;

export const ImageTitle = styled.h3<{ $isBackground?: boolean }>`
  margin: 0;
  font-size: ${({ $isBackground }) => ($isBackground ? '4rem' : '1.8rem')};
  color: ${({ $isBackground, theme }) => ($isBackground ? '#ffffff' : theme.colors.text)};
  white-space: pre-line;
  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: relative;
      z-index: 2;
      font-weight: 600;
      line-height: 1.4;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      padding: 24px 28px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
    `}
`;

export const ImageDescription = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;

