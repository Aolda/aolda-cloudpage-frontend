'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  StyledHeader,
  NavLink,
  MobileMenuOverlay,
  MobileMenuPanel,
  MobileMenuLink,
} from './Header.styles';

const NAV_ITEMS = [
  { label: '제품 소개', href: '/product' },
  { label: '공지사항', href: '/notice' },
  { label: 'FAQ', href: '/FAQ' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <StyledHeader $menuOpen={isMenuOpen}>
      <section className="iconSection">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image src="/main_logo.png" alt="icon" width={35} height={36} />
        </Link>
      </section>
      <nav className="linkSeciton" aria-label="주요 메뉴">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <Link key={item.href} href={item.href} passHref>
              <NavLink $isActive={isActive}>{item.label}</NavLink>
            </Link>
          );
        })}
      </nav>
      <button
        type="button"
        className={`menuToggle${isMenuOpen ? ' isOpen' : ''}`}
        aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-main-menu"
        onClick={toggleMenu}
      />
      <MobileMenuOverlay
        $open={isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />
      <MobileMenuPanel
        id="mobile-main-menu"
        $open={isMenuOpen}
        aria-hidden={!isMenuOpen}
        aria-label="모바일 메뉴"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              <MobileMenuLink $isActive={isActive}>{item.label}</MobileMenuLink>
            </Link>
          );
        })}
      </MobileMenuPanel>
    </StyledHeader>
  );
};

export default Header;
