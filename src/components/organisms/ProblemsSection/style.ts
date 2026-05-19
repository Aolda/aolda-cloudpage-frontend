import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ProblemsSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  width: 100%;
  margin-bottom: -40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  ${media.tablet} {
    padding: 0;
    max-width: 680px;
    width: 100%;
    margin: 0;
    gap: 16px;
  }

  ${media.mobile} {
    max-width: 343px;
    gap: 12px;
  }
`;

export const ProblemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  margin-top: 16px;

  ${media.tablet} {
    gap: 24px;
    margin-top: 16px;
  }

  ${media.mobile} {
    gap: 16px;
    margin-top: 0;
  }
`;
