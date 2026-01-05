import Filter, { type FilterItem } from '../../molecules/Filter';
import * as S from './style';

export interface NoticeFiltersProps {
  /** 필터 옵션 목록 */
  filters: FilterItem[];
  /** 선택된 필터 ID */
  selectedFilter?: string;
  /** 필터 선택 변경 핸들러 */
  onFilterChange?: (filterId: string) => void;
}

/**
 * 공지사항 필터 컴포넌트
 * 
 * 공지사항을 카테고리별로 필터링할 수 있는 태그 목록입니다.
 * 
 * @param {NoticeFiltersProps} props - 필터 props
 * @param {FilterOption[]} props.filters - 필터 옵션 목록
 * @param {string} [props.selectedFilter] - 선택된 필터 ID
 * @param {Function} [props.onFilterChange] - 필터 선택 변경 핸들러
 * 
 * @example
 * <NoticeFilters
 *   filters={[
 *     { id: 'all', label: '전체' },
 *     { id: 'prohibition', label: '금지' },
 *   ]}
 *   selectedFilter="all"
 *   onFilterChange={(id) => console.log(id)}
 * />
 * 
 * @returns {JSX.Element} 필터 요소
 */
const NoticeFilters = ({
  filters,
  selectedFilter,
  onFilterChange,
}: NoticeFiltersProps) => {
  return (
    <S.FilterContainer>
      <Filter
        mode="tag"
        items={filters}
        selectedIds={selectedFilter}
        onChange={(id) => onFilterChange?.(typeof id === 'string' ? id : '')}
      />
    </S.FilterContainer>
  );
};

export default NoticeFilters;

