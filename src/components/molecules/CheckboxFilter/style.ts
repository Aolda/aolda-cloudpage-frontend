import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${media.belowDesktop} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 16px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  user-select: none;

  ${media.belowDesktop} {
    gap: 8px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 12px;
    line-height: 150%;
    font-weight: 400;
    color: #232527;
  }

  ${media.mobile} {
    gap: 4px;
    font-size: 10px;
    line-height: 150%;
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Checkmark = styled.span<{ $checked: boolean }>`
  position: relative;
  width: 2rem;
  height: 2rem;
  border: 2px solid ${({ theme, $checked }) => ($checked ? theme.colors.primary : theme.colors.border)};
  border-radius: 4px;
  background: ${({ theme, $checked }) => ($checked ? theme.colors.primary : 'transparent')};
  transition: all 0.2s;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
    left: 0.5rem;
    top: 0.2rem;
    width: 0.4rem;
    height: 0.8rem;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  ${media.belowDesktop} {
    width: 24px;
    height: 24px;
    border: 2px solid #777777;
    border-radius: 4px;
    background: ${({ $checked }) => ($checked ? '#1a8ee5' : 'transparent')};
    border-color: ${({ $checked }) => ($checked ? '#1a8ee5' : '#777777')};
  }

  ${media.mobile} {
    width: 16px;
    height: 16px;

    &::after {
      left: 4px;
      top: 1px;
      width: 3px;
      height: 6px;
    }
  }
`;
