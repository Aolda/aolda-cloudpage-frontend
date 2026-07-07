import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Sidebar = styled.aside`
  width: 180px;
  flex-shrink: 0;
  padding: 0;
  background: transparent;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.belowDesktop} {
    width: 100%;
    max-width: none;
    gap: 12px;
  }
`;

export const SidebarTitle = styled.h2`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #232527;
  margin: 0;

  ${media.belowDesktop} {
    font-size: 16px;
    line-height: 19px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
  }
`;
