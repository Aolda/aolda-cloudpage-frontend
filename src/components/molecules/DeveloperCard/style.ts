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
  padding: 1.5rem 2.25rem;
  gap: 2.25rem;
  width: 13.8rem;
  height: 16.75rem;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Background, #2A2A2A)' : 'transparent'};
  border: 1px solid ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.border};
  border-radius: 1.25rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CharacterContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CharacterImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  object-fit: contain;
  display: block;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DefaultCharacter = styled.svg`
  width: 7.5rem;
  height: 7.5rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 0.75rem;
  width: 100%;
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
  padding: 0;
  gap: 0.75rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CrewName = styled.h3`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : theme.colors.text)};
`;

export const CrewNameSuffix = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : theme.colors.gray600)};
`;

export const CrewInfo = styled.p`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : theme.colors.gray600)};
  flex: none;
  order: 1;
  flex-grow: 0;
`;
