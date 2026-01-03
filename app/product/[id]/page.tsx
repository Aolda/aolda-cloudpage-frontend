'use client';

import styled from 'styled-components';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Breadcrumb from '@/components/molecules/Breadcrumb';
import ProductDetailHeroSection from '@/components/organisms/ProductDetailHeroSection';
import ProductOverviewSection from '@/components/organisms/ProductOverviewSection';
import ProblemsSection from '@/components/organisms/ProblemsSection';
import SolutionsSection from '@/components/organisms/SolutionsSection';
import DevelopersSection from '@/components/organisms/DevelopersSection';
import SimilarServicesSection from '@/components/organisms/SimilarServicesSection';
import type { Problem } from '@/components/organisms/ProblemsSection';
import type { Solution } from '@/components/organisms/SolutionsSection';
import type { Developer } from '@/components/organisms/DevelopersSection';
import type { SimilarService } from '@/components/organisms/SimilarServicesSection';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Page = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
  flex: 1;
  box-sizing: border-box;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem 0;
`;

const BreadcrumbWrapper = styled.div`
  padding: 1.5rem 0;
`;

// 임시 데이터 - 실제로는 API나 데이터베이스에서 가져와야 합니다
const getProductData = (id: string) => {
  // AMDB 예시 데이터
  if (id === 'amdb' || id.startsWith('amdb')) {
    return {
      name: 'AMDB',
      description:
        'VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.',
      logo: undefined,
      applicationLink: '/apply/amdb',
      projectLink: '/project/amdb',
      overview: undefined,
      problems: [
        {
          title: '학생 프로젝트의 특징들',
          descriptions: [
            'DAU 저조: 대부분의 학생 프로젝트는 일일 활성 사용자(DAU)가 낮음.',
            '자원 낭비 심각: 실제 사용 시간은 짧지만 서버가 24시간 가동되어 심각한 클라우드 자원 낭비 발생함.',
          ],
        },
        {
          title: '현재 경제적 부담 및 운영의 문제',
          descriptions: [
            '경제적 부담: 개인 사용 시 사용량과 무관한 월 1~2만 원의 고정 비용 발생함.',
            '비효율적 할당: 마을다 방식(검수 후 24시간 VM 할당) 역시 낮은 사용률로 자원 낭비 지속됨.',
          ],
        },
        {
          title: '향후 예상되는 문제',
          descriptions: [
            '운영 부담 가중: 사용자 증가 시 프로젝트 검수 부담 증가 및 서버 자원 부족 우려.',
            '성장 저해: 많은 학생들의 자원 대기 및 프로젝트 포기 가능성.',
          ],
        },
      ] as Problem[],
      solutions: [
        {
          title: '접근성',
          description: '검수 과정 없이 즉시 사용 가능',
        },
        {
          title: '효율성',
          description: '사용하지 않을 때는 자동 정리로 자원 절약',
        },
        {
          title: '경제성',
          description: '하나의 VM으로 수십 개의 학생 프로젝트 지원 가능',
        },
        {
          title: '교육적 활용',
          description: 'DB 관련 수업에서 학생들이 바로 실습 가능',
        },
      ] as Solution[],
      developers: [
        {
          name: '정우재 크루',
          info: '소프트웨어 22',
        },
        {
          name: '이동훈 크루',
          info: '사이버보안 21',
        },
        {
          name: '인승진 크루',
          info: '소프트웨어 21',
        },
        {
          name: '한동현 크루',
          info: '소프트웨어 21',
        },
      ] as Developer[],
      similarServices: [
        {
          logo: '/openstack-logo.png',
          title: 'GitHub - openstack/trove',
          description: 'OpenStack Database As A Service (Trove). Mirror of code maintained at openstack.org. openstack/trove',
          href: 'https://github.com/openstack/trove',
          provider: 'openstack/trove',
        },
        {
          logo: '/aws-logo.png',
          title: '데이터베이스 관리 시스템 | 관계형 RDB | Amazon Web Services',
          description:
            'Amazon Relational Database Service(RDS)는 Amazon Aurora, PostgreSQL, SQL Server 및 MySQL 등에서 선택한 관계형 데이터베이스...',
          href: 'https://aws.amazon.com/ko/rds/',
          provider: 'Amazon Web Services, Inc.',
        },
        {
          logo: '/naver-cloud-logo.png',
          title: 'NAVER CLOUD PLATFORM',
          description:
            'cloud computing services for corporations, IaaS, PaaS, SaaS, with global region and security Technology Certification',
          href: 'https://www.ncloud.com/',
          provider: 'NAVER CLOUD PLATFORM',
        },
        {
          logo: '/huggingface-logo.png',
          title: 'Spaces - Hugging Face',
          description: 'Discover amazing ML apps made by the community',
          href: 'https://huggingface.co/spaces',
          provider: 'huggingface Spaces - Hugging Face',
        },
      ] as SimilarService[],
    };
  }

  // 기본 데이터
  return {
    name: id.toUpperCase(),
    description: '제품 설명을 입력하세요.',
    logo: undefined,
    applicationLink: undefined,
    projectLink: undefined,
    overview: undefined,
    problems: [] as Problem[],
    solutions: [] as Solution[],
    developers: [] as Developer[],
    similarServices: [] as SimilarService[],
  };
};

interface ProductDetailPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = params;
  const productData = getProductData(id);

  return (
    <PageWrapper>
      <Page>
        <Header />
        <MainContent>
          <BreadcrumbWrapper>
            <Breadcrumb
              items={[
                { label: '제품소개', href: '/product' },
                { label: productData.name },
              ]}
            />
          </BreadcrumbWrapper>
          <ProductDetailHeroSection
            name={productData.name}
            description={productData.description}
            logo={productData.logo}
            applicationLink={productData.applicationLink}
            projectLink={productData.projectLink}
          />
          <ProductOverviewSection content={productData.overview} />
          {productData.problems.length > 0 && (
            <ProblemsSection problems={productData.problems} />
          )}
          {productData.solutions.length > 0 && (
            <SolutionsSection solutions={productData.solutions} />
          )}
          {productData.developers.length > 0 && (
            <DevelopersSection developers={productData.developers} />
          )}
          {productData.similarServices.length > 0 && (
            <SimilarServicesSection services={productData.similarServices} />
          )}
        </MainContent>
      </Page>
      <Footer />
    </PageWrapper>
  );
}

