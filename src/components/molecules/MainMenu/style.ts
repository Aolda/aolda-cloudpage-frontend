import styled from 'styled-components';

export const MainMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const MenuItem = styled.a`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.2s;
  padding: 0.4rem 0;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
