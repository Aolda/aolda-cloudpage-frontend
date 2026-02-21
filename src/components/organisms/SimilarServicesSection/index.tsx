import Image from 'next/image';
import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import SimilarServiceCard from '../../molecules/SimilarServiceCard';
import * as S from './style';

export interface SimilarService {
  /** 서비스 로고 이미지 경로 (선택, 없으면 자동 favicon) */
  logo?: string;
  /** 서비스 배너 이미지 경로 (선택, HeaderSection 배경으로 사용) */
  bannerImage?: string;
  /** 서비스 제목 */
  title: string;
  /** 서비스 설명 */
  description: string;
  /** 서비스 링크 */
  href: string;
  /** 서비스 제공자 */
  provider?: string;
}

export interface SimilarServicesSectionProps {
  /** 유사 서비스 목록 */
  services: SimilarService[];
}

/**
 * 유사 서비스 섹션 컴포넌트
 * 
 * 제품 상세 페이지의 유사 서비스 섹션입니다.
 *
 * @param {SimilarServicesSectionProps} props - 유사 서비스 섹션 props
 * @param {SimilarService[]} props.services - 유사 서비스 목록
 * 
 * @example
 * <SimilarServicesSection
 *   services={[
 *     {
 *       logo: "/openstack-logo.png",
 *       title: "GitHub - openstack/trove",
 *       description: "OpenStack Database As A Service (Trove)",
 *       href: "https://github.com/openstack/trove",
 *       provider: "openstack"
 *     }
 *   ]}
 * />
 * 
 * @returns {JSX.Element} 유사 서비스 섹션 요소
 */
const SimilarServicesSection = ({ services }: SimilarServicesSectionProps) => {
  return (
    <S.SimilarServicesSection>
      <IntroSectionTitle
        title={
          <>
            <S.ServiceIcon>
              <Image
                src="/product/product_detail/title_icon3.png"
                alt="유사 서비스"
                width={35}
                height={35}
              />
            </S.ServiceIcon>
            유사 서비스
          </>
        }
        align="left"
      />
      <S.Description>
        본 제품과 관련 있는 유사 기능들을 제공하여 이해를 돕도록 위함.
      </S.Description>
      <S.ServicesGrid>
        {services.map((service, index) => (
          <SimilarServiceCard
            key={index}
            logo={service.logo}
            bannerImage={service.bannerImage}
            title={service.title}
            description={service.description}
            href={service.href}
            provider={service.provider}
          />
        ))}
      </S.ServicesGrid>
    </S.SimilarServicesSection>
  );
};

export default SimilarServicesSection;

