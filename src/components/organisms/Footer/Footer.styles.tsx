import styled from 'styled-components';

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
  min-height: 23.1rem;
  padding: 6rem 12rem;
  gap: 1rem;
  background: #061c2c;

  @media (max-width: 76.8rem) {
    padding: 4rem 2.4rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  gap: 1.6rem;
  width: 100%;
  max-width: 120rem;
  min-height: 11.1rem;
`;

export const LogoWrap = styled.div`
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
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
  gap: 1.2rem;
  flex: 1;
  min-width: 0;
`;

export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.4rem;
`;

export const BrandName = styled.span`
  display: block;
  font-family: 'Leon Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.3rem;
  color: #fefefe;
  white-space: nowrap;
`;

export const Tagline = styled.span`
  display: block;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #1a8ee5;
  word-break: keep-all;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.8rem;
  width: 100%;
`;

export const Address = styled.span`
  display: block;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #fefefe;
`;

export const ManagementRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  gap: 0.8rem;
`;

export const ManagementText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #fefefe;
  white-space: nowrap;
`;

export const Divider = styled.span`
  width: 0.4rem;
  height: 0;
  border: 0.1rem solid #fefefe;
  transform: rotate(90deg);
  flex: none;
`;
