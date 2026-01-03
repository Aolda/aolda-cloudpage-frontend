import styled from 'styled-components';

export const ProblemsSection = styled.section`
  padding: 4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ProblemIcon = styled.svg`
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.8rem;
`;

export const ProblemsList = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

