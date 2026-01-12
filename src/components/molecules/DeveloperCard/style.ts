import styled from 'styled-components';
import Link from 'next/link';

export const DeveloperCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const DeveloperCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

export const CharacterContainer = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

export const DefaultCharacter = styled.svg`
  width: 100%;
  height: 100%;
  max-width: 120px;
  max-height: 120px;
`;

export const CrewName = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  line-height: 1.4;
`;

export const CrewNameSuffix = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #666666;
`;

export const CrewInfo = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: #666666;
  text-align: center;
  line-height: 1.4;
`;
