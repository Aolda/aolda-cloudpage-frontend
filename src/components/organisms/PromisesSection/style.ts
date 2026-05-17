import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Section = styled.section`
  width: 1200px;
  max-width: 100%;
  height: auto;
  min-height: 796px;
  padding-top: 160px;
  gap: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;

  ${media.tablet} {
    width: 100%;
    max-width: 680px;
    min-height: auto;
    padding-top: 0;
    gap: 20px;
  }
`;

export const PromiseGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.6rem;

  ${media.tablet} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }
`;
