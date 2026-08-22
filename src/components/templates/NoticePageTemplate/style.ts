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
  margin: 480px auto 0;
  padding: 40px 120px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.surface};
  margin-bottom: 120px;

  /* Frame 136 — tablet, below hero 400 */
  ${media.tablet} {
    max-width: 744px;
    margin: 400px auto 0;
    padding: 32px 40px;
    margin-bottom: 80px;
  }

  /* Frame 136 — mobile, below hero 250 (nav 68 + hero 250 ≈ 317 from page top) */
  ${media.mobile} {
    max-width: 375px;
    margin: 250px auto 0;
    padding: 20px 28px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

