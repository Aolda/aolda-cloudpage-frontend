import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 75rem;
  height: auto;
  gap: 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  width: 100%;

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;

