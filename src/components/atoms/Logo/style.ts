import styled from 'styled-components';

// BrandLogo 스타일
export const BrandLink = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const BrandImg = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 50%;
  object-fit: cover;
`;

// PartnerLogo 스타일
export const PartnerCard = styled.div`
  padding: 1.125rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-height: 150px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const PartnerLogo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
`;

export const PartnerInitial = styled.span`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const PartnerName = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  text-align: center;
`;

