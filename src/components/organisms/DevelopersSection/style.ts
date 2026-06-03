import styled from 'styled-components';

export const DevelopersSection = styled.section`
  padding: 2.5rem 0;
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DeveloperIcon = styled.span`
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

export const DevelopersGrid = styled.div`
  margin-top: 1.875rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

