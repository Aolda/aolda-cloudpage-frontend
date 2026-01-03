import styled, { css } from 'styled-components';

export const ServiceCardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
`;

export const ServiceCard = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;
  background: #1a1a1a;
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

export const HeaderSection = styled.div`
  padding: 2.4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 45%;
  min-height: 120px;
  gap: 0;
  background: #0f0f0f;
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

export const MenuIcon = styled.svg`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: color 0.2s;
  z-index: 1;
  
  ${ServiceCard}:hover & {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const ContentSection = styled.div`
  padding: 2.4rem 2rem;
  background: #1a1a1a;
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

