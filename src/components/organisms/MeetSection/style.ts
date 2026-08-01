import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Section = styled.section`
  max-width: 1200px;
  width: 100%;
  min-height: auto;
  padding-top: 0;
  padding-bottom: 0;
  gap: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;

  ${media.tablet} {
    max-width: 680px;
    min-height: auto;
    padding-top: 0;
    padding-bottom: 0;
    gap: 24px;
  }

  /* Frame 1261158764 */
  ${media.mobile} {
    width: 100%;
    max-width: 343px;
    min-height: auto;
    padding: 0;
    gap: 20px;
    align-items: flex-start;
    align-self: stretch;

    /* Frame 1261158761 — 제목 영역 */
    > div:first-child {
      width: 100%;
      max-width: 343px;
      padding: 0 60px 0 0;
      box-sizing: border-box;
      align-items: flex-start;
      text-align: left;

      h2 {
        width: 100%;
        max-width: 283px;
        height: auto;
        min-height: 46px;
        font-size: 16px;
        line-height: 19px;
        font-weight: 700;
        color: #232527;
        text-align: left;
        margin-bottom: 0;
      }
    }
  }
`;

export const Divider = styled.span`
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 2px;
`;

/* Frame 11 — desktop title area */
export const DefaultTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 231px;
  flex: none;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }

  /* Line: 48×3 #777777 (theme.gray600) */
  > div > div:first-of-type {
    width: 48px;
    height: 3px;
    margin-bottom: 0;
    align-self: center;
    background: ${({ theme }) =>
      theme.mode === 'dark' ? '#FAFAFA' : theme.colors.gray600};
  }

  h2 {
    margin: 0;
    width: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: ${({ theme }) => (theme.mode === 'dark' ? '#FAFAFA' : '#232527')};
  }

  ${media.tablet} {
    width: auto;
    max-width: 100%;

    > div > div:first-of-type {
      width: 24px;
      height: 2px;
    }

    h2 {
      font-size: 24px;
      line-height: 29px;
    }
  }

  ${media.mobile} {
    display: none;
  }
`;

export const MobileTitle = styled.div`
  display: none;

  ${media.mobile} {
    display: contents;
  }
`;

/* Frame 149 — CTA row */
export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 24px;
  width: 424px;
  height: auto;
  flex: none;
  order: 1;
  flex-grow: 0;

  ${media.tablet} {
    width: 344px;
    height: auto;
    gap: 24px;
  }

  /* Frame 1261158759 */
  ${media.mobile} {
    width: 100%;
    max-width: 343px;
    height: auto;
    gap: 12px;
    align-self: stretch;
    align-items: flex-start;
  }
`;

/* Frame 147 / 148 */
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 12px;
  width: 200px;
  height: auto;
  flex: none;
  flex-grow: 0;

  &:first-of-type {
    order: 0;
  }
  &:last-of-type {
    order: 1;
  }

  ${media.desktop} {
    &:first-of-type a,
    &:first-of-type button {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 48px;
      padding: 12px 16px;
      gap: 8px;
      background: ${({ theme }) => theme.colors.primary600};
      border: none;
      border-radius: 8px;
      color: #ffffff;
    }

    &:last-of-type a,
    &:last-of-type button {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 48px;
      padding: 12px 16px;
      gap: 8px;
      background: ${({ theme }) =>
        theme.mode === 'dark' ? theme.colors.surface : '#ffffff'};
      border: 1px solid
        ${({ theme }) => (theme.mode === 'dark' ? theme.colors.border : '#BFBFBF')};
      border-radius: 8px;
      color: ${({ theme }) =>
        theme.mode === 'dark' ? theme.colors.text : '#181818'};
    }

    a img,
    button img {
      width: 24px;
      height: 24px;
      flex: none;
      order: 0;
      flex-grow: 0;
    }

    a span,
    button span {
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }

    &:first-of-type a span,
    &:first-of-type button span {
      color: #ffffff;
    }

    &:last-of-type a span,
    &:last-of-type button span {
      color: ${({ theme }) =>
        theme.mode === 'dark' ? theme.colors.text : '#181818'};
    }
  }

  ${media.tablet} {
    width: 160px;
    height: auto;
    gap: 8px;

    &:first-of-type {
      p {
        max-width: 111px;
      }
    }

    &:first-of-type a,
    &:first-of-type button {
      width: 160px;
      height: 38px;
      padding: 11px 16px;
      gap: 8px;
      background: ${({ theme }) => theme.colors.primary600};
      border: none;
      border-radius: 8px;
      color: #ffffff;
    }

    &:last-of-type a,
    &:last-of-type button {
      width: 160px;
      height: 38px;
      padding: 11px 16px;
      gap: 8px;
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 8px;
      color: ${({ theme }) => theme.colors.text};
    }

    a img,
    button img {
      width: 16px;
      height: 16px;
    }
  }

  /* Frame 1261158757 / 1261158758 */
  ${media.mobile} {
    flex: 1 1 0;
    width: 160px;
    min-width: 0;
    max-width: 160px;
    height: auto;
    gap: 8px;
    align-items: flex-start;
    padding: 0;
    flex-grow: 1;

    &:first-of-type a,
    &:first-of-type button {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 12px;
      gap: 8px;
      width: 160px;
      height: 32px !important;
      min-height: 32px;
      max-height: 32px;
      background: #1572b8;
      border: none;
      border-radius: 8px;
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
      transform: none;

      &:hover {
        transform: none;
        opacity: 1;
      }
    }

    /* Figma secondary Button — height 32px */
    &:last-of-type a,
    &:last-of-type button {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 12px;
      gap: 8px;
      width: 160px;
      height: 32px !important;
      min-height: 32px;
      max-height: 32px;
      background: #fefefe;
      border: 1px solid #efefef;
      border-radius: 8px;
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
      color: #232527;
      transform: none;

      &:hover {
        transform: none;
        opacity: 1;
      }
    }

    a img,
    button img {
      position: relative;
      width: 16px;
      height: 16px;
      flex: none;
      order: 0;
      flex-grow: 0;
      object-fit: contain;
    }

    a span,
    button span {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
      text-align: center;
      height: 12px;
      flex: none;
      order: 1;
      flex-grow: 0;
    }

    &:first-of-type a span,
    &:first-of-type button span {
      color: #ffffff;
      width: auto;
    }

    &:last-of-type a span,
    &:last-of-type button span {
      width: 60px;
      height: 12px;
      color: #232527;
    }
  }
`;

export const Caption = styled.p`
  width: 148px;
  max-width: 148px;
  height: auto;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray600};
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    width: auto;
    max-width: 122px;
    height: auto;
    font-size: 12px;
    line-height: 150%;
  }

  ${media.mobile} {
    max-width: none;
    width: auto;
    height: 15px;
    font-size: 10px;
    line-height: 150%;
    text-align: left;
    justify-content: flex-start;
    align-items: center;
    color: #777777;
    white-space: nowrap;
  }
`;
