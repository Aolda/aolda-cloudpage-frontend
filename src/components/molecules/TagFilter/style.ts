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

  &[data-faq-style='true'] {
    width: 1200px;
    height: 48px;
    gap: 0;
    padding: 0;

    ${media.tablet} {
      width: 100%;
      max-width: 680px;
      height: 48px;
    }

    ${media.mobile} {
      width: 100%;
      max-width: 343px;
      height: 64px;
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
        width: auto;
        min-width: 0;
        flex: 1;
        max-width: 136px;
        height: 48px;
        font-size: 16px;
        font-weight: ${$isActive ? 700 : 400};
        line-height: ${$isActive ? '19px' : '24px'};

        ${theme.mode === 'dark'
          ? css`
              background: ${$isActive ? theme.colors.primary500 : theme.colors.surface};
              border: ${$isActive ? 'none' : `1px solid ${theme.colors.widgetBorder}`};
              color: ${$isActive ? '#fefefe' : '#FAFAFA'};
            `
          : css`
              background: ${$isActive ? theme.colors.primary500 : theme.colors.surface};
              border: ${$isActive ? 'none' : `1px solid ${theme.colors.border}`};
              color: ${$isActive ? '#fefefe' : theme.colors.gray600};
            `}
      }

      ${media.mobile} {
        width: 85.75px;
        height: 32px;
        min-width: 0;
        max-width: none;
        padding: 8px 20px;
        flex: 0 0 25%;
        font-size: 10px;
        line-height: ${$isActive ? '12px' : '15px'};
        font-weight: ${$isActive ? 700 : 400};
        border-radius: 0;
        border: ${$isActive ? 'none' : '1px solid #efefef'};
        background: ${$isActive ? '#1a8ee5' : '#fefefe'};
        color: ${$isActive ? '#fefefe' : '#777777'};
      }
    `}

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
