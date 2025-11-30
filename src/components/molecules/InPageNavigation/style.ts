import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  flex: 1;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  padding: 1.2rem;
  text-decoration: none;
  color: inherit;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceAlt};
  }
`;

export const NavEmpty = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  padding: 1.2rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ArrowIcon = styled.svg<{ $direction: 'up' | 'down' }>`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.textMuted};
  flex-shrink: 0;
`;

export const NavLabel = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  min-width: 6rem;
`;

export const NavTitle = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
`;

