import styled from 'styled-components';
import { fontSize, media } from '@/styles/theme';

export const FooterOuter = styled.div`
  width: 100%;
  background: #061c2c;
  margin-top: auto;
`;

export const StyledFooter = styled.footer`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 231px;
  padding: 60px 120px;
  gap: 10px;
  background: #061c2c;

  ${media.tablet} {
    min-height: 207px;
    padding: 48px 32px;
    gap: 10px;
  }

  ${media.mobile} {
    min-height: 142px;
    padding: 24px 16px;
    gap: 10px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 1200px;

  ${media.tablet} {
    max-width: none;
    width: 349.5px;
    gap: 16px;
  }

  ${media.mobile} {
    max-width: none;
    width: 337.5px;
    max-width: 100%;
    gap: 12px;
  }
`;

export const LogoWrap = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
  }

  ${media.mobile} {
    width: 24px;
    height: 24px;

    img {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 0;

  ${media.tablet} {
    width: 301.5px;
    flex: none;
  }

  ${media.mobile} {
    width: 301.5px;
    max-width: calc(100% - 36px);
    flex: 1;
  }
`;

export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BrandName = styled.span`
  font-family: 'Leon Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: ${fontSize.h2};
  line-height: 33px;
  color: #fefefe;
  white-space: nowrap;

  ${media.mobile} {
    font-size: 24px;
    line-height: 25px;
    color: #fefefe;
  }
`;

export const Tagline = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: ${fontSize.smaller};
  line-height: 150%;
  color: #1a8ee5;
  word-break: keep-all;

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Address = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: ${fontSize.smaller};
  line-height: 150%;
  color: #fefefe;

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
  }
`;

export const ManagementRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ManagementText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: ${fontSize.smaller};
  line-height: 150%;
  color: #fefefe;
  white-space: nowrap;

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
  }
`;

export const Divider = styled.span`
  width: 4px;
  height: 0;
  border: 1px solid #fefefe;
  transform: rotate(90deg);
  flex: none;
`;
