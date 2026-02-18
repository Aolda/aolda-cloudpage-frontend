'use client';

import { useState, useMemo } from 'react';
import BaseTemplate from '../BaseTemplate';
import FAQHeroSection from '../../organisms/FAQHeroSection';
import FAQList from '../../organisms/FAQList';
import { type AccordionProps } from '../../molecules/Accordion';
import type { FilterItem } from '../../molecules/TagFilter';
import * as S from './style';

export interface FAQPageTemplateProps {
  /** 검색어 */
  searchTerm?: string;
  /** 검색어 변경 핸들러 */
  onSearchChange?: (value: string) => void;
  /** 검색 실행 핸들러 */
  onSearch?: (value: string) => void;
  /** FAQ 목록 */
  faqs?: AccordionProps[];
  /** 카테고리 옵션 목록 */
  categoryOptions?: FilterItem[];
  /** 현재 페이지 */
  currentPage?: number;
  /** 전체 페이지 수 */
  totalPages?: number;
  /** 페이지 변경 핸들러 */
  onPageChange?: (page: number) => void;
}

/**
 * FAQ 페이지 템플릿 컴포넌트
 * 
 * FAQ 페이지를 구성하는 템플릿입니다.
 * FAQHeroSection과 FAQList를 포함합니다.
 * 
 * @returns {JSX.Element} FAQ 페이지 템플릿 요소
 */
const FAQPageTemplate = ({
  searchTerm: externalSearchTerm,
  onSearchChange: externalOnSearchChange,
  onSearch,
  faqs = [],
  categoryOptions = [],
  currentPage = 1,
  totalPages = 7,
  onPageChange,
}: FAQPageTemplateProps) => {
  const [internalSearchTerm, setInternalSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 외부에서 전달된 searchTerm이 있으면 사용, 없으면 내부 state 사용
  const searchTerm = externalSearchTerm !== undefined ? externalSearchTerm : internalSearchTerm;
  const handleSearchChange = (value: string) => {
    if (externalOnSearchChange) {
      externalOnSearchChange(value);
    } else {
      setInternalSearchTerm(value);
    }
  };

  const defaultCategoryOptions: FilterItem[] = [
    { id: 'all', label: '카테고리' },
    { id: 'account', label: '카테고리' },
    { id: 'billing', label: '카테고리' },
    { id: 'technical', label: '카테고리' },
    { id: 'other', label: '카테고리' },
  ];

  const defaultFaqs: AccordionProps[] = [
    {
      title: 'FAQ Question',
      content: 'This is the answer to the FAQ question.',
    },
    {
      title: 'FAQ Question',
      content: 'This is another FAQ answer.',
    },
    {
      title: 'FAQ Question',
      content: 'This is another FAQ answer.',
    },
    {
      title: 'FAQ Question',
      content: 'This is another FAQ answer.',
    },
    {
      title: 'FAQ Question',
      content: 'This is another FAQ answer.',
    },
    {
      title: 'FAQ Question',
      content: 'This is another FAQ answer.',
    },
    {
      title: 'FAQ Question',
      content: 'This is another FAQ answer.',
    },
    {
      title: 'FAQ Question',
      content: 'This is another FAQ answer.',
    },
    {
      title: 'FAQ Question',
      content: 'This is another FAQ answer.',
    },
    {
      title: 'FAQ Question',
      content: 'This is another FAQ answer.',
    },
  ];

  const handleSearch = (value: string) => {
    onSearch?.(value);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // 카테고리 변경 시 추가 로직 처리 가능
  };

  // 검색어와 카테고리에 따라 FAQ 목록 필터링
  const filteredFaqs = useMemo(() => {
    const allFaqs = faqs.length > 0 ? faqs : defaultFaqs;
    let filtered = [...allFaqs];

    // 검색어로 필터링
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (faq) =>
          faq.title.toLowerCase().includes(searchLower) ||
          faq.content.toLowerCase().includes(searchLower)
      );
    }

    // 카테고리로 필터링 (현재는 카테고리 필터링 로직이 없으므로 기본값만 처리)
    // 필요시 카테고리 필터링 로직 추가 가능

    return filtered;
  }, [faqs, defaultFaqs, searchTerm, selectedCategory]);

  return (
    <BaseTemplate>
      <S.TemplateContainer>
        <FAQHeroSection
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
          breadcrumbItems={[
            { label: '홈', href: '/' },
            { label: 'FAQ' },
          ]}
        />
        <S.ContentWrapper>
          <FAQList
            faqs={filteredFaqs}
            categoryOptions={categoryOptions.length > 0 ? categoryOptions : defaultCategoryOptions}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </S.ContentWrapper>
      </S.TemplateContainer>
    </BaseTemplate>
  );
};

export default FAQPageTemplate;

