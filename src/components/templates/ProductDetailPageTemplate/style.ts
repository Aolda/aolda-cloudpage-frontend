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
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 120px 0;
  gap: 60px;
  box-sizing: border-box;

  > section,
  > div {
    width: 100%;
    max-width: 1200px;
  }

  ${media.tablet} {
    max-width: 744px;
    padding: 32px;
    gap: 40px;
  }

  ${media.mobile} {
    max-width: 375px;
    padding: 24px 16px;
    gap: 32px;
  }
`;

/** 제품 개요 + 문제점 + 해결책 (Figma Frame 1261158713, gap 32px) */
export const PrimaryGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 100%;

  ${media.tablet} {
    gap: 24px;
  }

  ${media.mobile} {
    gap: 20px;
  }
`;
