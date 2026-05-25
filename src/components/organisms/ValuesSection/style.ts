import styled from 'styled-components';

export const Section = styled.section`
  width: 75rem;
  height: 49.75rem;
  padding-top: 10rem;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const PromiseGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13.75rem, 1fr));
  gap: 1rem;
`;

export const CTAWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const SectionSpacer = styled.div`
  height: 12.5rem;
`;

