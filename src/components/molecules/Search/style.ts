import styled, { css } from 'styled-components';

export const SearchForm = styled.form<{ $embedded?: boolean }>`
  margin-top: ${({ $embedded }) => ($embedded ? 0 : '18px')};
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ $embedded }) => ($embedded ? 'none' : '996px')};
  height: ${({ $embedded }) => ($embedded ? 'auto' : '48px')};

  ${({ $embedded }) =>
    !$embedded &&
    css`
      max-width: 996px;
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
  font-size: ${({ $embedded }) => ($embedded ? '16px' : '1.5rem')};
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s;

  ${({ $embedded, theme }) =>
    $embedded
      ? css`
          padding: 0 40px 0 0;
          border: none;
          border-radius: 0;
          background: transparent;
          height: auto;
          min-height: 19px;
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
          padding: 1.2rem 4.5rem 1.2rem 1.6rem;
          border: 1px solid
            ${theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.borderStrong};
          border-bottom: 2px solid
            ${theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.borderStrong};
          border-radius: 8px;
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
  right: ${({ $embedded }) => ($embedded ? 'auto' : '1.6rem')};
  margin-left: ${({ $embedded }) => ($embedded ? 'auto' : '0')};
  flex-shrink: 0;
  width: ${({ $embedded }) => ($embedded ? '24px' : '2rem')};
  height: ${({ $embedded }) => ($embedded ? '24px' : '2rem')};
  color: ${({ theme, $embedded }) =>
    $embedded ? theme.colors.primary300 : theme.colors.primary500};
  pointer-events: none;
`;

