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
  padding: 60px 120px 0;
  box-sizing: border-box;
  background: #fefefe;

  ${media.belowDesktop} {
    flex-direction: column;
    padding: 36px 32px 0;
    gap: 36px;
  }

  ${media.mobile} {
    padding: 24px 16px 0;
    gap: 24px;
  }
`;

export const SidebarWrapper = styled.div`
  flex-shrink: 0;
  width: 180px;

  ${media.belowDesktop} {
    width: 100%;
    max-width: 680px;
    align-self: stretch;
  }

  ${media.mobile} {
    max-width: 343px;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 996px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  box-sizing: border-box;

  ${media.belowDesktop} {
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

  ${media.belowDesktop} {
    display: none;
  }
`;
