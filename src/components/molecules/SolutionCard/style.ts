import styled from 'styled-components';

export const SolutionCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0rem;
  gap: 0.75rem;
  width: 24rem;
  height: 7.9375rem;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Background, #2A2A2A)' : 'transparent'};
  border: 1px solid ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.border};
  border-radius: 0.75rem;
  flex: none;
`;

export const SolutionTitle = styled.h3`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary500};
  text-align: center;
  word-break: keep-all;
`;

export const SolutionDescription = styled.p`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : theme.colors.textMuted)};
  word-break: keep-all;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

