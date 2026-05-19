import styled from 'styled-components';
import { media } from '@/styles/theme';

export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #FFFFFF;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  /* Group 6 - 배경 그라데이션 그룹 */
  &::before {
    content: '';
    position: absolute;
    width: 3646.25px;
    height: 3121.35px;
    left: 50%;
    transform: translateX(calc(-50% + 103.13px));
    top: -678px;
    pointer-events: none;
    z-index: 0;
  }

  /* Ellipse 11 */
  &::after {
    content: '';
    position: absolute;
    width: 338.08px;
    height: 338.08px;
    left: 50%;
    transform: translateX(calc(-50% + 819.92px - 720px));
    top: -75.67px;
    background: radial-gradient(49.94% 49.94% at 49.94% 50.06%, #0033FF 0%, #9FD6FF 100%);
    opacity: 0.59;
    filter: blur(31px);
    pointer-events: none;
    z-index: 0;
  }
`;

/** 배경 장식 — 스크롤 영역 밖으로 나가지 않도록 클리핑 */
export const DecorationLayer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

export const BackgroundDecorations = styled.div`
  position: absolute;
  width: 3646.25px;
  height: 3121.35px;
  left: 50%;
  transform: translateX(calc(-50% + 103.13px));
  top: -678px;
  pointer-events: none;
  z-index: 0;

  /* Ellipse 10 */
  &::before {
    content: '';
    position: absolute;
    width: 1546.84px;
    height: 1546.84px;
    left: 50%;
    transform: translateX(calc(-50% + 493.5px)) rotate(55.23deg);
    top: -407.27px;
    background: radial-gradient(94.21% 94.21% at 75.64% 6.26%, rgba(237, 247, 255, 0) 0%, #78C0F5 100%);
    opacity: 0.3;
    filter: blur(19.65px);
    backdrop-filter: blur(66.55px);
  }

  /* Ellipse 9 */
  &::after {
    content: '';
    position: absolute;
    width: 974.53px;
    height: 974.53px;
    left: 50%;
    transform: translateX(calc(-50% + 34.51px));
    top: -678px;
    background: radial-gradient(54.43% 54.43% at 70.76% 45.57%, #EDF7FF 0%, #78C0F5 100%);
    opacity: 0.3;
    filter: blur(19.65px);
    backdrop-filter: blur(66.55px);
  }
`;

export const Ellipse9 = styled.div`
  position: absolute;
  width: 974.53px;
  height: 974.53px;
  left: 50%;
  transform: translateX(calc(-50% + 34.51px));
  top: -678px;
  background: radial-gradient(54.43% 54.43% at 70.76% 45.57%, #EDF7FF 0%, #78C0F5 100%);
  opacity: 0.3;
  filter: blur(19.65px);
  backdrop-filter: blur(66.55px);
  pointer-events: none;
  z-index: 0;

  ${media.tablet} {
    width: 401.09px;
    height: 401.09px;
    transform: translateX(calc(-50% + 97px));
    top: -219px;
  }

  ${media.mobile} {
    width: 222.53px;
    height: 222.53px;
    transform: translateX(calc(-50% + 54px));
    top: -59px;
  }
`;

export const Ellipse10 = styled.div`
  position: absolute;
  width: 1546.84px;
  height: 1546.84px;
  left: 50%;
  transform: translateX(calc(-50% + 493.5px)) rotate(55.23deg);
  top: -407.27px;
  background: radial-gradient(94.21% 94.21% at 75.64% 6.26%, rgba(237, 247, 255, 0) 0%, #78C0F5 100%);
  opacity: 0.3;
  filter: blur(19.65px);
  backdrop-filter: blur(66.55px);
  pointer-events: none;
  z-index: 0;

  ${media.tablet} {
    width: 636.63px;
    height: 636.63px;
    transform: translateX(calc(-50% + 187px)) rotate(55.23deg);
    top: -108px;
  }

  ${media.mobile} {
    width: 353.21px;
    height: 353.21px;
    transform: translateX(calc(-50% + 112px)) rotate(55.23deg);
    top: 3px;
  }
`;

export const Ellipse11 = styled.div`
  position: absolute;
  width: 338.08px;
  height: 338.08px;
  left: 50%;
  transform: translateX(calc(-50% + 819.92px - 720px));
  top: -75.67px;
  background: radial-gradient(49.94% 49.94% at 49.94% 50.06%, #0033FF 0%, #9FD6FF 100%);
  opacity: 0.59;
  filter: blur(31px);
  pointer-events: none;
  z-index: 0;

  ${media.tablet} {
    width: 139.15px;
    height: 139.15px;
    transform: translateX(calc(-50% + 243px));
    top: 29px;
  }

  ${media.mobile} {
    width: 77.2px;
    height: 77.2px;
    transform: translateX(calc(-50% + 143px));
    top: 79px;
  }
`;

export const Ellipse12 = styled.div`
  position: absolute;
  width: 1330.32px;
  height: 1330.32px;
  left: 50%;
  transform: translateX(calc(-50% - 1000px)) rotate(90deg);
  top: 1113.03px;
  border-radius: 50%;
  background: radial-gradient(54.43% 54.43% at 70.76% 45.57%, #EDF7FF 0%, #197FCC 100%);
  opacity: 0.08;
  filter: blur(19.65px);
  backdrop-filter: blur(66.55px);
  pointer-events: none;
  z-index: 0;

  ${media.tablet} {
    width: 547.52px;
    height: 547.52px;
    transform: translateX(calc(-50% - 229px)) rotate(90deg);
    top: 518px;
  }

  ${media.mobile} {
    width: 303.77px;
    height: 303.77px;
    transform: translateX(calc(-50% - 111px)) rotate(90deg);
    top: 350px;
  }
`;

export const MainContent = styled.main`
  /* Frame 150 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 120px;
  position: relative;
  width: 100%;
  flex: none;
  padding-top: calc(2.5rem + 4.5rem + 72px); /* Header top (40px) + Header height (72px) + 72px gap = 184px */
  padding-bottom: 0;
  z-index: 1;
  box-sizing: border-box;

  ${media.tablet} {
    padding: 0 32px 60px;
    padding-top: 0;
  }

  ${media.mobile} {
    padding: 20px 16px 0;
  }
`;

export const SectionWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  box-sizing: border-box;

  ${media.tablet} {
    max-width: 680px;
    width: 100%;
  }

  ${media.mobile} {
    max-width: 100%;
    width: 100%;
    align-items: stretch;
  }

  /* Frame 144 - IntroSection */
  &:nth-of-type(1) {
    padding: 0px 0px 0px;
    gap: 24px;
    height: auto;
    min-height: 524px;

    ${media.tablet} {
      padding: 32px 0 0;
      gap: 20px;
      min-height: auto;
      align-items: stretch;
    }

    ${media.mobile} {
      padding: 0;
      gap: 12px;
      min-height: auto;
    }
  }

  /* Frame 12 - NumbersSection */
  &:nth-of-type(2) {
    padding: 80px 0px 0px;
    gap: 36px;
    height: auto;
    min-height: 383px;
    align-items: center;

    ${media.tablet} {
      padding: 60px 0 0;
      gap: 20px;
      min-height: auto;
    }

    ${media.mobile} {
      padding: 40px 0 0;
      gap: 12px;
      align-items: stretch;
      min-height: auto;
    }
  }

  /* Frame 19 - ServiceInfoSection */
  &:nth-of-type(3) {
    padding: 100px 0px 0px;
    gap: 24px;
    height: auto;
    min-height: 852px;

    ${media.tablet} {
      padding: 60px 0 0;
      gap: 20px;
      min-height: auto;
    }

    ${media.mobile} {
      padding: 40px 0 0;
      gap: 12px;
      align-items: stretch;
      min-height: auto;
    }
  }

  /* Frame 29 - PartnersSection */
  &:nth-of-type(4) {
    padding: 100px 0px 0px;
    gap: 48px;
    height: auto;
    min-height: 670px;
    padding-bottom: 20px;

    ${media.tablet} {
      padding: 60px 0 0;
      gap: 20px;
      min-height: auto;
      padding-bottom: 0;
    }

    ${media.mobile} {
      padding: 40px 0 0;
      gap: 12px;
      align-items: stretch;
      min-height: auto;
    }
  }

  /* Frame 45 - InconveniencesSection */
  &:nth-of-type(5) {
    padding: 20px 0px 0px;
    gap: 48px;
    height: auto;
    min-height: 794px;
    padding-bottom: 0px;
    margin-bottom: -180px;

    ${media.tablet} {
      padding: 60px 0 0;
      gap: 20px;
      min-height: auto;
      margin-bottom: 0;
    }

    ${media.mobile} {
      padding: 40px 0 0;
      gap: 12px;
      align-items: stretch;
      min-height: auto;
      margin-bottom: 0;
    }
  }

  /* Frame 145 - PromisesSection */
  &:nth-of-type(6) {
    padding: 0px 0px 0px;
    gap: 48px;
    height: auto;
    min-height: 794px;
    margin-top: -80px;

    ${media.tablet} {
      padding: 60px 0 0;
      gap: 20px;
      min-height: auto;
      margin-top: 0;
    }

    ${media.mobile} {
      padding: 40px 0 0;
      gap: 12px;
      align-items: stretch;
      min-height: auto;
      margin-top: 0;
    }
  }

  /* Frame 146 - MeetSection */
  &:nth-of-type(7) {
    padding: 0px 0px 72px;
    gap: 36px;
    height: auto;
    min-height: 474px;
    align-items: center;
    margin-top: -80px;

    ${media.tablet} {
      padding: 60px 0 0;
      gap: 24px;
      min-height: auto;
      margin-top: 0;
    }

    ${media.mobile} {
      padding: 40px 0 48px;
      gap: 20px;
      align-items: stretch;
      min-height: auto;
      margin-top: 0;
    }
  }
`;


