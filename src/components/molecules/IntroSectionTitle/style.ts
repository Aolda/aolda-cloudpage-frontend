import styled, { css } from 'styled-components';

export const Container = styled.div<{ $align: 'left' | 'center' }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  width: 100%;
  text-align: ${({ $align }) => $align};
  ${({ $align }) =>
    $align === 'center' &&
    css`
      align-items: center;
    `}
`;

export const TopBar = styled.div<{ $align: 'left' | 'center' }>`
  width: 3rem;
  height: 0.1875rem;
  background: ${({ theme }) => (theme.mode === 'dark' ? '#FAFAFA' : '#777777')};
  border-radius: 0.09375rem;
  border: none;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 0.75rem;
  align-self: ${({ $align }) => ($align === 'center' ? 'center' : 'flex-start')};
`;
  
export const ImageContainer = styled.div`
  position: relative;
  border-radius: 0.625rem;
  overflow: hidden;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 25rem;
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
  padding: 1.25rem;
  color: #ffffff;
  text-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.35);
  background: linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.2));
`;

export const Title = styled.h2<{ $color?: string }>`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 140%;
  letter-spacing: 0;
  font-style: normal;
  color: ${({ $color, theme }) => {
    const normalized = ($color ?? '').replace(/\s/g, '').toLowerCase();
    const isDarkOverride =
      normalized === 'rgb(0,0,0)' ||
      normalized === 'rgb(3,3,3)' ||
      normalized === '#000000' ||
      normalized === '#030303' ||
      normalized === '#232527';

    if (theme.mode === 'dark' && (!$color || isDarkOverride)) {
      return '#FAFAFA';
    }

    return $color ?? '#232527';
  }};
  white-space: pre-line;
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p<{ $color?: string }>`
  margin: 0;
  font-size: 1rem;
  color: ${({ $color, theme }) => $color ?? theme.colors.textMuted};
  max-width: 37.5rem;
`;

