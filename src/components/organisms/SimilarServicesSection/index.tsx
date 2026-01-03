import SectionTitle from '../../molecules/SectionTitle';
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
      <SectionTitle
        title={
          <>
            <S.ServiceIcon viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="#3D90D4" strokeWidth="2" />
              <path
                d="M4 20c1.5-3 4.5-5 8-5s6.5 2 8 5"
                stroke="#3D90D4"
                strokeWidth="2"
                strokeLinecap="round"
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

