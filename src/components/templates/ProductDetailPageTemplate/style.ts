import styled from 'styled-components';
import { media } from '@/styles/theme';

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  background: #fefefe;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  gap: 0;
  box-sizing: border-box;

  ${media.tablet} {
    max-width: 744px;
    padding: 32px;
    gap: 40px;
  }

  ${media.mobile} {
    max-width: 375px;
    padding: 24px 16px;
    gap: 32px;
  }
`;
