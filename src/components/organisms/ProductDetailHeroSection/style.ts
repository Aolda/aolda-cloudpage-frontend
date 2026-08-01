import styled from 'styled-components';
import { media } from '@/styles/theme';

export const HeroShell = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #061c2c;

  ${media.tablet} {
    height: 300px;
  }

  ${media.mobile} {
    height: 200px;
  }
`;

/* 히어로 영역 전체를 cover로 채움 (레터박싱 없음) */
export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background-color: #061c2c;
  background-image: url('/product/product_detail/product_detail_herosection.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  image-rendering: auto;
  transform: none;
`;
export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
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

  /* Frame 1261158713 — Tablet 744×300 */
  ${media.tablet} {
    width: 100%;
    max-width: 744px;
    height: 300px;
    padding: 0 32px 48px;
    gap: 10px;
    align-items: flex-start;
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

  /* Frame 245 — Tablet 680×126 */
  ${media.tablet} {
    width: 680px;
    max-width: 100%;
    height: 126px;
    margin: 0;
    gap: 8px;
  }

  ${media.mobile} {
    max-width: 343px;
    height: auto;
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
      color: inherit;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-decoration: none;
    }

    svg {
      width: 16px;
      height: 16px;
      color: inherit;
    }
  }

  ${media.tablet} {
    nav {
      gap: 8px;
      color: #ffffff;

      a,
      span {
        color: inherit;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
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
    color: #ffffff;
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${media.tablet} {
    width: 680px;
    max-width: 100%;
    height: 18px;
    font-size: 12px;
    line-height: 150%;
    color: #ffffff;
  }

  ${media.mobile} {
    height: auto;
    white-space: normal;
    text-overflow: unset;
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
