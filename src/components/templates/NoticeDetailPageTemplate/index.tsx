'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BaseTemplate from '../BaseTemplate';
import NoticeHeroSection from '../../organisms/NoticeHeroSection';
import NoticeDetailContent from '../../organisms/NoticeDetailContent';
import type { NoticeDetailData } from '../../organisms/NoticeDetailContent';
import * as S from './style';

export interface NoticeDetailPageTemplateProps {
  /** 공지사항 상세 데이터 */
  data: NoticeDetailData;
}

/**
 * 공지사항 상세 페이지 템플릿 컴포넌트
 * 
 * 공지사항 상세 페이지를 구성하는 템플릿입니다.
 * BaseTemplate을 사용하여 Header와 Footer를 포함하고,
 * 공지사항 상세 정보를 표시합니다.
 *
 * @param {NoticeDetailPageTemplateProps} props - 공지사항 상세 페이지 템플릿 props
 * 
 * @example
 * <NoticeDetailPageTemplate
 *   data={{
 *     number: 24,
 *     title: "공지사항 제목",
 *     author: "작성자",
 *     date: "2001.01.28",
 *     views: 128,
 *     content: "본문 내용...",
 *   }}
 * />
 * 
 * @returns {JSX.Element} 공지사항 상세 페이지 템플릿 요소
 */
const NoticeDetailPageTemplate = ({
  data,
}: NoticeDetailPageTemplateProps) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleListClick = () => {
    router.push('/notice');
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSearch = (value: string) => {
    // 검색 기능은 목록 페이지로 이동
    router.push(`/notice?search=${encodeURIComponent(value)}`);
  };

  return (
    <BaseTemplate>
      <S.TemplateContainer>
        <NoticeHeroSection
          title="아올다에서
공지사항을 확인해 보세요."
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
          breadcrumbItems={[
            { label: '홈', href: '/' },
            { label: '공지사항', href: '/notice' },
            { label: `#${data.number}`, href: `/notice/${data.number}` },
          ]}
        />
        <S.ContentWrapper>
          <NoticeDetailContent
            data={data}
            onListClick={handleListClick}
          />
        </S.ContentWrapper>
      </S.TemplateContainer>
    </BaseTemplate>
  );
};

export default NoticeDetailPageTemplate;

