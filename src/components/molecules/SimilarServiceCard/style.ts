import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ServiceCardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;

  ${media.mobile} {
    width: 100%;
    height: 156.49px;
    min-width: 0;
  }
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

  ${media.tablet} {
    height: 316px;
    border-radius: 10px;
    border: 1px solid #efefef;
    box-shadow: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  ${media.mobile} {
    width: 100%;
    height: 156.49px;
    border-radius: 10px;
    border: 1px solid #efefef;
    box-shadow: none;
    box-sizing: border-box;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const HeaderSection = styled.div<{ $bannerImage?: string }>`
  padding: 2.4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 45%;
  min-height: 120px;

  background: ${({ $bannerImage }) => ($bannerImage ? `url(${$bannerImage})` : '#0f0f0f')};

  ${media.mobile} {
    flex: none;
    height: 72px;
    min-height: 72px;
    padding: 0.8rem;
  }
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
  padding: 3rem;
  opacity: 1;
  z-index: 1;

  ${media.mobile} {
    padding: 0.8rem;
  }
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
  z-index: 2;
  
  ${ServiceCard}:hover & {
    color: rgba(255, 255, 255, 0.9);
  }

  ${media.mobile} {
    display: none;
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

  ${media.mobile} {
    flex: 1;
    min-height: 0;
    height: auto;
    padding: 8px;
    gap: 4px;
    overflow: hidden;
  }
`;

export const ServiceTitle = styled.h4`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.5;

  ${media.mobile} {
    font-size: 10px;
    line-height: 12px;
    font-weight: 700;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
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

  ${media.mobile} {
    font-size: 9px;
    line-height: 150%;
    -webkit-line-clamp: 2;
    flex: 1;
    min-height: 0;
  }
`;

export const ProviderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 0.8rem;

  ${media.mobile} {
    display: none;
  }
`;

export const SmallLogo = styled.img`
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  object-fit: contain;
  /* 필터 제거 - favicon의 원본 색상 유지 */
  opacity: 0.9;
  display: block;
  flex-shrink: 0;
`;

export const ServiceProvider = styled.span`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
`;
