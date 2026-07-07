import styled from 'styled-components';
import { media } from '@/styles/theme';

export const SolutionsSection = styled.section`
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

export const SolutionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  width: 100%;

  ${media.tablet} {
    gap: 20px;
  }

  ${media.mobile} {
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
  }

  ${media.mobile} {
    flex-direction: column;
    gap: 8px;
  }
`;
