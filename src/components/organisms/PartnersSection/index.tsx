import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import ImageCard from '../../molecules/ImageCard';
import * as S from './style';

const partners = [
  { name: '아주대학교 총학생회', description: '총학생회 공식홈페이지 운영', period: '2024-1 ~ 2025-1' },
  { name: '파란학기제', description: '파란학기 프로젝트 서비스 배포지원' },
  { name: '파란학기제', description: '파란학기 프로젝트 서비스 배포지원' },
  { name: 'APIA', description: 'ajou.app 서비스 운영' },
  { name: '파란학기제', description: '파란학기 프로젝트 서비스 배포지원' },
  { name: '파란학기제', description: '파란학기 프로젝트 서비스 배포지원' },
];

const PartnersSection = () => {
  const firstRowPartners = partners.slice(0, 3); // 처음 3개
  const secondRowPartners = partners.slice(3, 6); // 마지막 3개

  return (
    <S.Section>
      <IntroSectionTitle
        title={
          <>
            이미 <span style={{ color: 'rgb(61, 144, 212)' }}>많은 곳에서 사용</span>되고 있는
            {'\n'}
            <span style={{ color: 'rgb(61, 144, 212)' }}>아올다 클라우드</span>
          </>
        }
        description="아올다 클라우드는 아주대학교 대/내외적으로 사용되는 다양한 서비스를 안정적으로 운영하기 위해 이곳저곳에서 사용되고 있어요"
        showTopBar={true}
      />
      <S.GridContainer>
        {/* 첫 번째 줄 */}
        <S.Row>
          {firstRowPartners.map((p, index) => (
            <ImageCard
              key={`first-row-${index}`}
              image="/intro/intro_used.png"
              alt={p.name}
              title={p.name}
              description={p.description}
              period={p.period}
            />
          ))}
          {firstRowPartners.map((p, index) => (
            <ImageCard
              key={`first-row-duplicate-${index}`}
              image="/intro/intro_used.png"
              alt={p.name}
              title={p.name}
              description={p.description}
              period={p.period}
            />
          ))}
        </S.Row>
        {/* 두 번째 줄 */}
        <S.Row>
          {secondRowPartners.map((p, index) => (
            <ImageCard
              key={`second-row-${index}`}
              image="/intro/intro_used.png"
              alt={p.name}
              title={p.name}
              description={p.description}
              period={p.period}
            />
          ))}
          {secondRowPartners.map((p, index) => (
            <ImageCard
              key={`second-row-duplicate-${index}`}
              image="/intro/intro_used.png"
              alt={p.name}
              title={p.name}
              description={p.description}
              period={p.period}
            />
          ))}
        </S.Row>
      </S.GridContainer>
    </S.Section>
  );
};

export default PartnersSection;

