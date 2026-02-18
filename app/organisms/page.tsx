'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import IntroSection from '@/components/organisms/IntroSection';
import MeetSection from '@/components/organisms/MeetSection';
import NumbersSection from '@/components/organisms/NumbersSection';
import PartnersSection from '@/components/organisms/PartnersSection';
import ValuesSection from '@/components/organisms/ValuesSection';
import ServiceInfoSection from '@/components/organisms/ServiceInfoSection';
import ProductHeroSection from '@/components/organisms/ProductHeroSection';
import ProductList from '@/components/organisms/ProductList';
import ProductDetailHeroSection from '@/components/organisms/ProductDetailHeroSection';
import ProductOverviewSection from '@/components/organisms/ProductOverviewSection';
import ProblemsSection from '@/components/organisms/ProblemsSection';
import SolutionsSection from '@/components/organisms/SolutionsSection';
import DevelopersSection from '@/components/organisms/DevelopersSection';
import SimilarServicesSection from '@/components/organisms/SimilarServicesSection';
import SideNavigation from '@/components/organisms/SideNavigation';
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
  const [filterSelected, setFilterSelected] = useState<string[]>(['favorites']);
  const [tagFilterSelected, setTagFilterSelected] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [faqCategory, setFaqCategory] = useState<string>('all');
  const [noticeFilter, setNoticeFilter] = useState<string>('all');

  const handleSearch = (value: string) => {
    console.log('검색:', value);
  };

  return (
    <PageContainer>
      <ComponentSection>
        <ComponentTitle>1. Header</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> 모든 페이지
        </PageInfo>
        <Header />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>2. Footer</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> 모든 페이지
        </PageInfo>
        <Footer />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>3. IntroSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <IntroSection />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>4. MeetSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <MeetSection />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>5. NumbersSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <NumbersSection />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>6. PartnersSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <PartnersSection />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>7. ValuesSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <ValuesSection />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>8. ServiceInfoSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <ServiceInfoSection />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>9. ProductHeroSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product
        </PageInfo>
        <ProductHeroSection
          title="아올다 Service"
          description="아올다에서 제품은 기획서에 따라 진행된 각 프로젝트의 최종 성과물을 의미합니다."
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
              icon: "/product/product_serviceCard.png",
              title: "AMDB",
              description: "VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.",
              href: "/product/amdb"
            },
            {
              icon: "/product/product_serviceCard.png",
              title: "AMMS",
              description: "관리형 메시징 서비스를 제공합니다.",
              href: "/product/amms"
            },
            {
              icon: "/product/product_serviceCard.png",
              title: "ARISE",
              description: "클라우드 인프라 서비스를 제공합니다.",
              href: "/product/arise"
            },
          ]}
          sectionTitle="즐겨찾기"
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>11. SideNavigation</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product
        </PageInfo>
        <SideNavigation
          categories={[
            { id: 'favorites', label: '즐겨찾기' },
            { id: 'server', label: '서버' },
            { id: 'database', label: '데이터베이스' },
          ]}
          selectedCategories={filterSelected}
          onCategoryChange={setFilterSelected}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>12. ProductDetailHeroSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <ProductDetailHeroSection
          name="AMDB"
          description="VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다."
          applicationLink="/apply"
          projectLink="/project"
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>13. ProductOverviewSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <ProductOverviewSection
          content="AMDB는 아주대학교 학생들을 위한 관리형 데이터베이스 서비스입니다. VM 대신 DB 서비스를 제공하여 자원을 효율적으로 사용할 수 있습니다."
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>14. ProblemsSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <ProblemsSection
          problems={[
            {
              title: "1. 학생 프로젝트의 특징들",
              descriptions: [
                "DAU 저조: 대부분의 학생 프로젝트는 일일 활성 사용자(DAU)가 낮음.",
                "자원 낭비 심각: 실제 사용 시간은 짧지만 서버가 24시간 가동되어 심각한 클라우드 자원 낭비 발생함."
              ]
            },
            {
              title: "현재 경제적 부담 및 운영의 문제",
              descriptions: [
                "경제적 부담: 개인 사용 시 사용량과 무관한 월 1~2만 원의 고정 비용 발생함.",
                "비효율적 할당: 아올다 방식(검수 후 24시간 VM 할당) 역시 낮은 사용률로 자원 낭비 지속됨."
              ]
            }
          ]}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>15. SolutionsSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <SolutionsSection
          solutions={[
            { title: "접근성", description: "검수 과정 없이 즉시 사용 가능" },
            { title: "효율성", description: "사용하지 않을 때는 자동 정리로 자원 절약" },
            { title: "확장성", description: "DAU가 낮은 여러 프로젝트가 자원을 효율적으로 공유" },
            { title: "경제성", description: "하나의 VM으로 수십 개의 학생 프로젝트 지원 가능" }
          ]}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>16. DevelopersSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <DevelopersSection
          developers={[
            { name: "정우재 크루", info: "소프트웨어 22" },
            { name: "이동훈 크루", info: "사이버보안 21" },
            { name: "인승진 크루", info: "소프트웨어 21" },
            { name: "한동현 크루", info: "소프트웨어 21" }
          ]}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>17. SimilarServicesSection</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <SimilarServicesSection
          services={[
            {
              logo: "/main_logo.png",
              title: "GitHub - openstack/trove",
              description: "OpenStack Database As A Service (Trove)",
              href: "https://github.com/openstack/trove",
              provider: "openstack"
            },
            {
              logo: "/main_logo.png",
              title: "Amazon RDS",
              description: "Amazon Relational Database Service",
              href: "https://aws.amazon.com/ko/rds/",
              provider: "Amazon Web Services"
            }
          ]}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>18. NoticeHeroSection</ComponentTitle>
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
        <ComponentTitle>19. NoticeFilters</ComponentTitle>
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
          selectedFilter={noticeFilter}
          onFilterChange={setNoticeFilter}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>20. NoticeList</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Notice
        </PageInfo>
        <NoticeList
          totalCount={24}
          onWriteClick={() => console.log('작성하기')}
          filterOptions={[
            { id: 'all', label: '전체' },
            { id: 'notice', label: '공지' },
            { id: 'request', label: '문의요청' },
          ]}
          selectedFilter={noticeFilter}
          onFilterChange={setNoticeFilter}
          notices={[
            {
              number: 24,
              category: "문의요청",
              title: "문의요청과 관련된 공지사항 타이틀이에요",
              date: "9999.99.99",
              href: "/notice/24"
            },
            {
              number: 23,
              category: "공지",
              title: "새로운 기능이 추가되었습니다",
              date: "9999.99.98",
              href: "/notice/23"
            }
          ]}
          currentPage={currentPage}
          totalPages={7}
          onPageChange={setCurrentPage}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>21. NoticeDetailContent</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> NoticeDetail
        </PageInfo>
        <NoticeDetailContent
          data={{
            number: 24,
            title: "문의요청과 관련된 공지사항 타이틀이에요",
            author: "관리자",
            date: "9999.99.99",
            views: 128,
            content: "<p>이것은 공지사항의 본문 내용입니다. HTML 태그를 사용할 수 있습니다.</p><p>여러 줄의 내용을 표시할 수 있습니다.</p>",
            prevTitle: "이전 공지사항",
            prevHref: "/notice/23",
            nextTitle: "다음 공지사항",
            nextHref: "/notice/25"
          }}
          onListClick={() => console.log('목록으로')}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>22. FAQHeroSection</ComponentTitle>
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
        <ComponentTitle>23. FAQCategoryFilter</ComponentTitle>
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
          selectedCategory={faqCategory}
          onCategoryChange={setFaqCategory}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>24. FAQList</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> FAQ
        </PageInfo>
        <FAQList
          faqs={[
            {
              title: "FAQ 질문 1",
              content: "<p>FAQ 답변 1입니다.</p>",
              defaultExpanded: false
            },
            {
              title: "FAQ 질문 2",
              content: "<p>FAQ 답변 2입니다.</p>",
              defaultExpanded: true
            },
            {
              title: "FAQ 질문 3",
              content: "<p>FAQ 답변 3입니다.</p>",
              defaultExpanded: false
            }
          ]}
          categoryOptions={[
            { id: 'all', label: '전체' },
            { id: 'account', label: '계정' },
            { id: 'service', label: '서비스' },
          ]}
          selectedCategory={faqCategory}
          onCategoryChange={setFaqCategory}
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
        />
      </ComponentSection>
    </PageContainer>
  );
}

