import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import Search from '../../molecules/Search';
import * as S from './style';

export interface NoticeHeroSectionProps {
  /** 히어로 섹션 제목 */
  title: string;
  /** 검색어 */
  searchTerm?: string;
  /** 검색어 변경 핸들러 */
  onSearchChange?: (value: string) => void;
  /** 검색 실행 핸들러 */
  onSearch?: (value: string) => void;
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
}: NoticeHeroSectionProps) => {
  return (
    <S.HeroSection>
      <S.HeroContent>
        <IntroSectionTitle
          title={title}
          titleColor="#ffffff"
          align="left"
        />
        <S.SearchWrapper>
          <Search
            placeholder="공지사항을 검색해 보세요"
            value={searchTerm}
            onChange={onSearchChange}
            onSearch={onSearch}
          />
        </S.SearchWrapper>
      </S.HeroContent>
    </S.HeroSection>
  );
};

export default NoticeHeroSection;

