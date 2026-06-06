import styled, { css } from 'styled-components';
import { media } from '@/styles/theme';

export const MenuIcon = styled.span`
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
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
            background: ${$isActive ? '#1572b8' : theme.colors.surface};
            border: ${$isActive ? 'none' : `1px solid ${theme.colors.border}`};
            color: ${$isActive ? '#ffffff' : theme.colors.gray600};
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
    `}

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
