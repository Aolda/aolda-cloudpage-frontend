import styled from 'styled-components';
import type { ButtonSize, ButtonVariant } from './index';
import { media } from '@/styles/theme';

const sizeStyles = {
  md: {
    padding: '1.1rem 1.9rem',
    fontSize: '1.5rem',
    gap: '0.8rem',
  },
  lg: {
    padding: '12px 36px',
    fontSize: '16px',
    gap: '8px',
  },
};

export const Button = styled.button<{ $size: ButtonSize; $variant: ButtonVariant }>`
  /* Button */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ $size }) => sizeStyles[$size].gap};
  padding: ${({ $size }) => sizeStyles[$size].padding};
  font-size: ${({ $size }) => sizeStyles[$size].fontSize};
  font-weight: 700;
  line-height: ${({ $size }) => $size === 'lg' ? '19px' : '1'};
  font-family: 'Noto Sans KR', sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.1s ease;
  
  /* 기본 스타일 */
  background: ${({ $variant }) => 
    $variant === 'secondary' 
      ? '#FFFFFF' 
      : 'rgb(32, 137, 207)'};
  color: ${({ $variant }) => $variant === 'secondary' ? '#181818' : '#ffffff'};
  border: ${({ $variant }) => 
    $variant === 'secondary' 
      ? '1px solid #BFBFBF' 
      : '1px solid rgb(32, 137, 207)'};
  border-radius: ${({ $variant }) => 
    $variant === 'secondary' 
      ? '30px' 
      : '15px'};
  box-sizing: border-box;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${media.mobile} {
    max-width: 100%;
  }
`;

/* Text */
export const Label = styled.span<{ $variant: ButtonVariant; $size: ButtonSize }>`
  width: auto;
  height: 23px;
  margin-top: 3px;
  /* Title-H4 */
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  /* White/White or Black */
  color: ${({ $variant }) => $variant === 'secondary' ? '#181818' : '#FFFFFF'};
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  ${media.mobile} {
    font-size: 10px;
    line-height: 12px;
    height: auto;
    margin-top: 0;
  }
`;

export const Image = styled.img<{ $variant: ButtonVariant }>`
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: ${({ $variant }) => $variant === 'secondary' ? 'none' : 'brightness(0) invert(1)'};
`;

  