import styled, { css } from 'styled-components';

type CardTone = 'blue' | 'red';

export const ImageCard = styled.div<{ $tone: CardTone }>`
  padding: 2.4rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-height: 200px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;

  ${({ $tone, theme }) =>
    $tone === 'blue'
      ? css`
          border-color: rgba(14, 99, 255, 0.2);
          background: ${theme.colors.surfaceAlt};
        `
      : css`
          border-color: rgba(255, 90, 95, 0.3);
          background: #fff7f6;
        `}
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  max-height: 200px;
`;

export const ImageTitle = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ImageDescription = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;

