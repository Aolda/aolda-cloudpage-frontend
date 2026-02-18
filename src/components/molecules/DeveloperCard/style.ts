import styled from 'styled-components';
import Link from 'next/link';

export const DeveloperCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
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
  background: #FFFFFF;
  border: 1px solid #E2E2E2;
  border-radius: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CharacterContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CharacterImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  display: block;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DefaultCharacter = styled.svg`
  width: 120px;
  height: 120px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 148.8px;
  height: 64px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 98px;
  height: 29px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CrewName = styled.h3`
  width: 56px;
  height: 29px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #232527;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CrewNameSuffix = styled.span`
  width: 30px;
  height: 23px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #777777;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const CrewInfo = styled.p`
  width: 97px;
  height: 23px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #777777;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
