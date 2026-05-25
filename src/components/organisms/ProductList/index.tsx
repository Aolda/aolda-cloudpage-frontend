import Search from '../../molecules/Search';
import ServiceCard, { type ServiceCardProps } from '../../molecules/ServiceCard';
import * as S from './style';

export interface ProductListProps {
  /** 검색어 */
  searchTerm?: string;
  /** 검색어 변경 핸들러 */
  onSearchChange?: (value: string) => void;
  /** 검색 실행 핸들러 */
  onSearch?: (value: string) => void;
  /** 서비스 목록 */
  services: ServiceCardProps[];
  /** 섹션 제목 */
  sectionTitle?: string;
  /** 검색바 표시 여부 */
  showSearch?: boolean;
}

/**
 * 제품 목록 컴포넌트
 *
 * 검색바와 서비스 카드 그리드를 포함하는 제품 목록 섹션입니다.
 */
const ProductList = ({
  searchTerm = '',
  onSearchChange,
  onSearch,
  services,
  sectionTitle,
  showSearch = false,
}: ProductListProps) => {
  return (
    <S.ProductListContainer>
      {showSearch && (
        <S.SearchSection>
          <Search
            placeholder="제품/서비스를 검색해 보세요"
            value={searchTerm}
            onChange={onSearchChange}
            onSearch={onSearch}
          />
        </S.SearchSection>
      )}

      {sectionTitle && (
        <S.SectionHeader>
          <S.SectionTitle>
            <S.SectionIcon aria-hidden>
              <S.HeartVector viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 20.25l-1.09-1.01C5.14 14.24 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.95 4.5 2.36C13.09 2.95 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.16 6.74-8.91 11.74L12 20.25z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </S.HeartVector>
            </S.SectionIcon>
            <S.SectionTitleText>{sectionTitle}</S.SectionTitleText>
          </S.SectionTitle>
        </S.SectionHeader>
      )}

      <S.ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={service.href || service.title || index}
            {...service}
          />
        ))}
      </S.ServiceGrid>
    </S.ProductListContainer>
  );
};

export default ProductList;
