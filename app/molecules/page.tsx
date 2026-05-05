'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Accordion from '@/components/molecules/Accordion';
import Breadcrumb from '@/components/molecules/Breadcrumb';
import CheckboxFilter from '@/components/molecules/CheckboxFilter';
import TagFilter from '@/components/molecules/TagFilter';
import ImageCard from '@/components/molecules/ImageCard';
import InPageNavigation from '@/components/molecules/InPageNavigation';
import ItemCard from '@/components/molecules/ItemCard';
import MainMenu from '@/components/molecules/MainMenu';
import MenuCard from '@/components/molecules/MenuCard';
import NoticeItem from '@/components/molecules/NoticeItem';
import Pagination from '@/components/molecules/Pagination';
import Search from '@/components/molecules/Search';
import IntroSectionTitle from '@/components/molecules/IntroSectionTitle';
import ServiceCard from '@/components/molecules/ServiceCard';
import StatCard from '@/components/molecules/StatCard';
import ProblemItem from '@/components/molecules/ProblemItem';
import SolutionCard from '@/components/molecules/SolutionCard';
import DeveloperCard from '@/components/molecules/DeveloperCard';
import SimilarServiceCard from '@/components/molecules/SimilarServiceCard';
import ImageTitle from '@/components/atoms/ImageTitle';
import HeroBanner from '@/components/molecules/HeroBanner';

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
  border: 1px solid
    ${({ theme }) => (theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : '#e0e0e0')};
  border-radius: 8px;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'transparent' : '#fff'};
`;

const ComponentTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : '#333')};
  border-bottom: 2px solid #3d90d4;
  padding-bottom: 0.5rem;
`;

