import styled, { keyframes } from 'styled-components';
import { media } from '@/styles/theme';
import {
  Container as IntroContainer,
  TopBar as IntroTopBar,
  Title as IntroTitle,
  Description as IntroDescription,
  AccentBlue,
} from '../../molecules/IntroSectionTitle/style';

/** 데스크톱에서 첫 줄이 중간에서 끊기지 않도록 */
export const TitleLine = styled.span`
  display: block;
  white-space: nowrap;
`;

export const Section = styled.section`
  width: 1200px;
  max-width: 100%;
  height: auto;
  min-height: 620px;
  gap: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;

  ${media.tablet} {
    width: 100%;
    max-width: 680px;
    min-height: auto;
    gap: 20px;
    overflow: visible;
    align-items: center;
  }

  ${media.mobile} {
    width: 100%;
    max-width: 100%;
    min-height: auto;
    gap: 12px;
    align-items: stretch;
    overflow: visible;

    /* 모바일 Figma: 파트너 섹션 설명 미표시 */
    ${IntroDescription} {
      display: none;
    }
  }
`;

/** Frame 35 — 타이틀 영역 + 설명 */
export const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0;
  width: 1200px;
  max-width: 100%;
  align-self: stretch;
  box-sizing: border-box;

  /* Frame 35 — top bar + title (gap 12px); description은 별도 margin */
  ${IntroContainer} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 12px;
    width: 1200px;
    max-width: 100%;
    min-height: 150px;
    height: auto;
    text-align: left;
    box-sizing: border-box;
  }

  ${IntroTopBar} {
    width: 48px;
    height: 3px;
    margin-bottom: 0;
    background: #777777;
    border: none;
    border-radius: 0;
    align-self: flex-start;
    flex: none;
  }

  ${IntroTitle} {
    width: 1200px;
    max-width: 100%;
    height: auto;
    min-height: 76px; /* 2줄 × 38px; Figma 프레임 138px은 좁은 폭 기준 */
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: left;
    color: ${({ theme }) => (theme.mode === 'dark' ? '#FAFAFA' : '#232527')};
    box-sizing: border-box;
  }

  /* Figma/SVG 강조색 고정 */
  ${AccentBlue} {
    color: #1a8ee5;
  }

  ${IntroDescription} {
    width: 608px;
    max-width: 100%;
    height: auto;
    min-height: 60px;
    /* container gap 12px + 추가 12px ≈ 제목과 24px 간격 */
    margin: 12px 0 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-align: left;
    color: #777777;
  }

  ${media.tablet} {
    width: 100%;
    align-items: center;

    ${IntroContainer} {
      width: 100%;
      min-height: 0;
      align-items: center;
      text-align: center;
      gap: 0;
    }

    /* Frame 29/36 — tablet: match Meet/others (24×2 #777, centered) */
    ${IntroTopBar} {
      width: 24px;
      height: 2px;
      margin-bottom: 12px;
      background: #777777;
      border: none;
      border-radius: 0;
      align-self: center;
      flex: none;
    }

    ${IntroTitle} {
      width: 100%;
      min-height: 0;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
    }

    ${TitleLine} {
      white-space: normal;
    }

    ${IntroDescription} {
      width: 100%;
      max-width: 486px;
      min-height: 0;
      margin-top: 16px;
      font-size: 16px;
      text-align: center;
    }
  }

  ${media.mobile} {
    width: 100%;
    align-items: stretch;

    ${IntroContainer} {
      width: 100%;
      min-height: 0;
      align-items: flex-start;
      text-align: left;
      gap: 0;
    }

    ${IntroTitle} {
      width: 100%;
      min-height: 0;
      font-size: 16px;
      line-height: 19px;
      text-align: left;
    }

    ${TitleLine} {
      white-space: normal;
    }

    ${IntroDescription} {
      display: none;
    }
  }
`;
const slideMarquee = keyframes`
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
  gap: 64px;
  width: fit-content;
  position: relative;
  animation: ${slideMarquee} 20s linear infinite;

  > * {
    flex: 0 0 400px;
    width: 400px;
    box-sizing: border-box;
  }

  &:nth-child(2) {
    margin-left: 120px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/** 태블릿 744px — 2열 × 3행 그리드 / 모바일도 동일 그리드 + compact 스타일 */
export const PartnerGrid = styled.div`
  display: none;
  width: 100%;
  box-sizing: border-box;

  ${media.belowDesktop} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;

    > * {
      width: 100%;
      max-width: 330px;
      min-width: 0;
      justify-self: stretch;
    }
  }

  /* Frame 146 — 2-col × 167.5, gap 8 */
  ${media.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;

    > * {
      width: 100%;
      max-width: none;
      min-width: 0;
      justify-self: stretch;
    }
  }
`;
