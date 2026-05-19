import styled from 'styled-components';
import { media } from '@/styles/theme';

export const DevelopersSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  ${media.tablet} {
    padding: 0;
    max-width: 680px;
    width: 100%;
    gap: 16px;
  }

  ${media.mobile} {
    max-width: 343px;
    gap: 12px;
  }
`;

export const DevelopersGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  width: 100%;

  ${media.tablet} {
    margin-top: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    gap: 20px;
    width: 100%;
  }

  ${media.mobile} {
    margin-top: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    width: 100%;
  }
`;
