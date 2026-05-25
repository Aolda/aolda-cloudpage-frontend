import styled from 'styled-components';

export const ServiceCardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
`;

export const ServiceCard = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Background, #2A2A2A)' : theme.colors.surface};
  display: flex;
  flex-direction: column;
  height: 18.75rem;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.border};
  box-shadow: none;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.3);
  }
`;

export const HeaderSection = styled.div<{ $bannerImage?: string }>`
  padding: 1.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 45%;
  min-height: 7.5rem;
  background: ${({ $bannerImage }) => ($bannerImage ? `url(${$bannerImage})` : '#0f0f0f')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  
  ${({ $bannerImage }) =>
    $bannerImage &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 0;
    }
  `}
`;

export const MainLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.875rem;
  opacity: 1;
  z-index: 1;
  /* 필터 제거 - favicon의 원본 색상 유지 */
`;

export const MenuIcon = styled.svg`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.25rem;
  height: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: color 0.2s;
  z-index: 2;
  
  ${ServiceCard}:hover & {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const ContentSection = styled.div`
  padding: 1.5rem 1.25rem;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Background, #2A2A2A)' : 'transparent'};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  height: 55%;
`;

export const ServiceTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : theme.colors.text)};
  line-height: 1.5;
`;

export const ServiceDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : theme.colors.textMuted)};
  line-height: 1.7;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProviderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.5rem;
`;

export const SmallLogo = styled.img`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  object-fit: contain;
  /* 필터 제거 - favicon의 원본 색상 유지 */
  opacity: 0.9;
  display: block;
  flex-shrink: 0;
`;

export const ServiceProvider = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : theme.colors.gray600)};
`;
