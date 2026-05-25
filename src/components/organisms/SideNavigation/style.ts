import styled from 'styled-components';

export const Sidebar = styled.aside`
  min-width: 12.5rem;
  max-width: 12.5rem;
  flex-shrink: 0;
  padding: 1.25rem;
  background: transparent;
  box-sizing: border-box;
`;

export const SidebarTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1.25rem 0;
  font-family: 'Noto Sans KR', sans-serif;
`;

