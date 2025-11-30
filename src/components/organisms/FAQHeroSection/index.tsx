import Breadcrumb from '../../molecules/Breadcrumb';
import Search from '../../molecules/Search';
import * as S from './style';

export interface FAQHeroSectionProps {
  /** 검색어 */
  searchTerm?: string;
  /** 검색어 변경 핸들러 */
  onSearchChange?: (value: string) => void;
  /** 검색 실행 핸들러 */
  onSearch?: (value: string) => void;
}

/**
 * FAQ 히어로 섹션 컴포넌트
 * 
 * FAQ 페이지 상단의 히어로 섹션입니다.
 * Breadcrumb, 제목, 검색바를 포함합니다.
 * 
 * @param {FAQHeroSectionProps} props - 히어로 섹션 props
 * @param {string} [props.searchTerm] - 검색어
 * @param {Function} [props.onSearchChange] - 검색어 변경 핸들러
 * @param {Function} [props.onSearch] - 검색 실행 핸들러
 * 
 * @example
 * <FAQHeroSection
 *   searchTerm={searchTerm}
 *   onSearchChange={setSearchTerm}
 *   onSearch={handleSearch}
 * />
 * 
 * @returns {JSX.Element} 히어로 섹션 요소
 */
const FAQHeroSection = ({
  searchTerm = '',
  onSearchChange,
  onSearch,
}: FAQHeroSectionProps) => {
  return (
    <S.HeroSection>
      <S.HeroContent>
        <S.BreadcrumbWrapper>
          <Breadcrumb items={[{ label: '홈', href: '/' }, { label: 'FAQ' }]} />
        </S.BreadcrumbWrapper>
        <S.Title>아올다 FAQ</S.Title>
        <S.SearchWrapper>
          <Search
            placeholder="FAQ를 검색해 보세요."
            value={searchTerm}
            onChange={onSearchChange}
            onSearch={onSearch}
          />
        </S.SearchWrapper>
      </S.HeroContent>
    </S.HeroSection>
  );
};

export default FAQHeroSection;

