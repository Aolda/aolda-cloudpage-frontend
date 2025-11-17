import * as S from './style';
import IntroMenu from '../../molecules/IntroMenu';
import SectionTitle from '../../molecules/SectionTitle';

const IntroMenuItems = [
  {
    title: '아올다,\n처음이신가요?',
    actionLabel: '사용 설명서 >',
    href: '#guide',
  },
  {
    title: '저희의 활동을\n모아봤어요!',
    actionLabel: '테크 블로그 >',
    href: '#archive',
  },
];

const IntroSection = () => (
  <S.Section>
    <S.Visual>
      <SectionTitle
        richTitle={
          <>
            아주인의 꿈을 펼칠
            <br />
            파란하늘 속 작은구름
          </>
        }
        backgroundSrc="/day1.png"
        titleColor="#ffffff"
      />
    </S.Visual>
    <S.MenuContainer>
      {IntroMenuItems.map((item, index) => (
        <IntroMenu
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


