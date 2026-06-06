import styled, { keyframes } from 'styled-components';
import { media } from '@/styles/theme';

export const Section = styled.section`
  width: 1200px;
  max-width: 100%;
  height: auto;
  min-height: 620px;
  gap: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;

  ${media.tablet} {
    width: 100%;
    max-width: 680px;
    min-height: auto;
    gap: 20px;
    overflow: visible;
  }

  ${media.mobile} {
    width: 100%;
    max-width: 100%;
    min-height: auto;
    gap: 12px;
    align-items: stretch;
    overflow: visible;
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

/** 데스크톱 캐러셀 */
export const CarouselWrap = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.belowDesktop} {
    display: none;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 24px;
  width: fit-content;
  position: relative;
  animation: ${slideRight} 15s linear infinite;

  > * {
    flex: 0 0 360px;
    width: 360px;
    box-sizing: border-box;
  }

  &:nth-child(2) {
    margin-left: 120px;
  }
`;

/** 태블릿 744px — 2열 × 3행 그리드 */
export const PartnerGrid = styled.div`
  display: none;
  width: 100%;
  box-sizing: border-box;

  ${media.belowDesktop} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  ${media.mobile} {
    gap: 8px;

    > * {
      min-width: 0;
    }
  }
`;
