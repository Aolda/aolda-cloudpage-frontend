import Link from 'next/link';
import * as S from './style';

export interface SimilarServiceCardProps {
  /** 서비스 로고 이미지 경로 */
  logo: string;
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
 * 유사 서비스 카드 컴포넌트
 * 
 * 유사 서비스 섹션에서 사용되는 개별 서비스 카드입니다.
 * 
 * @param {SimilarServiceCardProps} props - 유사 서비스 카드 props
 * @param {string} props.logo - 서비스 로고 이미지 경로
 * @param {string} props.title - 서비스 제목
 * @param {string} props.description - 서비스 설명
 * @param {string} props.href - 서비스 링크
 * @param {string} [props.provider] - 서비스 제공자
 * 
 * @example
 * <SimilarServiceCard
 *   logo="/openstack-logo.png"
 *   title="GitHub - openstack/trove"
 *   description="OpenStack Database As A Service (Trove)"
 *   href="https://github.com/openstack/trove"
 *   provider="openstack"
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
  return (
    <S.ServiceCardLink as={Link} href={href} target="_blank" rel="noopener noreferrer">
      <S.ServiceCard>
        <S.ServiceLogo src={logo} alt={title} />
        <S.ServiceContent>
          <S.ServiceTitle>{title}</S.ServiceTitle>
          <S.ServiceDescription>{description}</S.ServiceDescription>
          {provider && <S.ServiceProvider>{provider}</S.ServiceProvider>}
        </S.ServiceContent>
      </S.ServiceCard>
    </S.ServiceCardLink>
  );
};

export default SimilarServiceCard;

