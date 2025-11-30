import styled from 'styled-components';

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 1.6rem;
`;

export const BreadcrumbItem = styled.span`
  display: flex;
  align-items: center;
`;

export const BreadcrumbLink = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BreadcrumbText = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

export const Separator = styled.span`
  margin: 0 0.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

