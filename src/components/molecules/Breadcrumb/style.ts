import styled from 'styled-components';

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1875rem;
  margin-bottom: 0;
`;

export const BreadcrumbItem = styled.span`
  display: flex;
  align-items: center;
`;

export const BreadcrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
  height: 1.4375rem;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const BreadcrumbText = styled.span`
  color: inherit;
  display: flex;
  align-items: center;
`;

export const Separator = styled.span`
  margin: 0 0.25rem;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

