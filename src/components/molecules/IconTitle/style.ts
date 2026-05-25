import styled from 'styled-components';

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
  gap: 0.75rem;
`;

export const IconWrapper = styled.span<{ $size?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8125rem;
  height: 1.8125rem;
  flex-shrink: 0;

  img {
    width: 120%;
    height: 120%;
    object-fit: contain;
  }
`;

export const TitleText = styled.h2`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 140%;
  letter-spacing: 0;
  font-style: normal;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : theme.colors.text)};
  white-space: pre-line;
`;
