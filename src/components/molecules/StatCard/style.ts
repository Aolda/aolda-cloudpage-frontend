import styled from 'styled-components';

export const StatCard = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 13.75rem;
  align-items: center;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Background, #2A2A2A)' : '#ffffff'};
  border: ${({ theme }) =>
    theme.mode === 'dark' ? `0.125rem solid ${theme.colors.border}` : '1px solid #e0e0e0'};
  border-radius: 0.625rem;
  text-align: center;
  height: 8.3125rem;
  width: 21.75rem;
`;

export const StatValue = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.statAccent};
`;

export const StatLabel = styled.span`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.text};
`;

