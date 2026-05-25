import styled from 'styled-components';

export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.surface};
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
`;


export const MainContent = styled.main`
  /* Frame 150 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 120px;
  position: relative;
  width: 100%;
  flex: 1;
  padding-top: calc(1.5625rem + 2.8125rem + 72px); /* Header top (40px) + Header height (72px) + 72px gap = 184px */
  padding-bottom: 0;
  z-index: 1;
  box-sizing: border-box;
`;

export const SectionWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;

  /* Frame 144 - IntroSection */
  &:nth-of-type(1) {
    padding: 0px 0px 0px;
    gap: 24px;
    height: auto;
    min-height: 524px;
  }

  /* Frame 12 - NumbersSection */
  &:nth-of-type(2) {
    padding: 80px 0px 0px;
    gap: 36px;
    height: auto;
    min-height: 383px;
    align-items: center;
  }

  /* Frame 19 - ServiceInfoSection */
  &:nth-of-type(3) {
    padding: 100px 0px 0px;
    gap: 24px;
    height: auto;
    min-height: 852px;
  }

  /* Frame 29 - PartnersSection */
  &:nth-of-type(4) {
    padding: 100px 0px 0px;
    gap: 48px;
    height: auto;
    min-height: 670px;
    padding-bottom: 20px;
  }

  /* Frame 45 - InconveniencesSection */
  &:nth-of-type(5) {
    padding: 20px 0px 0px;
    gap: 48px;
    height: auto;
    min-height: 794px;
    padding-bottom: 0px;
    margin-bottom: -180px;
  }

  /* Frame 145 - PromisesSection */
  &:nth-of-type(6) {
    padding: 0px 0px 0px;
    gap: 48px;
    height: auto;
    min-height: 794px;
    margin-top: -80px;
  }

  /* Frame 146 - MeetSection */
  &:nth-of-type(7) {
    padding: 0px 0px 72px;
    gap: 36px;
    height: auto;
    min-height: 474px;
    align-items: center;
    margin-top: -80px;
  }
`;


