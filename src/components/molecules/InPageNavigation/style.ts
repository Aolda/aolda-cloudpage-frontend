import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 1200px;
  height: 110px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0px;
  gap: 36px;
  width: 1200px;
  height: 55px;
  border-top: 1px solid #E2E2E2;
  border-bottom: 1px solid #E2E2E2;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  
  &:first-child {
    border-bottom: none;
  }
  
  &:last-child {
    order: 1;
  }
`;

export const NavLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;

export const NavEmpty = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  color: #777777;
`;

export const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 12px;
  margin: 0 auto;
  width: 113px;
  height: 23px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ArrowIcon = styled.svg<{ $direction: 'up' | 'down' }>`
  width: 16px;
  height: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  
  path {
    stroke: #777777;
    stroke-width: 1.5px;
  }
  
  &::after {
    content: '';
    position: absolute;
    height: 3.33px;
    left: 29.17%;
    right: 29.17%;
    top: calc(50% - 3.33px / 2 - 0px);
    border: 1.5px solid #777777;
  }
`;

export const NavLabel = styled.span`
  width: 45px;
  height: 23px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #777777;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const NavTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  margin: 0 auto;
  width: 1087px;
  height: 23px;
  flex: none;
  order: 1;
  flex-grow: 1;
`;

export const NavTitle = styled.span`
  width: auto;
  height: 23px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #777777;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const NavTitleLink = styled.a`
  width: auto;
  height: 23px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #777777;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

