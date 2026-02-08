import styled from 'styled-components';
import type { ButtonSize, ButtonVariant } from './index';

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
    width: 'auto',
    height: '47px',
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
  background: ${({ $variant, $size }) => 
    $variant === 'secondary' 
      ? '#FFFFFF' 
      : $size === 'lg' 
        ? '#1572B8' 
        : 'rgb(32, 137, 207)'};
  color: ${({ $variant }) => $variant === 'secondary' ? '#181818' : '#ffffff'};
  border: ${({ $variant, $size }) => 
    $variant === 'secondary' 
      ? '1px solid #BFBFBF' 
      : $size === 'lg' 
        ? 'none' 
        : '1px solid rgb(32, 137, 207)'};
  border-radius: ${({ $size, $variant }) => 
    $size === 'lg' && $variant === 'secondary' 
      ? '30px' 
      : $size === 'lg' 
        ? '8px' 
        : '15px'};
  box-sizing: border-box;
  
  ${({ $size }) => $size === 'lg' && `
    height: ${sizeStyles[$size].height};
    flex: none;
    order: 1;
    flex-grow: 0;
  `}

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
`;

/* Text */
export const Label = styled.span<{ $variant: ButtonVariant }>`
  width: auto;
  height: 23px;
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
`;

export const Image = styled.img<{ $variant: ButtonVariant }>`
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: ${({ $variant }) => $variant === 'secondary' ? 'none' : 'brightness(0) invert(1)'};
`;

