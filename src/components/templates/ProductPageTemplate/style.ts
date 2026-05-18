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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 120px;
  box-sizing: border-box;
  background: #ffffff;
  margin-bottom: 150px;

  ${media.belowDesktop} {
    flex-direction: column;
    margin-bottom: 60px;
  }

  ${media.tablet} {
    max-width: 744px;
    padding: 36px 32px;
    gap: 36px;
  }

  ${media.mobile} {
    max-width: 100%;
    padding: 24px 16px;
    gap: 24px;
    margin-bottom: 40px;
  }
`;

export const SidebarWrapper = styled.div`
  flex-shrink: 0;
  width: 200px;

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
  display: flex;
  flex-direction: column;
  gap: 4rem;
  box-sizing: border-box;

  ${media.belowDesktop} {
    width: 100%;
    max-width: 680px;
    gap: 36px;
    align-self: stretch;
  }

  ${media.mobile} {
    max-width: 343px;
  }
`;

/** 데스크톱 본문 검색 (태블릿·모바일에서는 히어로 검색 사용) */
export const SearchSection = styled.div`
  width: 100%;

  ${media.belowDesktop} {
    display: none;
  }
`;
