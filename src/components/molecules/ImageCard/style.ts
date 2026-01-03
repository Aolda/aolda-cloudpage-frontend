import styled, { css } from 'styled-components';

type CardTone = 'blue' | 'red';

export const ImageCard = styled.div<{ $tone: CardTone; $isBackground?: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ $isBackground }) => ($isBackground ? 'column' : 'row')};
  justify-content: ${({ $isBackground }) => ($isBackground ? 'center' : 'flex-start')};
  align-items: ${({ $isBackground }) => ($isBackground ? 'center' : 'center')};
  padding: ${({ $isBackground }) => ($isBackground ? '0' : '2rem')};
  gap: ${({ $isBackground }) => ($isBackground ? '0' : '2rem')};
  width: ${({ $isBackground }) => ($isBackground ? '100%' : '100%')};
  min-height: ${({ $isBackground }) => ($isBackground ? '100%' : 'auto')};
  background: ${({ $isBackground }) => ($isBackground ? 'transparent' : '#FFFFFF')};
  border: none;
  border-radius: ${({ $isBackground }) => ($isBackground ? '10px' : '0')};
  flex: none;
  order: 0;
  flex-grow: ${({ $isBackground }) => ($isBackground ? '1' : '0')};
  overflow: hidden;
  position: relative;
  width: 360px;
  height: 120px;
  ${({ $isBackground }) =>
    $isBackground &&
    css`
      box-shadow: none;
      min-height: 100%;
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

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img<{ $isBackground?: boolean }>`
  width: ${({ $isBackground }) => ($isBackground ? '100%' : '100%')};
  height: ${({ $isBackground }) => ($isBackground ? '100%' : '100%')};
  object-fit: cover;
  border-radius: ${({ $isBackground }) => ($isBackground ? '10px' : '8px')};
  background: #333333;
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
  gap: 0.4rem;
  flex: 1;
`;

export const ImageTitle = styled.h3<{ $isBackground?: boolean }>`
  margin: 0;
  font-size: ${({ $isBackground }) => ($isBackground ? '4rem' : '1.8rem')};
  font-weight: 700;
  color: ${({ $isBackground, theme }) => ($isBackground ? '#ffffff' : '#333333')};
  white-space: pre-line;
  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: relative;
      z-index: 2;
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
  color: #999999;
  line-height: 1.5;
`;

export const ImagePeriod = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #999999;
  line-height: 1.5;
`;

