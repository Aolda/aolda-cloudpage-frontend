import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ProblemItem = styled.div`
  display: flex;
  width: 100%;
  max-width: 680px;
  box-sizing: border-box;
  padding: 2rem 0;
  align-self: stretch;

  ${media.tablet} {
    padding: 0;
    max-width: 680px;
  }

  ${media.mobile} {
    max-width: 343px;
    padding: 0;
  }
`;

export const ProblemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  align-self: stretch;

  ${media.mobile} {
    gap: 8px;
  }
`;

export const ProblemGroupTitle = styled.h3`
  margin: 0;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 19px;
  color: #232527;
  flex: none;
  align-self: stretch;

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
  }
`;

/** 모바일 — 그룹별 단락 (Content-C7) */
export const MobileProblemBody = styled.p`
  display: none;
  margin: 0;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: #777777;
  word-break: keep-all;

  ${media.mobile} {
    display: block;
  }
`;

export const ProblemList = styled.ul`
  margin: 0;
  padding: 0 0 0 20px;
  list-style: disc;
  list-style-position: outside;
  width: 100%;
  max-width: 680px;
  align-self: stretch;
  flex: none;
  box-sizing: border-box;

  ${media.mobile} {
    display: none;
  }
`;

/** Content-C4 — "소제목: 설명" */
export const ProblemListItem = styled.li`
  margin: 0 0 8px;

  &:last-child {
    margin-bottom: 0;
  }

  width: 100%;
  max-width: 680px;
  min-height: 24px;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #777777;
  word-break: keep-all;
  align-self: stretch;

  &::marker {
    color: #777777;
  }
`;

export const Label = styled.strong`
  font-weight: 700;
  color: #232527;
`;
