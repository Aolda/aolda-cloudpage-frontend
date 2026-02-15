import TagFilter, { type FilterItem } from '../../molecules/TagFilter';
import * as S from './style';

export interface FAQCategoryFilterProps {
  /** 카테고리 옵션 목록 */
  categories: FilterItem[];
  /** 선택된 카테고리 ID */
  selectedCategory?: string;
  /** 카테고리 선택 변경 핸들러 */
  onCategoryChange?: (categoryId: string) => void;
}

/**
 * FAQ 카테고리 필터 컴포넌트
 * 
 * FAQ를 카테고리별로 필터링할 수 있는 버튼 목록입니다.
 *
 * @param {FAQCategoryFilterProps} props - 카테고리 필터 props
 * @param {CategoryOption[]} props.categories - 카테고리 옵션 목록
 * @param {string} [props.selectedCategory] - 선택된 카테고리 ID
 * @param {Function} [props.onCategoryChange] - 카테고리 선택 변경 핸들러
 * 
 * @example
 * <FAQCategoryFilter
 *   categories={[
 *     { id: 'all', label: '카테고리' },
 *     { id: 'account', label: '카테고리' },
 *   ]}
 *   selectedCategory="all"
 *   onCategoryChange={(id) => console.log(id)}
 * />
 * 
 * @returns {JSX.Element} 카테고리 필터 요소
 */
const FAQCategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: FAQCategoryFilterProps) => {
  return (
    <S.FilterContainer>
      <TagFilter
        items={categories}
        selectedId={selectedCategory}
        onChange={(id) => onCategoryChange?.(id)}
        prefix="≡ "
      />
    </S.FilterContainer>
  );
};

export default FAQCategoryFilter;
