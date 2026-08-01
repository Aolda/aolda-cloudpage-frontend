import styled from 'styled-components';
import { media } from '@/styles/theme';

export const SimilarServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  padding-bottom: 60px;
  box-sizing: border-box;

  ${media.tablet} {
    padding-bottom: 40px;
    gap: 16px;
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
  font-size: 20px;
  line-height: 150%;
  color: #777777;
  width: 100%;

  ${media.tablet} {
    font-size: 16px;
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;

export const ServicesGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
  width: 100%;

  ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  ${media.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;
