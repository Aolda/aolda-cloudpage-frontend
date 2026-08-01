import Image from 'next/image';
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
              <Image
                src="/product/main_title_icon.png"
                alt=""
                width={29}
                height={29}
                sizes="(max-width: 743px) 14px, 29px"
              />
            </S.SectionIcon>
            {sectionTitle}
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
