import styled from 'styled-components';
import { media } from '@/styles/theme';

/** Frame 150 — prev/next navigation */
export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  gap: 36px;
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;

  & + & {
    border-top: none;
  }

  ${media.tablet} {
    height: 50px;
  }

  ${media.mobile} {
    height: 48px;
  }
`;

export const NavLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;

export const NavEmpty = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #777777;
`;

/** Label group — padding 0 20, gap 12, chevron 16 */
export const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  gap: 12px;
  flex: none;
  flex-shrink: 0;
`;

export const ArrowIcon = styled.svg<{ $direction: 'up' | 'down' }>`
  width: 16px;
  height: 16px;
  flex: none;
  flex-shrink: 0;

  path {
    stroke: #777777;
    stroke-width: 1.5;
  }
`;

/** Content-C4 desktop 16 / Content-C6 tablet 12 / Content-C7 mobile 10 — #777 */
export const NavLabel = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #777777;
  flex: none;

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
  }
`;
/** Title area — flex-grow 1, padding 0 20 */
export const NavTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  flex: 1 1 auto;
  min-width: 0;
`;

export const NavTitle = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #777777;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
  }
`;

export const NavTitleLink = styled.a`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #777777;
  text-decoration: none;
  cursor: pointer;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
  }
`;