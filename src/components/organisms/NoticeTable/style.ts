import styled from 'styled-components';
import { media } from '@/styles/theme';

export const NoticeTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  width: 75rem;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;

  ${media.tablet} {
    width: 100%;
    max-width: 664px;
  }

  ${media.mobile} {
    width: 100%;
    max-width: 319px;
  }
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Separator = styled.div`
  width: 75rem;
  height: 1px;
  background: #E2E2E2;
  flex: none;
  align-self: stretch;
  flex-grow: 0;

  ${media.tablet} {
    width: 100%;
    max-width: 664px;
    background: #efefef;
  }

  ${media.mobile} {
    display: none;
  }
`;

