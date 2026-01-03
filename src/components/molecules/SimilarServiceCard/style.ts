import styled, { css } from 'styled-components';

export const ServiceCardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
`;

export const ServiceCard = styled.div<{ $isNaverCloud?: boolean }>`
  border-radius: 0.8rem;
  overflow: hidden;
  background: ${({ $isNaverCloud }) => ($isNaverCloud ? 'transparent' : '#1a1a1a')};
  display: flex;
  flex-direction: column;
  height: 300px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const HeaderSection = styled.div<{ $isNaverCloud?: boolean }>`
  padding: 2.4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: ${({ $isNaverCloud }) => ($isNaverCloud ? 'flex-start' : 'center')};
  position: relative;
  height: 45%;
  min-height: 120px;
  gap: ${({ $isNaverCloud }) => ($isNaverCloud ? '1.6rem' : '0')};

  ${({ $isNaverCloud }) =>
    $isNaverCloud
      ? css`
          background: linear-gradient(135deg, #03c75a 0%, #000000 100%);
          position: relative;
          overflow: hidden;

          &::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: 
              radial-gradient(circle at 20% 30%, rgba(3, 199, 90, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(3, 199, 90, 0.03) 2px,
                rgba(3, 199, 90, 0.03) 4px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(255, 255, 255, 0.02) 2px,
                rgba(255, 255, 255, 0.02) 4px
              );
            pointer-events: none;
          }

          &::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: 
              radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
            background-size: 100% 100%;
            pointer-events: none;
          }
        `
      : css`
          background: #0f0f0f;
        `}
`;

export const ServiceLogo = styled.img`
  width: 100px;
  height: 50px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  position: relative;
  z-index: 1;
`;

export const NaverLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;
  z-index: 1;
`;

export const NaverLogoSquare = styled.div`
  width: 24px;
  height: 24px;
  background: #ffffff;
  border-radius: 2px;
`;

export const NaverLogoCircle = styled.div`
  width: 24px;
  height: 24px;
  background: #ffffff;
  border-radius: 50%;
`;

export const NaverTitleText = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: 0.05em;
  line-height: 1.2;
  position: relative;
  z-index: 1;
`;

export const MenuIcon = styled.svg<{ $isNaverCloud?: boolean }>`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  width: 20px;
  height: 20px;
  color: ${({ $isNaverCloud }) =>
    $isNaverCloud ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)'};
  cursor: pointer;
  transition: color 0.2s;
  z-index: 1;
  
  ${ServiceCard}:hover & {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const ContentSection = styled.div<{ $isNaverCloud?: boolean }>`
  padding: 2.4rem 2rem;
  background: ${({ $isNaverCloud }) => ($isNaverCloud ? '#1f1f1f' : '#1a1a1a')};
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  flex: 1;
  height: 55%;
`;

export const ServiceTitle = styled.h4`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.5;
`;

export const ServiceDescription = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.85);
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
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 0.8rem;
`;

export const SmallLogo = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.7;
`;

export const NaverIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const NaverIconDash = styled.div`
  width: 12px;
  height: 2px;
  background: #03c75a;
  border-radius: 1px;
`;

export const ServiceProvider = styled.span`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
`;

