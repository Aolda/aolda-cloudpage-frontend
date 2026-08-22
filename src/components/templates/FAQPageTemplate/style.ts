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

/**
 * Frame 136 — desktop padding 72 120.
 * Tablet: 744 wide, padding 32 → inner 680, gap 24; hero is in flow (400px) so no margin-top.
 * Mobile: padding 20 16 → inner 343, gap 20, centered column.
 */
export const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 72px 120px;
  box-sizing: border-box;
  background: #fefefe;

  ${media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 744px;
    width: 100%;
    padding: 32px;
    gap: 24px;
  }

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 375px;
    width: 100%;
    padding: 20px 16px;
    gap: 20px;
  }
`;
