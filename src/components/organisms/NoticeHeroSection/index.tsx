import Search from '../../molecules/Search';
import Breadcrumb from '../../molecules/Breadcrumb';
import Image from 'next/image';
import * as S from './style';

import type { ReactNode } from 'react';

export interface NoticeHeroSectionProps {
  /** 히어로 섹션 제목 */
  title: string | ReactNode;
  /** 검색어 */
  searchTerm?: string;
  /** 검색어 변경 핸들러 */
  onSearchChange?: (value: string) => void;
  /** 검색 실행 핸들러 */
  onSearch?: (value: string) => void;
  /** Breadcrumb 항목 목록 */
  breadcrumbItems?: Array<{ label: string; href?: string }>;
}

/**
 * 공지사항 히어로 섹션 컴포넌트
 * 
 * 공지사항 페이지 상단의 히어로 섹션입니다.
 * 제목과 검색바를 포함합니다.
 *
 * @param {NoticeHeroSectionProps} props - 히어로 섹션 props
 * @param {string} props.title - 히어로 섹션 제목
 * @param {string} [props.searchTerm] - 검색어
 * @param {Function} [props.onSearchChange] - 검색어 변경 핸들러
 * @param {Function} [props.onSearch] - 검색 실행 핸들러
 * 
 * @example
 * <NoticeHeroSection
 *   title="아올다에서 공지사항을 확인해 보세요"
 *   searchTerm={searchTerm}
 *   onSearchChange={setSearchTerm}
 *   onSearch={handleSearch}
 * />
 * 
 * @returns {JSX.Element} 히어로 섹션 요소
 */
const NoticeHeroSection = ({
  title,
  searchTerm = '',
  onSearchChange,
  onSearch,
  breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '공지사항' },
  ],
}: NoticeHeroSectionProps) => {
  // title이 문자열인 경우 "공지사항" 부분만 파란색으로 처리하고 줄바꿈 처리
  const renderTitle = () => {
    if (typeof title === 'string') {
      const parts = title.split('공지사항');
      if (parts.length > 1) {
        // 줄바꿈 처리
        const firstLine = parts[0].trim();
        const secondLine = parts[1].trim();
        return (
          <>
            {firstLine}
            <br />
            <S.HighlightedText>공지사항</S.HighlightedText>
            {secondLine}
          </>
        );
      }
      // 줄바꿈이 있는 경우 처리
      if (title.includes('\n')) {
        const lines = title.split('\n');
        return (
          <>
            {lines.map((line, index) => {
              if (line.includes('공지사항')) {
                const lineParts = line.split('공지사항');
                return (
                  <span key={index}>
                    {lineParts[0]}
                    <S.HighlightedText>공지사항</S.HighlightedText>
                    {lineParts[1]}
                    {index < lines.length - 1 && <br />}
                  </span>
                );
              }
              return (
                <span key={index}>
                  {line}
                  {index < lines.length - 1 && <br />}
                </span>
              );
            })}
          </>
        );
      }
      return title;
    }
    return title;
  };

  return (
    <S.HeroSection>
      <S.HeroContent>
        <S.LeftSection>
          <S.TitleSection>
            <S.BreadcrumbWrapper>
              <Breadcrumb items={breadcrumbItems} />
            </S.BreadcrumbWrapper>
            <S.Title>{renderTitle()}</S.Title>
          </S.TitleSection>
          <S.SearchWrapper>
            <Search
              placeholder="공지사항을 검색해 보세요."
              value={searchTerm}
              onChange={onSearchChange}
              onSearch={onSearch}
            />
          </S.SearchWrapper>
        </S.LeftSection>
        <S.RightSection>
          <S.IconWrapper>
            <Image
              src="/notice/notice_introicon.png"
              alt="공지사항 아이콘"
              width={281}
              height={187}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </S.IconWrapper>
        </S.RightSection>
      </S.HeroContent>
    </S.HeroSection>
  );
};

export default NoticeHeroSection;

