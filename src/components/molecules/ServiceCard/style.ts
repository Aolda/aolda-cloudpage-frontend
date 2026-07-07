import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ServiceLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1 1 231px;
  max-width: 231px;

  ${media.belowDesktop} {
    min-width: 0;
    max-width: none;
    flex: none;
    height: 100%;
  }
`;

export const ServiceCardWrapper = styled.div`
  display: block;
  flex: 1 1 231px;
  max-width: 231px;

  ${media.belowDesktop} {
    flex: none;
    max-width: none;
  }
`;

export const ServiceCard = styled.div`
  background: #fefefe;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  border: 1px solid #efefef;
  position: relative;
  height: 240px;
  min-width: 231px;
  max-width: 231px;
  width: 100%;
  box-sizing: border-box;

  ${media.belowDesktop} {
    width: 100%;
    min-width: 0;
    max-width: none;
  }

  ${media.tablet} {
    height: 200px;
    padding: 20px;
    gap: 24px;
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
  gap: 8px;
  width: 100%;
  flex: 1;
  min-width: 0;
  align-self: stretch;
`;

export const IconTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  color: #232527;
  display: flex;
  align-items: center;

  ${media.belowDesktop} {
    font-size: 16px;
    line-height: 19px;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  color: #777777;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
  width: 100%;
  word-break: keep-all;

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  color: #777777;
  flex: none;
  align-self: center;
  margin: 0 auto;

  ${media.belowDesktop} {
    align-self: flex-end;
    margin: 0;
  }
`;
