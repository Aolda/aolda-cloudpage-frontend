import styled from 'styled-components';

export const Sidebar = styled.aside`
  min-width: 200px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SidebarTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 2rem 0;
`;

