import styled from 'styled-components';
import { media } from '@/styles/theme';

export const TemplateContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 120px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.surface};
  margin-bottom: 120px;

  ${media.tablet} {
    max-width: 100%;
    margin-bottom: 60px;
    padding: 32px;
  }

  ${media.mobile} {
    max-width: 375px;
    margin-bottom: 30px;
    padding: 20px 16px;
  }
`;
