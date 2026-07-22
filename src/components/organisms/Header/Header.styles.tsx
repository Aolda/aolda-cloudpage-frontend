import styled from 'styled-components';
import { media } from '@/styles/theme';

export const StyledHeader = styled.header<{ $menuOpen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(1360px, calc(100vw - 80px));
  max-width: 1360px;
  height: 72px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
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
    padding: 20px 32px;
    border: none;
    border-radius: 0;
    height: 68px;
    z-index: ${({ $menuOpen }) => ($menuOpen ? 110 : 10)};
  }

  ${media.mobile} {
    padding: 20px 24px;
  }

  .iconSection {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;
    gap: 8px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-decoration: none;
    }

    img {
      display: block;
      width: 35px !important;
      height: 36px !important;
      object-fit: contain;
    }

    ${media.belowDesktop} {
      img {
        width: 28px !important;
        height: 28px !important;
      }
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
    width: 272px;
    height: 35px;

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
    /* material-symbols:menu-rounded */
    display: none;
    position: relative;
    margin: 0;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    flex: none;
    order: 1;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;

    ${media.belowDesktop} {
      display: block;
      margin: 0 auto;
    }

    .menuToggleVector {
      /* Vector */
      position: absolute;
      left: 12.5%;
      right: 12.5%;
      top: 25%;
      bottom: 25%;
      box-sizing: border-box;
      pointer-events: none;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background: #777777;
        border-radius: 999px;
        transition: transform 0.2s ease, top 0.2s ease, bottom 0.2s ease, box-shadow 0.2s ease;
      }

      &::before {
        top: 0;
        box-shadow: 0 5px 0 #777777;
      }

      &::after {
        bottom: 0;
      }
    }

    &.isOpen .menuToggleVector {
      &::before {
        top: 50%;
        box-shadow: none;
        transform: translateY(-50%) rotate(45deg);
      }

      &::after {
        bottom: auto;
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }
`;

export const BrandLabel = styled.span`
  display: none;
  font-family: 'Paperlogy', 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary500};
  white-space: nowrap;

  ${media.belowDesktop} {
    display: block;
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
  font-size: 25.6px;
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
  padding: 8px 20px;
  gap: 1.2rem;
  height: 35px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
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
