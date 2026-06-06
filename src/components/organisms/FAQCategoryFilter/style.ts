import styled from 'styled-components';
import { media } from '@/styles/theme';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  width: 1200px;
  height: 48px;
  flex: none;

  ${media.tablet} {
    width: 100%;
    max-width: 680px;
    height: 48px;
  }
`;
