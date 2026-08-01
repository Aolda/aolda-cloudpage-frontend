import styled from 'styled-components';
import { media } from '@/styles/theme';

export const DevelopersSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;

  ${media.tablet} {
    gap: 16px;
  }

  ${media.mobile} {
    gap: 12px;
  }
`;

export const DevelopersGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 24px;
  width: 100%;

  ${media.tablet} {
    gap: 20px;
  }

  ${media.mobile} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
`;
