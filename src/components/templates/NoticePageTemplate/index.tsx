'use client';

import { useState, useMemo } from 'react';
import BaseTemplate from '../BaseTemplate';
import NoticeHeroSection from '../../organisms/NoticeHeroSection';
import NoticeList from '../../organisms/NoticeList';
import { type NoticeItemProps } from '../../molecules/NoticeItem';
import * as S from './style';

export interface NoticePageTemplateProps {
  /** 검색어 */
  searchTerm?: string;
  /** 검색어 변경 핸들러 */
  onSearchChange?: (value: string) => void;
  /** 검색 실행 핸들러 */
  onSearch?: (value: string) => void;
  /** 전체 공지사항 개수 */
  totalCount?: number;
  /** 작성하기 버튼 클릭 핸들러 */
  onWriteClick?: () => void;
  /** 공지사항 목록 */
  notices?: NoticeItemProps[];
  /** 현재 페이지 */
  currentPage?: number;
  /** 전체 페이지 수 */
  totalPages?: number;
  /** 페이지 변경 핸들러 */
  onPageChange?: (page: number) => void;
}

/**
 * 공지사항 페이지 템플릿 컴포넌트
 * 
 * 공지사항 페이지를 구성하는 템플릿입니다.
 * NoticeHeroSection과 NoticeList를 포함합니다.
 * 
 * @returns {JSX.Element} 공지사항 페이지 템플릿 요소
 */
const NoticePageTemplate = ({
  searchTerm: externalSearchTerm,
  onSearchChange: externalOnSearchChange,
  onSearch,
  totalCount = 24,
  onWriteClick,
  notices = [],
  currentPage = 1,
  totalPages = 7,
  onPageChange,
}: NoticePageTemplateProps) => {
  const [internalSearchTerm, setInternalSearchTerm] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // 외부에서 전달된 searchTerm이 있으면 사용, 없으면 내부 state 사용
  const searchTerm = externalSearchTerm !== undefined ? externalSearchTerm : internalSearchTerm;
  const handleSearchChange = (value: string) => {
    if (externalOnSearchChange) {
      externalOnSearchChange(value);
    } else {
      setInternalSearchTerm(value);
    }
  };

  const filterOptions = [
    { id: 'all', label: '전체' },
    { id: 'notice', label: '공지' },
    { id: 'inquiry', label: '문의요청' },
    { id: 'operation', label: '운영' },
  ];

  const defaultNotices: NoticeItemProps[] = [
    {
      number: 24,
      category: '문의요청',
      title: '문의요청과 관련된 공지사항 타이틀이에요',
      date: '2001.01.28',
      href: '/notice/24',
    },
    {
      number: 23,
      category: '공지',
      title: '공지와 관련된 공지사항 타이틀이에요',
      date: '2001.01.27',
      href: '/notice/23',
    },
    {
      number: 22,
      category: '운영',
      title: '운영과 관련된 공지사항 타이틀이에요',
      date: '2001.01.26',
      href: '/notice/22',
    },
    {
      number: 21,
      category: '문의요청',
      title: '문의요청과 관련된 공지사항 타이틀이에요',
      date: '2001.01.25',
      href: '/notice/21',
    },
    {
      number: 20,
      category: '공지',
      title: '공지와 관련된 공지사항 타이틀이에요',
      date: '2001.01.24',
      href: '/notice/20',
    },
    {
      number: 19,
      category: '운영',
      title: '운영과 관련된 공지사항 타이틀이에요',
      date: '2001.01.23',
      href: '/notice/19',
    },
    {
      number: 18,
      category: '문의요청',
      title: '문의요청과 관련된 공지사항 타이틀이에요',
      date: '2001.01.22',
      href: '/notice/18',
    },
    {
      number: 17,
      category: '공지',
      title: '공지와 관련된 공지사항 타이틀이에요',
      date: '2001.01.21',
      href: '/notice/17',
    },
    {
      number: 16,
      category: '운영',
      title: '운영과 관련된 공지사항 타이틀이에요',
      date: '2001.01.20',
      href: '/notice/16',
    },
    {
      number: 15,
      category: '문의요청',
      title: '문의요청과 관련된 공지사항 타이틀이에요',
      date: '2001.01.19',
      href: '/notice/15',
    },
  ];

  const handleSearch = (value: string) => {
    onSearch?.(value);
  };

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
    // 필터 변경 시 추가 로직 처리 가능
  };

  // 검색어와 필터에 따라 목록 필터링
  const filteredNotices = useMemo(() => {
    const allNotices = notices.length > 0 ? notices : defaultNotices;
    let filtered = [...allNotices];

    // 검색어로 필터링
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (notice) =>
          notice.title.toLowerCase().includes(searchLower) ||
          notice.category.toLowerCase().includes(searchLower)
      );
    }

    // 필터로 필터링
    if (selectedFilter !== 'all') {
      const filterMap: Record<string, string> = {
        notice: '공지',
        inquiry: '문의요청',
        operation: '운영',
      };
      const filterCategory = filterMap[selectedFilter];
      if (filterCategory) {
        filtered = filtered.filter((notice) => notice.category === filterCategory);
      }
    }

    return filtered;
  }, [notices, defaultNotices, searchTerm, selectedFilter]);

  // 필터링된 목록의 총 개수
  const filteredTotalCount = filteredNotices.length;

  return (
    <BaseTemplate>
      <S.TemplateContainer>
        <NoticeHeroSection
          title="아올다에서 공지사항을 확인해 보세요."
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
          breadcrumbItems={[
            { label: '홈', href: '/' },
            { label: '공지사항' },
          ]}
        />
        <S.ContentWrapper>
          <NoticeList
            totalCount={filteredTotalCount}
            onWriteClick={onWriteClick}
            filterOptions={filterOptions}
            selectedFilter={selectedFilter}
            onFilterChange={handleFilterChange}
            notices={filteredNotices}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </S.ContentWrapper>
      </S.TemplateContainer>
    </BaseTemplate>
  );
};

export default NoticePageTemplate;

