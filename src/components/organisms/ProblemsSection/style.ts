import styled from 'styled-components';

export const ProblemsSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  width: 100%;
  margin-bottom: -40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProblemIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.8rem;
  width: 35px;
  height: 35px;
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

