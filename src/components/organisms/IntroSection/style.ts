import styled from 'styled-components';
import { media } from '@/styles/theme';

export const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 384px);
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
    max-width: 680px;

    > div {
      box-sizing: border-box;
      width: 100%;
      max-width: 680px;
      min-height: 320px;
      height: 320px;
      padding: 32px;
      border-radius: 12px;
      align-items: flex-start;

      img {
        border-radius: 12px;
      }

      /* Frame 143 title — 210×70; card owns 32px padding */
      > h3 {
        box-sizing: border-box;
        width: 210px;
        max-width: 210px;
        height: 70px;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #ffffff;
      }
    }
  }

  ${media.mobile} {
    width: 100%;
    min-height: auto;
    flex: none;

    /* Frame 143 — mobile hero card */
    > div {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
      max-width: 100%;
      min-height: 161.41px;
      height: 161.41px;
      padding: 16px;
      gap: 10px;
      border-radius: 8px;
      opacity: 0.8;

      img {
        border-radius: 8px;
        transform: none;
      }

      > h3 {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: max-content;
        min-width: 140px;
        max-width: none;
        height: 46px;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        white-space: normal;
        overflow: visible;

        > span {
          display: block;
          white-space: nowrap;
        }
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
