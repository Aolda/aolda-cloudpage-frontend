import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';
import NoticeHeroSection from '../../components/organisms/NoticeHeroSection';
import NoticeList from '../../components/organisms/NoticeList';
import type { NoticeItemProps } from '../../components/molecules/NoticeItem';
import * as S from './style';

const Page = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
`;

/**
 * 공지사항 페이지
 * 
 * 아울다의 공지사항을 확인할 수 있는 페이지입니다.
 * 검색, 필터링, 페이지네이션 기능을 제공합니다.
 */
const NoticePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // 필터 옵션
  const filterOptions = [
    { id: 'all', label: '전체' },
    { id: 'prohibition', label: '금지' },
    { id: 'inquiry', label: '문의요청' },
    { id: 'model', label: '모델' },
  ];

  // 공지사항 목록 (예시 데이터)
  const notices: NoticeItemProps[] = [
    {
      number: 24,
      category: '문의요청',
      title: '문의요청과 관련된 공지사항 타이틀이에요',
      date: '2001.01.28',
      href: '/notice/24',
    },
    {
      number: 23,
      category: '문의요청',
      title: '문의요청과 관련된 공지사항 타이틀이에요',
      date: '2001.01.27',
      href: '/notice/23',
    },
    {
      number: 22,
      category: '금지',
      title: '금지 관련 공지사항 타이틀',
      date: '2001.01.26',
      href: '/notice/22',
    },
    {
      number: 21,
      category: '모델',
      title: '모델 관련 공지사항 타이틀',
      date: '2001.01.25',
      href: '/notice/21',
    },
    {
      number: 20,
      category: '문의요청',
      title: '문의요청과 관련된 공지사항 타이틀이에요',
      date: '2001.01.24',
      href: '/notice/20',
    },
    {
      number: 19,
      category: '금지',
      title: '금지 관련 공지사항 타이틀',
      date: '2001.01.23',
      href: '/notice/19',
    },
    {
      number: 18,
      category: '모델',
      title: '모델 관련 공지사항 타이틀',
      date: '2001.01.22',
      href: '/notice/18',
    },
    {
      number: 17,
      category: '문의요청',
      title: '문의요청과 관련된 공지사항 타이틀이에요',
      date: '2001.01.21',
      href: '/notice/17',
    },
    {
      number: 16,
      category: '금지',
      title: '금지 관련 공지사항 타이틀',
      date: '2001.01.20',
      href: '/notice/16',
    },
    {
      number: 15,
      category: '모델',
      title: '모델 관련 공지사항 타이틀',
      date: '2001.01.19',
      href: '/notice/15',
    },
  ];

  const handleSearch = (value: string) => {
    console.log('검색:', value);
    // 검색 로직 구현
  };

  const handleWriteClick = () => {
    console.log('작성하기 클릭');
    // 작성 페이지로 이동
  };

  return (
    <>
      <Page>
        <Header />
        <main>
          <NoticeHeroSection
            title="아올다에서 공지사항을 확인해 보세요"
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSearch={handleSearch}
          />
          <S.ContentSection>
            <NoticeList
              totalCount={24}
              onWriteClick={handleWriteClick}
              filterOptions={filterOptions}
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
              notices={notices}
              currentPage={currentPage}
              totalPages={7}
              onPageChange={setCurrentPage}
            />
          </S.ContentSection>
        </main>
      </Page>
      <Footer />
    </>
  );
};

export default NoticePage;

