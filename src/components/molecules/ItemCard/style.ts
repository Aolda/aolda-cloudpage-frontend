import styled from 'styled-components';
import type { CardTone } from './index';
import { media } from '@/styles/theme';

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
  background: #ffffff;
  border: 2px solid #e2e2e2;
  border-radius: 16px;
  flex: none;
  flex-grow: 1;

  ${media.tablet} {
    width: auto;
    max-width: none;
    height: 240px;
    min-height: 240px;
    padding: 24px 20px;
    gap: 20px;
    border: 1px solid #efefef;
    border-radius: 12px;
    flex: 1;
  }

  ${media.mobile} {
    flex-direction: row;
    width: 100%;
    max-width: 100%;
    height: 75px;
    min-height: 75px;
    padding: 12px;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    background: #fefefe;
    border: 1px solid #efefef;
    flex-grow: 0;
  }
`;

export const Icon = styled.span`
  width: 120px;
  height: 120px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${media.tablet} {
    width: 60px;
    height: 60px;
  }

  ${media.mobile} {
    width: 48px;
    height: 48px;
  }
`;

export const IconImage = styled.img<{ $scale?: number }>`
  width: 120px;
  height: 120px;
  object-fit: contain;
  object-position: center;
  display: block;
  transform: scale(${({ $scale = 1.2 }) => $scale});
  transform-origin: center center;

  ${media.tablet} {
    width: 60px;
    height: 60px;
    transform: scale(1);
  }

  ${media.mobile} {
    width: 48px;
    height: 48px;
  }
`;

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
  align-self: stretch;

  ${media.tablet} {
    width: 176px;
    height: auto;
    gap: 8px;
  }

  ${media.mobile} {
    width: auto;
    flex: 1;
    align-items: flex-start;
    text-align: left;
    gap: 4px;
    height: auto;
    min-height: 0;
  }
`;

export const ItemTitle = styled.h3<{ $tone?: CardTone }>`
  width: 100%;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  text-align: center;
  color: ${({ $tone }) => ($tone === 'red' ? '#e15651' : '#1a8ee5')};
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
    justify-content: flex-start;
    text-align: left;
  }
`;

export const ItemDescription = styled.p`
  width: 100%;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #777777;
  word-wrap: break-word;
  word-break: keep-all;

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
    text-align: left;
  }
`;
