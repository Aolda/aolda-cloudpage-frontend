import styled from 'styled-components';
import { media } from '@/styles/theme';

export const StatCard = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 220px;
  align-items: center;
  justify-content: center;
  background: #fefefe;
  border: 1px solid #efefef;
  border-radius: 10px;
  text-align: center;
  height: 133px;
  width: 348px;
  box-sizing: border-box;

  ${media.tablet} {
    flex: 1;
    width: auto;
    min-width: 0;
    height: 87px;
    padding: 16px 32px;
    gap: 8px;
    border-radius: 8px;
  }

  ${media.mobile} {
    flex: 1;
    width: auto;
    min-width: 0;
    height: 56px;
    padding: 8px 12px;
    gap: 8px;
    align-items: flex-start;
    text-align: left;
  }
`;

export const StatValue = styled.span`
  font-size: 2.8rem;
  font-weight: 700;
  color: #1a8ee5;

  ${media.tablet} {
    font-size: 20px;
    line-height: 24px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
    align-self: stretch;
    text-align: right;
  }
`;

export const StatLabel = styled.span`
  font-size: 1.5rem;
  color: #777777;

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
    color: #232527;
  }
`;
