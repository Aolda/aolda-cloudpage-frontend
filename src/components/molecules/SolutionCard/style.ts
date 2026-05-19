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
  width: 384px;
  height: 127px;
  background: #fefefe;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  flex: none;

  ${media.tablet} {
    flex: 1;
    min-width: 0;
    width: auto;
    height: 97px;
    padding: 16px 12px;
    gap: 8px;
    border: 1px solid #efefef;
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
    flex-shrink: 0;
    width: 100%;
    font-size: 16px;
    line-height: 19px;
    color: #1a8ee5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${media.mobile} {
    flex: none;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    min-width: 72px;
    max-width: 72px;
    height: 24px;
    padding: 6px 4px;
    background: #efefef;
    border-radius: 4px;
    font-size: 10px;
    line-height: 12px;
    color: #777777;
    text-align: center;
    white-space: normal;
    word-break: keep-all;
    overflow: hidden;
  }
`;

export const SolutionDescription = styled.p`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #777777;

  ${media.tablet} {
    width: 100%;
    min-height: 38px;
    height: 38px;
    font-size: 12px;
    line-height: 19px;
    word-break: keep-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  ${media.mobile} {
    flex: 1;
    min-width: 0;
    width: auto;
    height: auto;
    min-height: 15px;
    font-size: 10px;
    line-height: 150%;
    color: #232527;
    text-align: left;
    display: block;
    overflow: visible;
    -webkit-line-clamp: unset;
    word-break: keep-all;
  }
`;
