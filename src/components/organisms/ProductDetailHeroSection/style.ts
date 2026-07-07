import styled from 'styled-components';
import { media } from '@/styles/theme';

export const HeroShell = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #061c2c;
  /* 414×612 세로 원본 → 90° 회전 후 1440×400 히어로에 맞춤 */
  --hero-visual-size: 400px;
  --hero-object-position: 54% 33%;
  --hero-scale: 1.48;

  ${media.tablet} {
    height: 300px;
    --hero-object-position: 58% center;
  }

  ${media.mobile} {
    height: 200px;
    --hero-object-position: 62% center;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--hero-visual-size);
    height: 100vw;
    max-width: none;
    object-fit: cover;
    object-position: var(--hero-object-position);
    transform: translate(-50%, -50%) rotate(90deg) scale(var(--hero-scale));
  }

  ${media.tablet} {
    img {
      width: 100%;
      height: 100%;
      object-position: var(--hero-object-position);
      transform: none;
    }
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
  padding: 0 120px 60px;
  gap: 10px;
  box-sizing: border-box;

  ${media.tablet} {
    padding: 0 32px 48px;
  }

  ${media.mobile} {
    padding: 0 16px 30px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;

  ${media.tablet} {
    max-width: 680px;
    margin: 0 auto;
    gap: 8px;
  }

  ${media.mobile} {
    max-width: 343px;
    margin: 0;
    gap: 4px;
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

    span > span {
      color: #fefefe;

      &::before {
        border-color: #fefefe;
        border-width: 2px;
      }
    }
  }

  ${media.tablet} {
    nav {
      font-size: 12px;
      line-height: 14px;
    }
  }

  ${media.mobile} {
    nav {
      font-size: 10px;
      line-height: 12px;
    }
  }
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 12px;
  width: 100%;

  ${media.tablet} {
    height: 32px;
  }

  ${media.mobile} {
    height: 24px;
  }
`;

export const ServiceIcon = styled.img`
  width: 32px;
  height: 32px;
  flex: none;
  object-fit: contain;

  ${media.mobile} {
    width: 24px;
    height: 24px;
  }
`;

export const ServiceName = styled.h1`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #fefefe;

  ${media.tablet} {
    font-size: 24px;
    line-height: 29px;
  }

  ${media.mobile} {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const ServiceDescription = styled.p`
  width: 100%;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #fefefe;

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  width: auto;

  > * {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 36px;
    gap: 8px;
    height: 43px;
    background: #fefefe;
    border: 1px solid #efefef;
    border-radius: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #232527;
    flex: none;
  }

  ${media.tablet} {
    > * {
      height: 36px;
      padding: 11px 24px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  ${media.mobile} {
    > * {
      height: 29px;
      padding: 8.5px 16px;
      font-size: 10px;
      line-height: 12px;
    }
  }
`;
