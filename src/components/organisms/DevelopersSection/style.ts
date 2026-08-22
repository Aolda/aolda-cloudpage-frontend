import styled from 'styled-components';
import { media } from '@/styles/theme';

export const DevelopersSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;

  ${media.desktop} {
    gap: 20px;
  }

  ${media.tablet} {
    gap: 16px;
    max-width: 680px;
  }

  ${media.mobile} {
    gap: 12px;
  }
`;

export const DevelopersGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;

  /* desktop: wrap gap 24, width 1200 */
  ${media.desktop} {
    gap: 24px;
    width: 1200px;
    max-width: 1200px;
  }

  ${media.tablet} {
    gap: 20px;
  }

  ${media.mobile} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
`;
