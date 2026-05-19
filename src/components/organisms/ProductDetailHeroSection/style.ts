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
      url('/product/product_detail/product_detail_herosection.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(90deg) scaleX(2.4) scaleY(3.6);
    z-index: 0;
  }

  ${media.tablet} {
    height: 300px;
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
    padding: 0 16px 30px;
    align-items: stretch;
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
  position: relative;
  z-index: 1;
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
  min-width: 110px;
  height: 23px;

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

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 12px;
  max-width: 1200px;
  width: 100%;

  ${media.tablet} {
    max-width: 680px;
    height: 32px;
  }

  ${media.mobile} {
    max-width: 343px;
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
  color: #ffffff;

  ${media.tablet} {
    font-size: 24px;
    line-height: 29px;
    width: auto;
    height: auto;
  }

  ${media.mobile} {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const ServiceDescription = styled.p`
  max-width: 1200px;
  width: 100%;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  ${media.tablet} {
    max-width: 680px;
    font-size: 12px;
    line-height: 150%;
    height: auto;
  }

  ${media.mobile} {
    max-width: 343px;
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
    height: 47px;
    background: #fefefe;
    border: 1px solid #bfbfbf;
    border-radius: 30px;
    flex: none;
  }

  ${media.tablet} {
    gap: 12px;
    width: auto;
    height: 36px;

    > * {
      height: 36px;
      padding: 11px 24px;
      border: 1px solid #efefef;
      border-radius: 30px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  ${media.mobile} {
    gap: 12px;
    height: 29px;

    > * {
      height: 29px;
      padding: 8.5px 16px;
      border: 1px solid #efefef;
      border-radius: 30px;
    }
  }
`;
