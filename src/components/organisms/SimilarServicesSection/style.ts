import styled from 'styled-components';

export const SimilarServicesSection = styled.section`
  padding: 4rem 0;
`;

export const ServiceIcon = styled.svg`
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.8rem;
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

