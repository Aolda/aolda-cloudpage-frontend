'use client';

import Image from 'next/image';
import * as S from './Footer.styles';

const Footer = () => {
  return (
    <S.FooterOuter>
      <S.StyledFooter>
        <S.FooterContent>
          <S.LogoWrap>
            <Image src="/main_logo.png" alt="Aolda" width={32} height={32} />
          </S.LogoWrap>
          <S.TextColumn>
            <S.BrandBlock>
              <S.BrandName>Aolda</S.BrandName>
              <S.Tagline>교내 클라우드 인프라 개발/운영 소학회</S.Tagline>
            </S.BrandBlock>
            <S.InfoBlock>
              <S.Address>경기도 수원시 영통구 원천동 월드컵로 206 아주대학교</S.Address>
              <S.ManagementRow>
                <S.ManagementText>회장 이나현</S.ManagementText>
                <S.Divider aria-hidden />
                <S.ManagementText>부회장 조예진</S.ManagementText>
                <S.Divider aria-hidden />
                <S.ManagementText>총무 김화균</S.ManagementText>
              </S.ManagementRow>
            </S.InfoBlock>
          </S.TextColumn>
        </S.FooterContent>
      </S.StyledFooter>
    </S.FooterOuter>
  );
};

export default Footer;
