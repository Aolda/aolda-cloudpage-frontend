import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  max-width: 600px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 1.2rem 1.6rem;
  font-size: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentGlow};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryAccent};
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const SearchIcon = styled.svg`
  width: 2rem;
  height: 2rem;
`;

