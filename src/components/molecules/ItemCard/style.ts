import styled, { css } from 'styled-components';
import type { CardTone } from './index';
import { media } from '@/styles/theme';

export const ItemCard = styled.div<{ $tone: CardTone }>`
  /* Frame 41 - desktop card root */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 36px;
  gap: 36px;
  width: 384px;
  max-width: 100%;
  flex: 1 1 384px;
  min-width: 0;
  height: 400px;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid
    ${({ theme }) => (theme.mode === 'dark' ? theme.colors.border : '#EFEFEF')};
  border-radius: 16px;

  ${media.tablet} {
    flex: 1 1 0;
    width: auto;
    max-width: 216px;
    min-width: 0;
    height: 240px;
    min-height: 240px;
    padding: 24px 20px;
    gap: 20px;
    border: 1px solid #efefef;
    border-radius: 12px;
    background: #fefefe;
  }

  ${media.mobile} {
    flex-direction: row;
    width: 100%;
    flex: none;
    height: 75px;
    min-height: 75px;
    padding: 12px;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    background: #fefefe;
    border: 1px solid #efefef;
  }
`;

export const Icon = styled.span`
  width: 120px;
  height: 120px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  /* scale(1.2) artwork may paint outside the 120 layout box */
  overflow: visible;

  ${media.tablet} {
    width: 60px;
    height: 60px;
  }

  ${media.mobile} {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
  }
`;

export const IconImage = styled.img<{ $scale?: number }>`
  width: 120px;
  height: 120px;
  object-fit: contain;
  object-position: center;
  display: block;
  /* Layout stays 120×120; visual size matches previous ~144 look */
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
    flex-shrink: 0;
    transform: scale(1);
  }
`;

export const TextContainer = styled.div<{ $tone?: CardTone }>`
  /* Frame 40 - text group (106 blue / 130 red — taller prohibition copy) */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 12px;
  width: 312px;
  min-height: ${({ $tone }) => ($tone === 'red' ? '130px' : '106px')};
  height: auto;
  align-self: stretch;

  ${media.tablet} {
    width: 176px;
    min-height: ${({ $tone }) => ($tone === 'red' ? '103px' : '85px')};
    height: auto;
    gap: 8px;
  }

  ${media.mobile} {
    width: auto;
    flex: 1 1 0;
    min-width: 0;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 4px;
    height: auto;
    min-height: 0;
  }
`;

export const ItemTitle = styled.h3<{ $tone?: CardTone }>`
  width: 100%;
  height: 48px;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  white-space: nowrap;
  color: ${({ $tone, theme }) =>
    $tone === 'red' ? theme.colors.statusNegative : theme.colors.primary500};
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    height: auto;
    font-size: 16px;
    line-height: 19px;
    white-space: normal;
    color: ${({ $tone }) => ($tone === 'red' ? '#E15651' : '#1A8EE5')};
  }

  ${media.mobile} {
    height: auto;
    font-size: 12px;
    line-height: 14px;
    white-space: normal;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    color: ${({ $tone }) => ($tone === 'red' ? '#E15651' : '#1A8EE5')};
  }
`;
export const ItemDescription = styled.p<{ $tone?: CardTone }>`
  /* Figma: blue 2줄(48) / red 3줄(72), 16px · lh 150% · center · #777 · w 312 */
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-height: ${({ $tone }) => ($tone === 'red' ? '72px' : '48px')};
  height: auto;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%; /* 24px → blue 2줄=48 / red 3줄=72 */
  text-align: center;
  color: ${({ theme }) => theme.colors.gray600};
  overflow-wrap: normal;
  overflow: visible;

  ${media.tablet} {
    width: 100%;
    min-height: 0;
    height: auto;
    font-size: 12px;
    line-height: 150%;
    color: #777777;
    overflow: visible;
    overflow-wrap: break-word;
    word-break: keep-all;
  }

  ${media.mobile} {
    width: 100%;
    min-height: 0;
    height: auto;
    font-size: 10px;
    line-height: 150%;
    text-align: left;
    overflow: visible;
    overflow-wrap: break-word;
    word-break: keep-all;
  }
`;

/**
 * Optional explicit description line.
 * Prefer a single plain-string description so width drives soft-wrap
 * (desktop ~312px → 2줄, tablet ~176px → 3줄). If used, do not force nowrap
 * on tablet — spans flow as one paragraph.
 */
export const DescLine = styled.span`
  display: block;
  white-space: nowrap;
  line-height: 150%;
  height: auto;
  overflow: visible;

  ${media.tablet} {
    display: inline;
    white-space: normal;
  }

  ${media.mobile} {
    display: inline;
    white-space: normal;
  }
`;
