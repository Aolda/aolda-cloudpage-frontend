import styled from 'styled-components';

export const SolutionsSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SolutionIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 50px;
  margin-left: -10px;
  margin-right: 5px;
  flex-shrink: 0;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const SolutionsGrid = styled.div`

  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1200px;
`;

export const SolutionsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 1200px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

