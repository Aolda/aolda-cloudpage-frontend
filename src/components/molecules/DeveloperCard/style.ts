import styled from 'styled-components';

export const DeveloperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 2rem;
`;

export const DeveloperIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E3F2FD;
  overflow: hidden;
`;

export const DeveloperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DefaultIcon = styled.svg`
  width: 60px;
  height: 60px;
`;

export const DeveloperName = styled.h4`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const DeveloperInfo = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
`;

