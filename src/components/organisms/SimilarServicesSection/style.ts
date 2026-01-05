import styled from 'styled-components';

export const SimilarServicesSection = styled.section`
  padding: 4rem 0;
`;

export const Description = styled.p`
  margin: 2rem 0 0;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

export const ServicesGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

