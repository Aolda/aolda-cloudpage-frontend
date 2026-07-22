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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 120px 252px;
  box-sizing: border-box;
  background: #fefefe;

  ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 744px;
    padding: 36px 32px 55px;
    gap: 36px;
  }

  ${media.mobile} {
    flex-direction: column;
    padding: 24px 16px 252px;
    gap: 24px;
    max-width: 100%;
  }
`;

export const SidebarWrapper = styled.div`
  flex: none;
  flex-shrink: 0;
  width: 180px;

  ${media.tablet} {
    width: 100%;
    max-width: 680px;
    align-self: stretch;
  }

  ${media.mobile} {
    max-width: 343px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 36px;
  width: 996px;
  max-width: 996px;
  flex: none;
  min-width: 0;
  box-sizing: border-box;

  ${media.tablet} {
    width: 100%;
    max-width: 680px;
    gap: 36px;
    align-self: stretch;
  }

  ${media.mobile} {
    max-width: 343px;
    gap: 24px;
  }
`;

export const SearchSection = styled.div`
  width: 100%;
  max-width: 996px;

  ${media.tablet} {
    display: none;
  }

  ${media.mobile} {
    display: none;
  }
`;
