import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  width: 75rem;
  height: 6.875rem;
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
  padding: 1rem 0rem;
  gap: 2.25rem;
  width: 75rem;
  height: 3.4375rem;
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
  padding: 0rem 1.25rem;
  gap: 0.75rem;
  margin: 0 auto;
  width: 7.0625rem;
  height: 1.4375rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ArrowIcon = styled.svg<{ $direction: 'up' | 'down' }>`
  width: 1rem;
  height: 1rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  
  path {
    stroke: #777777;
    stroke-width: 0.09375rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    height: 0.208125rem;
    left: 29.17%;
    right: 29.17%;
    top: calc(50% - 0.208125rem / 2);
    border: 0.09375rem solid #777777;
  }
`;

export const NavLabel = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
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
  padding: 0 1.25rem;
  gap: 0.625rem;
  margin: 0 auto;
  flex: 1;
  min-width: 0;
  order: 1;
`;

export const NavTitle = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  text-align: center;
  color: #777777;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const NavTitleLink = styled.a`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
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

