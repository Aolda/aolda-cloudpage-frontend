import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  width: auto;
  max-width: 100%;

  ${media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 16px;
  }

  ${media.mobile} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 8px;
  height: 24px;
  border-radius: 8px;
  width: max-content;
  max-width: 100%;
  flex: none;
  flex-shrink: 0;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: max-content;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #232527;
  cursor: pointer;
  user-select: none;
  text-align: left;
  white-space: nowrap;

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
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
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 2px solid ${({ $checked }) => ($checked ? '#1a8ee5' : '#777777')};
  background: ${({ $checked }) => ($checked ? '#1a8ee5' : 'transparent')};
  transition: all 0.2s;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid #fefefe;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
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
