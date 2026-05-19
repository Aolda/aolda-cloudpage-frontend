import styled from 'styled-components';
import { media } from '@/styles/theme';

export const PaginationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 8px;
  width: auto;
  height: 32px;
  flex: none;

  ${media.tablet} {
    gap: 28px;
    height: 32px;
  }
`;

export const PrevButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 4px;
  width: 50px;
  height: 23px;
  flex: none;
  background: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  ${media.tablet} {
    width: 43px;
    height: 16px;
  }
`;

export const NextButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 4px;
  width: 50px;
  height: 23px;
  flex: none;
  background: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  ${media.tablet} {
    width: 43px;
    height: 16px;
  }
`;

export const PageList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 8px;
  width: auto;
  height: 32px;
  flex: none;

  ${media.tablet} {
    gap: 8px;
  }
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  gap: 10px;
  width: 32px;
  height: 32px;
  flex: none;
  background: transparent;
  border: none;
  border-bottom: ${({ $isActive }) => ($isActive ? '2px solid #1A8EE5' : 'none')};
  cursor: pointer;

  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${({ $isActive }) => ($isActive ? '#1A8EE5' : '#777777')};

  &:hover:not(:disabled) {
    color: ${({ $isActive }) => ($isActive ? '#1A8EE5' : '#555555')};
  }

  &:focus {
    outline: none;
  }

  ${media.tablet} {
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
    color: ${({ $isActive }) => ($isActive ? '#1A8EE5' : '#777777')};
  }
`;

export const ChevronLeft = styled.span`
  width: 16px;
  height: 16px;
  flex: none;
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    left: 35.94%;
    right: 35.94%;
    bottom: 21.88%;
    width: 6px;
    height: 6px;
    border-left: 2px solid #777777;
    border-bottom: 2px solid #777777;
    transform: rotate(45deg);
    box-sizing: border-box;
  }
`;

export const ChevronRight = styled.span`
  width: 16px;
  height: 16px;
  flex: none;
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    left: 35.94%;
    right: 35.94%;
    bottom: 21.88%;
    width: 6px;
    height: 6px;
    border-right: 2px solid #777777;
    border-bottom: 2px solid #777777;
    transform: rotate(-45deg);
    box-sizing: border-box;
  }
`;

export const ButtonText = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 10px;
  width: 30px;
  height: 23px;
  border-radius: 8px;
  flex: none;

  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #777777;

  ${media.tablet} {
    width: 23px;
    height: 14px;
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
  }
`;
