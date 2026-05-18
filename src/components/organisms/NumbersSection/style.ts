import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  height: auto;
  gap: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;

  ${media.tablet} {
    max-width: 680px;
    gap: 20px;
  }

  ${media.mobile} {
    width: 100%;
    max-width: 100%;
    gap: 12px;
    align-items: stretch;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
  width: 100%;

  ${media.tablet} {
    gap: 12px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;
