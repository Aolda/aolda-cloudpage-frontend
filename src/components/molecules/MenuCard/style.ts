import styled from 'styled-components';

export const MenuCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  border: 1px solid #e1e6f5;
  justify-content: space-between;
`;

export const MenuTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const MenuLink = styled.a`
  align-self: flex-end;
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

