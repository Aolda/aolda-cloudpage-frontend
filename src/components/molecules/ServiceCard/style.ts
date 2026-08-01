import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ServiceLink = styled.a`
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
`;

export const ServiceCardWrapper = styled.div`
  display: block;
  box-sizing: border-box;
  width: 231px;
  min-width: 231px;
  max-width: 231px;
  height: 240px;
  flex: none;
  flex-grow: 0;
  flex-shrink: 0;

  ${media.tablet} {
    width: 213.33px;
    min-width: 213.33px;
    max-width: 213.33px;
    height: 200px;
  }

  ${media.mobile} {
    width: 100%;
    min-width: 0;
    max-width: none;
    height: 100%;
  }
`;

export const ServiceCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 24px;
  gap: 24px;
  width: 100%;
  height: 100%;
  background: #fefefe;
  border: 1px solid #efefef;
  border-radius: 8px;
  position: relative;

  ${media.tablet} {
    padding: 20px;
    gap: 24px;
    background: #fefefe;
  }

  ${media.mobile} {
    height: 120px;
    padding: 12px;
    gap: 12px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 8px;
  margin: 0 auto;
  width: 183px;
  max-width: 183px;
  flex: none;
  align-self: stretch;
  min-width: 0;
  box-sizing: border-box;

  ${media.tablet} {
    width: 173.33px;
    max-width: 173.33px;
  }

  ${media.mobile} {
    width: 100%;
    max-width: none;
    gap: 4px;
  }
`;

export const IconTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 4px;
  width: auto;
  max-width: 100%;
  flex: none;

  ${media.mobile} {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  flex: none;
  object-fit: contain;

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  min-width: 0;
`;

export const AMDBIconContainer = styled.div`
  width: 32px;
  height: 32px;
  flex: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const DatabaseIcon = styled.svg`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  color: #232527;
  display: flex;
  align-items: center;
  flex: none;

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Description = styled.p`
  margin: 0;
  padding: 0;
  width: 183px;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #777777;
  word-break: keep-all;
  flex: none;
  align-self: stretch;

  ${media.tablet} {
    width: 173.33px;
    font-size: 12px;
    line-height: 150%;
  }

  ${media.mobile} {
    width: 100%;
    font-size: 10px;
    line-height: 150%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ArrowIcon = styled.svg`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  color: #777777;
  flex: none;
  align-self: flex-end;
  margin: 0;
  margin-left: auto;

  ${media.desktop} {
    align-self: flex-end;
    margin: 0;
    margin-left: auto;
  }
`;
