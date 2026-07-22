import styled from 'styled-components';
import { media } from '@/styles/theme';

export const StyledHeader = styled.header<{ $menuOpen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(136rem, calc(100vw - 80px));
  max-width: 136rem;
  height: 7.2rem;
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding: 1.8rem 1.6rem;
  border: solid 0.1rem ${({ theme }) => theme.colors.border};
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  box-sizing: border-box;

  ${media.belowDesktop} {
    width: 100%;
    max-width: none;
    top: 0;
    left: 0;
    transform: none;
    position: relative;
    margin: 0;
    padding: 16px 32px;
    border: none;
    border-radius: 0;
    height: 68px;
    z-index: ${({ $menuOpen }) => ($menuOpen ? 110 : 10)};
  }

  ${media.mobile} {
    padding: 16px 24px;
  }

  .iconSection {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      display: block;
      width: 3.5rem !important;
      height: 3.6rem !important;
      object-fit: contain;
    }
  }

  .linkSeciton {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    width: 27.2rem;
    height: 3.9rem;

    a {
      text-decoration: none;
      display: flex;
    }

    ${media.belowDesktop} {
      display: none;
    }
  }

  .actionSection {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.2rem;
    flex-shrink: 0;
    margin-left: auto;
    position: relative;
    z-index: 2;

    ${media.belowDesktop} {
      margin-left: 0;
    }
  }

  .menuToggle {
    display: none;
    width: 2.4rem;
    height: 2.4rem;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    flex-shrink: 0;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 0.2rem;
      background: ${({ theme }) => theme.colors.gray600};
      border-radius: 0.1rem;
      transition: transform 0.2s ease, box-shadow 0.2s ease, margin 0.2s ease;
    }

    &::before {
      margin-bottom: 0.5rem;
      box-shadow: 0 0.6rem 0 ${({ theme }) => theme.colors.gray600};
    }

    ${media.belowDesktop} {
      display: block;
    }

    &.isOpen::before {
      margin-bottom: 0;
      box-shadow: none;
      transform: translateY(0.35rem) rotate(45deg);
    }

    &.isOpen::after {
      transform: translateY(-0.35rem) rotate(-45deg);
    }
  }
`;

export const MobileMenuOverlay = styled.div<{ $open: boolean }>`
  display: none;

  ${media.belowDesktop} {
    display: block;
    position: fixed;
    inset: 0;
    top: 68px;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transition: opacity 0.2s ease, visibility 0.2s ease;
  }
`;

export const MobileMenuPanel = styled.nav<{ $open: boolean }>`
  display: none;

  ${media.belowDesktop} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.surface};
    z-index: 101;
    padding: 1.6rem;
    gap: 0.4rem;
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.08);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-0.8rem)')};
    transition:
      opacity 0.2s ease,
      visibility 0.2s ease,
      transform 0.2s ease;

    a {
      display: block;
      text-decoration: none;
    }
  }
`;

export const MobileMenuLink = styled.span<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 4.8rem;
  padding: 1.2rem 1.6rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary500 : theme.colors.text};
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary500};
  }
`;

export const NavLink = styled.span<{ $isActive: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2rem;
  gap: 1.2rem;
  height: 3.9rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  text-align: center;
  color: ${(props) =>
    props.$isActive
      ? props.theme.colors.primary500
      : props.theme.mode === 'dark'
        ? '#FAFAFA'
        : props.theme.colors.gray600};
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary500};
  }
`;
