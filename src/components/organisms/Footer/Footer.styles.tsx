import styled from 'styled-components';
import { fontSize } from '@/styles/theme';

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
  justify-content: center;
  width: 100%;
  min-height: 14.375rem;
  padding: 3.75rem 7.5rem;
  gap: 0.625rem;
  background: #061c2c;

  @media (max-width: 48rem) {
    padding: 2.5rem 1.5rem;
    min-height: auto;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  gap: 1rem;
  width: 100%;
  max-width: 75rem;
`;

export const LogoWrap = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex: none;
  flex-shrink: 0;

  img {
    object-fit: contain;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.75rem;
  flex: 1;
  min-width: 0;
`;

export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.25rem;
`;

export const BrandName = styled.span`
  display: block;
  font-family: 'Leon Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${fontSize.h2};
  line-height: 1.3;
  color: #fefefe;
`;

export const Tagline = styled.span`
  display: block;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${fontSize.smaller};
  line-height: 1.5;
  color: #1a8ee5;
  word-break: keep-all;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.5rem;
  width: 100%;
`;

export const Address = styled.span`
  display: block;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${fontSize.smaller};
  line-height: 1.5;
  color: #fefefe;
`;

export const ManagementRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  gap: 0.5rem;
`;

export const ManagementText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${fontSize.smaller};
  line-height: 1.5;
  color: #fefefe;
`;

export const Divider = styled.span`
  width: 0.25rem;
  height: 0;
  border: 1px solid #fefefe;
  transform: rotate(90deg);
  flex: none;
`;
