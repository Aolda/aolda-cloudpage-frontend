import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ProductListContainer = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
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
  align-items: center;
  gap: 0.8rem;

  ${media.belowDesktop} {
    gap: 12px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  ${media.belowDesktop} {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    color: #232527;
    gap: 12px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
    gap: 8px;
  }
`;

export const SectionIcon = styled.span`
  display: inline-block;
  width: 24.85px;
  height: 21.57px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
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
  display: grid;
  grid-template-columns: repeat(4, 231px);
  gap: 24px;
  justify-content: flex-start;

  @media (min-width: 1025px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 231px);
  }

  ${media.belowDesktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    width: 100%;
    justify-content: stretch;
  }

  ${media.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }
`;
