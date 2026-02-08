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
}

/**
 * 제품 목록 컴포넌트
 * 
 * 검색바와 서비스 카드 그리드를 포함하는 제품 목록 섹션입니다.
 *
 * @param {ProductListProps} props - 제품 목록 props
 * @param {string} [props.searchTerm] - 검색어
 * @param {Function} [props.onSearchChange] - 검색어 변경 핸들러
 * @param {Function} [props.onSearch] - 검색 실행 핸들러
 * @param {ServiceCardProps[]} props.services - 서비스 목록
 * @param {string} [props.sectionTitle] - 섹션 제목
 * 
 * @example
 * <ProductList
 *   searchTerm={searchTerm}
 *   onSearchChange={setSearchTerm}
 *   onSearch={handleSearch}
 *   services={[
 *     { title: 'AMDB', description: '설명', icon: '/icon.png', href: '/service/amdb' },
 *   ]}
 *   sectionTitle="즐겨찾기"
 * />
 * 
 * @returns {JSX.Element} 제품 목록 요소
 */
const ProductList = ({
  searchTerm = '',
  onSearchChange,
  onSearch,
  services,
  sectionTitle,
}: ProductListProps) => {
  return (
    <S.ProductListContainer>
      <S.SearchSection>
        <Search
          placeholder="계열/서비스를 검색해 보세요"
          value={searchTerm}
          onChange={onSearchChange}
          onSearch={onSearch}
        />
      </S.SearchSection>

      {sectionTitle && (
        <S.SectionHeader>
          <S.SectionTitle>{sectionTitle}</S.SectionTitle>
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

