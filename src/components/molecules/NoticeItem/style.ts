import styled from 'styled-components';

export const NoticeLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const NoticeItem = styled.div`
  display: block;
`;

export const NoticeRow = styled.div`
  display: grid;
  grid-template-columns: 60px 100px 1fr 120px;
  gap: 1.6rem;
  align-items: center;
  padding: 1.6rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceAlt};
  }
`;

export const Number = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
`;

export const Category = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

export const Date = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: right;
`;

