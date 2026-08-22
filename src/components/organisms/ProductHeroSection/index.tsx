import type { ReactNode } from 'react';
import Breadcrumb from '../../molecules/Breadcrumb';
import * as S from './style';

export interface ProductHeroSectionProps {
  /** 히어로 섹션 제목 */
  title: string;
  /** 히어로 섹션 설명 */
  description: ReactNode;
  /** Breadcrumb 항목 목록 */
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  /** 히어로 하단 영역 (태블릿·모바일: 검색바 / 데스크톱은 ContentWrapper) */
  children?: ReactNode;
}

const ProductHeroSection = ({
  title,
  description,
  breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '제품 소개' },
  ],
  children,
}: ProductHeroSectionProps) => {
  return (
    <S.HeroShell>
      <S.HeroBackground aria-hidden>
        <img src="/product/product_herosection.jpg" alt="" />
      </S.HeroBackground>
      <S.HeroOverlay aria-hidden />
      <S.HeroSection>
        <S.HeroInner>
          <S.HeroContent>
            <S.BreadcrumbWrapper>
              <Breadcrumb items={breadcrumbItems} />
            </S.BreadcrumbWrapper>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </S.HeroContent>
          {children ? <S.HeroSearch>{children}</S.HeroSearch> : null}
        </S.HeroInner>
      </S.HeroSection>
    </S.HeroShell>
  );
};

export default ProductHeroSection;
