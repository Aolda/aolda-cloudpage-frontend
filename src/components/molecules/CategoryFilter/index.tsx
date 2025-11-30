import * as S from './style';

export interface CategoryItem {
  /** 카테고리 ID */
  id: string;
  /** 카테고리 라벨 */
  label: string;
}

export interface CategoryFilterProps {
  /** 카테고리 목록 */
  categories: CategoryItem[];
  /** 선택된 카테고리 ID 목록 */
  selectedCategories?: string[];
  /** 카테고리 선택 변경 핸들러 */
  onChange?: (selectedIds: string[]) => void;
}

/**
 * 카테고리 필터 컴포넌트
 * 
 * 체크박스 형태의 카테고리 필터입니다.
 * 
 * @param {CategoryFilterProps} props - 카테고리 필터 props
 * @param {CategoryItem[]} props.categories - 카테고리 목록
 * @param {string[]} [props.selectedCategories] - 선택된 카테고리 ID 목록
 * @param {Function} [props.onChange] - 카테고리 선택 변경 핸들러
 * 
 * @example
 * <CategoryFilter
 *   categories={[
 *     { id: 'favorites', label: '즐겨찾기' },
 *     { id: 'server', label: '서버' },
 *   ]}
 *   selectedCategories={['favorites']}
 *   onChange={(ids) => console.log(ids)}
 * />
 * 
 * @returns {JSX.Element} 카테고리 필터 요소
 */
const CategoryFilter = ({
  categories,
  selectedCategories = [],
  onChange,
}: CategoryFilterProps) => {
  const handleToggle = (categoryId: string) => {
    if (!onChange) return;

    const isSelected = selectedCategories.includes(categoryId);
    if (isSelected) {
      onChange(selectedCategories.filter((id) => id !== categoryId));
    } else {
      onChange([...selectedCategories, categoryId]);
    }
  };

  return (
    <S.CategoryList>
      {categories.map((category) => {
        const isChecked = selectedCategories.includes(category.id);
        return (
          <S.CategoryItem key={category.id}>
            <S.Checkbox
              type="checkbox"
              id={category.id}
              checked={isChecked}
              onChange={() => handleToggle(category.id)}
            />
            <S.Label htmlFor={category.id}>{category.label}</S.Label>
          </S.CategoryItem>
        );
      })}
    </S.CategoryList>
  );
};

export default CategoryFilter;

