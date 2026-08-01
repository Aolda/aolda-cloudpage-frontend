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

  ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 744px;
    padding: 36px 32px;
    gap: 36px;
  }

  ${media.mobile} {
    flex-direction: column;
    width: 375px;
    max-width: 100%;
    padding: 24px 16px;
    gap: 24px;
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
    width: 343px;
    max-width: 100%;
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
    width: 343px;
    max-width: 100%;
    gap: 36px;
  }
`;

export const SearchSection = styled.div`
  width: 100%;
  max-width: 996px;

  /* 태블릿·모바일: 검색은 Hero 내부 — ContentWrapper에서 숨김(중복 방지) */
  ${media.tablet} {
    display: none;
  }

  ${media.mobile} {
    display: none;
  }
`;
