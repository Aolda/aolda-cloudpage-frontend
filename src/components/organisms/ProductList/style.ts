import styled from 'styled-components';

export const ProductListContainer = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SearchSection = styled.div`
  width: 100%;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
`;

/* Frame 1261158714 */
export const SectionTitle = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 0.75rem;
  height: 1.8125rem;
  margin: 0;
  flex: none;
  flex-grow: 0;
`;

/* iconamoon:heart — 29×29 */
export const SectionIcon = styled.span`
  position: relative;
  display: block;
  width: 1.8125rem;
  height: 1.8125rem;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

/* Vector */
export const HeartVector = styled.svg`
  position: absolute;
  left: 14.37%;
  right: 14.62%;
  top: 19.13%;
  bottom: 19.23%;
  color: ${({ theme }) => theme.colors.primary500};
`;

/* Text */
export const SectionTitleText = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 0.625rem;
  height: 1.8125rem;
  flex: none;
  order: 1;
  flex-grow: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  text-align: center;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FAFAFA' : theme.colors.text)};
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 14.4375rem);
  gap: 1.5rem;
  justify-content: flex-start;

  @media (max-width: 75rem) {
    grid-template-columns: repeat(3, 14.4375rem);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, 14.4375rem);
  }

  @media (max-width: 31.25rem) {
    grid-template-columns: 14.4375rem;
  }
`;
