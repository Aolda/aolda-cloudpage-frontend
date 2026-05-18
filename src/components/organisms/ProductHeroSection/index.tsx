import type { ReactNode } from 'react';
import Breadcrumb from '../../molecules/Breadcrumb';
import * as S from './style';

export interface ProductHeroSectionProps {
  /** 히어로 섹션 제목 */
  title: string;
  /** 히어로 섹션 설명 */
  description: string;
  /** Breadcrumb 항목 목록 */
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  /** 히어로 하단 영역 (태블릿: 검색바) */
  children?: ReactNode;
}

/**
 * 제품 소개 히어로 섹션 컴포넌트
 * 
 * 제품 소개 페이지 상단의 히어로 섹션입니다.
 * 어두운 파란색 배경에 제목과 설명을 표시합니다.
 *
 * @param {ProductHeroSectionProps} props - 히어로 섹션 props
 * @param {string} props.title - 히어로 섹션 제목
 * @param {string} props.description - 히어로 섹션 설명
 * 
 * @example
 * <ProductHeroSection
 *   title="아울다 Service"
 *   description="아울다에서 제품은 기획서에 따라 진행된 각 프로젝트의 최종 성과물을 의미합니다."
 * />
 * 
 * @returns {JSX.Element} 히어로 섹션 요소
 */
const ProductHeroSection = ({
  title,
  description,
  breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '제품소개' },
  ],
  children,
}: ProductHeroSectionProps) => {
  return (
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
  );
};

export default ProductHeroSection;
