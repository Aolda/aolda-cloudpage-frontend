import styled from 'styled-components';

export const ServiceCardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const ServiceCard = styled.div`
  padding: 2rem;
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-height: 200px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const ServiceLogo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
`;

export const ServiceTitle = styled.h4`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
`;

export const ServiceDescription = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  flex: 1;
`;

export const ServiceProvider = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: auto;
`;

