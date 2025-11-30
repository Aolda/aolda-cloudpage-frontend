import Logo from '../../atoms/Logo';
import Button from '../../atoms/Button';
import MainMenu from '../../molecules/MainMenu';
import * as S from './style';

const Header = () => {
  const items = [
    { label: '제품 소개', href: '/product' },
    { label: '공지사항', href: '/notice' },
    { label: 'FAQ', href: '/FAQ' },
  ];

  return (
    <S.HeaderBar>
      <Logo src="/Logo.svg" alt="Aolda" href="/" />
      <MainMenu items={items} />
      <Button label="콘솔로 이동" href="https://console.aoldacloud.com/" size="lg" />
    </S.HeaderBar>
  );
};

export default Header;


