import styled from 'styled-components';
import Link from 'next/link';

export const MenuCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const MenuCard = styled.div`
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Background, #2A2A2A)' : '#ffffff'};
  border: 1px solid
    ${({ theme }) => (theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.border)};
  border-radius: 10px;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  box-shadow: ${({ theme }) => (theme.mode === 'dark' ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.08)')};
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  width:384px;
  height: 216px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => (theme.mode === 'dark' ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.12)')};
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2.4rem;
  font-weight: 700;
  color: #333333;
  line-height: 1.3;
  align-self: flex-start;
`;

/* Frame 1 - 액션 영역 컨테이너 */
export const ActionLabel = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  gap: 12px;
  margin: 0 auto;
  margin-top: auto;
  width: 326px;
  height: 29px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

/* 사용 가이드 - Title-H3 */
export const ActionLabelText = styled.span`
  height: 29px;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #777777;
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

/* famicons:chevron-forward-outline - 24x24, 화살표 90도(오른쪽) */
export const ArrowIcon = styled.span`
  width: 24px;
  height: 24px;
  flex: none;
  order: 1;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

/* Vector - 24x24, 90도 각도 chevron SVG */
export const ArrowVector = styled.svg`
  width: 24px;
  height: 24px;
  color: #777777;
  display: block;
  degree: 180deg;
`;
