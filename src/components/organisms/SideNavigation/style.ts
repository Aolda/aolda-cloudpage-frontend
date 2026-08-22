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
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;

  ${media.tablet} {
    width: 100%;
    max-width: 680px;
    gap: 20px;
  }

  ${media.mobile} {
    width: 343px;
    max-width: 100%;
    gap: 12px;
  }
`;

export const SidebarTitle = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  gap: 10px;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #232527;
  text-align: left;

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
  }
`;
