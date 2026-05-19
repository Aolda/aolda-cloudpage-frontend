import styled, { css } from 'styled-components';
import { media } from '@/styles/theme';

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

  background: ${({ $isActive }) => ($isActive ? '#181818' : '#ffffff')};
  border: ${({ $isActive }) => ($isActive ? 'none' : '1px solid #777777')};
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#777777')};

  ${({ $faqStyle, $isActive }) =>
    $faqStyle &&
    css`
      ${faqButtonStyles}
      font-weight: ${$isActive ? 700 : 400};
      line-height: ${$isActive ? '19px' : '24px'};
      background: ${$isActive ? '#1572b8' : '#ffffff'};
      border: ${$isActive ? 'none' : '1px solid #e2e2e2'};
      color: ${$isActive ? '#ffffff' : '#777777'};

      ${media.tablet} {
        width: auto;
        min-width: 0;
        flex: 1;
        max-width: 136px;
        height: 48px;
        font-size: 16px;
        font-weight: ${$isActive ? 700 : 400};
        line-height: ${$isActive ? '19px' : '24px'};
        background: ${$isActive ? '#1a8ee5' : '#fefefe'};
        border: ${$isActive ? 'none' : '1px solid #efefef'};
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
