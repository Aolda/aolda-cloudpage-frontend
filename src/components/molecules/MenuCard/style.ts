import styled from 'styled-components';
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
  background: #fefefe;
  border: 1px solid #efefef;
  border-radius: 10px;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  width: 384px;
  height: 216px;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  ${media.tablet} {
    width: 100%;
    max-width: none;
    height: 101px;
    min-height: 101px;
    padding: 16px 20px;
    border-radius: 12px;
    gap: 0;
    box-shadow: none;
  }

  ${media.mobile} {
    width: 100%;
    max-width: none;
    height: 64px;
    min-height: 64px;
    padding: 8px 12px;
    border-radius: 8px;
    gap: 4px;
    box-shadow: none;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2.4rem;
  font-weight: 700;
  color: #181818;
  line-height: 1.3;
  align-self: flex-start;

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 12px;
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

  ${media.tablet} {
    width: 100%;
    max-width: 290px;
    margin: 0;
    height: 23px;
    gap: 12px;
  }

  ${media.mobile} {
    max-width: 141.5px;
    height: 16px;
    gap: 4px;
  }
`;

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

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
    height: auto;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
    font-weight: 400;
  }
`;

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

  ${media.tablet} {
    width: 20px;
    height: 20px;
  }

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const ArrowVector = styled.svg`
  width: 24px;
  height: 24px;
  color: #777777;
  display: block;

  ${media.tablet} {
    width: 20px;
    height: 20px;
  }

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;
