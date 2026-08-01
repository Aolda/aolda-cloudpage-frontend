import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Section = styled.section`
  width: 1200px;
  max-width: 100%;
  height: auto;
  min-height: auto;
  padding-top: 0;
  gap: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;

  ${media.tablet} {
    width: 100%;
    max-width: 680px;
    min-height: auto;
    padding-top: 0;
    gap: 20px;
  }

  ${media.mobile} {
    width: 100%;
    max-width: 100%;
    min-height: auto;
    gap: 12px;
    align-items: stretch;
  }
`;

export const PromiseGrid = styled.div`
  /* Frame 44 - row container */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 24px;
  width: 1200px;
  max-width: 100%;
  height: 400px;

  ${media.tablet} {
    width: 680px;
    max-width: 100%;
    height: auto;
    gap: 16px;
  }

  ${media.mobile} {
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 8px;
    align-items: stretch;
  }
`;
