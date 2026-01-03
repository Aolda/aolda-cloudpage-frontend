import styled from 'styled-components';

export const SolutionCard = styled.div`
  padding: 2.4rem;
  border-radius: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-height: 180px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const SolutionIcon = styled.svg`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const SolutionTitle = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const SolutionDescription = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

