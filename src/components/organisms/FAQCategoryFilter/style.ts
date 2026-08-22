import styled from 'styled-components';
import { media } from '@/styles/theme';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  width: 100%;
  max-width: 1200px;
  height: 48px;
  flex: none;

  ${media.tablet} {
    max-width: 680px;
    width: 100%;
    height: 48px;
  }

  ${media.mobile} {
    max-width: 343px;
    height: auto;
    min-height: 32px;
    align-items: flex-start;
  }
`;
