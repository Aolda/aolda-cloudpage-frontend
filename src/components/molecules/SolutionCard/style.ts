import styled from 'styled-components';
import { media } from '@/styles/theme';

export const SolutionCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fefefe;
  border: 1px solid #efefef;
  border-radius: 12px;
  min-width: 0;

  /* desktop: 384×129 — grow in 3-card row; max-width caps 2-card row */
  ${media.desktop} {
    flex: 1 1 0;
    width: 384px;
    max-width: 384px;
    height: 129px;
    padding: 20px 0;
    gap: 12px;
  }

  /* tablet: row1 213.33×95 / row2 330×95 — flex-grow fills row */
  ${media.tablet} {
    flex: 1 1 0;
    max-width: none;
    height: 95px;
    padding: 16px 0;
    gap: 8px;
    background: #fefefe;
    border: 1px solid #efefef;
    border-radius: 12px;
  }

  ${media.mobile} {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    min-height: 24px;
    padding: 0;
    gap: 12px;
    background: transparent;
    border: none;
    border-radius: 0;
  }
`;

export const SolutionTitle = styled.h3`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: #1a8ee5;
  text-align: center;

  ${media.desktop} {
    font-size: 20px;
    line-height: 24px;
  }

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
  }

  ${media.mobile} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    min-width: 72px;
    height: 24px;
    padding: 6px 4px;
    background: #efefef;
    border-radius: 4px;
    font-size: 10px;
    line-height: 12px;
    color: #777777;
    text-align: center;
  }
`;

export const SolutionDescription = styled.p`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  text-align: center;
  color: #777777;

  ${media.desktop} {
    font-size: 16px;
    line-height: 150%;
  }

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
    word-break: keep-all;
  }

  ${media.mobile} {
    flex: 1;
    min-width: 0;
    font-size: 10px;
    line-height: 150%;
    color: #232527;
    text-align: left;
    word-break: keep-all;
  }
`;
