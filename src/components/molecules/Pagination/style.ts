import styled from 'styled-components';

export const PaginationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 36px;
  width: 444px;
  height: 32px;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const PrevButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 50px;
  height: 23px;
  flex: none;
  order: 0;
  flex-grow: 0;
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
`;

export const NextButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 50px;
  height: 23px;
  flex: none;
  order: 2;
  flex-grow: 0;
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
`;

export const PageList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 272px;
  height: 32px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;
  width: 32px;
  height: 32px;
  flex: none;
  flex-grow: 0;
  background: transparent;
  border: none;
  border-bottom: ${({ $isActive }) => ($isActive ? '2px solid #1A8EE5' : 'none')};
  cursor: pointer;
  
  font-family: 'Noto Sans KR';
  font-style: normal;
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
`;

export const ChevronLeft = styled.span`
  width: 16px;
  height: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
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
  order: 1;
  flex-grow: 0;
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
  padding: 0px;
  gap: 10px;
  width: 30px;
  height: 23px;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #777777;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

