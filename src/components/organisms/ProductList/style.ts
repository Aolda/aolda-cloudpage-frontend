import styled from 'styled-components';

export const ProductListContainer = styled.div`
  flex: 1;
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

  &::before {
    content: '❤️';
    font-size: 1.6rem;
  }
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.6rem;
`;

