import styled from 'styled-components';

export const PaginationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: ${({ theme }) => (theme.mode === 'dark' ? '2.25rem' : '0.5rem')};
  width: auto;
  height: 2rem;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const PrevButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 0.25rem;
  width: 3.125rem;
  height: 1.4375rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;

export const NextButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 0.25rem;
  width: 3.125rem;
  height: 1.4375rem;
  flex: none;
  order: 2;
  flex-grow: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;

export const PageList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 0.5rem;
  width: auto;
  height: 2rem;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.625rem;
  width: 2rem;
  height: 2rem;
  flex: none;
  flex-grow: 0;
  background: transparent;
  border: none;
  border-bottom: ${({ $isActive }) => ($isActive ? '0.125rem solid #1A8EE5' : 'none')};
  cursor: pointer;

  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  text-align: center;
  color: ${({ $isActive, theme }) =>
    $isActive ? '#1A8EE5' : theme.mode === 'dark' ? '#FAFAFA' : '#777777'};

  &:hover:not(:disabled) {
    color: ${({ $isActive, theme }) =>
      $isActive ? '#1A8EE5' : theme.mode === 'dark' ? '#FAFAFA' : '#555555'};
  }

  &:focus {
    outline: none;
  }
`;

export const ChevronLeft = styled.span`
  width: 1rem;
  height: 1rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    left: 35.94%;
    right: 35.94%;
    bottom: 21.88%;
    width: 0.375rem;
    height: 0.375rem;
    border-left: 0.125rem solid
      ${({ theme }) => (theme.mode === 'dark' ? '#FAFAFA' : '#777777')};
    border-bottom: 0.125rem solid
      ${({ theme }) => (theme.mode === 'dark' ? '#FAFAFA' : '#777777')};
    transform: rotate(45deg);
    box-sizing: border-box;
  }
`;

export const ChevronRight = styled.span`
  width: 1rem;
  height: 1rem;
  flex: none;
  order: 1;
  flex-grow: 0;
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    left: 35.94%;
    right: 35.94%;
    bottom: 21.88%;
    width: 0.375rem;
    height: 0.375rem;
    border-right: 0.125rem solid
      ${({ theme }) => (theme.mode === 'dark' ? '#FAFAFA' : '#777777')};
    border-bottom: 0.125rem solid
      ${({ theme }) => (theme.mode === 'dark' ? '#FAFAFA' : '#777777')};
    transform: rotate(-45deg);
    box-sizing: border-box;
  }
`;

export const ButtonText = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 0.625rem;
  border-radius: 0.5rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  text-align: center;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FAFAFA' : '#777777')};
  flex: none;
  order: 0;
  flex-grow: 0;
`;
