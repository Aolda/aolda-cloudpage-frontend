import styled from 'styled-components';

export const ProductListContainer = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const SearchSection = styled.div`
  width: 100%;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const SectionIcon = styled.span`
  display: inline-block;
  width: 24.85px;
  height: 21.57px;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 231px);
  gap: 24px;
  justify-content: flex-start;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 231px);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 231px);
  }
  
  @media (max-width: 500px) {
    grid-template-columns: 231px;
  }
`;

