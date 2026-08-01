import styled from 'styled-components';
import { media } from '@/styles/theme';

export const ServiceCardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  flex: 1;
  min-width: 0;
  cursor: pointer;

  ${media.mobile} {
    width: 100%;
    flex: none;
  }
`;

export const PreviewCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 264px;
  border: 1px solid #efefef;
  border-radius: 10px;
  overflow: hidden;
  background: #fefefe;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  ${media.tablet} {
    height: 200px;
  }

  ${media.mobile} {
    height: 156px;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
`;

export const PreviewFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  background: #f5f5f5;
`;

export const FallbackLogo = styled.img`
  max-width: 120px;
  max-height: 80px;
  object-fit: contain;
`;
