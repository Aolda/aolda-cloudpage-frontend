import styled, { css } from 'styled-components';
import Link from 'next/link';
import { media } from '@/styles/theme';

export const MenuCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  min-width: 0;

  ${media.tablet} {
    flex: 1;
    min-width: 0;
  }

  ${media.mobile} {
    flex: 1;
    min-width: 0;
  }
`;

export const MenuCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 26px 29px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  transition: transform 0.2s;
  position: relative;
  width: 100%;
  max-width: 384px;
  height: 216px;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
  }

  ${media.tablet} {
    width: 100%;
    max-width: none;
    height: 101px;
    min-height: 101px;
    padding: 16px 20px;
    border: 1px solid #efefef;
    border-radius: 12px;
    gap: 0;
    box-shadow: none;
    background: #fefefe;
  }

  ${media.mobile} {
    width: 100%;
    max-width: none;
    height: 64px;
    min-height: 64px;
    padding: 8px 12px;
    border: 1px solid #efefef;
    border-radius: 8px;
    gap: 4px;
    box-shadow: none;
    background: #fefefe;
    justify-content: flex-start;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
  align-self: flex-start;

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
    height: 46px;
    color: #181818;
    display: flex;
    align-items: flex-start;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 12px;
    height: 28px;
    color: #181818;
  }
`;

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

  /* Frame 1 — Tablet 744 */
  ${media.tablet} {
    width: 100%;
    max-width: 290px;
    height: 23px;
    margin: 0 auto;
    margin-top: auto;
    padding: 0;
    gap: 12px;
    justify-content: flex-end;
    align-items: center;
    align-self: stretch;
    flex: none;
    flex-grow: 0;
  }

  ${media.mobile} {
    width: 100%;
    max-width: 141.5px;
    height: 16px;
    gap: 4px;
    margin: 0;
    margin-top: auto;
    justify-content: flex-end;
    align-self: stretch;
  }
`;

export const ActionLabelText = styled.span`
  height: 29px;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray600};
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;

  ${media.tablet} {
    width: auto;
    max-width: none;
    height: 23px;
    padding-top: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #777777;
    flex: none;
    order: 0;
    flex-grow: 0;
    display: flex;
    align-items: center;
    white-space: nowrap;
    box-sizing: border-box;
  }

  ${media.mobile} {
    width: auto;
    height: 15px;
    padding-top: 0;
    font-size: 10px;
    line-height: 150%;
    font-weight: 400;
    color: #777777;
  }
`;

export const ArrowIcon = styled.span`
  /* famicons:chevron-forward-outline */
  position: relative;
  width: 24px;
  height: 24px;
  flex: none;
  order: 1;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;

  ${media.tablet} {
    width: 20px;
    height: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const ArrowVector = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  overflow: visible;

  path {
    fill: none;
    stroke: #777777;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  ${media.mobile} {
    path {
      stroke-width: 1.5;
    }
  }
`;
