import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import ImageCard from '../../molecules/ImageCard';
import * as S from './style';

const partners = [
  { name: '아주대학교 총학생회', description: '총학생회 공식홈페이지 운영', period: '2024-1 ~ 2025-1' },
  { name: 'APIA', description: 'ajou.app 서비스 운영' },
  { name: '파란학기제', description: '파란학기 프로젝트 서비스 배포지원' },
];

const PartnersSection = () => (
  <S.Section>
    <IntroSectionTitle
      title={
        <span style={{ color: '#000' }}>
          이미 <span style={{ color: 'rgb(61, 144, 212)' }}>많은 곳에서 사용</span>되고 있는
          {'\n'}아올다 클라우드
        </span>
      }
      description="아올다 클라우드는 아주대학교 대/내외적으로 사용되는 다양한 서비스를 안정적으로 운영하기 위해 이곳저곳에서 사용되고 있어요"
    />
    <S.Grid>
      {partners.map((p) => (
        <ImageCard
          key={p.name}
          image="/intro/intro_used.png"
          alt={p.name}
          title={p.name}
          description={p.description}
          period={p.period}
        />
      ))}
    </S.Grid>
  </S.Section>
);

export default PartnersSection;

