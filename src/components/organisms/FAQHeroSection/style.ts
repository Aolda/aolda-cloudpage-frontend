import styled, { css } from 'styled-components';
import { media } from '@/styles/theme';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 400px;
  margin: 0 auto;
  padding: 0 120px 60px;
  gap: 24px;
  isolation: isolate;
  background: ${({ theme }) => theme.colors.primary300};
  overflow: hidden;
  box-sizing: border-box;

  ${media.tablet} {
    max-width: 100%;
    height: 400px;
    padding: 0 32px 48px;
    gap: 0;
  }

  ${media.mobile} {
    height: 240px;
    padding: 16px 16px 24px;
    align-items: flex-end;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  height: auto;
  flex: 1;
  position: relative;
  z-index: 2;
  min-width: 0;

  ${media.tablet} {
    max-width: 680px;
    gap: 0;
    align-items: flex-end;
  }

  ${media.mobile} {
    max-width: 100%;
    align-items: flex-start;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  width: 475px;
  max-width: 100%;
  flex: none;
  z-index: 2;

  ${media.tablet} {
    width: 475px;
    flex-shrink: 0;
  }

  ${media.mobile} {
    width: 100%;
    gap: 8px;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  width: auto;
  flex: none;

  ${media.mobile} {
    gap: 8px;
  }
`;

export const BreadcrumbWrapper = styled.div`
  width: auto;
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
      text-decoration: none;
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
    nav {
      gap: 8px;
    }
  }

  ${media.mobile} {
    nav a,
    nav span {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

export const Title = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin: 0;
  flex: none;

  ${media.tablet} {
    font-size: 32px;
    line-height: 38px;
  }

  ${media.mobile} {
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
  gap: 12px;
  width: 475px;
  max-width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  flex: none;
  align-self: stretch;

  ${({ theme }) =>
    theme.mode === 'dark'
      ? css`
          border: 1px solid ${theme.colors.widgetBorder};
        `
      : ''}

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
    color: ${({ theme }) => theme.colors.gray600};
    width: 100%;
    min-width: 0;
    height: 23px;
    background: transparent;

    &:focus {
      outline: none;
      border: none;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.primary300};
    flex-shrink: 0;
  }

  ${media.mobile} {
    width: 100%;
    height: 40px;
    padding: 8px 12px;

    input {
      font-size: 14px;
      line-height: 17px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
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
  pointer-events: none;

  img {
    object-fit: contain;
    object-position: right bottom;
  }

  ${media.tablet} {
    width: 420px;
    height: 284px;
    right: -60px;
    bottom: -40px;
  }

  ${media.mobile} {
    width: 200px;
    height: 136px;
    right: -40px;
    bottom: -20px;
    opacity: 0.9;
  }
`;
