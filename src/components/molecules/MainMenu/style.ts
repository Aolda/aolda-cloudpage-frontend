import styled from 'styled-components';

/* TAB */
export const MainMenu = styled.nav`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin: 0 auto;
  width: 272px;
  height: 40px;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  gap: 2.4rem;
`;

export const MenuItem = styled.a`
  font-size: 1.6rem;
  font-weight: 400;
  color: #9E9E9E;
  text-decoration: none;
  transition: color 0.2s;
  padding: 0.4rem 0;
  position: relative;

  &:hover {
    color: #757575;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
