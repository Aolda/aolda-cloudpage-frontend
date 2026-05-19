import styled from 'styled-components';
import Link from 'next/link';
import { media } from '@/styles/theme';

export const DeveloperCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  ${media.tablet} {
    flex: 1;
    min-width: 0;
    max-width: calc(25% - 15px);
  }

  ${media.mobile} {
    flex: none;
    max-width: none;
    width: 100%;
  }
`;

export const DeveloperCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 36px;
  gap: 36px;
  width: 220.8px;
  height: 268px;
  background: #fefefe;
  border: 1px solid #e2e2e2;
  border-radius: 20px;
  flex: none;

  ${media.tablet} {
    flex: 1 1 calc(25% - 15px);
    min-width: 140px;
    max-width: calc(25% - 15px);
    width: auto;
    height: 189px;
    padding: 24px 16px;
    gap: 20px;
    border: 1px solid #efefef;
    border-radius: 12px;
  }

  ${media.mobile} {
    width: 100%;
    height: 59px;
    padding: 12px;
    gap: 8px;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid #efefef;
    border-radius: 8px;
  }
`;

export const CharacterContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;

  ${media.tablet} {
    width: 80px;
    height: 80px;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const CharacterImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  display: block;

  ${media.tablet} {
    width: 80px;
    height: 80px;
  }
`;

export const DefaultCharacter = styled.svg`
  width: 120px;
  height: 120px;

  ${media.tablet} {
    width: 80px;
    height: 80px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 12px;
  width: 100%;
  flex: none;

  ${media.tablet} {
    gap: 8px;
    width: 100%;
    height: auto;
  }

  ${media.mobile} {
    align-items: flex-start;
    gap: 8px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 12px;
  flex: none;

  ${media.tablet} {
    gap: 8px;
    width: auto;
    height: auto;
  }

  ${media.mobile} {
    justify-content: flex-start;
    gap: 8px;
    height: 15px;
  }
`;

export const CrewName = styled.h3`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #232527;
  flex: none;

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
    width: auto;
    height: auto;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 14px;
    text-align: left;
  }
`;

export const CrewNameSuffix = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #777777;
  flex: none;

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
    width: auto;
    height: auto;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
    text-align: left;
  }
`;

export const CrewInfo = styled.p`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #777777;
  flex: none;

  ${media.tablet} {
    font-size: 12px;
    line-height: 14px;
    width: auto;
    height: auto;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 12px;
    text-align: left;
  }
`;
