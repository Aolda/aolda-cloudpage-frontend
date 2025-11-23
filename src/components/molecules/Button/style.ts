import styled from 'styled-components';
import type { ButtonSize } from './index';

const sizeStyles = {
  md: {
    padding: '1.1rem 1.9rem',
    fontSize: '1.5rem',
    gap: '0.8rem',
  },
  lg: {
    padding: '1.3rem 2.2rem',
    fontSize: '1.6rem',
    gap: '1rem',
  },
};

export const Button = styled.button<{ $size: ButtonSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $size }) => sizeStyles[$size].gap};
  padding: ${({ $size }) => sizeStyles[$size].padding};
  font-size: ${({ $size }) => sizeStyles[$size].fontSize};
  font-weight: 800;
  line-height: 1;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.1s ease;
  
  /* 기본 스타일 */
  background: rgb(32, 137, 207);
  color: #ffffff;
  border: 1px solid rgb(32, 137, 207);

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

export const Label = styled.span`
  letter-spacing: 0.02em;
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

