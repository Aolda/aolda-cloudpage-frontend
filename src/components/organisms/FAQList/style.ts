import styled from 'styled-components';
import { media } from '@/styles/theme';

export const FAQListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  ${media.tablet} {
    gap: 24px;
    max-width: 680px;
  }

  ${media.mobile} {
    gap: 20px;
    max-width: 100%;
    align-items: stretch;
  }
`;

export const FAQContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  width: 100%;

  ${media.mobile} {
    gap: 12px;
  }
`;

export const FAQItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.tablet} {
    max-width: 680px;
  }

  ${media.mobile} {
    max-width: 343px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
