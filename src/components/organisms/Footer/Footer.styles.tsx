import styled from 'styled-components';
import { media } from '@/styles/theme';

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
  min-height: 23.1rem;
  padding: 6rem 12rem;
  gap: 1rem;
  background: #061c2c;

  ${media.tablet} {
    min-height: 20.7rem;
    padding: 4.8rem 3.2rem;
    gap: 1rem;
  }

  ${media.mobile} {
    min-height: 14.2rem;
    padding: 2.4rem 1.6rem;
    gap: 1rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.6rem;
  width: 100%;
  max-width: 120rem;

  ${media.tablet} {
    max-width: none;
    gap: 1.6rem;
  }

  ${media.mobile} {
    max-width: none;
    gap: 1.2rem;
  }
`;

export const LogoWrap = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;

  img {
    object-fit: contain;
  }

  ${media.mobile} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 1;
  min-width: 0;
`;

export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const BrandName = styled.span`
  font-family: 'Leon Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.3rem;
  color: #fefefe;
  white-space: nowrap;

  ${media.mobile} {
    font-size: 2.4rem;
    line-height: 2.5rem;
  }
`;

export const Tagline = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 150%;
  color: #1a8ee5;
  word-break: keep-all;

  ${media.mobile} {
    font-size: 1rem;
    line-height: 150%;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export const Address = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 150%;
  color: #fefefe;

  ${media.mobile} {
    font-size: 1rem;
    line-height: 150%;
  }
`;

export const ManagementRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const ManagementText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 150%;
  color: #fefefe;
  white-space: nowrap;

  ${media.mobile} {
    font-size: 1rem;
    line-height: 150%;
  }
`;

export const Divider = styled.span`
  width: 0.4rem;
  height: 0;
  border: 0.1rem solid #fefefe;
  transform: rotate(90deg);
  flex: none;
`;
