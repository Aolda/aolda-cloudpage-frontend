import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ProblemItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
`;

export const ProblemGroupTitle = styled.h3`
  margin: 0;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: #232527;

  /* Title-H3 — desktop 20/24/700 */
  ${media.desktop} {
    font-size: 20px;
    line-height: 24px;
  }

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ProblemBody = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  line-height: 150%;
  color: #777777;
  word-break: keep-all;

  /* Content-C3 — desktop 20/150% */
  ${media.desktop} {
    font-size: 20px;
  }

  ${media.tablet} {
    font-size: 16px;
  }

  ${media.mobile} {
    font-size: 10px;
  }
`;

export const ProblemListItem = styled.li`
  position: relative;
  padding-left: 1.1em;
  margin: 0;
  overflow-x: visible;

  /* desktop: allow wrap within 1200 content width */
  ${media.desktop} {
    white-space: normal;
  }

  /* tablet: single-line nowrap (unchanged) */
  ${media.tablet} {
    white-space: nowrap;
  }

  ${media.mobile} {
    white-space: normal;
  }

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #777777;
  }
`;

export const ProblemLine = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: visible;

  ${media.desktop} {
    white-space: normal;
  }

  ${media.tablet} {
    white-space: nowrap;
  }

  ${media.mobile} {
    white-space: normal;
  }
`;
