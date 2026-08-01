import styled, { css } from 'styled-components';
import { media } from '@/styles/theme';

export const SearchForm = styled.form<{ $embedded?: boolean }>`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ $embedded }) => ($embedded ? 'none' : '996px')};
  height: ${({ $embedded }) => ($embedded ? 'auto' : '48px')};
  box-sizing: border-box;

  ${media.tablet} {
    max-width: 680px;
    height: ${({ $embedded }) => ($embedded ? 'auto' : '48px')};
  }

  ${media.mobile} {
    width: 100%;
    max-width: 343px;
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
          font-size: 16px;
          line-height: 1.1875rem;
          color: ${theme.mode === 'dark' ? '#FAFAFA' : theme.colors.gray600};

          &::placeholder {
            color: ${theme.mode === 'dark' ? '#FAFAFA' : theme.colors.gray600};
            opacity: ${theme.mode === 'dark' ? 0.85 : 1};
          }

          &:focus {
            outline: none;
          }

          ${media.tablet} {
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            min-height: 14px;

            &::placeholder {
              font-weight: 700;
              font-size: 12px;
              line-height: 14px;
              color: ${theme.mode === 'dark' ? '#FAFAFA' : theme.colors.gray600};
            }
          }

          ${media.mobile} {
            font-weight: 700;
            font-size: 10px;
            line-height: 12px;
            min-height: 12px;
            padding: 0;

            &::placeholder {
              font-weight: 700;
              font-size: 10px;
              line-height: 12px;
              color: ${theme.mode === 'dark' ? '#FAFAFA' : '#777777'};
            }
          }
        `
      : css`
          height: 48px;
          padding: 12px 48px 12px 16px;
          font-size: 16px;
          line-height: 19px;
          border: 1px solid #efefef;
          border-radius: 8px;
          background: #fefefe;
          color: ${theme.mode === 'dark' ? theme.colors.text : '#232527'};

          &:focus {
            outline: none;
            border-color: #efefef;
          }

          &::placeholder {
            color: #777777;
          }

          ${media.tablet} {
            font-size: 12px;
            line-height: 150%;
            border: 1px solid #efefef;
            padding: 12px 48px 12px 16px;
            background: #fefefe;

            &::placeholder {
              color: #777777;
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
  right: ${({ $embedded }) => ($embedded ? 'auto' : '16px')};
  margin-left: ${({ $embedded }) => ($embedded ? 'auto' : '0')};
  flex-shrink: 0;
  width: ${({ $embedded }) => ($embedded ? '1.5rem' : '24px')};
  height: ${({ $embedded }) => ($embedded ? '1.5rem' : '24px')};
  color: ${({ theme, $embedded }) =>
    $embedded ? theme.colors.primary300 : '#777777'};
  pointer-events: none;

  ${media.belowDesktop} {
    right: 16px;
    width: 24px;
    height: 24px;
    color: ${({ theme, $embedded }) =>
      $embedded ? theme.colors.primary300 : theme.colors.gray600};
  }

  ${media.mobile} {
    ${({ $embedded }) =>
      $embedded &&
      css`
        width: 12px;
        height: 12px;
        color: #777777;
      `}
  }
`;
