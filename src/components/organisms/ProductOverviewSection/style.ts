import styled from 'styled-components';
import { media } from '@/styles/theme';

export const OverviewSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;

  ${media.desktop} {
    gap: 20px;
  }

  ${media.tablet} {
    gap: 16px;
    max-width: 680px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;

export const OverviewContent = styled.p`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  line-height: 150%;
  color: #777777;
  width: 100%;

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
