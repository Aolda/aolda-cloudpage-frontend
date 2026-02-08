import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import ItemCard from '../../molecules/ItemCard';
import * as S from './style';

const inconveniences: Array<{ title: string; description: string; icon: string }> = [
  { title: '유료과금 없음', description: '서비스 내 결제가 필요한 부가서비스가 없어요',  icon: '/intro/intro_inconv1.png' },
  { title: '인스턴스 개수제한 없음', description: '기본 10개, 추가 인스턴스가 필요한 경우 요청에 따라 원하는 만큼 가용량을 설정해드려요', icon: '/intro/intro_inconv2.png' },
  { title: '멤버 관리', description: '팀 멤버를 쉽게 관리할 수 있습니다', icon: '/intro/intro_inconv3.png' },
];

const promises: Array<{ title: string; description: string; icon: string }> = [
  { title: '상업적 사용 금지', description: '아주대학교 SW사업단 정책에 따라, 아올다 클라우드를 이용해 상업적 성격의 서비스를 운용할 수 없어요', icon: '/intro/intro_promise_1.png' },
  { title: '계정대여 금지', description: '아주대학교 SW사업단 정책에 따라, 아주대학교 구성원이 아닌 외부인은 아올다 클라우드를 사용할 수 없어요',  icon: '/intro/intro_promise_2.png' },
  { title: '인프라 무단조작 금지', description: '아올다 클라우드는 팔달관 334호에서 실제 물리서버를 볼 수 있지만, 보다 안정적인 운영을 위해 조작행위는 금지해요',  icon: '/intro/intro_promise_3.png' },
];

const ValuesSection = () => (
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

    <S.SectionSpacer />

    <IntroSectionTitle
      title={
        <>
          자유롭게 꿈을 펼치기 위해
          <br />
          모두 함계하는는{' '}
          <span style={{ color: 'rgb(233, 23, 23)' }}>약속 3가지</span>
        </>
      }
      description={
        <>
          아주인 모두가 자유롭게 꿈을 펼칠 수 있도록
          <br />
          아래 3가지는 반드시 지켜주세요!
        </>
      }
      align="center"
      showTopBar={true}
      titleColor="rgb(3, 3, 3)"
    />
    <S.PromiseGrid>
      {promises.map((item) => (
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

export default ValuesSection;

