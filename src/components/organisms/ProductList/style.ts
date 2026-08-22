import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ProductListContainer = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  width: 100%;

  ${media.tablet} {
    gap: 20px;
    max-width: 680px;
  }

  ${media.mobile} {
    gap: 12px;
    width: 343px;
    max-width: 100%;
  }
`;

export const SearchSection = styled.div`
  width: 100%;

  ${media.tablet} {
    display: none;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  height: 29px;

  ${media.tablet} {
    height: 24px;
  }

  ${media.mobile} {
    gap: 8px;
    height: auto;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
  color: #232527;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 29px;

  ${media.tablet} {
    font-size: 20px;
    line-height: 24px;
    height: 24px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
    gap: 8px;
    height: auto;
  }
`;

export const SectionIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 29px;
  flex-shrink: 0;
  align-self: stretch;

  img {
    width: 29px;
    height: 29px;
    object-fit: contain;
  }

  ${media.tablet} {
    width: 24px;
    height: 24px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  ${media.mobile} {
    width: 14px;
    height: 14px;

    img {
      width: 14px;
      height: 14px;
    }
  }
`;

export const ServiceGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0;
  gap: 24px;
  width: 996px;
  max-width: 100%;
  box-sizing: border-box;

  ${media.tablet} {
    gap: 20px;
    width: 680px;
    max-width: 100%;
  }

  ${media.mobile} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    gap: 8px;
    width: 343px;
    max-width: 100%;
  }
`;
