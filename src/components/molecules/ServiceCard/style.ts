import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ServiceLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  min-width: 0;

  ${media.belowDesktop} {
    min-width: 0;
    height: 100%;
  }
`;

export const ServiceCardWrapper = styled.div`
  display: block;
`;

export const ServiceCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
  border: 1px solid #e2e2e2;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  height: 240px;
  min-width: 231px;
  width: 231px;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  ${media.belowDesktop} {
    width: 100%;
    min-width: 0;
    max-width: none;
    border: 1px solid #efefef;
    box-shadow: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }
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
    background: #fefefe;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex: 1;
  min-width: 0;
  align-self: stretch;

  ${media.mobile} {
    gap: 8px;
  }
`;

export const IconTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 4px;
  width: 58px;
  max-width: 58px;
  height: auto;
  flex: none;
  margin-bottom: 8px;

  ${media.belowDesktop} {
    width: auto;
    max-width: none;
    margin-bottom: 0;
  }

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
  margin-left: -0.2rem;
  position: relative;
  z-index: 1;
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

  ${media.belowDesktop} {
    align-self: stretch;
  }

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
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.textMuted};
  flex: none;

  ${media.belowDesktop} {
    position: static;
    width: 16px;
    height: 16px;
    color: #777777;
    align-self: flex-end;
    margin: 0;
  }
`;
