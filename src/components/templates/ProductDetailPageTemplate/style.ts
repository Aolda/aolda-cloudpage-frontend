import styled from 'styled-components';
import { media } from '@/styles/theme';

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  background: #fefefe;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  /* Frame 1261158712 — desktop 1440, inner 1200 */
  ${media.desktop} {
    max-width: 1440px;
    width: 1440px;
    padding: 60px 120px 0;
    gap: 60px;

    > section,
    > div {
      width: 100%;
      max-width: 1200px;
    }
  }

  /* Frame 1261158712 — tablet 744, inner 680 */
  ${media.tablet} {
    max-width: 744px;
    width: 100%;
    padding: 32px;
    gap: 40px;

    > section,
    > div {
      max-width: 680px;
    }
  }

  ${media.mobile} {
    max-width: 375px;
    padding: 24px 16px;
    gap: 32px;
  }
`;

/** 제품 개요 + 문제점 + 해결책 (Figma Frame 1261158713) */
export const PrimaryGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  ${media.desktop} {
    gap: 32px;
  }

  ${media.tablet} {
    gap: 24px;
    max-width: 680px;
  }

  ${media.mobile} {
    gap: 20px;
  }
`;
