import styled from 'styled-components';
import { media } from '@/styles/theme';

export const OverviewSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: -40px;
  box-sizing: border-box;

  ${media.tablet} {
    padding: 0;
    max-width: 680px;
    width: 100%;
    margin: 0;
    margin-bottom: 0;
    gap: 16px;
  }

  ${media.mobile} {
    max-width: 343px;
    gap: 8px;
  }
`;

export const OverviewContent = styled.p`
  margin-top: 3rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.6rem;
  color: #777777;
  line-height: 150%;
  width: 100%;

  ${media.tablet} {
    margin-top: 0;
    font-size: 16px;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
  }
`;
