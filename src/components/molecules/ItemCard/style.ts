import styled from 'styled-components';
import type { CardTone } from './index';

export const ItemCard = styled.div<{ $tone: CardTone }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2.25rem;
  gap: 2.25rem;
  width: 24rem;
  min-height: 25rem;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.surface : theme.colors.surface};
  border: ${({ theme }) =>
    theme.mode === 'dark' ? `0.125rem solid ${theme.colors.border}` : `1px solid ${theme.colors.border}`};
  border-radius: 1rem;
  flex: none;
  order: 0;
  flex-grow: 1;
`;

export const Icon = styled.span`
  width: 7.5rem;
  height: 7.5rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const IconImage = styled.img<{ $scale?: number }>`
  width: 7.5rem;
  height: 7.5rem;
  object-fit: contain;
  object-position: center;
  display: block;
  transform: scale(${({ $scale = 1.2 }) => $scale});
  transform-origin: center center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 0.75rem;
  width: 100%;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const ItemTitle = styled.h3<{ $tone?: CardTone }>`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.5;
  text-align: center;
  color: ${({ $tone, theme }) =>
    $tone === 'red' ? theme.colors.statusNegative : theme.colors.primary500};
  align-self: stretch;
`;

export const ItemDescription = styled.p`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  align-self: stretch;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
