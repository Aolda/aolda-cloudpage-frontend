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
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #232527;

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ProblemBody = styled.p`
  margin: 0;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #777777;
  word-break: keep-all;

  ${media.tablet} {
    font-size: 16px;
  }

  ${media.mobile} {
    font-size: 10px;
  }
`;
