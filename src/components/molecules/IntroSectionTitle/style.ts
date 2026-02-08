import styled, { css } from 'styled-components';

export const Container = styled.div<{ $align: 'left' | 'center' }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: ${({ $align }) => $align};
  ${({ $align }) =>
    $align === 'center' &&
    css`
      align-items: center;
    `}
  
`;

export const TopBar = styled.div<{ $align: 'left' | 'center' }>`
  width: 50px;
  height: 3px;
  background-color:rgb(118, 120, 122);
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
  font-size: 30px;
  line-height: 1.2;
  gap: 12px;
  color: ${({ $color }) => $color ?? 'inherit'};
  white-space: pre-line;
  display: block;
`;

export const Description = styled.p`
  margin: 0;
  margin-top: 12px;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 600px;
`;

