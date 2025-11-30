import CategoryFilter, { type CategoryItem } from '../../molecules/CategoryFilter';
import * as S from './style';

export interface ProductSidebarProps {
  /** 카테고리 목록 */
  categories: CategoryItem[];
  /** 선택된 카테고리 ID 목록 */
  selectedCategories?: string[];
  /** 카테고리 선택 변경 핸들러 */
  onCategoryChange?: (selectedIds: string[]) => void;
}

/**
 * 제품 사이드바 컴포넌트
 * 
 * 제품 목록 페이지의 왼쪽 사이드바입니다.
 * 카테고리 필터를 포함합니다.
 * 
 * @param {ProductSidebarProps} props - 사이드바 props
 * @param {CategoryItem[]} props.categories - 카테고리 목록
 * @param {string[]} [props.selectedCategories] - 선택된 카테고리 ID 목록
 * @param {Function} [props.onCategoryChange] - 카테고리 선택 변경 핸들러
 * 
 * @example
 * <ProductSidebar
 *   categories={[
 *     { id: 'favorites', label: '즐겨찾기' },
 *     { id: 'server', label: '서버' },
 *   ]}
 *   selectedCategories={['favorites']}
 *   onCategoryChange={(ids) => console.log(ids)}
 * />
 * 
 * @returns {JSX.Element} 사이드바 요소
 */
const ProductSidebar = ({
  categories,
  selectedCategories = [],
  onCategoryChange,
}: ProductSidebarProps) => {
  return (
    <S.Sidebar>
      <S.SidebarTitle>제품 카테고리</S.SidebarTitle>
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onChange={onCategoryChange}
      />
    </S.Sidebar>
  );
};

export default ProductSidebar;

