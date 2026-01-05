'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import IntroSection from '@/components/organisms/IntroSection';
import NumbersSection from '@/components/organisms/NumbersSection';
import ServiceInfoSection from '@/components/organisms/ServiceInfoSection';
import PartnersSection from '@/components/organisms/PartnersSection';
import ValuesSection from '@/components/organisms/ValuesSection';
import MeetSection from '@/components/organisms/MeetSection';
import ProductHeroSection from '@/components/organisms/ProductHeroSection';
import ProductList from '@/components/organisms/ProductList';
import ProductDetailHeroSection from '@/components/organisms/ProductDetailHeroSection';
import ProductOverviewSection from '@/components/organisms/ProductOverviewSection';
import SolutionsSection from '@/components/organisms/SolutionsSection';
import SimilarServicesSection from '@/components/organisms/SimilarServicesSection';
import NoticeHeroSection from '@/components/organisms/NoticeHeroSection';
import NoticeFilters from '@/components/organisms/NoticeFilters';
import NoticeList from '@/components/organisms/NoticeList';
import NoticeDetailContent from '@/components/organisms/NoticeDetailContent';
import FAQHeroSection from '@/components/organisms/FAQHeroSection';
import FAQCategoryFilter from '@/components/organisms/FAQCategoryFilter';
import FAQList from '@/components/organisms/FAQList';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ComponentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
`;

const ComponentTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
  border-bottom: 2px solid #3d90d4;
  padding-bottom: 0.5rem;
`;

const PageInfo = styled.div`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #f5f5f5;
  border-radius: 4px;
  
  strong {
    color: #3d90d4;
    font-weight: 600;
  }
`;

