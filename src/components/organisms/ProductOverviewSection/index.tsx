import TagFilter from '../../molecules/TagFilter';
import * as S from './style';

export interface ProductOverviewSectionProps {
  /** 제품 개요 내용 */
  content?: string;
}

/**
 * 제품 개요 섹션 컴포넌트
 * 
 * 제품 상세 페이지의 개요 섹션입니다.
 *
 * @param {ProductOverviewSectionProps} props - 제품 개요 섹션 props
 * @param {string} [props.content] - 제품 개요 내용
 * 
 * @example
 * <ProductOverviewSection content="제품 개요 내용" />
 * 
 * @returns {JSX.Element} 제품 개요 섹션 요소
 */
const ProductOverviewSection = ({ content }: ProductOverviewSectionProps) => {
  return (
    <S.OverviewSection>
      <TagFilter
        items={[{ id: 'overview', label: '제품 개요' }]}
        selectedId="overview"
        onChange={() => {}}
        prefix="≡ "
      />
      {content && <S.OverviewContent>{content}</S.OverviewContent>}
    </S.OverviewSection>
  );
};

export default ProductOverviewSection;
