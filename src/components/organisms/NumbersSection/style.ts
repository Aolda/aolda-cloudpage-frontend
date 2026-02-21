import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  height: auto;
  gap: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

