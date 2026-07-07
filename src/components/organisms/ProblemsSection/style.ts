import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ProblemsSection = styled.section`
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

export const ProblemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  ${media.tablet} {
    gap: 12px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;
