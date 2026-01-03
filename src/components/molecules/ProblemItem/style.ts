import styled from 'styled-components';

export const ProblemItem = styled.div`
  display: flex;
  gap: 1.6rem;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

export const ProblemIcon = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 0.4rem;
`;

export const ProblemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ProblemTitle = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const ProblemList = styled.ul`
  margin: 0;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ProblemListItem = styled.li`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

