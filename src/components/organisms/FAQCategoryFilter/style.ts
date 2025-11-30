import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2.4rem;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  border: 1px solid ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.border)};
  border-radius: 8px;
  background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.surface)};
  color: ${({ theme, $isActive }) => ($isActive ? '#ffffff' : theme.colors.text)};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primaryAccent : theme.colors.surfaceAlt)};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const CategoryIcon = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
`;

