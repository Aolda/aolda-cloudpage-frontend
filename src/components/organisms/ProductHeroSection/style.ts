import styled from 'styled-components';
import { media } from '@/styles/theme';

export const HeroShell = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #061c2c;
  --hero-visual-size: 400px;

  ${media.tablet} {
    height: 332px;
    --hero-visual-size: 332px;
  }

  ${media.mobile} {
    height: 200px;
    --hero-visual-size: 200px;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  /* 736×1308 세로 원본 → 90° 회전 후 가로 히어로에 맞춤 */
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--hero-visual-size);
    height: 100vw;
    max-width: none;
    object-fit: cover;
    object-position: center;
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.2);
  pointer-events: none;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 120px 80px;
  gap: 10px;
  box-sizing: border-box;

  ${media.tablet} {
    padding: 0 32px 48px;
    gap: 10px;
    align-items: flex-start;
  }

  ${media.mobile} {
    padding: 0 16px 16px;
  }
`;

export const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 10px;
  width: 1200px;
  max-width: 100%;
  box-sizing: border-box;

  ${media.tablet} {
    width: 680px;
    max-width: 100%;
    margin: 0;
    gap: 16px;
  }

  ${media.mobile} {
    max-width: 343px;
    gap: 12px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  width: 1200px;
  max-width: 100%;
  flex: none;
  box-sizing: border-box;

  ${media.tablet} {
    gap: 8px;
    width: 100%;
    max-width: 680px;
  }

  ${media.mobile} {
    gap: 4px;
  }
`;

export const HeroSearch = styled.div`
  display: none;
  width: 100%;
  box-sizing: border-box;

  ${media.tablet} {
    display: block;
    width: 100%;
    max-width: 680px;
  }

  ${media.mobile} {
    display: block;
    width: 100%;
  }
`;

export const BreadcrumbWrapper = styled.div`
  width: auto;

  nav {
    gap: 8px;
    color: #fefefe;

    a,
    span {
      color: #fefefe;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-decoration: none;
    }
  }

  ${media.tablet} {
    nav {
      a,
      span {
        font-size: 12px;
        line-height: 14px;
        font-weight: 700;
      }
    }
  }

  ${media.mobile} {
    nav {
      a,
      span {
        font-size: 10px;
        line-height: 12px;
      }
    }
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #fefefe;
  margin: 0;

  ${media.tablet} {
    font-size: 24px;
    line-height: 29px;
  }

  ${media.mobile} {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Description = styled.div`
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #fefefe;

  p {
    margin: 0;
  }

  ${media.tablet} {
    max-width: 680px;
    font-size: 16px;
    line-height: 150%;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
  }
`;
