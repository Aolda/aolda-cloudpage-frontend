import Link from 'next/link';
import * as S from './style';

export interface LogoProps {
  /**
   * 로고 이미지 경로 (BrandLogo 모드)
   * src가 제공되면 이미지 로고로 렌더링됩니다.
   */
  src?: string;
  /**
   * 이미지 대체 텍스트 (BrandLogo 모드)
   * @default "Aolda"
   */
  alt?: string;
  /**
   * 클릭 시 이동할 경로 (BrandLogo 모드)
   * @default "/"
   */
  href?: string;
  /**
   * 접근성을 위한 aria-label 텍스트 (BrandLogo 모드)
   * @default "Aolda 홈으로 이동"
   */
  ariaLabel?: string;
  /**
   * 커스텀 클릭 핸들러 함수 (BrandLogo 모드)
   */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * 파트너 이름 (PartnerLogo 모드)
   * name이 제공되면 텍스트 카드 형태로 렌더링됩니다.
   */
  name?: string;
  /**
   * 파트너 로고 이미지 경로 (PartnerLogo 모드, 선택)
   */
  logoSrc?: string;
}

/**
 * 범용 로고 컴포넌트
 * 
 * BrandLogo와 PartnerLogo의 기능을 통합한 범용 로고 컴포넌트입니다.
 * 제공된 props에 따라 자동으로 BrandLogo 또는 PartnerLogo 모드로 렌더링됩니다.
 * 
 * @param {LogoProps} props - 로고 props
 * 
 */
const Logo = ({
  src,
  alt = 'Aolda',
  href = '/',
  ariaLabel = 'Aolda 홈으로 이동',
  onClick,
  name,
  logoSrc,
}: LogoProps) => {
  // PartnerLogo 모드: name이 있으면
  if (name) {
    return (
      <S.PartnerCard>
        {logoSrc ? (
          <S.PartnerLogo src={logoSrc} alt={name} />
        ) : (
          <S.PartnerInitial>{name.charAt(0)}</S.PartnerInitial>
        )}
        <S.PartnerName>{name}</S.PartnerName>
      </S.PartnerCard>
    );
  }

  // BrandLogo 모드: src가 있으면
  if (src) {
    const handleClick = (e: React.MouseEvent) => {
      onClick?.(e);
      window.scrollTo(0, 0);
    };

    return (
      <S.BrandLink as={Link} href={href} onClick={handleClick} aria-label={ariaLabel}>
        <S.BrandImg src={src} alt={alt} />
      </S.BrandLink>
    );
  }

  // props가 부족한 경우
  return null;
};

export default Logo;

