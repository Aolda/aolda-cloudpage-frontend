import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Sidebar = styled.aside`
  min-width: 200px;
  max-width: 200px;
  flex-shrink: 0;
  padding: 2rem;
  background: #ffffff;
  box-sizing: border-box;

  ${media.belowDesktop} {
    min-width: 0;
    max-width: none;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: #030303;
  margin: 0 0 2rem 0;
  font-family: 'Noto Sans KR', sans-serif;

  ${media.belowDesktop} {
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #232527;
    margin: 0;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
  }
`;
