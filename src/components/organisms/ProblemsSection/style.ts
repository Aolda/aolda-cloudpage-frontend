import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ProblemsSection = styled.section`
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
    gap: 12px;
  }
`;

export const ProblemsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.desktop} {
    gap: 16px;
  }

  ${media.tablet} {
    gap: 12px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;
