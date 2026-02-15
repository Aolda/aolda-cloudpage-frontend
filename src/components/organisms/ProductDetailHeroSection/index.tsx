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
 * 
 * 제품 상세 페이지 상단의 히어로 섹션입니다.
 * 어두운 파란색 배경에 서비스 로고, 설명, 액션 버튼을 표시합니다.
 *
 * @param {ProductDetailHeroSectionProps} props - 히어로 섹션 props
 * @param {string} props.name - 서비스 이름
 * @param {string} props.description - 서비스 설명
 * @param {string} [props.logo] - 서비스 로고 이미지 경로
 * @param {string} [props.applicationLink] - 제품 신청 링크
 * @param {string} [props.projectLink] - 프로젝트 링크
 * 
 * @example
 * <ProductDetailHeroSection
 *   name="AMDB"
 *   description="VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다."
 *   applicationLink="/apply"
 *   projectLink="/project"
 * />
 * 
 * @returns {JSX.Element} 히어로 섹션 요소
 */
const ProductDetailHeroSection = ({
  name,
  description,
  breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '제품소개', href: '/product' },
    { label: name },
  ],
  applicationLink,
  projectLink,
}: ProductDetailHeroSectionProps) => {
  return (
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
  );
};

export default ProductDetailHeroSection;

