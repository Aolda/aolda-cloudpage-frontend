import styled from 'styled-components';

/* TAB */
export const MainMenu = styled.nav`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem;
  margin: 0 auto;
  width: 17rem;
  height: 2.5rem;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  gap: 1.5rem;
`;

export const MenuItem = styled.a`
  font-size: 1rem;
  font-weight: 400;
  color: #9E9E9E;
  text-decoration: none;
  transition: color 0.2s;
  padding: 0.25rem 0;
  position: relative;

  &:hover {
    color: #757575;
  }

  &:focus {
    outline: 0.125rem solid ${({ theme }) => theme.colors.primary};
    outline-offset: 0.125rem;
    border-radius: 0.125rem;
  }
`;
