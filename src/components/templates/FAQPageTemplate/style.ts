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
  margin: 430px auto 0;
  padding: 40px 120px;
  box-sizing: border-box;
  background: #ffffff;
  margin-bottom: 120px;

  ${media.tablet} {
    max-width: 744px;
    margin-top: 400px;
    margin-bottom: 60px;
    padding: 32px;
  }
`;
