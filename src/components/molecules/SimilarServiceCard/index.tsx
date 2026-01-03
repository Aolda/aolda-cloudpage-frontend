import { useMemo } from 'react';
import * as S from './style';

export interface SimilarServiceCardProps {
  /** 서비스 로고 이미지 경로 (선택, 없으면 href에서 자동 추출) */
  logo?: string;
  /** 서비스 제목 */
  title: string;
  /** 서비스 설명 */
  description: string;
  /** 서비스 링크 */
  href: string;
  /** 서비스 제공자 */
  provider?: string;
}

/**
 * URL에서 도메인을 추출하는 함수
 */
const getDomainFromUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return '';
  }
};

/**
 * 도메인에서 favicon URL을 생성하는 함수
 */
const getFaviconUrl = (domain: string): string => {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
};

/**
 * 유사 서비스 카드 컴포넌트
 * 
 * 유사 서비스 섹션에서 사용되는 개별 서비스 카드입니다.
 * 외부 링크로 연결되는 카드 형태의 컴포넌트입니다.
 * logo가 제공되지 않으면 href에서 도메인을 추출하여 자동으로 favicon을 불러옵니다.
 * 
 * @param {SimilarServiceCardProps} props - 유사 서비스 카드 props
 * @param {string} [props.logo] - 서비스 로고 이미지 경로 (없으면 자동 생성)
 * @param {string} props.title - 서비스 제목
 * @param {string} props.description - 서비스 설명
 * @param {string} props.href - 서비스 링크
 * @param {string} [props.provider] - 서비스 제공자
 * 
 * @example
 * <SimilarServiceCard
 *   title="데이터베이스 관리 시스템 | 관계형 RDS | Amazon Web Services"
 *   description="Amazon Relational Database Service(RDS)는 Amazon Aurora, PostgreSQL, SQL Server 및 MySQL 등에서 선택한 관계형 데이터베이스..."
 *   href="https://aws.amazon.com/ko/rds/"
 *   provider="Amazon Web Services, Inc."
 * />
 * 
 * @returns {JSX.Element} 유사 서비스 카드 요소
 */
const SimilarServiceCard = ({
  logo,
  title,
  description,
  href,
  provider,
}: SimilarServiceCardProps) => {
  // logo가 없으면 href에서 도메인을 추출하여 favicon URL 생성
  const logoUrl = useMemo(() => {
    if (logo) return logo;
    const domain = getDomainFromUrl(href);
    return domain ? getFaviconUrl(domain) : '';
  }, [logo, href]);

  const domain = useMemo(() => getDomainFromUrl(href), [href]);
  
  // NAVER CLOUD PLATFORM인지 확인
  const isNaverCloud = useMemo(() => {
    const domainLower = domain.toLowerCase();
    return domainLower.includes('ncloud') || 
           domainLower.includes('navercloud') ||
           provider?.toLowerCase().includes('naver cloud');
  }, [domain, provider]);

  return (
    <S.ServiceCardLink href={href} target="_blank" rel="noopener noreferrer">
      <S.ServiceCard $isNaverCloud={isNaverCloud}>
        <S.HeaderSection $isNaverCloud={isNaverCloud}>
          {isNaverCloud ? (
            <>
              <S.NaverLogoContainer>
                <S.NaverLogoSquare />
                <S.NaverLogoCircle />
              </S.NaverLogoContainer>
              <S.NaverTitleText>
                <div>NAVER</div>
                <div>CLOUD PLATFORM</div>
              </S.NaverTitleText>
            </>
          ) : (
            logoUrl && (
              <S.ServiceLogo src={logoUrl} alt={title} onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }} />
            )
          )}
          <S.MenuIcon viewBox="0 0 24 24" fill="none" $isNaverCloud={isNaverCloud}>
            <circle cx="12" cy="5" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="12" cy="19" r="1.5" fill="currentColor" />
          </S.MenuIcon>
        </S.HeaderSection>
        <S.ContentSection $isNaverCloud={isNaverCloud}>
          <S.ServiceTitle>{title}</S.ServiceTitle>
          <S.ServiceDescription>{description}</S.ServiceDescription>
          <S.ProviderSection>
            {isNaverCloud ? (
              <>
                <S.NaverIcon>
                  <S.NaverIconDash />
                  <S.NaverIconDash />
                </S.NaverIcon>
                <S.ServiceProvider>{provider || 'NAVER CLOUD PLATFORM'}</S.ServiceProvider>
              </>
            ) : (
              <>
                {logoUrl && <S.SmallLogo src={logoUrl} alt={provider || domain} />}
                {provider && <S.ServiceProvider>{provider}</S.ServiceProvider>}
              </>
            )}
          </S.ProviderSection>
        </S.ContentSection>
      </S.ServiceCard>
    </S.ServiceCardLink>
  );
};

export default SimilarServiceCard;