const PageInfo = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : '#666')};
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'transparent' : '#f5f5f5'};
  border: 1px solid
    ${({ theme }) => (theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : 'transparent')};
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

  const handleCheckboxFilterChange = (selectedIds: string[]) => {
    setFilterSelected(selectedIds);
  };

  const [tagFilterSelected, setTagFilterSelected] = useState<string>('all');

  return (
    <PageContainer>
      <ComponentSection>
        <ComponentTitle>0. MainMenu</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction 
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
        <ComponentTitle>1. HeroBanner</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction, Product
        </PageInfo>
        <HeroBanner
          backgroundSrc="/intro/intro_heroBanner.png"
          title={
            <>
              아주인의 꿈을 펼칠  
              <br />
              파란하늘 속 작은구름
            </>
          }
          textPosition="left-top"
          textColor="#ffffff"
          overlayOpacity={0.4}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>2. MenuCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <MenuCard
          title={
            <>
              아올다,
              <br />
              처음이신가요?
            </>
          }
          actionLabel="사용 가이드"
          href="/useinfo"
        />
        <MenuCard
          title={
            <>
              저희의 활동을
              <br />
              모아봤어요!
            </>
          }
          actionLabel="테크 블로그"
          href="/techblog"
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>3. IntroSectionTitle</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction, Product, Notice
        </PageInfo>
        <IntroSectionTitle
          title="숫자로 보는 아올다"
          align="center"
          showTopBar={true}
          titleColor="rgb(3, 3, 3)"
        />
        <br></br>
        <br></br>
        <IntroSectionTitle
          title={
            <>
              자유롭게 꿈을 펼치기 위해
              <br />
              아올다가 없앤{' '}
              <span style={{ color: 'rgb(61, 144, 212)' }}>불편함 3가지</span>
            </>
          }
          description={
            <>
              아주인 모두가 자유롭게 꿈을 펼칠 수 있도록
              <br />
              아래 3가지를 없앴어요
            </>
          }
          align="center"
          showTopBar={true}
          titleColor="rgb(3, 3, 3)"
        />
        <br></br>
        <br></br>
        <IntroSectionTitle
          title={
            <>
              자유롭게 꿈을 펼치기 위해
              <br />
              모두 함계하는는{' '}
              <span style={{ color: 'rgb(233, 23, 23)' }}>약속 3가지</span>
            </>
          }
          description={
            <>
              아주인 모두가 자유롭게 꿈을 펼칠 수 있도록
              <br />
              아래 3가지는 반드시 지켜주세요!
            </>
          }
          align="center"
          showTopBar={true}
          titleColor="rgb(3, 3, 3)"
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>4. StatCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <StatCard title="누적 사용자" value={12345} unit="명" />
          <StatCard title="누적 프로젝트 수" value={1234} unit="개" />
          <StatCard title="누적 블로깅" value={1234} unit="%" />
        </div>
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>5. ImageCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap' }}>
          <ImageCard
            image="/intro/intro_used.png"
            alt="아주대학교 총학생회"
            title="아주대학교 총학생회"
            description="총학생회 공식홈페이지 운영"
            period="2024-1 ~ 2025-1"
          />
          <ImageCard
            image="/intro/intro_used.png"
            alt="APIA"
            title="APIA"
            description="ajou.app 서비스 운영"
          />
          <ImageCard
            image="/intro/intro_used.png"
            alt="파란학기제"
            title="파란학기제"
            description="파란학기 프로젝트 서비스 배포지원"
          />
        </div>
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>6. ItemCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Introduction
        </PageInfo>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <ItemCard
            title="유료과금 없음"
            description="서비스 내 결제가 필요한 부가서비스가 없어요"
            icon="/intro/intro_inconv1.png"
          />
          <ItemCard
            title="인스턴스 개수제한 없음"
            description="기본 10개, 추가 인스턴스가 필요한 경우 요청에 따라 원하는 만큼 가용량을 설정해드려요"
            icon="/intro/intro_inconv2.png"
          />
          <ItemCard
            title="멤버 관리"
            description="팀 멤버를 쉽게 관리할 수 있습니다"
            icon="/intro/intro_inconv3.png"
          />
        </div>
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>7. ImageTitle(atom으로 전환)</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product, ProductDetail
        </PageInfo>
        <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
        <ImageTitle
            icon="/product/main_title_icon.png"
            title="즐겨찾기"
            alt="즐겨찾기 아이콘"
          />
          <ImageTitle
            icon="/product/product_detail/main_title_icon.png"
            title="제품 개요"
            alt="제품 개요 아이콘"
          />
          <ImageTitle
            icon="/product/product_detail/title_icon1.png"
            title="문제점"
            alt="문제점 아이콘"
          />
          <ImageTitle
            icon="/product/product_detail/title_icon2.png"
            title="해결책"
            alt="해결책 아이콘"
          />
          <ImageTitle
            icon="/product/product_detail/title_icon3.png"
            title="개발진"
            alt="개발진 아이콘"
          />
        </div>
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>8. ServiceCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product
        </PageInfo>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <ServiceCard
            icon="/product/product_serviceCard.png"
            title="AMDB"
            description="VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다."
            href="/service/amdb"
          />
          <ServiceCard
            icon="/product/product_serviceCard.png"
            title="AMDB"
            description="VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다."
            href="/service/amdb"
          />
          <ServiceCard
            icon="/product/product_serviceCard.png"
            title="AMDB"
            description="VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다."
            href="/service/amdb"
          />
          <ServiceCard
            icon="/product/product_serviceCard.png"
            title="AMDB"
            description="VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다."
            href="/service/amdb"
          />
          <ServiceCard
            icon="/product/product_serviceCard.png"
            title="AMDB"
            description="VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다."
            href="/service/amdb"
          />
          <ServiceCard
            icon="/product/product_serviceCard.png"
            title="AMDB"
            description="VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다."
            href="/service/amdb"
          />
        </div>
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>9. DeveloperCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <DeveloperCard
            name="정우재"
            department="소프트웨어"
            year="22"
            icon="/product/product_detail/product_detail_developerCard.png"
          />
          <DeveloperCard
            name="이동훈"
            department="사이버보안"
            year="21"
            icon="/product/product_detail/product_detail_developerCard.png"
          />
          <DeveloperCard
            name="인승진"
            department="소프트웨어"
            year="21"
            icon="/product/product_detail/product_detail_developerCard.png"
          />
          <DeveloperCard
            name="한동현"
            department="소프트웨어"
            year="21"
            icon="/product/product_detail/product_detail_developerCard.png"
          />
        </div>
      </ComponentSection>


      <ComponentSection>
        <ComponentTitle>10. Checkbox Filter</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product
        </PageInfo>
        <CheckboxFilter
          items={[
            { id: 'favorites', label: '즐겨찾기' },
            { id: 'server', label: '서버' },
            { id: 'database', label: '데이터베이스' },
          ]}
          selectedIds={filterSelected}
          onChange={handleCheckboxFilterChange}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>11. ProblemItem(이건 뺼지 고민중)</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <ProblemItem
          title="1. 학생 프로젝트의 특징들"
          descriptions={[
            'DAU 저조: 대부분의 학생 프로젝트는 일일 활성 사용자(DAU)가 낮음.',
            '비효율적 할당: 아올다 방식(검수 후 24시간 VM 할당) 역시 낮은 사용률로 자원 낭비 지속됨.',
          ]}
        />
        <ProblemItem
          title="2. 현재 경제적 부담 및 운영의 문제"
          descriptions={[
            '경제적 부담: 개인 사용 시 사용량과 무관한 월 1~2만 원의 고정 비용 발생함.',
            '비효율적 할당: 아올다 방식(검수 후 24시간 VM 할당) 역시 낮은 사용률로 자원 낭비 지속됨.',
          ]}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>12. SolutionCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <SolutionCard
            title="접근성"
            description="검수 과정 없이 즉시 사용 가능"
          />
          <SolutionCard
            title="효율성"
            description="사용하지 않을 때는 자동 정리로 자원 절약"
          />
          <SolutionCard
            title="확장성"
            description="DAU가 낮은 여러 프로젝트가 자원을 효율적으로 공유"
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
        <ComponentTitle>13. SimilarServiceCard</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> ProductDetail
        </PageInfo>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <SimilarServiceCard
            title="GitHub - openstack/trove"
            description="OpenStack Database As A Service (Trove). Mirror of code maintained at openstack.org."
            href="https://github.com/openstack/trove"
            provider="openstack/trove"
          />
          <SimilarServiceCard
            title="데이터베이스 관리 시스템 | 관계형 RDS | Amazon Web Services"
            description="Amazon Relational Database Service(RDS)는 Amazon Aurora, PostgreSQL, SQL Server 및 MySQL 등에서 선택한 관계형 데이터베이스..."
            href="https://aws.amazon.com/ko/rds/"
            provider="Amazon Web Services, Inc."
          />
          <SimilarServiceCard
            title="NAVER CLOUD PLATFORM"
            description="cloud computing services for corporations, IaaS, PaaS, SaaS, with global region and security Technology Certification"
            href="https://www.ncloud.com/"
            provider="NAVER CLOUD PLATFORM"
          />

        </div>
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>14. Breadcrumb</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product, ProductDetail, Notice, NoticeDetail, FAQ
        </PageInfo>
        <Breadcrumb
          items={[
            { label: '홈', href: '/' },
            { label: '제품소개', href: '/product' },
            { label: 'AMDB', href: '/product/amdb'},
          ]}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>15. Tag Filter(색깔이 파란색이 더 어울리는 것 같아 바꿈)</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Notice
        </PageInfo>
        <TagFilter
          items={[
            { id: 'all', label: '전체' },
            { id: 'notice', label: '공지' },
            { id: 'request', label: '문의요청' },
            { id: 'operation', label: '운영' },
          ]}
          selectedId={tagFilterSelected}
          onChange={(id) => {
            setTagFilterSelected(id);
            console.log('선택:', id);
          }}
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>16. Pagination</ComponentTitle>
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
        <ComponentTitle>17. NoticeItem</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Notice
        </PageInfo>
        <NoticeItem
          number={2}
          category="문의요청"
          title="문의요청과 관련된 공지사항 타이틀이에요"
          date="9999.99.99"
          href="/notice/2"
        />
        <NoticeItem
          number={1}
          category="공지"
          title="새로운 기능이 추가되었습니다"
          date="9999.99.99"
          href="/notice/1"
        />
      </ComponentSection>

      <ComponentSection>
        <ComponentTitle>18. InPageNavigation</ComponentTitle>
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
        <ComponentTitle>19. Accordion</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> FAQ
        </PageInfo>
        <Accordion
          title="FAQ Question"
          content="<p>FAQ Question.</p>"
          defaultExpanded={false}
          icon="/FAQ/FAQ_accordion_icon.png"
        />
        <Accordion
          title="FAQ Question"
          content="<p>FAQ Question.</p>"
          defaultExpanded={true}
          icon="/FAQ/FAQ_accordion_icon.png"
        />
      </ComponentSection>

      
      <ComponentSection>
        <ComponentTitle>20. Search</ComponentTitle>
        <PageInfo>
          <strong>사용 페이지:</strong> Product, Notice, FAQ
        </PageInfo>
        <Search
          placeholder="제품품/서비스를 검색해 보세요"
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
        />
        <Search
          placeholder="공지사항을 검색해 보세요"
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
        />
        <Search
          placeholder="FAQ를 검색해 보세요"
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
        />
      </ComponentSection>
    </PageContainer>
  );
}
