import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.45fr;
  gap: 1.6rem;
  padding: 0;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  ${media.tablet} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
    max-width: 680px;
  }

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
`;

export const Visual = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100%;
  display: flex;

  > div {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    min-height: 400px;
    padding: 0;
    overflow: hidden;
    display: flex;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      transform: scale(1.05);
    }

    > h3 {
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0;
      color: #ffffff;
    }
  }

  ${media.tablet} {
    width: 100%;

    > div {
      min-height: 320px;
      border-radius: 12px;

      img {
        border-radius: 12px;
      }
    }
  }

  ${media.mobile} {
    width: 100%;
    min-height: auto;
    flex: none;

    > div {
      width: 100% !important;
      max-width: 100%;
      min-height: 161.41px;
      height: 161.41px;
      border-radius: 8px;

      img {
        border-radius: 8px;
      }

      > h3 {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${media.tablet} {
    flex-direction: row;
    gap: 20px;
    width: 100%;
  }

  ${media.mobile} {
    flex-direction: row;
    gap: 12px;
    width: 100%;
  }
`;
