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
  name: string;
  description: string;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  applicationLink?: string;
  projectLink?: string;
  overview?: string;
  problems?: Problem[];
  solutions?: Solution[];
  developers?: Developer[];
  similarServices?: SimilarService[];
}

const ProductDetailPageTemplate = ({
  name,
  description,
  breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '제품 소개', href: '/product' },
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
  const hasPrimaryContent =
    Boolean(overview) || problems.length > 0 || solutions.length > 0;

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
          {hasPrimaryContent && (
            <S.PrimaryGroup>
              <ProductOverviewSection content={overview} />
              {problems.length > 0 && <ProblemsSection problems={problems} />}
              {solutions.length > 0 && <SolutionsSection solutions={solutions} />}
            </S.PrimaryGroup>
          )}
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
