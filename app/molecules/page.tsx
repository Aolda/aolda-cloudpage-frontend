'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Accordion from '@/components/molecules/Accordion';
import Breadcrumb from '@/components/molecules/Breadcrumb';
import Filter from '@/components/molecules/Filter';
import ImageCard from '@/components/molecules/ImageCard';
import InPageNavigation from '@/components/molecules/InPageNavigation';
import ItemCard from '@/components/molecules/ItemCard';
import MainMenu from '@/components/molecules/MainMenu';
import MenuCard from '@/components/molecules/MenuCard';
import NoticeItem from '@/components/molecules/NoticeItem';
import Pagination from '@/components/molecules/Pagination';
import Search from '@/components/molecules/Search';
import SectionTitle from '@/components/molecules/SectionTitle';
import ServiceCard from '@/components/molecules/ServiceCard';
import StatCard from '@/components/molecules/StatCard';
import ProblemItem from '@/components/molecules/ProblemItem';
import SolutionCard from '@/components/molecules/SolutionCard';
import DeveloperCard from '@/components/molecules/DeveloperCard';
import SimilarServiceCard from '@/components/molecules/SimilarServiceCard';

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
  font-size: 0.9rem;
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

export default function MoleculesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [filterSelected, setFilterSelected] = useState<string[]>(['favorites']);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (value: string) => {
    console.log('검색:', value);
  };

  const handleFilterChange = (selectedIds: string | string[]) => {
    const idsArray = Array.isArray(selectedIds) ? selectedIds : [selectedIds];
    setFilterSelected(idsArray);
  };

  return (
    <PageContainer>
      <ComponentSection>
        <ComponentTitle>1. Accordion</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> FAQ
        </PageInfo>
        <Accordion
          title="아코디언 컴포넌트 예시"
          content="<p>이것은 아코디언 컴포넌트의 내용입니다. HTML 태그를 사용할 수 있습니다.</p>"
          defaultExpanded={false}
        />
        <Accordion
          title="초기 확장된 아코디언"
          content="<p>이 아코디언은 초기에 확장된 상태로 표시됩니다.</p>"
          defaultExpanded={true}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>2. Breadcrumb</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> NoticeDetail, FAQ
        </PageInfo>
        <Breadcrumb
          items={[
            { label: '홈', href: '/' },
            { label: '제품', href: '/product' },
            { label: '현재 페이지' },
          ]}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>3. Filter (Checkbox Mode)</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product
        </PageInfo>
        <Filter
          mode="checkbox"
          items={[
            { id: 'favorites', label: '즐겨찾기' },
            { id: 'server', label: '서버' },
            { id: 'database', label: '데이터베이스' },
          ]}
          selectedIds={filterSelected}
          onChange={handleFilterChange}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>4. Filter (Tag Mode)</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Notice
        </PageInfo>
        <Filter
          mode="tag"
          items={[
            { id: 'all', label: '전체' },
            { id: 'prohibition', label: '금지' },
            { id: 'warning', label: '경고' },
          ]}
          selectedIds="all"
          onChange={(id) => console.log('선택:', id)}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>5. ImageCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> (현재 미사용)
        </PageInfo>
        <ImageCard
          image="/day1.png"
          alt="예시 이미지"
          title="이미지 카드 제목"
          description="이것은 이미지 카드 컴포넌트의 설명입니다."
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>6. InPageNavigation</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> NoticeDetail
        </PageInfo>
        <InPageNavigation
          prevTitle="이전 항목 제목"
          prevHref="/prev"
          nextTitle="다음 항목 제목"
          nextHref="/next"
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>7. ItemCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <ItemCard
            title="유료과금 없음"
            description="서비스 내 결제가 필요한 부가서비스가 없어요"
            icon="free"
          />
          <ItemCard
            title="인스턴스"
            description="다양한 인스턴스를 제공합니다"
            icon="instances"
          />
          <ItemCard
            title="멤버 관리"
            description="팀 멤버를 쉽게 관리할 수 있습니다"
            icon="members"
          />
        </div>
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>8. MainMenu</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction (Header에서 사용)
        </PageInfo>
        <MainMenu
          items={[
            { label: '제품 소개', href: '/product' },
            { label: '공지사항', href: '/notice' },
            { label: 'FAQ', href: '/FAQ' },
          ]}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>9. MenuCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <MenuCard
          title="아올다,\n처음이신가요?"
          actionLabel="사용 설명서 >"
          href="/useinfo"
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>10. NoticeItem</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Notice
        </PageInfo>
        <NoticeItem
          number={24}
          category="문의요청"
          title="문의요청과 관련된 공지사항 타이틀이에요"
          date="2001.01.28"
          href="/notice/24"
        />
        <NoticeItem
          number={23}
          category="공지"
          title="새로운 기능이 추가되었습니다"
          date="2001.01.27"
          href="/notice/23"
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>11. Pagination</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Notice, FAQ
        </PageInfo>
        <Pagination
          currentPage={currentPage}
          totalPages={7}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>12. Search</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product, Notice, FAQ
        </PageInfo>
        <Search
          placeholder="계열/서비스를 검색해 보세요"
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>13. SectionTitle</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction, Product, Notice
        </PageInfo>
        <SectionTitle
          title="숫자로 보는 아올다"
          description="아올다 클라우드의 주요 통계를 확인해보세요"
          align="center"
          titleColor="rgb(61, 144, 212)"
        />
        <SectionTitle
          title="배경 이미지가 있는 제목"
          backgroundSrc="/day1.png"
          titleColor="#ffffff"
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>14. ServiceCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product
        </PageInfo>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <ServiceCard
            icon="/Logo.svg"
            title="AMDB"
            description="10년 이상의 운영 노하우와 서비스를 제공합니다"
            href="/service/amdb"
          />
          <ServiceCard
            icon="/Logo.svg"
            title="클라우드 서비스"
            description="안정적인 클라우드 인프라를 제공합니다"
            href="/service/cloud"
          />
        </div>
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>15. StatCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <StatCard title="누적 사용자" value="30+ 명" />
          <StatCard title="서비스 수" value="5개" />
          <StatCard title="만족도" value="98%" />
        </div>
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>16. ProblemItem</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product (ProductDetail)
        </PageInfo>
        <ProblemItem
          title="학생 프로젝트의 특징들"
          descriptions={[
            'DAU 저조: 대부분의 학생 프로젝트는 일일 활성 사용자(DAU)가 낮음.',
            '자원 낭비 심각: 실제 사용 시간은 짧지만 서버가 24시간 가동되어 심각한 클라우드 자원 낭비 발생함.',
          ]}
        />
        <ProblemItem
          title="현재 경제적 부담 및 운영의 문제"
          descriptions={[
            '경제적 부담: 개인 사용 시 사용량과 무관한 월 1~2만 원의 고정 비용 발생함.',
            '비효율적 할당: 마을다 방식(검수 후 24시간 VM 할당) 역시 낮은 사용률로 자원 낭비 지속됨.',
          ]}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>17. SolutionCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product (ProductDetail)
        </PageInfo>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <SolutionCard
            title="접근성"
            description="검수 과정 없이 즉시 사용 가능"
          />
          <SolutionCard
            title="효율성"
            description="사용하지 않을 때는 자동 정리로 자원 절약"
          />
          <SolutionCard
            title="경제성"
            description="하나의 VM으로 수십 개의 학생 프로젝트 지원 가능"
          />
          <SolutionCard
            title="교육적 활용"
            description="DB 관련 수업에서 학생들이 바로 실습 가능"
          />
        </div>
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>18. DeveloperCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product (ProductDetail)
        </PageInfo>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <DeveloperCard
            name="정우재 크루"
            info="소프트웨어 22"
          />
          <DeveloperCard
            name="이동훈 크루"
            info="사이버보안 21"
          />
          <DeveloperCard
            name="인승진 크루"
            info="소프트웨어 21"
          />
          <DeveloperCard
            name="한동현 크루"
            info="소프트웨어 21"
          />
        </div>
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>19. SimilarServiceCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product (ProductDetail)
        </PageInfo>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <SimilarServiceCard
            logo="/Logo.svg"
            title="GitHub - openstack/trove"
            description="OpenStack Database As A Service (Trove). Mirror of code maintained at openstack.org."
            href="https://github.com/openstack/trove"
            provider="openstack/trove"
          />
          <SimilarServiceCard
            logo="/Logo.svg"
            title="데이터베이스 관리 시스템 | Amazon Web Services"
            description="Amazon Relational Database Service(RDS)는 Amazon Aurora, PostgreSQL, SQL Server 및 MySQL 등에서 선택한 관계형 데이터베이스..."
            href="https://aws.amazon.com/ko/rds/"
            provider="Amazon Web Services, Inc."
          />
          <SimilarServiceCard
            logo="/Logo.svg"
            title="NAVER CLOUD PLATFORM"
            description="cloud computing services for corporations, IaaS, PaaS, SaaS, with global region and security Technology Certification"
            href="https://www.ncloud.com/"
            provider="NAVER CLOUD PLATFORM"
          />
        </div>
      </ComponentSection>
    </PageContainer>
  );
}

