import styled from 'styled-components';

export const SolutionsSection = styled.section`
  padding: 2.5rem 0;
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SolutionIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 3.125rem;
  height: 3.125rem;
  margin-left: -0.625rem;
  margin-right: 0.3125rem;
  flex-shrink: 0;
  margin-bottom: 0.625rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const SolutionsGrid = styled.div`

  margin-top: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 1rem;
  width: 75rem;
`;

export const SolutionsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0rem;
  gap: 1.5rem;
  width: 75rem;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

