import styled from 'styled-components';
import { media } from '@/styles/theme';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 120px 60px;
  gap: 365px;
  isolation: isolate;
  position: absolute;
  width: 1440px;
  height: 400px;
  left: calc(50% - 1440px / 2);
  top: 0;
  background: #76bbef;
  overflow: hidden;
  box-sizing: border-box;

  ${media.tablet} {
    width: 100%;
    max-width: 744px;
    height: 400px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 32px 48px;
    gap: 0;
  }

  ${media.mobile} {
    width: 100%;
    max-width: 375px;
    height: 200px;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px 16px 30px;
    align-items: flex-end;

    &::after {
      content: '';
      position: absolute;
      width: 314.5px;
      height: 213px;
      right: -88.5px;
      bottom: 7px;
      background-image: url('/FAQ/FAQ_introheader.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 0;
      pointer-events: none;
    }
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0;
  gap: 215px;
  width: 1200px;
  height: 187px;
  flex: none;
  position: relative;
  z-index: 1;

  ${media.tablet} {
    width: 100%;
    max-width: 680px;
    height: auto;
    gap: 0;
    align-items: flex-end;
  }

  ${media.mobile} {
    max-width: 343px;
    height: 92px;
    align-items: flex-end;
    z-index: 1;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  width: 475px;
  height: 141px;
  flex: none;
  z-index: 0;

  ${media.tablet} {
    width: 475px;
    height: auto;
    flex-shrink: 0;
  }

  ${media.mobile} {
    width: 343px;
    gap: 8px;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  width: 158px;
  height: 81px;
  flex: none;

  ${media.tablet} {
    width: auto;
    height: auto;
    gap: 12px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;

export const BreadcrumbWrapper = styled.div`
  width: 77px;
  height: 23px;
  flex: none;

  nav {
    color: #ffffff;

    a,
    span {
      color: #ffffff;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }

    span > span {
      color: #ffffff;

      &::before {
        border-color: #ffffff;
        border-width: 2px;
      }
    }
  }

  ${media.tablet} {
    width: auto;
    height: 23px;

    nav {
      gap: 8px;

      a,
      span {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }

  ${media.mobile} {
    height: 16px;

    nav {
      gap: 4px;

      a,
      span {
        font-size: 10px;
        line-height: 15px;
      }
    }
  }
`;

export const Title = styled.h1`
  width: 200px;
  height: 46px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin: 0;
  flex: none;

  ${media.tablet} {
    width: auto;
    height: auto;
    font-size: 32px;
    line-height: 38px;
  }

  ${media.mobile} {
    width: auto;
    height: auto;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const SearchWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  gap: 90px;
  width: 475px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  flex: none;
  align-self: stretch;

  form {
    margin: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }

  input {
    padding: 0;
    border: none;
    border-radius: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #777777;
    width: 174px;
    height: 23px;

    &:focus {
      outline: none;
      border: none;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    color: #76bbef;
    position: relative;
    right: 0;
  }

  ${media.tablet} {
    width: 475px;
    height: 48px;
    border: 1px solid #efefef;
  }

  ${media.mobile} {
    width: 343px;
    height: 32px;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #efefef;
    gap: 12px;

    form {
      height: 100%;
    }

    input {
      width: 100%;
      height: 15px;
      font-size: 10px;
      line-height: 150%;
      color: #777777;
    }

    svg {
      width: 12px;
      height: 12px;
      color: #777777;
    }
  }
`;

export const RightSection = styled.div`
  position: relative;
  width: 30%;
  height: 10%;
  flex: none;

  ${media.tablet} {
    width: auto;
    height: auto;
    flex: 1;
    min-width: 0;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 629px;
  height: 426px;
  right: -20px;
  bottom: -80px;
  flex: none;
  z-index: 1;

  ${media.tablet} {
    width: 629px;
    height: 426px;
    right: -91px;
    bottom: 0;
  }

  ${media.mobile} {
    width: 314.5px;
    height: 213px;
    right: -88.5px;
    bottom: 7px;
    z-index: 0;
  }
`;
