import styled from 'styled-components';
import type { CardTone } from './index';

/* Frame 41 */
export const ItemCard = styled.div<{ $tone: CardTone }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 36px;
  gap: 36px;
  width: 384px;
  height: 400px;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Background, #2A2A2A)' : '#ffffff'};
  border: ${({ theme }) =>
    theme.mode === 'dark' ? `2px solid ${theme.colors.border}` : '1px solid #e2e2e2'};
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 1;
`;

/* image 452 - 컨테이너 120 고정, scale로 아이콘만 확대(여백은 잘림) */
export const Icon = styled.span`
  width: 120px;
  height: 120px;
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const IconImage = styled.img<{ $scale?: number }>`
  width: 120px;
  height: 120px;
  object-fit: contain;
  object-position: center;
  display: block;
  transform: scale(${({ $scale = 1.2 }) => $scale});
  transform-origin: center center;
`;

/* Frame 40 */
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 12px;
  width: 312px;
  height: 104px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

/* Title-H1 */
export const ItemTitle = styled.h3<{ $tone?: CardTone }>`
  width: 313px;
  height: 46px;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: bold;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 100%;
  text-align: center;
  color: ${({ $tone, theme }) =>
    $tone === 'red' ? theme.colors.statusNegative : theme.colors.primary500};
  flex: none;
  order: 0;
  letter-spacing: 0%; 
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Content-C4 */
export const ItemDescription = styled.p`
  width: 312px;
  height: 46px;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  word-break: break-word;
`;

