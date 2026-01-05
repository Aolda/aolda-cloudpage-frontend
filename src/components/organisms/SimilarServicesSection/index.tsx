import ImageTitle from '../../molecules/ImageTitle';
import SimilarServiceCard from '../../molecules/SimilarServiceCard';
import * as S from './style';

export interface SimilarService {
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
      <ImageTitle
        icon="/product/product_detail/title_icon3.png"
        title="유사 서비스"
        alt="유사 서비스 아이콘"
      />
      <S.Description>
        본 제품과 관련 있는 유사 기능들을 제공하여 이해를 돕도록 위함.
      </S.Description>
      <S.ServicesGrid>
        {services.map((service, index) => (
          <SimilarServiceCard
            key={index}
            logo={service.logo}
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

