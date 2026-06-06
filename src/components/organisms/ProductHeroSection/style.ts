import styled from 'styled-components';
import { media } from '@/styles/theme';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 120px 80px;
  gap: 10px;
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url('/product/product_herosection.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(90deg) scaleX(2) scaleY(3.6);
    z-index: 0;
  }

  ${media.tablet} {
    height: 332px;
    padding: 0 32px 48px;
    align-items: stretch;

    &::before {
      background-size: cover;
      background-position: center;
      transform: none;
    }
  }

  ${media.mobile} {
    height: 200px;
    padding: 0 16px 16px;
  }
`;

export const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  ${media.tablet} {
    max-width: 680px;
    margin: 0 auto;
    gap: 16px;
    height: 100%;
    justify-content: flex-end;
  }

  ${media.mobile} {
    max-width: 343px;
    margin: 0 auto;
    gap: 12px;
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
  height: auto;
  flex: none;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  ${media.tablet} {
    max-width: 680px;
    gap: 8px;
  }

  ${media.mobile} {
    max-width: 343px;
    gap: 4px;
  }
`;

export const HeroSearch = styled.div`
  display: none;
  width: 100%;
  box-sizing: border-box;

  ${media.belowDesktop} {
    display: block;
    width: 100%;
    max-width: 680px;
  }

  ${media.mobile} {
    max-width: 343px;
  }
`;

export const BreadcrumbWrapper = styled.div`
  width: auto;
  min-width: 110px;
  height: auto;

  nav {
    color: #ffffff;

    a,
    span {
      color: #ffffff;
    }

    span > span {
      color: #ffffff;

      &::before {
        border-color: #ffffff;
      }
    }
  }

  ${media.tablet} {
    min-width: 0;
    height: 16px;

    nav {
      font-size: 12px;
      line-height: 14px;
    }
  }

  ${media.mobile} {
    height: 16px;

    nav {
      font-size: 10px;
      line-height: 12px;
    }
  }
`;

export const Title = styled.h1`
  max-width: 1200px;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin: 0;

  ${media.tablet} {
    max-width: 680px;
    font-size: 24px;
    line-height: 29px;
  }

  ${media.mobile} {
    max-width: 343px;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
  max-width: 1200px;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;

  ${media.tablet} {
    max-width: 680px;
    font-size: 16px;
    line-height: 150%;
  }

  ${media.mobile} {
    max-width: 343px;
    font-size: 10px;
    line-height: 150%;
  }
`;
