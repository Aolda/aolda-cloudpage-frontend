import styled from 'styled-components';
import { media } from '@/styles/theme';

export const SolutionsSection = styled.section`
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

export const SolutionsGrid = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  width: 100%;

  ${media.tablet} {
    margin-top: 0;
    gap: 20px;
    width: 100%;
  }

  ${media.mobile} {
    margin-top: 0;
    gap: 8px;
  }
`;

export const SolutionsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 24px;
  width: 100%;

  ${media.tablet} {
    gap: 20px;
    width: 100%;
  }

  ${media.mobile} {
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
`;
