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
  gap: 1.2rem;

  ${media.tablet} {
    gap: 12px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;

export const IconWrapper = styled.span<{ $size?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size = 29 }) => $size}px;
  height: ${({ $size = 29 }) => $size}px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
  font-size: 24px;
  line-height: 140%;
  color: #232527;
  white-space: pre-line;

  ${media.tablet} {
    font-size: 20px;
    line-height: 24px;
  }

  ${media.mobile} {
    font-size: 16px;
    line-height: 19px;
  }
`;
