import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-top: 18px;
  display: flex;
  align-items: center;
  width: 100%;
  width: 996px;
  max-width: 996px;
  height: 48px;
  
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 1.2rem 4.5rem 1.2rem 1.6rem;
  font-size: 1.5rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.borderStrong)};
  border-bottom: 2px solid
    ${({ theme }) => (theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.borderStrong)};
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) =>
      theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.borderStrong};
    border-bottom-color: ${({ theme }) => theme.colors.primary500};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  right: 1.6rem;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.primary500};
  pointer-events: none;
`;

