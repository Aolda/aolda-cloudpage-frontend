import styled from 'styled-components';
import { media } from '@/styles/theme';

export const SolutionsSection = styled.section`
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

export const SolutionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 100%;

  ${media.desktop} {
    gap: 16px;
  }

  /* Frame 1261158726 — vertical gap between solution rows */
  ${media.tablet} {
    gap: 12px;
    max-width: 680px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;

export const SolutionsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  width: 100%;

  ${media.desktop} {
    gap: 24px;
    justify-content: flex-start;
  }

  /* Frame 1261158734/8735 — horizontal card gap 20 */
  ${media.tablet} {
    gap: 20px;
    max-width: 680px;
  }

  ${media.mobile} {
    flex-direction: column;
    gap: 8px;
  }
`;
