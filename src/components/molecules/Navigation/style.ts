import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0.6rem 0.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

