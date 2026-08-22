import styled from 'styled-components';
import { media } from '@/styles/theme';

/** Frame 170 — desktop 1440×480 */
export const HeroSection = styled.section`
  position: absolute;
  width: 90rem;
  height: 30rem;
  left: calc(50% - 90rem / 2);
  top: 0;
  overflow: hidden;
  background: #ffffff;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/notice/notice_introheader.png');
    background-size: 90rem 30rem;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.1;
    z-index: 0;
  }

  /* Frame 169 — tablet 744×400 */
  ${media.tablet} {
    width: 100%;
    max-width: 744px;
    height: 400px;
    left: 50%;
    transform: translateX(-50%);

    &::before {
      background-size: cover;
      background-position: center;
    }
  }

  /* Frame 169 — mobile 375×250 */
  ${media.mobile} {
    width: 100%;
    max-width: 375px;
    height: 250px;
    left: 50%;
    transform: translateX(-50%);

    &::before {
      background-size: cover;
      background-position: center;
    }
  }
`;

/** Frame 169 — content row */
export const HeroContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 2.5rem;
  gap: 22.8125rem;
  width: 75rem;
  height: 17.5rem;
  position: absolute;
  left: calc(50% - 75rem / 2);
  bottom: 0;
  z-index: 1;

  /* Frame 1261158739 — tablet 475×188; title+image row then search */
  ${media.tablet} {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 198px;
    grid-template-rows: auto auto;
    align-items: start;
    justify-content: stretch;
    padding: 0;
    gap: 8px 12px;
    width: 475px;
    max-width: calc(100% - 80px);
    height: auto;
    left: 50%;
    right: auto;
    bottom: 60px;
    transform: translateX(-50%);
  }

  ${media.mobile} {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    align-items: end;
    justify-content: stretch;
    padding: 0 30px 30px;
    gap: 8px 12px;
    width: 100%;
    max-width: 375px;
    height: auto;
    left: 0;
    right: 0;
    transform: none;
    box-sizing: border-box;
  }
`;

/** Frame 167 — left column */
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 2rem;
  width: 29.6875rem;
  height: 13.4375rem;
  flex: none;
  order: 0;
  flex-grow: 0;

  ${media.tablet} {
    display: contents;
    width: auto;
    height: auto;
  }

  ${media.mobile} {
    display: contents;
    width: auto;
    height: auto;
  }
`;

/** Frame 168 — breadcrumb + title */
export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 1.25rem;
  width: auto;
  max-width: 100%;
  height: 8.4375rem;
  flex: none;
  order: 0;
  flex-grow: 0;

  /* Frame 168 — gap 12; width ~262, breadcrumb may grow beyond Figma box */
  ${media.tablet} {
    grid-column: 1;
    grid-row: 1;
    gap: 12px;
    width: auto;
    max-width: 100%;
    height: auto;
  }

  ${media.mobile} {
    grid-column: 1;
    grid-row: 1;
    gap: 8px;
    width: 218px;
    max-width: 100%;
    height: auto;
  }
`;

export const BreadcrumbWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: auto;
  height: 1.1875rem;
  flex: none;
  order: 0;
  flex-grow: 0;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    color: #777777;

    a,
    span {
      color: #777777;
      font-family: 'Noto Sans KR', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.1875rem;
    }

    span > span {
      color: #777777;

      &::before {
        border-color: #777777;
      }
    }
  }

  ${media.tablet} {
    height: auto;

    nav {
      gap: 6px;

      a,
      span {
        font-size: 12px;
        line-height: 150%;
      }
    }

    /* BreadcrumbItem — label/chevron gap */
    span {
      gap: 6px;
    }

    /* Chevron 16×16 (Content-C6) */
    svg {
      width: 16px;
      height: 16px;
    }
  }

  ${media.mobile} {
    height: auto;

    nav {
      gap: 4px;

      a,
      span {
        font-size: 10px;
        line-height: 150%;
      }
    }

    svg {
      width: 10px;
      height: 10px;
    }

    /* BreadcrumbItem 내부 gap */
    span {
      gap: 4px;
    }
  }
`;

export const Title = styled.h1`
  width: auto;
  max-width: 100%;
  height: auto;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 2.375rem;
  color: #232527;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;

  ${media.tablet} {
    width: auto;
    max-width: 100%;
    height: auto;
    font-size: 24px;
    line-height: 29px;
  }

  ${media.mobile} {
    width: 218px;
    max-width: 100%;
    height: auto;
    font-size: 20px;
    line-height: 24px;
  }
`;

/** "공지사항을 확인해 보세요." — 모든 브레이크포인트에서 한 줄 유지 */
export const TitlePhrase = styled.span`
  white-space: nowrap;
`;

export const HighlightedText = styled.span`
  color: #1a8ee5;
`;

export const SearchWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  gap: 0.75rem;
  width: 29.6875rem;
  height: 3rem;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 0.5rem;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

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
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.1875rem;
    color: #777777;
    width: 100%;
    min-width: 0;
    height: 1.1875rem;
    background: transparent;

    &::placeholder {
      color: #777777;
    }

    &:focus {
      outline: none;
      border: none;
      border-bottom: none;
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #1a8ee5;
    flex-shrink: 0;
    position: relative;
    right: 0;
  }

  ${media.tablet} {
    grid-column: 1 / -1;
    grid-row: 2;
    width: 475px;
    max-width: 100%;
    height: 48px;
    padding: 12px 16px;
    gap: 12px;
    align-self: start;

    input {
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      height: 14px;

      &::placeholder {
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
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
    grid-column: 1 / -1;
    grid-row: 2;
    width: 315px;
    max-width: 100%;
    height: 32px;
    padding: 8px 12px;
    gap: 12px;
    border-radius: 6px;
    align-self: start;

    input {
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
      height: 12px;

      &::placeholder {
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        color: #777777;
      }
    }

    svg {
      width: 12px;
      height: 12px;
      color: #777777;
    }
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
  flex: none;
  order: 1;
  flex-grow: 0;

  ${media.tablet} {
    grid-column: 2;
    grid-row: 1;
    align-items: center;
    justify-content: flex-start;
    align-self: start;
  }

  ${media.mobile} {
    grid-column: 2;
    grid-row: 1;
    align-items: center;
    justify-content: flex-end;
    align-self: end;
  }
`;

export const IconWrapper = styled.div`
  width: 22.5rem;
  height: 15rem;
  position: relative;
  flex: none;
  order: 1;
  flex-grow: 0;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    width: 198px;
    height: 132px;
  }

  ${media.mobile} {
    width: 110px;
    height: 73px;
  }
`;
