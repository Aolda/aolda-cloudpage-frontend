import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ProductListContainer = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;

  ${media.belowDesktop} {
    gap: 20px;
    width: 100%;
  }

  ${media.mobile} {
    gap: 12px;
  }
`;

export const SearchSection = styled.div`
  width: 100%;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
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

  ${media.belowDesktop} {
    font-size: 20px;
    line-height: 24px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
    gap: 8px;
  }
`;

export const SectionIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 29px;
  flex-shrink: 0;

  img {
    width: 29px;
    height: 29px;
    object-fit: contain;
  }

  ${media.belowDesktop} {
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
  align-items: center;
  align-content: flex-start;
  gap: 24px;
  width: 100%;

  ${media.belowDesktop} {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  ${media.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }
`;
