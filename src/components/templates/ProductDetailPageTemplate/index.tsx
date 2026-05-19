'use client';

import BaseTemplate from '../BaseTemplate';
import ProductDetailHeroSection from '../../organisms/ProductDetailHeroSection';
import ProductOverviewSection from '../../organisms/ProductOverviewSection';
import ProblemsSection from '../../organisms/ProblemsSection';
import SolutionsSection from '../../organisms/SolutionsSection';
import DevelopersSection from '../../organisms/DevelopersSection';
import SimilarServicesSection from '../../organisms/SimilarServicesSection';
import type { Problem } from '../../organisms/ProblemsSection';
import type { Solution } from '../../organisms/SolutionsSection';
import type { Developer } from '../../organisms/DevelopersSection';
import type { SimilarService } from '../../organisms/SimilarServicesSection';
import * as S from './style';

export interface ProductDetailPageTemplateProps {
  /** 제품 이름 */
  name: string;
  /** 제품 설명 */
  description: string;
  /** Breadcrumb 항목 목록 */
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  /** 제품 신청 링크 */
  applicationLink?: string;
  /** 프로젝트 링크 */
  projectLink?: string;
  /** 제품 개요 내용 */
  overview?: string;
  /** 문제점 목록 */
  problems?: Problem[];
  /** 해결책 목록 */
  solutions?: Solution[];
  /** 개발진 목록 */
  developers?: Developer[];
  /** 유사 서비스 목록 */
  similarServices?: SimilarService[];
}

/**
 * 제품 상세 페이지 템플릿 컴포넌트
 * 
 * 제품 상세 페이지를 구성하는 템플릿입니다.
 * BaseTemplate을 사용하여 Header와 Footer를 포함하고,
 * 제품 상세 정보를 표시합니다.
 *
 * @param {ProductDetailPageTemplateProps} props - 제품 상세 페이지 템플릿 props
 * 
 * @example
 * <ProductDetailPageTemplate
 *   name="AMDB"
 *   description="VM 대신 관리형 DB 서비스를 제공해서..."
 *   applicationLink="/apply/amdb"
 *   projectLink="/project/amdb"
 *   problems={[...]}
 *   solutions={[...]}
 *   developers={[...]}
 *   similarServices={[...]}
 * />
 * 
 * @returns {JSX.Element} 제품 상세 페이지 템플릿 요소
 */
const ProductDetailPageTemplate = ({
  name,
  description,
  breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '제품소개', href: '/product' },
    { label: name },
  ],
  applicationLink,
  projectLink,
  overview,
  problems = [],
  solutions = [],
  developers = [],
  similarServices = [],
}: ProductDetailPageTemplateProps) => {
  return (
    <BaseTemplate>
      <S.MainContent>
        <ProductDetailHeroSection
          name={name}
          description={description}
          breadcrumbItems={breadcrumbItems}
          applicationLink={applicationLink}
          projectLink={projectLink}
        />
        <S.ContentWrapper>
          <ProductOverviewSection content={overview} />
          {problems.length > 0 && <ProblemsSection problems={problems} />}
          {solutions.length > 0 && <SolutionsSection solutions={solutions} />}
          {developers.length > 0 && <DevelopersSection developers={developers} />}
          {similarServices.length > 0 && (
            <SimilarServicesSection services={similarServices} />
          )}
        </S.ContentWrapper>
      </S.MainContent>
    </BaseTemplate>
  );
};

export default ProductDetailPageTemplate;

