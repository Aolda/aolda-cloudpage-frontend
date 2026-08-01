import IntroSectionTitle, { AccentBlue } from '../../molecules/IntroSectionTitle';
import ItemCard from '../../molecules/ItemCard';
import * as S from './style';

const inconveniences: Array<{ title: string; description: string; icon: string }> = [
  { title: '유료과금 없음', description: '서비스 내 결제가 필요한 부가서비스가 없어요',  icon: '/intro/intro_inconv1.png' },
  {
    title: '인스턴스 개수제한 없음',
    /* Plain string: desktop ~312px → 2줄, tablet ~176px → 3줄 (강제 br/DescLine 없음) */
    description: '기본 10개, 추가 인스턴스가 필요한 경우 요청에 따라 원하는 만큼 가용량을 설정해드려요',
    icon: '/intro/intro_inconv2.png',
  },
  { title: '협업계정 수 제한 없음', description: '프로젝트 당 협업을 위해 등록할 수 있는 계정의 개수제한이 없어요', icon: '/intro/intro_inconv3.png' },
];

const InconveniencesSection = () => (
  <S.Section>
    <IntroSectionTitle
      title={
        <>
          자유롭게 꿈을 펼치기 위해
          <br />
          아올다가 없앤{' '}
          <AccentBlue>불편함 3가지</AccentBlue>
        </>
      }
      description={
        <>
          아주인 모두가 자유롭게 꿈을 펼칠 수 있도록
          <br />
          아래 3가지를 없앴어요
        </>
      }
      align="center"
      showTopBar={true}
    />
    <S.PromiseGrid>
      {inconveniences.map((item) => (
        <ItemCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </S.PromiseGrid>
  </S.Section>
);

export default InconveniencesSection;
