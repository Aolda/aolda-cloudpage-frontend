import styled, { css } from 'styled-components';

export const SearchForm = styled.form<{ $embedded?: boolean }>`
  margin-top: ${({ $embedded }) => ($embedded ? 0 : '1.125rem')};
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ $embedded }) => ($embedded ? 'none' : '62.25rem')};
  height: ${({ $embedded }) => ($embedded ? 'auto' : '3rem')};

  ${({ $embedded }) =>
    !$embedded &&
    css`
      max-width: 62.25rem;
    `}
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input<{ $embedded?: boolean }>`
  flex: 1;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: ${({ $embedded }) => ($embedded ? '1rem' : '0.9375rem')};
  line-height: 1.1875rem;
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s;

  ${({ $embedded, theme }) =>
    $embedded
      ? css`
          padding: 0 2.5rem 0 0;
          border: none;
          border-radius: 0;
          background: transparent;
          height: auto;
          min-height: 1.1875rem;
          color: ${theme.mode === 'dark' ? '#FAFAFA' : '#777777'};

          &::placeholder {
            color: ${theme.mode === 'dark' ? '#FAFAFA' : '#777777'};
            opacity: ${theme.mode === 'dark' ? 0.85 : 1};
          }

          &:focus {
            outline: none;
          }
        `
      : css`
          padding: 0.75rem 2.8125rem 0.75rem 1rem;
          border: 1px solid
            ${theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.borderStrong};
          border-bottom: 0.125rem solid
            ${theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.borderStrong};
          border-radius: 0.5rem;
          background: transparent;

          &:focus {
            outline: none;
            border-color: ${theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.borderStrong};
            border-bottom-color: ${theme.colors.primary500};
          }

          &::placeholder {
            color: ${theme.colors.textMuted};
          }
        `}
`;

export const SearchIcon = styled.svg<{ $embedded?: boolean }>`
  position: ${({ $embedded }) => ($embedded ? 'static' : 'absolute')};
  right: ${({ $embedded }) => ($embedded ? 'auto' : '1rem')};
  margin-left: ${({ $embedded }) => ($embedded ? 'auto' : '0')};
  flex-shrink: 0;
  width: ${({ $embedded }) => ($embedded ? '1.5rem' : '1.25rem')};
  height: ${({ $embedded }) => ($embedded ? '1.5rem' : '1.25rem')};
  color: ${({ theme, $embedded }) =>
    $embedded ? theme.colors.primary300 : theme.colors.primary500};
  pointer-events: none;
`;

