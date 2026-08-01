import IntroSectionTitle, { AccentBlue } from '../../molecules/IntroSectionTitle';
import ImageCard from '../../molecules/ImageCard';
import * as S from './style';

export type PartnerItem = {
  name: string;
  description?: string;
  period?: string;
  image?: string;
};

const defaultPartners: PartnerItem[] = [
  { name: '아주대학교 총학생회', description: '총학생회 공식홈페이지 운영', period: '2024-1 ~ 2025-1' },
  { name: '파란학기제', description: '파란학기 프로젝트 서비스 배포지원' },
  { name: '파란학기제', description: '파란학기 프로젝트 서비스 배포지원' },
  { name: 'APIA', description: 'ajou.app 서비스 운영' },
  { name: '파란학기제', description: '파란학기 프로젝트 서비스 배포지원' },
  { name: '파란학기제', description: '파란학기 프로젝트 서비스 배포지원' },
];

const PartnerCard = ({
  name,
  description,
  period,
  compact = false,
}: {
  name: string;
  description?: string;
  period?: string;
  compact?: boolean;
}) => (
  <ImageCard
    title={name}
    description={description}
    period={period}
    compact={compact}
    solidThumbnail={!compact}
  />
);

type PartnersSectionProps = {
  partners?: PartnerItem[];
};

const PartnersSection = ({ partners = defaultPartners }: PartnersSectionProps) => {
  const firstRowPartners = partners.slice(0, 3);
  const secondRowPartners = partners.slice(3, 6);

  return (
    <S.Section>
      <IntroSectionTitle
        title={
          <>
            이미 <AccentBlue>많은 곳에서 사용</AccentBlue>되고 있는
            {'\n'}
            <AccentBlue>아올다 클라우드</AccentBlue>
          </>
        }
        description="아올다 클라우드는 아주대학교 대/내외적으로 사용되는 다양한 서비스를 안정적으로 운영하기 위해 이곳저곳에서 사용되고 있어요"
        align="center"
        showTopBar={true}
      />

      <S.CarouselWrap>
        <S.Row>
          {firstRowPartners.map((p, index) => (
            <PartnerCard key={`carousel-row1-${index}`} {...p} />
          ))}
        </S.Row>
        <S.Row>
          {secondRowPartners.map((p, index) => (
            <PartnerCard key={`carousel-row2-${index}`} {...p} />
          ))}
        </S.Row>
      </S.CarouselWrap>

      <S.PartnerGrid>
        {partners.map((p, index) => (
          <PartnerCard key={`grid-${index}`} {...p} compact />
        ))}
      </S.PartnerGrid>
    </S.Section>
  );
};

export default PartnersSection;
