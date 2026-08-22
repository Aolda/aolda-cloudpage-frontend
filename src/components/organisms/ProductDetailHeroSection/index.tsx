import Button from '../../atoms/Button';
import Breadcrumb from '../../molecules/Breadcrumb';
import * as S from './style';

export interface ProductDetailHeroSectionProps {
  /** 서비스 이름 */
  name: string;
  /** 서비스 설명 */
  description: string;
  /** Breadcrumb 항목 목록 */
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  /** 제품 신청 링크 */
  applicationLink?: string;
  /** 프로젝트 링크 */
  projectLink?: string;
}

/**
 * 제품 상세 히어로 섹션 컴포넌트
 */
const ProductDetailHeroSection = ({
  name,
  description,
  breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '제품 소개', href: '/product' },
    { label: name },
  ],
  applicationLink,
  projectLink,
}: ProductDetailHeroSectionProps) => {
  return (
    <S.HeroShell>
      <S.HeroBackground aria-hidden />
      <S.HeroOverlay aria-hidden />
      <S.HeroSection>
        <S.HeroContent>
          <S.BreadcrumbWrapper>
            <Breadcrumb items={breadcrumbItems} />
          </S.BreadcrumbWrapper>
          <S.TitleRow>
            <S.ServiceIcon src="/product/product_detail/intro_header_icon.png" alt={name} />
            <S.ServiceName>{name}</S.ServiceName>
          </S.TitleRow>
          <S.ServiceDescription>{description}</S.ServiceDescription>
          <S.ActionButtons>
            {applicationLink && (
              <Button label="제품 신청" href={applicationLink} size="lg" variant="secondary" />
            )}
            {projectLink && (
              <Button label="프로젝트" href={projectLink} size="lg" variant="secondary" />
            )}
          </S.ActionButtons>
        </S.HeroContent>
      </S.HeroSection>
    </S.HeroShell>
  );
};

export default ProductDetailHeroSection;
