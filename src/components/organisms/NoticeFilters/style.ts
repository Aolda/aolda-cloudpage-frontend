import styled from 'styled-components';
import { media } from '@/styles/theme';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem;
  gap: 0.75rem;
  height: 1.9375rem;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-bottom: -1.875rem;

  ${media.tablet} {
    width: 100%;
    max-width: 664px;
    height: auto;
    gap: 12px;
    margin-bottom: 0;
  }

  ${media.mobile} {
    width: 100%;
    max-width: 319px;
    height: auto;
    gap: 12px;
    margin-bottom: 0;
  }
`;

