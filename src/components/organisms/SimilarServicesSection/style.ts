import styled from 'styled-components';

export const SimilarServicesSection = styled.section`
  padding: 2.5rem 0;
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 13.125rem;
`;

export const ServiceIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem;
  width: 2.1875rem;
  height: 2.1875rem;
  flex-shrink: 0;
  margin-bottom: 0.625rem;
  margin-right: 0.9375rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Description = styled.p`
  
  margin: 0.625rem 0 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  width: 100%;
`;

export const ServicesGrid = styled.div`
  margin-top: 1.875rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
  gap: 1.25rem;
  width: 100%;
`;

