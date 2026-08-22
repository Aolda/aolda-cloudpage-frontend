import styled from 'styled-components';
import { media } from '@/styles/theme';

export const NoticeLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const NoticeItem = styled.div`
  display: block;
`;

export const NoticeRow = styled.div`
  width: 75rem;
  height: 4rem;
  position: relative;
  flex: none;
  align-self: stretch;
  flex-grow: 0;

  ${media.tablet} {
    width: 100%;
    max-width: 664px;
    height: 64px;
  }

  /* stacked mobile layout — title then meta row */
  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    width: 100%;
    max-width: 319px;
    height: auto;
    min-height: 58px;
    box-sizing: border-box;
    border-bottom: 1px solid #efefef;
  }
`;

/** Desktop/tablet: contents so absolute children stay relative to NoticeRow */
export const MetaRow = styled.div`
  display: contents;

  ${media.mobile} {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    gap: 8px;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const Number = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 1rem;
  gap: 0.625rem;
  position: absolute;
  width: 4rem;
  height: 3.9375rem;
  left: 0rem;
  top: 0rem;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1875rem;
  text-align: center;
  color: #777777;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  ${media.tablet} {
    width: 64px;
    height: 64px;
    padding: 20px 16px;
    font-size: 12px;
    line-height: 150%;
  }

  ${media.mobile} {
    position: static;
    width: auto;
    height: auto;
    left: auto;
    top: auto;
    padding: 4px 8px;
    font-size: 10px;
    line-height: 12px;
    font-weight: 700;
    color: #777777;
    align-self: auto;
  }
`;

export const Category = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 1rem;
  gap: 0.625rem;
  position: absolute;
  width: 6.25rem;
  height: 3.9375rem;
  left: 4rem;
  top: 0rem;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.1875rem;
  text-align: center;
  color: #1A8EE5;
  flex: none;
  order: 0;
  flex-grow: 0;

  ${media.tablet} {
    width: 100px;
    height: 64px;
    left: 64px;
    padding: 20px 16px;
    font-size: 12px;
    line-height: 14px;
  }

  ${media.mobile} {
    position: static;
    width: auto;
    height: auto;
    left: auto;
    top: auto;
    padding: 0;
    font-size: 10px;
    line-height: 12px;
    font-weight: 700;
    color: #1a8ee5;
  }
`;

export const Title = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.25rem 1rem;
  gap: 0.625rem;
  position: absolute;
  width: 59rem;
  height: 3.9375rem;
  left: 10.25rem;
  top: 0rem;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.1875rem;
  color: #232527;
  flex: none;
  order: 0;
  flex-grow: 0;

  ${media.tablet} {
    width: calc(100% - 164px - 92px);
    max-width: 408px;
    height: 64px;
    left: 164px;
    padding: 20px 16px;
    font-size: 12px;
    line-height: 14px;
  }

  ${media.mobile} {
    position: static;
    width: 100%;
    max-width: none;
    height: auto;
    left: auto;
    top: auto;
    padding: 8px 16px;
    font-size: 10px;
    line-height: 12px;
    font-weight: 700;
    color: #232527;
    box-sizing: border-box;
  }
`;

export const Date = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 1rem;
  gap: 0.625rem;
  position: absolute;
  width: 5.75rem;
  height: 4rem;
  left: 69.25rem;
  top: 0rem;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 0.875rem;
  text-align: center;
  color: #777777;
  flex: none;
  order: 0;
  flex-grow: 0;

  ${media.tablet} {
    width: 92px;
    height: 64px;
    left: auto;
    right: 0;
    padding: 20px 16px;
    font-size: 12px;
    line-height: 150%;
  }

  ${media.mobile} {
    position: static;
    width: auto;
    height: auto;
    left: auto;
    right: auto;
    top: auto;
    flex-grow: 1;
    justify-content: flex-end;
    padding: 4px 16px;
    font-size: 12px;
    line-height: 150%;
    font-weight: 400;
    color: #777777;
    text-align: right;
  }
`;