export default function OrganismsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [filterSelected, setFilterSelected] = useState<string>('all');
  const [categorySelected, setCategorySelected] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (value: string) => {
    console.log('검색:', value);
  };

  const handleFilterChange = (filterId: string) => {
    setFilterSelected(filterId);
  };

  const handleCategoryChange = (categoryId: string) => {
    setCategorySelected(categoryId);
  };

  return (
    <PageContainer>
      {/* 공통 컴포넌트 */}
      <ComponentSection>
        <ComponentTitle>1. Header</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> 모든 페이지 (공통)
        </PageInfo>
        <Header />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>2. Footer</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> 모든 페이지 (공통)
        </PageInfo>
        <Footer />
      </ComponentSection>

      {/* Intro 페이지 관련 */}
      <ComponentSection>
        <ComponentTitle>3. IntroSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Intro (Introduction)
        </PageInfo>
        <IntroSection />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>4. NumbersSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Intro (Introduction)
        </PageInfo>
        <NumbersSection />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>5. ServiceInfoSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Intro (Introduction)
        </PageInfo>
        <ServiceInfoSection />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>6. PartnersSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Intro (Introduction)
        </PageInfo>
        <PartnersSection />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>7. ValuesSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Intro (Introduction)
        </PageInfo>
        <ValuesSection />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>8. MeetSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Intro (Introduction)
        </PageInfo>
        <MeetSection />
      </ComponentSection>

      {/* Product 페이지 관련 */}
      <ComponentSection>
        <ComponentTitle>9. ProductHeroSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product
        </PageInfo>
        <ProductHeroSection
          title="아울다 Service"
          description="아울다에서 제품은 기획서에 따라 진행된 각 프로젝트의 최종 성과물을 의미합니다."
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>10. ProductList</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product
        </PageInfo>
        <ProductList
          searchTerm={searchValue}
          onSearchChange={setSearchValue}
          onSearch={handleSearch}
          services={[
            {
              icon: '/product/product_serviceCard.png',
              title: 'AMDB',
              description: 'VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.',
              href: '/product/amdb',
            },
            {
              icon: '/product/product_serviceCard.png',
              title: 'AMDB',
              description: 'VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.',
              href: '/product/amdb',
            },
            {
              icon: '/product/product_serviceCard.png',
              title: 'AMDB',
              description: 'VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.',
              href: '/product/amdb',
            },
            {
              icon: '/product/product_serviceCard.png',
              title: 'AMDB',
              description: 'VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.',
              href: '/product/amdb',
            },
            {
              icon: '/product/product_serviceCard.png',
              title: 'AMDB',
              description: 'VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.',
              href: '/product/amdb',
            },
            {
              icon: '/product/product_serviceCard.png',
              title: 'AMDB',
              description: 'VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.',
              href: '/product/amdb',
            },
          ]}
          sectionTitle="즐겨찾기"
        />
      </ComponentSection>

      {/* ProductDetail 페이지 관련 */}
      <ComponentSection>
        <ComponentTitle>11. ProductDetailHeroSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <ProductDetailHeroSection
          name="AMDB"
          description="VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다."
          logo="/Logo.svg"
          applicationLink="/apply"
          projectLink="/project"
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>12. ProductOverviewSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <ProductOverviewSection content="제품 개요 내용이 여기에 표시됩니다. 이 섹션은 제품의 전반적인 개요를 설명합니다." />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>13. SolutionsSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <SolutionsSection
          solutions={[
            {
              title: '접근성',
              description: '검수 과정 없이 즉시 사용 가능',
            },
            {
              title: '효율성',
              description: '사용하지 않을 때는 자동 정리로 자원 절약',
            },
            {
              title: '확장성',
              description: 'DAU가 낮은 여러 프로젝트가 자원을 효율적으로 공유',
            },
            {
              title: '경제성',
              description: '하나의 VM으로 수십 개의 학생 프로젝트 지원 가능',
            },
            {
              title: '교육적 활용',
              description: 'DB 관련 수업에서 학생들이 바로 실습 가능',
            },
          ]}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>14. SimilarServicesSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <SimilarServicesSection
          services={[
            {
              logo: '/Logo.svg',
              title: 'GitHub - openstack/trove',
              description: 'OpenStack Database As A Service (Trove). Mirror of code maintained at openstack.org.',
              href: 'https://github.com/openstack/trove',
              provider: 'openstack/trove',
            },
            {
              logo: '/Logo.svg',
              title: '데이터베이스 관리 시스템 | 관계형 RDS | Amazon Web Services',
              description: 'Amazon Relational Database Service(RDS)는 Amazon Aurora, PostgreSQL, SQL Server 및 MySQL 등에서 선택한 관계형 데이터베이스...',
              href: 'https://aws.amazon.com/ko/rds/',
              provider: 'Amazon Web Services, Inc.',
            },
            {
              logo: '/Logo.svg',
              title: 'NAVER CLOUD PLATFORM',
              description: 'cloud computing services for corporations, IaaS, PaaS, SaaS, with global region and security Technology Certification',
              href: 'https://www.ncloud.com/',
              provider: 'NAVER CLOUD PLATFORM',
            },
          ]}
        />
      </ComponentSection>

      {/* Notice 페이지 관련 */}
      <ComponentSection>
        <ComponentTitle>15. NoticeHeroSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Notice
        </PageInfo>
        <NoticeHeroSection
          title="아올다에서 공지사항을 확인해 보세요"
          searchTerm={searchValue}
          onSearchChange={setSearchValue}
          onSearch={handleSearch}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>16. NoticeFilters</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Notice
        </PageInfo>
        <NoticeFilters
          filters={[
            { id: 'all', label: '전체' },
            { id: 'notice', label: '공지' },
            { id: 'request', label: '문의요청' },
            { id: 'operation', label: '운영' },
          ]}
          selectedFilter={filterSelected}
          onFilterChange={handleFilterChange}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>17. NoticeList</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Notice
        </PageInfo>
        <NoticeList
          totalCount={24}
          onWriteClick={() => console.log('작성하기 클릭')}
          filterOptions={[
            { id: 'all', label: '전체' },
            { id: 'notice', label: '공지' },
            { id: 'request', label: '문의요청' },
            { id: 'operation', label: '운영' },
          ]}
          selectedFilter={filterSelected}
          onFilterChange={handleFilterChange}
          notices={[
            {
              number: 2,
              category: '문의요청',
              title: '문의요청과 관련된 공지사항 타이틀이에요',
              date: '9999.99.99',
              href: '/notice/2',
            },
            {
              number: 1,
              category: '공지',
              title: '새로운 기능이 추가되었습니다',
              date: '9999.99.99',
              href: '/notice/1',
            },
          ]}
          currentPage={currentPage}
          totalPages={7}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </ComponentSection>

      {/* NoticeDetail 페이지 관련 */}
      <ComponentSection>
        <ComponentTitle>18. NoticeDetailContent</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> NoticeDetail
        </PageInfo>
        <NoticeDetailContent
          data={{
            number: 2,
            title: '문의요청과 관련된 공지사항 타이틀이에요',
            author: '관리자',
            date: '9999.99.99',
            views: 128,
            content: '<p>이것은 공지사항의 본문 내용입니다. HTML 태그를 사용할 수 있습니다.</p><p>여러 문단으로 구성된 내용을 표시할 수 있습니다.</p>',
            attachments: [
              { name: '첨부파일1.pdf', url: '/attachments/file1.pdf' },
              { name: '첨부파일2.docx', url: '/attachments/file2.docx' },
            ],
            prevTitle: '이전 공지사항 제목',
            prevHref: '/notice/1',
            nextTitle: '다음 공지사항 제목',
            nextHref: '/notice/3',
          }}
          onListClick={() => console.log('목록 버튼 클릭')}
        />
      </ComponentSection>

      {/* FAQ 페이지 관련 */}
      <ComponentSection>
        <ComponentTitle>19. FAQHeroSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> FAQ
        </PageInfo>
        <FAQHeroSection
          searchTerm={searchValue}
          onSearchChange={setSearchValue}
          onSearch={handleSearch}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>20. FAQCategoryFilter</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> FAQ
        </PageInfo>
        <FAQCategoryFilter
          categories={[
            { id: 'all', label: '전체' },
            { id: 'account', label: '계정' },
            { id: 'service', label: '서비스' },
            { id: 'billing', label: '결제' },
          ]}
          selectedCategory={categorySelected}
          onCategoryChange={handleCategoryChange}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>21. FAQList</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> FAQ
        </PageInfo>
        <FAQList
          faqs={[
            {
              title: 'FAQ Question',
              content: '<p>FAQ Question.</p>',
              defaultExpanded: false,
              icon: '/FAQ/FAQ_accordion_icon.png',
            },
            {
              title: 'FAQ Question',
              content: '<p>FAQ Question.</p>',
              defaultExpanded: true,
              icon: '/FAQ/FAQ_accordion_icon.png',
            },
          ]}
          categoryOptions={[
            { id: 'all', label: '전체' },
            { id: 'account', label: '계정' },
            { id: 'service', label: '서비스' },
          ]}
          selectedCategory={categorySelected}
          onCategoryChange={handleCategoryChange}
          currentPage={currentPage}
          totalPages={5}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </ComponentSection>
    </PageContainer>
  );
}
