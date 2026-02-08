import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const Button = styled.button<{ $isActive: boolean }>`
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  border: 1px solid ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.border)};
  border-radius: 20px;
  background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.surface)};
  color: ${({ theme, $isActive }) => ($isActive ? '#ffffff' : theme.colors.text)};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.surfaceAlt)};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

