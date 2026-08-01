import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ServiceCardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  min-width: 0;
  cursor: pointer;

  /* desktop: equal flex-grow columns (~276 in 1200) */
  ${media.desktop} {
    flex: 1 1 0;
    width: auto;
    max-width: none;
  }

  ${media.tablet} {
    width: 100%;
    max-width: 330px;
    flex: none;
  }

  ${media.mobile} {
    width: 100%;
    max-width: none;
    flex: none;
  }
`;

/** Desktop image card ~276×264 · Tablet Figma: 330×315.86 */
export const ServiceCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #efefef;
  border-radius: 10px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  /* desktop: image-only preview */
  ${media.desktop} {
    height: 264px;
    background: #fefefe;
  }

  ${media.tablet} {
    max-width: 330px;
    height: 315.86px;
    background: #232527;
  }

  ${media.mobile} {
    height: 156px;
    border-radius: 10px;
    background: #232527;

    &:hover {
      box-shadow: none;
    }
  }
`;

/** Desktop-only image plane (tablet/mobile use HeaderSection + ContentSection) */
export const DesktopPreview = styled.div`
  display: none;

  ${media.desktop} {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fefefe;
  }
`;

export const DesktopPreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
`;

export const DesktopPreviewFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  background: #f5f5f5;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #232527;
  text-align: center;
`;

export const HeaderSection = styled.div<{ $bannerImage?: string }>`
  position: relative;
  min-height: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ $bannerImage }) =>
    $bannerImage ? `url(${$bannerImage}) center / cover no-repeat` : '#f7f8fa'};

  ${({ $bannerImage }) =>
    $bannerImage &&
    `
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.2);
      z-index: 0;
    }
  `}

  /* desktop uses DesktopPreview instead */
  ${media.desktop} {
    display: none;
  }

  ${media.tablet} {
    display: flex;
    flex: 0 0 48%;
  }

  ${media.mobile} {
    display: flex;
    flex: 0 0 72px;
  }
`;
export const MainLogo = styled.img`
  position: relative;
  z-index: 1;
  max-width: 72%;
  max-height: 64%;
  width: auto;
  height: auto;
  object-fit: contain;

  ${media.mobile} {
    max-width: 70%;
    max-height: 56%;
  }
`;

export const MenuIcon = styled.svg<{ $onBanner?: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 18px;
  height: 18px;
  color: ${({ $onBanner }) =>
    $onBanner ? 'rgba(255, 255, 255, 0.75)' : 'rgba(35, 37, 39, 0.45)'};
  z-index: 2;
  pointer-events: none;

  ${ServiceCard}:hover & {
    color: ${({ $onBanner }) =>
      $onBanner ? 'rgba(255, 255, 255, 0.95)' : 'rgba(35, 37, 39, 0.7)'};
  }

  /* desktop image cards: no overlay chrome */
  ${media.desktop} {
    display: none;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const ContentSection = styled.div`
  min-height: 0;
  flex-direction: column;
  box-sizing: border-box;

  /* desktop: image-only — hide text block */
  ${media.desktop} {
    display: none;
  }

  ${media.tablet} {
    display: flex;
    flex: 1;
    gap: 6px;
    padding: 14px 16px 12px;
    background: #232527;
  }

  ${media.mobile} {
    display: flex;
    flex: 1;
    padding: 8px;
    gap: 4px;
    background: #232527;
  }
`;

export const ServiceTitle = styled.h4`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
  color: #ffffff;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  ${media.tablet} {
    font-size: 14px;
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 12px;
    -webkit-line-clamp: 1;
  }
`;

export const ServiceDescription = styled.p`
  margin: 0;
  flex: 1;
  min-height: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.78);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.tablet} {
    font-size: 12px;
    -webkit-line-clamp: 3;
  }

  ${media.mobile} {
    font-size: 9px;
    line-height: 150%;
    -webkit-line-clamp: 2;
  }
`;

export const ProviderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 4px;
  min-width: 0;

  ${media.mobile} {
    display: none;
  }
`;

export const SmallLogo = styled.img`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  object-fit: contain;
  border-radius: 4px;
  flex-shrink: 0;
  background: #fff;
`;

export const ServiceProvider = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.55);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
