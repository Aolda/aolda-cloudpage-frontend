import styled, { css } from 'styled-components';
import { media } from '@/styles/theme';

export const Container = styled.div<{ $align: 'left' | 'center' }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 100%;
  text-align: ${({ $align }) => $align};
  box-sizing: border-box;

  ${({ $align }) =>
    $align === 'center' &&
    css`
      align-items: center;
    `}

  ${media.tablet} {
    align-items: center;
    text-align: center;
  }

  ${media.mobile} {
    align-items: flex-start;
    text-align: left;
  }
`;

export const TopBar = styled.div<{ $align: 'left' | 'center' }>`
  width: 48px;
  height: 3px;
  background: #777777;
  border-radius: 1.5px;
  border: none;
  flex: none;
  margin-bottom: 12px;
  align-self: ${({ $align }) => ($align === 'center' ? 'center' : 'flex-start')};

  ${media.tablet} {
    width: 24px;
    height: 2px;
    margin-bottom: 12px;
    align-self: center;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  filter: saturate(0.95);
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.2));
`;

export const Title = styled.h2<{ $color?: string }>`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
  color: ${({ $color }) => $color ?? '#232527'};
  white-space: pre-line;
  display: block;
  width: 100%;
  margin-bottom: 24px;

  ${media.tablet} {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 12px;
    text-align: center;
  }

  ${media.mobile} {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
    text-align: left;
  }
`;

export const Description = styled.p<{ $color?: string }>`
  margin: 0;
  font-size: 1.6rem;
  line-height: 150%;
  color: ${({ $color, theme }) => $color ?? theme.colors.textMuted};
  max-width: 600px;

  ${media.tablet} {
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    max-width: 486px;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
    text-align: left;
    max-width: 100%;
  }
`;
