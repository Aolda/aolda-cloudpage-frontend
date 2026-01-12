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
  color: #999999;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover:not(:disabled) {
    color: #666666;
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
  color: #999999;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover:not(:disabled) {
    color: #666666;
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
  color: ${({ $isActive }) => ($isActive ? '#3D90D4' : '#999999')};
  background: transparent;
  border: none;
  border-bottom: ${({ $isActive }) => ($isActive ? '2px solid #3D90D4' : 'none')};
  cursor: pointer;
  transition: color 0.2s, border-bottom 0.2s;
  padding: 0;

  &:hover {
    color: ${({ $isActive }) => ($isActive ? '#3D90D4' : '#666666')};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const ChevronLeft = styled.span`
  color: inherit;
`;

export const ChevronRight = styled.span`
  color: inherit;
`;

