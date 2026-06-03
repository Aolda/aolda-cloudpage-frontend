import styled from 'styled-components';

export const ProblemsSection = styled.section`
  padding: 2.5rem 0;
  max-width: 75rem;
  width: 100%;
  margin-bottom: -2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProblemIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem;
  width: 2.1875rem;
  height: 2.1875rem;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProblemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
`;

