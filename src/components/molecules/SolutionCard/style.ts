import styled from 'styled-components';

export const SolutionCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  gap: 12px;
  width: 384px;
  height: 127px;
  background: #FFFFFF;
  border: 1px solid #E2E2E2;
  border-radius: 12px;
  flex: none;
`;

export const SolutionTitle = styled.h3`
  width: auto;
  height: 29px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #1A8EE5;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-align: center;
`;

export const SolutionDescription = styled.p`
  width: auto;
  height: auto;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #777777;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

