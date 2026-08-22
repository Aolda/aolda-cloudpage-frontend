import styled from 'styled-components';
import { media } from '@/styles/theme';

export const TemplateContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

/**
 * Frame 136 — desktop: padding 72 120, gap 36, max-width 1440, below 480px hero.
 * Tablet: margin-top matches NoticeHero Frame 169 height 400.
 * Mobile: margin-top matches NoticeHero Frame 169 height 250; padding 20 28 → inner 319.
 */
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  /* Absolute NoticeHeroSection is 480px tall — clear it until tablet overrides exist */
  margin-top: 480px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.surface};

  ${media.desktop} {
    max-width: 1440px;
    width: 100%;
    margin-bottom: 120px;
    padding: 72px 120px;
    gap: 36px;
  }

  ${media.tablet} {
    max-width: 744px;
    width: 100%;
    margin-top: 400px;
    padding: 32px 40px;
    gap: 36px;
  }

  ${media.mobile} {
    max-width: 375px;
    width: 100%;
    margin-top: 250px;
    padding: 20px 28px;
    gap: 36px;
  }
`;