import styled from 'styled-components';
import { media } from '@/styles/theme';

export const SimilarServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;

  ${media.desktop} {
    gap: 20px;
    padding-bottom: 60px;
  }

  ${media.tablet} {
    padding-bottom: 0;
    gap: 16px;
    max-width: 680px;
  }

  ${media.mobile} {
    padding-bottom: 32px;
    gap: 12px;
  }
`;

export const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

export const Description = styled.p`
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
    font-size: 12px;
  }
`;

/** Desktop: single row of 4 · Tablet Figma: 680 wide, 2×330 + gap 20 */
export const ServicesGrid = styled.div`
  width: 100%;

  /* desktop: flex row, gap 32, 4×flex-grow → ~276 each in 1200 */
  ${media.desktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: 32px;
    width: 1200px;
    max-width: 1200px;
  }

  ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 330px));
    justify-content: space-between;
    column-gap: 20px;
    row-gap: 20px;
    width: 100%;
    max-width: 680px;
  }

  ${media.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px 16px;
  }
`;
