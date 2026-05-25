import styled from 'styled-components';

export const NoticeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 2.25rem;
  width: 75rem;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 1.25rem;
  width: 75rem;
  height: 4.25rem;
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
  padding: 0rem;
  gap: 1.25rem;
  width: 75rem;
  height: 3rem;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Count = styled.span`
  height: 1.8125rem;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
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
  padding: 0.75rem 1rem;
  gap: 0.5rem;
  width: 7.6875rem;
  height: 3rem;
  border-radius: 0.5rem;
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
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1.25rem;
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
  padding: 0rem;
  gap: 0.625rem;
  width: 3.6875rem;
  height: 1.4375rem;
  flex: none;
  order: 1;
  flex-grow: 0;
  
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1875rem;
  text-align: center;
  color: #1572B8;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Separator = styled.div`
  width: 75rem;
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
  margin-top: 2.25rem;
  order: 3;
`;

