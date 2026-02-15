import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import ItemCard from '../../molecules/ItemCard';
import * as S from './style';

const inconveniences: Array<{ title: string; description: string; icon: string }> = [
  { title: '유료과금 없음', description: '서비스 내 결제가 필요한 부가서비스가 없어요',  icon: '/intro/intro_inconv1.png' },
  { title: '인스턴스 개수제한 없음', description: '기본 10개, 추가 인스턴스가 필요한 경우 요청에 따라 원하는 만큼 가용량을 설정해드려요', icon: '/intro/intro_inconv2.png' },
  { title: '멤버 관리', description: '팀 멤버를 쉽게 관리할 수 있습니다', icon: '/intro/intro_inconv3.png' },
];

const InconveniencesSection = () => (
  <S.Section>
    <IntroSectionTitle
      title={
        <>
          자유롭게 꿈을 펼치기 위해
          <br />
          아올다가 없앤{' '}
          <span style={{ color: 'rgb(61, 144, 212)' }}>불편함 3가지</span>
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
      titleColor="rgb(3, 3, 3)"
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

