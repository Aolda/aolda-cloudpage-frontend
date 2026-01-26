import styled from 'styled-components';

export const Sidebar = styled.aside`
  min-width: 200px;
  max-width: 200px;
  flex-shrink: 0;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;
`;

export const SidebarTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 2rem 0;
`;

