import styled from 'styled-components';
import { media } from '@/styles/theme';

/** Inner content — desktop 1200px / tablet 664px / mobile 319px (Frame 136) */
export const DetailContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.surface};
  gap: 24px;

  ${media.desktop} {
    max-width: 1200px;
    width: 1200px;
    gap: 36px;
  }

  ${media.tablet} {
    max-width: 664px;
    width: 100%;
    gap: 36px;
  }

  ${media.mobile} {
    max-width: 319px;
    width: 100%;
    gap: 36px;
  }
`;

/** Frame 119 — title + meta row group */
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;

  ${media.tablet} {
    gap: 16px;
  }

  /* Mobile Frame 119 — gap 16, width 319, height ~75 */
  ${media.mobile} {
    gap: 16px;
    width: 319px;
    max-width: 100%;
  }
`;

/** Title-H2 desktop / Title-H3 tablet / Title-H4 mobile */
export const Title = styled.h1`
  margin: 0;
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #232527;

  ${media.tablet} {
    font-size: 20px;
    line-height: 24px;
  }

  ${media.mobile} {
    font-size: 16px;
    line-height: 19px;
    width: 319px;
    max-width: 100%;
  }
`;

/** Frame 141 — meta left + attachment right */
export const MetaRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;

  /* Mobile: keeps row shell; centered stack lives in MetaStack */
  ${media.mobile} {
    width: 319px;
    max-width: 100%;
    min-height: 40px;
  }
`;

/**
 * Desktop/tablet: display:contents so MetaGroup | Attachment stay MetaRow children.
 * Mobile Frame 1261158798: 300px column, margin 0 auto, align-items flex-end.
 */
export const MetaStack = styled.div`
  display: contents;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    margin: 0 auto;
    width: 300px;
    max-width: 100%;
    min-height: 40px;
    box-sizing: border-box;
  }
`;

/** Frame 137 — left meta group (pairs + dividers) */
export const MetaGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  /* Mobile Frame 137 — gap 20, width 300, height 12 */
  ${media.mobile} {
    gap: 20px;
    width: 300px;
    max-width: 100%;
    height: 12px;
    box-sizing: border-box;
  }
`;

/** Frame 138/139/140 — label + value pair */
export const MetaItem = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #777777;
  }

  ${media.mobile} {
    span {
      font-size: 10px;
      line-height: 12px;
    }
  }
`;

/** Line 14/15 — vertical divider (not `|` character) */
export const MetaDivider = styled.span`
  display: block;
  width: 1px;
  height: 9px;
  background: #777777;
  flex-shrink: 0;
  align-self: center;
`;

/** Frame 142 — attachment row(s); mobile sits under meta, right-aligned by MetaStack */
export const AttachmentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;
export const AttachmentItem = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #777777;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const AttachmentIcon = styled.svg`
  width: 16px;
  height: 16px;
  color: #777777;
  flex-shrink: 0;
`;

/** Frame 135 — body, width 1200, column gap 20 */
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  min-height: 200px;
  word-break: break-word;

  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #232527;

  /* HTML body wrapped in a single div */
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
  }

  /* Title-H3 */
  h1,
  h2,
  h3 {
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #232527;
  }

  /* Title-H4 */
  h4 {
    margin: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #232527;
  }

  /* Content-C4 */
  p {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #232527;
  }

  ul,
  ol {
    margin: 0;
    padding-left: 1.25rem;
  }

  li {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #232527;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  code {
    background: ${({ theme }) => theme.colors.border};
    padding: 0.125rem 0.25rem;
    border-radius: 0.1875rem;
    font-size: 0.9em;
    font-family: monospace;
  }

  pre {
    background: ${({ theme }) => theme.colors.border};
    padding: 0.625rem;
    border-radius: 0.3125rem;
    overflow-x: auto;
    margin: 0;
    width: 100%;

    code {
      background: none;
      padding: 0;
    }
  }

  blockquote {
    border-left: 0.25rem solid ${({ theme }) => theme.colors.primary};
    padding-left: 0.625rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background: ${({ theme }) => theme.colors.border};
    font-weight: 600;
  }

  /* Title-H5 */
  h5 {
    margin: 0;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #232527;
  }

  /* Title-H6 */
  h6 {
    margin: 0;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    color: #232527;
  }

  /* Tablet Frame 135 — Content-C6 body */
  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;

    p,
    li {
      font-size: 12px;
      line-height: 150%;
    }
  }

  /* Mobile Frame 135 — Content-C7 body; H4 16/19, H5 12/14, H6 10/12 */
  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;

    h1,
    h2,
    h3,
    h4 {
      font-size: 16px;
      line-height: 19px;
    }

    h5 {
      font-size: 12px;
      line-height: 14px;
    }

    h6 {
      font-size: 10px;
      line-height: 12px;
    }

    p,
    li {
      font-size: 10px;
      line-height: 150%;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  gap: 24px;

  ${media.desktop} {
    gap: 36px;
  }

  ${media.tablet} {
    gap: 36px;
  }

  ${media.mobile} {
    gap: 36px;
  }
`;

export const NavigationWrapper = styled.div`
  width: 100%;
`;

/** Frame 151 — list button, align end */
export const ListButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    width: 94px;
    height: 47px;
    padding: 12px 32px;
    background: #1a8ee5;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    box-sizing: border-box;

    span {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }
  }

  ${media.tablet} {
    button {
      width: 87px;
      height: 38px;
      font-size: 12px;
      line-height: 14px;

      span {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }

  /* Mobile Frame 151 — full-width stretch 319×36, Title-H6 10/12 */
  ${media.mobile} {
    justify-content: stretch;
    align-self: stretch;

    button {
      width: 100%;
      max-width: 319px;
      height: 36px;
      padding: 12px 32px;
      align-self: stretch;
      font-size: 10px;
      line-height: 12px;

      span {
        font-size: 10px;
        line-height: 12px;
      }
    }
  }
`;