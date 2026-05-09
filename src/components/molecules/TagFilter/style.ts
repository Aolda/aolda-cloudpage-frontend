import styled, { css } from 'styled-components';

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
  order: 0;
  flex-grow: 0;

  &[data-faq-style='true'] {
    width: 100%;
    max-width: 1200px;
    height: 48px;
    gap: 0;
    padding: 0;
  }
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
  flex-grow: 0;
  cursor: pointer;
  transition: all 0.2s;

  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  background: ${({ $isActive }) => ($isActive ? '#181818' : '#FFFFFF')};
  border: ${({ $isActive }) => ($isActive ? 'none' : '1px solid #777777')};
  color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : '#777777')};

  ${({ $faqStyle, $isActive, theme }) =>
    $faqStyle &&
    css`
      padding: 12px 20px;
      gap: 12px;
      min-width: 0;
      width: auto;
      flex: 1 1 0;
      height: 48px;
      border-radius: 0;
      font-size: 16px;
      line-height: ${$isActive ? '19px' : '24px'};
      font-weight: ${$isActive ? '700' : '400'};

      ${theme.mode === 'dark'
        ? css`
            background: ${$isActive ? '#1A8EE5' : '#2A2A2A'};
            border: ${$isActive ? 'none' : `1px solid ${theme.colors.widgetBorder}`};
            color: ${$isActive ? '#FEFEFE' : '#FAFAFA'};
          `
        : css`
            background: ${$isActive ? '#1A8EE5' : '#FFFFFF'};
            border: ${$isActive ? 'none' : '1px solid #E2E2E2'};
            color: ${$isActive ? '#FEFEFE' : '#777777'};
          `}
    `}

  &:hover {
    opacity: 0.88;
  }

  &:focus {
    outline: none;
  }
`;
