import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  height: 31px;
  flex: none;
  order: 0;
  flex-grow: 0;
  
  /* FAQ 페이지용 스타일 */
  &[data-faq-style="true"] {
    width: 1200px;
    height: 48px;
    gap: 0px;
    padding: 0px;
  }
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
  flex-grow: 0;
  cursor: pointer;
  transition: all 0.2s;
  
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  
  background: ${({ $isActive }) => ($isActive ? '#181818' : '#FFFFFF')};
  border: ${({ $isActive }) => ($isActive ? 'none' : '1px solid #777777')};
  color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : '#777777')};

  /* FAQ 페이지용 스타일 */
  ${({ $faqStyle, $isActive }) =>
    $faqStyle &&
    `
    padding: 12px 20px;
    gap: 12px;
    width: 240px;
    height: 48px;
    border-radius: 0px;
    flex-grow: 1;
    
    font-size: 16px;
    font-weight: ${$isActive ? '700' : '400'};
    line-height: ${$isActive ? '19px' : '24px'};
    
    background: ${$isActive ? '#1572B8' : '#FFFFFF'};
    border: ${$isActive ? 'none' : '1px solid #E2E2E2'};
    color: ${$isActive ? '#FFFFFF' : '#777777'};
  `}

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

