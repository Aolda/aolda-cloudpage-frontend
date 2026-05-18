import styled from 'styled-components';
import { media } from '@/styles/theme';

/** 데스크톱 전용 줄바꿈 (태블릿·모바일 숨김) */
export const DesktopBreak = styled.br`
  ${media.tablet} {
    display: none;
  }
`;

/** 태블릿 전용 줄바꿈 — 본문 중간 1곳만 */
export const TabletBreak = styled.br`
  display: none;

  ${media.tablet} {
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  height: auto;
  box-sizing: border-box;

  ${media.tablet} {
    max-width: 680px;
    gap: 20px;
    align-items: center;

    h2 {
      text-align: center;
    }
  }

  ${media.mobile} {
    width: 100%;
    max-width: 100%;
    gap: 12px;
    align-items: stretch;

    h2 {
      text-align: left;
    }
  }
`;

export const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  height: auto;
  min-height: 488px;
  align-self: stretch;
  box-sizing: border-box;

  ${media.tablet} {
    gap: 20px;
    min-height: auto;
    max-width: 680px;
  }

  ${media.mobile} {
    gap: 12px;
    width: 100%;
    max-width: 100%;
    min-height: auto;
    align-items: flex-start;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 36px;
  width: 797px;
  height: 488px;
  min-height: 488px;
  flex: none;

  ${media.tablet} {
    width: 470px;
    height: auto;
    min-height: auto;
    flex: 1;
    gap: 20px;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 797px;
  height: 308px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
  border-radius: 12px;
  overflow: hidden;
  align-self: stretch;

  ${media.tablet} {
    height: 181.63px;
    max-width: none;
  }
`;

export const Description = styled.div`
  width: 797px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: #777777;
  margin: 0;
  white-space: pre-line;
  word-break: keep-all;

  ${media.tablet} {
    width: 100%;
    font-size: 16px;
    line-height: 150%;
    height: auto;
  }
`;

export const RightPanel = styled.div`
  position: relative;
  width: 379px;
  height: 488px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  border-radius: 12px;
  overflow: hidden;
  flex: none;

  ${media.tablet} {
    width: 190px;
    height: 345.63px;
    flex-shrink: 0;
  }

  ${media.mobile} {
    width: 80px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 4px;
  }
`;

export const MobileDescription = styled.div`
  display: none;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
    min-width: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 150%;
    color: #777777;
    word-break: keep-all;

    p {
      margin: 0;
    }
  }
`;

export const InfoPanel = styled.div`
  margin-top: 2.6rem;
  padding: 2.6rem;
  border-radius: 2rem;
  display: grid;
  gap: 2rem;

  img {
    object-position: center center !important;
  }
`;

export const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.5rem;
`;
