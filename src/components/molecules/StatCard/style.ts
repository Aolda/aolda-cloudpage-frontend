import styled, { css } from 'styled-components';
import { media } from '@/styles/theme';

export const StatCard = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 0;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  text-align: center;
  height: 133px;
  width: 100%;
  box-sizing: border-box;

  ${media.tablet} {
    flex: 1;
    width: auto;
    min-width: 0;
    height: 87px;
    padding: 16px 32px;
    gap: 8px;
    border: 1px solid #efefef;
    border-radius: 8px;
    background: #fefefe;
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
    border: 1px solid #efefef;
    border-radius: 8px;
    background: #fefefe;
  }
`;

export const StatValue = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary500};

  ${media.tablet} {
    font-size: 20px;
    line-height: 24px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
    align-self: stretch;
    text-align: right;
    color: #1a8ee5;
  }
`;

export const StatLabel = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray600};

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
