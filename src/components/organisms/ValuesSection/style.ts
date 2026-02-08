import styled from 'styled-components';

export const Section = styled.section`
  width: 1200px;
  height: 796px;
  padding-top: 160px;
  gap: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const PromiseGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.6rem;
`;

export const CTAWrapper = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const SectionSpacer = styled.div`
  height: 20rem;
`;

