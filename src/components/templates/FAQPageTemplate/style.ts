import styled from 'styled-components';
import { media } from '@/styles/theme';

export const TemplateContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background: #fefefe;
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 72px 120px;
  box-sizing: border-box;
  background: #fefefe;

  ${media.tablet} {
    max-width: 100%;
    padding: 32px;
  }

  ${media.mobile} {
    max-width: 375px;
    padding: 20px 16px;
  }
`;
