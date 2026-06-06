import styled, { css } from 'styled-components';
import { media } from '@/styles/theme';

export const SearchForm = styled.form<{ $embedded?: boolean }>`
  margin-top: ${({ $embedded }) => ($embedded ? 0 : '18px')};
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ $embedded }) => ($embedded ? 'none' : '996px')};
  height: ${({ $embedded }) => ($embedded ? 'auto' : '48px')};
  box-sizing: border-box;

  ${media.belowDesktop} {
    margin-top: 0;
    max-width: 100%;
    height: ${({ $embedded }) => ($embedded ? 'auto' : '48px')};
  }

  ${media.mobile} {
    height: ${({ $embedded }) => ($embedded ? 'auto' : '40px')};
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SearchInput = styled.input<{ $embedded?: boolean }>`
  flex: 1;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  transition: border-color 0.2s;
  box-sizing: border-box;

  ${({ $embedded, theme }) =>
    $embedded
      ? css`
          padding: 0 2.5rem 0 0;
          border: none;
          border-radius: 0;
          background: transparent;
          height: auto;
          min-height: 1.1875rem;
          font-size: 1rem;
          line-height: 1.1875rem;
          color: ${theme.mode === 'dark' ? '#FAFAFA' : theme.colors.gray600};

          &::placeholder {
            color: ${theme.mode === 'dark' ? '#FAFAFA' : theme.colors.gray600};
            opacity: ${theme.mode === 'dark' ? 0.85 : 1};
          }

          &:focus {
            outline: none;
          }
        `
      : css`
          height: 48px;
          padding: 12px 48px 12px 16px;
          font-size: 1.5rem;
          border: 1px solid #b3d9f2;
          border-bottom: 2px solid #b3d9f2;
          border-radius: 8px;
          background: ${theme.colors.surface};
          color: ${theme.mode === 'dark' ? theme.colors.text : '#1a1a1a'};

          &:focus {
            outline: none;
            border-color: #b3d9f2;
            border-bottom-color: #3d90d4;
          }

          &::placeholder {
            color: ${theme.mode === 'dark' ? theme.colors.textMuted : '#999999'};
          }

          ${media.belowDesktop} {
            font-size: 12px;
            line-height: 150%;
            border: 1px solid ${theme.colors.border};
            border-bottom: 1px solid ${theme.colors.border};
            padding: 12px 48px 12px 16px;

            &::placeholder {
              color: ${theme.colors.gray600};
            }

            &:focus {
              border-color: ${theme.colors.border};
              border-bottom-color: ${theme.colors.border};
            }
          }

          ${media.mobile} {
            height: 40px;
            font-size: 10px;
            line-height: 150%;
            padding: 8px 48px 8px 16px;
          }
        `}
`;

export const SearchIcon = styled.svg<{ $embedded?: boolean }>`
  position: ${({ $embedded }) => ($embedded ? 'static' : 'absolute')};
  right: ${({ $embedded }) => ($embedded ? 'auto' : '1.6rem')};
  margin-left: ${({ $embedded }) => ($embedded ? 'auto' : '0')};
  flex-shrink: 0;
  width: ${({ $embedded }) => ($embedded ? '1.5rem' : '2rem')};
  height: ${({ $embedded }) => ($embedded ? '1.5rem' : '2rem')};
  color: ${({ theme, $embedded }) =>
    $embedded ? theme.colors.primary300 : '#3d90d4'};
  pointer-events: none;

  ${media.belowDesktop} {
    right: 16px;
    width: 24px;
    height: 24px;
    color: ${({ theme, $embedded }) =>
      $embedded ? theme.colors.primary300 : theme.colors.gray600};
  }
`;
