import IconTitle from '../../molecules/IconTitle';
import SimilarServiceCard from '../../molecules/SimilarServiceCard';
import * as S from './style';

export interface SimilarService {
  logo?: string;
  bannerImage?: string;
  title: string;
  description: string;
  href: string;
  provider?: string;
}

export interface SimilarServicesSectionProps {
  services: SimilarService[];
}

const SimilarServicesSection = ({ services }: SimilarServicesSectionProps) => {
  return (
    <S.SimilarServicesSection>
      <S.HeaderBlock>
        <IconTitle
          icon="/product/product_detail/title_icon3.png"
          title="유사 서비스"
          alt="유사 서비스"
          align="left"
        />
        <S.Description>
          본 제품과 관련 있는 유사 기능들을 제공하여 이해를 돕도록 위함.
        </S.Description>
      </S.HeaderBlock>
      <S.ServicesGrid>
        {services.map((service, index) => (
          <SimilarServiceCard
            key={index}
            href={service.href}
            logo={service.logo}
            bannerImage={service.bannerImage}
            title={service.title}
            description={service.description}
            provider={service.provider}
          />
        ))}
      </S.ServicesGrid>
    </S.SimilarServicesSection>
  );
};

export default SimilarServicesSection;
