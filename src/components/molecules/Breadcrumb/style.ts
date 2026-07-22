import styled from 'styled-components';

export const Breadcrumb = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 8px;
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  margin-bottom: 0;
`;

export const BreadcrumbItem = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const BreadcrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const BreadcrumbText = styled.span`
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.span`
  margin: 0;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex: none;
`;

export const Chevron = styled.svg`
  width: 16px;
  height: 16px;
  display: block;
  color: inherit;
`;
