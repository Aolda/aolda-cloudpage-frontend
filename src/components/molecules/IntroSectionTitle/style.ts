import styled, { css } from 'styled-components';

export const Container = styled.div<{ $align: 'left' | 'center' }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  text-align: ${({ $align }) => $align};
  ${({ $align }) =>
    $align === 'center' &&
    css`
      align-items: center;
    `}
`;

export const TopBar = styled.div<{ $align: 'left' | 'center' }>`
  width: 48px;
  height: 3px;
  background: #777777;
  border-radius: 1.5px;
  border: none;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 12px;
  align-self: ${({ $align }) => ($align === 'center' ? 'center' : 'flex-start')};
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
  background: linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.2));
`;

export const Title = styled.h2<{ $color?: string }>`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
  letter-spacing: 0;
  font-style: normal;
  color: ${({ $color }) => $color ?? '#232527'};
  white-space: pre-line;
  display: block;
  width: 100%;
  margin-bottom: 24px;
`;

export const Description = styled.p<{ $color?: string }>`
  margin: 0;
  font-size: 1.6rem;
  color: ${({ $color, theme }) => $color ?? theme.colors.textMuted};
  max-width: 600px;
`;

