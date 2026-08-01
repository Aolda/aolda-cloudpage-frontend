import styled from 'styled-components';
import { media } from '@/styles/theme';

export const SolutionCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 12px;
  flex: 1 1 0;
  max-width: 384px;
  min-width: 0;
  height: 129px;
  background: #fefefe;
  border: 1px solid #efefef;
  border-radius: 12px;

  ${media.tablet} {
    height: 97px;
    padding: 16px 12px;
    gap: 8px;
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
  font-size: 20px;
  line-height: 24px;
  color: #1a8ee5;
  text-align: center;

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
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #777777;

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
