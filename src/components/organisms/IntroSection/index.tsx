import * as S from './style';
import MenuCard from '../../molecules/MenuCard';
import ImageCard from '../../molecules/ImageCard';

const CardItems = [
  {
    title: '아올다,\n처음이신가요?',
    actionLabel: '사용 가이드 ',
    href: '/useinfo',
  },
  {
    title: '저희의 활동을\n모아봤어요!',
    actionLabel: '테크 블로그 ',
    href: '/blog',
  },
];

const IntroSection = () => (
  <S.Section>
    <S.Visual>
      <ImageCard
        image="/intro/intro_herobanner.png"
        alt="아주인의 꿈을 펼칠 파란하늘 속 작은구름"
        title="아주인의 꿈을 펼칠\n파란하늘 속 작은구름"
        isBackground={true}
      />
    </S.Visual>
    <S.MenuContainer>
      {CardItems.map((item, index) => (
        <MenuCard
          key={index}
          title={item.title}
          actionLabel={item.actionLabel}
          href={item.href}
        />
      ))}
    </S.MenuContainer> 
  </S.Section>
);

export default IntroSection;

