import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Section = styled.section`
  max-width: 1200px;
  width: 100%;
  min-height: 474px;
  padding-top: 160px;
  padding-bottom: 72px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;

  ${media.tablet} {
    max-width: 680px;
    min-height: auto;
    padding-top: 0;
    padding-bottom: 0;
    gap: 24px;
  }
`;

export const Divider = styled.span`
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 2px;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 24px;
  width: 424px;
  height: 106px;
  flex: none;
  order: 1;
  flex-grow: 0;

  ${media.tablet} {
    width: 344px;
    height: 82px;
    gap: 24px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 12px;
  width: 200px;
  height: 106px;
  flex: none;
  flex-grow: 0;

  &:first-of-type {
    order: 0;
  }
  &:last-of-type {
    order: 1;
  }

  &:first-of-type a,
  &:first-of-type button {
    width: 200px;
    height: 48px;
    padding: 12px 16px;
    gap: 8px;
    background: #1572b8;
    border: none;
    border-radius: 8px;
    color: #ffffff;
  }

  &:last-of-type a,
  &:last-of-type button {
    width: 200px;
    height: 48px;
    padding: 12px 16px;
    gap: 8px;
    background: #ffffff;
    border: 1px solid #bfbfbf;
    border-radius: 8px;
    color: #181818;
  }

  a img,
  button img {
    width: 24px;
    height: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  ${media.tablet} {
    width: 160px;
    height: 82px;
    gap: 8px;

    &:first-of-type a,
    &:first-of-type button,
    &:last-of-type a,
    &:last-of-type button {
      width: 160px;
      height: 38px;
      padding: 11px 16px;
    }

    a img,
    button img {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Caption = styled.p`
  width: 100%;
  max-width: 163px;
  height: 46px;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #777777;
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    max-width: 122px;
    height: 36px;
    font-size: 12px;
    line-height: 150%;
  }
`;
