import styled from 'styled-components';
import { media } from '@/styles/theme';

export const SimilarServicesSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 210px;
  box-sizing: border-box;

  ${media.tablet} {
    padding: 0;
    max-width: 680px;
    width: 100%;
    margin-bottom: 60px;
    gap: 12px;
  }

  ${media.mobile} {
    max-width: 343px;
    margin-bottom: 40px;
    gap: 12px;
  }
`;

export const Description = styled.p`
  margin: 1rem 0 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  color: #777777;
  line-height: 150%;
  width: 100%;

  ${media.tablet} {
    margin: 0;
    font-size: 16px;
    line-height: 150%;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 150%;
  }
`;

export const ServicesGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;

  ${media.tablet} {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    width: 100%;
  }

  ${media.mobile} {
    margin-top: 0;
    gap: 16px;
  }
`;
