import styled, { css } from 'styled-components';
import { media } from '@/styles/theme';

export const MenuIcon = styled.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: inherit;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 12px;
  height: 31px;
  flex: none;

  ${media.mobile} {
    height: auto;
    flex-wrap: wrap;
  }

  &[data-faq-style='true'] {
    width: 1200px;
    height: 48px;
    gap: 0;
    padding: 0;

    ${media.tablet} {
      width: 100%;
      max-width: 680px;
      height: 48px;
      flex-wrap: nowrap;
      gap: 0;
    }

    ${media.mobile} {
      width: 100%;
      max-width: 343px;
      height: auto;
      min-height: 32px;
      flex-wrap: wrap;
      align-content: flex-start;
      row-gap: 0;
      column-gap: 0;
    }
  }
`;

const faqButtonStyles = css`
  padding: 12px 20px;
  gap: 12px;
  width: 240px;
  height: 48px;
  border-radius: 0;
  flex-grow: 1;
  font-size: 16px;
`;

export const Button = styled.button<{ $isActive: boolean; $faqStyle?: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 16px;
  gap: 8px;
  height: 31px;
  border-radius: 200px;
  flex: none;
  cursor: pointer;
  transition: all 0.2s;

  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  background: ${({ $isActive, theme }) =>
    $isActive
      ? theme.mode === 'dark'
        ? theme.colors.text
        : '#181818'
      : theme.colors.surface};
  border: ${({ $isActive, theme }) =>
    $isActive ? 'none' : `1px solid ${theme.colors.gray600}`};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.surface : theme.colors.gray600};

  ${({ $faqStyle, $isActive, theme }) =>
    $faqStyle &&
    css`
      ${faqButtonStyles}
      font-weight: ${$isActive ? 700 : 400};
      line-height: ${$isActive ? '19px' : '24px'};

      ${theme.mode === 'dark'
        ? css`
            background: ${$isActive ? theme.colors.primary500 : theme.colors.surface};
            border: ${$isActive ? 'none' : `1px solid ${theme.colors.widgetBorder}`};
            color: ${$isActive ? '#FEFEFE' : '#FAFAFA'};
          `
        : css`
            background: ${$isActive ? '#1A8EE5' : '#fefefe'};
            border: ${$isActive ? 'none' : '1px solid #efefef'};
            color: ${$isActive ? '#fefefe' : '#777777'};
          `}

      ${media.tablet} {
        box-sizing: border-box;
        width: auto;
        min-width: 0;
        flex: 1 1 0;
        flex-grow: 1;
        max-width: none;
        height: 48px;
        padding: 12px 20px;
        gap: 12px;
        font-size: 16px;
        font-weight: ${$isActive ? 700 : 400};
        line-height: ${$isActive ? '19px' : '24px'};
        white-space: nowrap;

        ${theme.mode === 'dark'
          ? css`
              background: ${$isActive ? theme.colors.primary500 : theme.colors.surface};
              border: ${$isActive ? 'none' : `1px solid ${theme.colors.widgetBorder}`};
              color: ${$isActive ? '#FEFEFE' : '#FAFAFA'};
            `
          : css`
              background: ${$isActive ? '#1A8EE5' : '#FEFEFE'};
              border: ${$isActive ? 'none' : '1px solid #EFEFEF'};
              color: ${$isActive ? '#FEFEFE' : '#777777'};
            `}

        ${MenuIcon} {
          width: 24px;
          height: 24px;
        }
      }

      ${media.mobile} {
        flex: 1 1 0;
        flex-grow: 1;
        width: 85.75px;
        min-width: 0;
        max-width: none;
        height: auto;
        min-height: 32px;
        padding: 8px 20px;
        gap: 8px;
        font-size: 10px;
        line-height: ${$isActive ? '12px' : '150%'};
        font-weight: ${$isActive ? 700 : 400};
        text-align: center;
        white-space: normal;
        word-break: keep-all;
        border-radius: 0;
        border: ${$isActive ? 'none' : '1px solid #efefef'};
        background: ${$isActive ? '#1a8ee5' : '#fefefe'};
        color: ${$isActive ? '#fefefe' : '#777777'};

        ${MenuIcon} {
          width: 16px;
          height: 16px;
        }
      }
    `}

  ${media.tablet} {
    ${({ $faqStyle }) =>
      !$faqStyle &&
      css`
        padding: 7px 16px;
        font-size: 10px;
        line-height: 12px;
        height: auto;
        border-radius: 200px;
      `}
  }

  ${media.mobile} {
    ${({ $faqStyle }) =>
      !$faqStyle &&
      css`
        padding: 7px 16px;
        gap: 8px;
        font-size: 10px;
        line-height: 12px;
        font-weight: 700;
        height: auto;
        border-radius: 200px;
      `}
  }

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
