import styled, { css } from 'styled-components';
import type { CardTone } from './index';

export const ItemCard = styled.div<{ $tone: CardTone }>`
  padding: 32px 36px 32px 36px;
  border-radius: 1rem;
  border: 1px solid #e0e0e0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0;
  width: 100%;
  min-height: 200px;
  box-shadow: none;
  position: relative;
  box-sizing: border-box;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  width: 100%;
  height: 140px;
  flex-shrink: 0;
`;

export const IconImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
  display: block;
`;

export const ItemTitle = styled.h3<{ $tone?: CardTone }>`
  margin: 0 0 0.6rem 0;
  font-size: 32px;
  font-weight: 700;
  color: ${({ $tone }) => ($tone === 'red' ? 'rgb(233, 23, 23)' : '#3D90D4')};
  line-height: 1.3;
  letter-spacing: -0.02em;
`;

export const ItemDescription = styled.p`
  margin: 0;
  font-size: 16px;
  color: #666666;
  line-height: 1.5;
  letter-spacing: -0.01em;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  width: 100%;
`;

