import styled from 'styled-components';

export const NoticeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 36px;
  width: 1200px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 1200px;
  height: 68px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 1200px;
  height: 48px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Count = styled.span`
  height: 29px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #232527;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const WriteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  width: 123px;
  height: 48px;
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:focus {
    outline: none;
  }
`;

export const WriteIcon = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const WriteText = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 59px;
  height: 23px;
  flex: none;
  order: 1;
  flex-grow: 0;
  
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  text-align: center;
  color: #1572B8;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Separator = styled.div`
  width: 1200px;
  height: 1px;
  background: #E2E2E2;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 36px;
  order: 3;
`;

