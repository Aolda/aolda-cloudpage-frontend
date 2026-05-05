import styled from 'styled-components';

export const StatCard = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 220px;
  align-items: center;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Background, #2A2A2A)' : '#ffffff'};
  border: 1px solid
    ${({ theme }) => (theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : '#e0e0e0')};
  border-radius: 10px;
  text-align: center;
  height: 133px;
  width: 348px;
`;

export const StatValue = styled.span`
  font-size: 2.8rem;
  font-weight: 700;
  color: #0E76C4;
`;

export const StatLabel = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

