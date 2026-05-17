import styled from 'styled-components';

export const SolutionCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  gap: 12px;
  width: 384px;
  height: 127px;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Background, #2A2A2A)' : 'transparent'};
  border: 1px solid ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.border};
  border-radius: 12px;
  flex: none;
`;

export const SolutionTitle = styled.h3`
  width: auto;
  height: 29px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #1A8EE5;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-align: center;
`;

export const SolutionDescription = styled.p`
  width: auto;
  height: auto;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  text-align: center;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : theme.colors.textMuted)};
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

