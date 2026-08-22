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
  gap: 365px;
  isolation: isolate;
  background: ${({ theme }) => theme.colors.primary300};
  overflow: hidden;
  box-sizing: border-box;

  /* Frame 169 — tablet 744×400 (below NavBar) */
  ${media.tablet} {
    width: 100%;
    max-width: 744px;
    height: 400px;
    margin: 0 auto;
    padding: 0 32px 48px;
    gap: 0;
    align-items: flex-end;
  }

  ${media.mobile} {
    max-width: 375px;
    height: 200px;
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
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  height: auto;
  flex: 1;
  position: relative;
  z-index: 2;
  min-width: 0;

  ${media.tablet} {
    max-width: 100%;
    gap: 0;
    align-items: flex-end;
    z-index: 1;
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
  max-width: 100%;
  flex: none;
  z-index: 2;

  /* Frame 167 — left content 475×129 (one-line title) */
  ${media.tablet} {
    width: 475px;
    height: 129px;
    gap: 12px;
    flex-shrink: 0;
    z-index: 1;
  }

  ${media.mobile} {
    width: 343px;
    gap: 8px;
  }
`;

/* Frame 168 — title block (breadcrumb + title) */
export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  width: auto;
  flex: none;

  ${media.tablet} {
    gap: 12px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;

export const BreadcrumbWrapper = styled.div`
  width: auto;
  flex: none;

  nav {
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
      gap: 8px;

      a,
      span {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #fefefe;
      }

      svg {
        width: 16px;
        height: 16px;
        color: #fefefe;
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
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #fefefe;
  margin: 0;
  flex: none;
  width: auto;
  min-width: max-content;
  white-space: nowrap;

  ${media.tablet} {
    width: auto;
    min-width: max-content;
    white-space: nowrap;
    font-size: 32px;
    line-height: 38px;
  }

  ${media.mobile} {
    font-size: 20px;
    line-height: 24px;
    white-space: nowrap;
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
  background: #fefefe;
  border: 1px solid #efefef;
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

  /* SEARCH — 475×48, radius 8; override embedded Search tablet typography */
  ${media.tablet} {
    width: 475px;
    height: 48px;
    padding: 12px 16px;
    gap: 12px;
    border-radius: 8px;

    input {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      height: 19px;
      color: #777777;

      &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #777777;
      }
    }

    svg {
      width: 24px;
      height: 24px;
      color: #76bbef;
    }
  }

  ${media.mobile} {
    width: 343px;
    height: 32px;
    padding: 8px 12px;
    border-radius: 6px;
    gap: 12px;

    form {
      height: 100%;
    }

    input {
      height: 15px;
      font-size: 10px;
      line-height: 150%;
    }

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 629px;
  height: 426px;
  right: 120px;
  bottom: 0;
  flex: none;
  z-index: 1;
  pointer-events: none;

  img {
    object-fit: contain;
    object-position: right bottom;
  }

  /* image 334 — 629×426, right -91, bottom 0 */
  ${media.tablet} {
    width: 629px;
    height: 426px;
    right: -91px;
    bottom: 0;
    z-index: 0;
  }

  ${media.mobile} {
    display: none;
  }
`;
