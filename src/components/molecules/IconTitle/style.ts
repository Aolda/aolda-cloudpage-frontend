import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Container = styled.div<{ $align?: 'left' | 'center' }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align = 'left' }) => $align};
  padding: 0;
  width: 100%;
`;

export const IconTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${media.tablet} {
    gap: 12px;
    align-items: center;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;

export const IconWrapper = styled.span<{ $size?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $size = 29 }) => $size}px;
  height: ${({ $size = 29 }) => $size}px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* Title-H2 icon — desktop 29×29 */
  ${media.desktop} {
    width: ${({ $size = 29 }) => $size}px;
    height: ${({ $size = 29 }) => $size}px;
  }

  ${media.tablet} {
    width: 24px;
    height: 24px;
  }

  ${media.mobile} {
    width: 19px;
    height: 19px;
  }
`;

export const TitleText = styled.h2`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: #232527;
  white-space: pre-line;

  /* Title-H2 — desktop 24/29/700 */
  ${media.desktop} {
    font-size: 24px;
    line-height: 29px;
  }

  ${media.tablet} {
    font-size: 20px;
    line-height: 24px;
  }

  ${media.mobile} {
    font-size: 16px;
    line-height: 19px;
  }
`;
