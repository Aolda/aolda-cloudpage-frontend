import styled from 'styled-components';

export const PaginationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 3rem;
`;

export const PrevButton = styled.button`
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.surfaceAlt};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const NextButton = styled.button`
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.surfaceAlt};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const PageList = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
  min-width: 3.6rem;
  height: 3.6rem;
  font-size: 1.4rem;
  color: ${({ theme, $isActive }) => ($isActive ? '#ffffff' : theme.colors.text)};
  background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.surface)};
  border: 1px solid ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.border)};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primaryAccent : theme.colors.surfaceAlt)};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

