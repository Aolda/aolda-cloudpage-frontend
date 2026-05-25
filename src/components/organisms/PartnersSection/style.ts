import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  width: 75rem;
  height: 38.75rem;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
`;

const slideRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 1.5rem;
  width: fit-content;
  position: relative;
  animation: ${slideRight} 15s linear infinite;
  
  /* 각 카드의 고정 너비 설정 */
  > * {
    flex: 0 0 22.5rem;
    width: 22.5rem;
    box-sizing: border-box;
  }
  
  /* 두 번째 줄은 오른쪽으로 이동 */
  &:nth-child(2) {
    margin-left: 7.5rem;
  }
`;

