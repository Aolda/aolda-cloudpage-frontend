import styled from 'styled-components';
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
  gap: 64px;
  width: 100%;
  position: relative;
  justify-content: flex-start;

  > * {
    flex: 0 0 400px;
    width: 400px;
    box-sizing: border-box;
  }

  &:nth-child(2) {
    justify-content: flex-end;
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
