import styled from 'styled-components';
import { media } from '@/styles/theme';

export const FAQListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: 100%;

  ${media.tablet} {
    gap: 24px;
  }
`;

export const FAQItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.tablet} {
    max-width: 680px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 36px;

  ${media.tablet} {
    margin-top: 36px;
  }
`;
