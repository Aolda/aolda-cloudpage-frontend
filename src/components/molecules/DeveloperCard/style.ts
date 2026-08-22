import styled from 'styled-components';
import Link from 'next/link';
import { media } from '@/styles/theme';

export const DeveloperCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  ${media.desktop} {
    flex: none;
    width: 220.8px;
    max-width: 220.8px;
  }

  ${media.tablet} {
    flex: 1 1 0;
    min-width: 0;
    max-width: calc((100% - 60px) / 4);
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
  background: #fefefe;
  border: 1px solid #efefef;

  /* desktop: 220.8×268, padding 24×36, gap 36, radius 20 */
  ${media.desktop} {
    flex: none;
    width: 220.8px;
    height: 268px;
    padding: 24px 36px;
    gap: 36px;
    border-radius: 20px;
  }

  /* CrewProfile_Card — 155×189, padding 24×36, gap 20 */
  ${media.tablet} {
    flex: 1 1 0;
    min-width: 0;
    max-width: calc((100% - 60px) / 4);
    width: 155px;
    height: 189px;
    padding: 24px 36px;
    gap: 20px;
    background: #fefefe;
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
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
  }
`;

export const CharacterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;

  ${media.desktop} {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
  }

  ${media.tablet} {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const CharacterImage = styled.img`
  object-fit: contain;
  display: block;

  ${media.desktop} {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }

  ${media.tablet} {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const DefaultCharacter = styled.svg`
  ${media.desktop} {
    width: 120px;
    height: 120px;
  }

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
  width: 100%;
  flex: none;

  ${media.desktop} {
    gap: 12px;
  }

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
  flex: none;

  ${media.desktop} {
    gap: 12px;
  }

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
  text-align: center;
  color: #232527;
  flex: none;

  ${media.desktop} {
    font-size: 20px;
    line-height: 24px;
  }

  ${media.tablet} {
    font-size: 16px;
    line-height: 19px;
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
  text-align: center;
  color: #777777;
  flex: none;

  ${media.desktop} {
    font-size: 16px;
    line-height: 150%;
  }

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
  text-align: center;
  color: #777777;
  flex: none;

  ${media.desktop} {
    font-size: 16px;
    line-height: 19px;
  }

  ${media.tablet} {
    font-size: 12px;
    line-height: 14px;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 12px;
    text-align: left;
  }
`;
