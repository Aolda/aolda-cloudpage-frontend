import styled, { css } from 'styled-components';
import { media } from '@/styles/theme';

type CardTone = 'blue' | 'red';

export const ImageCard = styled.div<{ $tone: CardTone; $isBackground?: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: ${({ $isBackground }) => ($isBackground ? 'flex-start' : 'center')};
  padding: ${({ $isBackground }) => ($isBackground ? '48px' : '2rem')};
  gap: ${({ $isBackground }) => ($isBackground ? '10px' : '2rem')};
  width: ${({ $isBackground }) => ($isBackground ? '792px' : '360px')};
  min-height: ${({ $isBackground }) => ($isBackground ? '452px' : 'auto')};
  height: ${({ $isBackground }) => ($isBackground ? '452px' : '120px')};
  background: ${({ $isBackground }) => ($isBackground ? 'transparent' : '#fefefe')};
  border: ${({ $isBackground }) => ($isBackground ? 'none' : '1px solid #efefef')};
  border-radius: ${({ $isBackground }) => ($isBackground ? '12px' : '8px')};
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

  ${media.tablet} {
    width: ${({ $isBackground }) => ($isBackground ? '100%' : '100%')};
    max-width: ${({ $isBackground }) => ($isBackground ? '680px' : 'none')};
    min-height: ${({ $isBackground }) => ($isBackground ? '320px' : 'auto')};
    height: ${({ $isBackground }) => ($isBackground ? '320px' : '104px')};
    padding: ${({ $isBackground }) => ($isBackground ? '32px' : '12px')};
    gap: ${({ $isBackground }) => ($isBackground ? '10px' : '12px')};
    border-radius: ${({ $isBackground }) => ($isBackground ? '12px' : '8px')};
  }
`;

export const Overlay = styled.div<{ $isBackground?: boolean }>`
  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
      z-index: 1;
      border-radius: 12px;
    `}
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    width: 80px;
    height: 80px;
  }
`;

export const Image = styled.img<{ $isBackground?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ $isBackground }) => ($isBackground ? '12px' : '12px')};
  background: ${({ $isBackground }) => ($isBackground ? 'transparent' : '#232527')};

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
  gap: 4px;
  flex: 1;
  justify-content: space-between;
  min-height: 80px;

  ${media.tablet} {
    gap: 4px;
    min-height: 80px;
  }
`;

export const ImageTitle = styled.h3<{ $isBackground?: boolean }>`
  margin: 0;
  font-size: ${({ $isBackground }) => ($isBackground ? '4rem' : '1.8rem')};
  font-weight: 700;
  color: ${({ $isBackground }) => ($isBackground ? '#ffffff' : '#181818')};
  white-space: pre-line;

  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: relative;
      z-index: 2;
      line-height: 100%;
      padding: 48px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
    `}

  ${media.tablet} {
    font-size: ${({ $isBackground }) => ($isBackground ? '24px' : '16px')};
    line-height: ${({ $isBackground }) => ($isBackground ? '29px' : '19px')};
    padding: ${({ $isBackground }) => ($isBackground ? '32px' : '0')};
  }
`;

export const ImageDescription = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: #777777;
  line-height: 150%;

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
  }
`;

export const ImagePeriod = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #777777;
  line-height: 150%;

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
  }
`;
