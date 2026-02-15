import { type NoticeItemProps } from '../../molecules/NoticeItem';
import NoticeListHeader from '../NoticeListHeader';
import NoticeFilters from '../NoticeFilters';
import NoticeTable from '../NoticeTable';
import Pagination from '../../molecules/Pagination';
import * as S from './style';

export interface NoticeListProps {
  /** 전체 공지사항 개수 */
  totalCount: number;
  /** 작성하기 버튼 클릭 핸들러 */
  onWriteClick?: () => void;
  /** 필터 옵션 목록 */
  filterOptions: Array<{ id: string; label: string }>;
  /** 선택된 필터 ID */
  selectedFilter?: string;
  /** 필터 선택 변경 핸들러 */
  onFilterChange?: (filterId: string) => void;
  /** 공지사항 목록 */
  notices: NoticeItemProps[];
  /** 현재 페이지 */
  currentPage?: number;
  /** 전체 페이지 수 */
  totalPages?: number;
  /** 페이지 변경 핸들러 */
  onPageChange?: (page: number) => void;
}

/**
 * 공지사항 목록 컴포넌트
 * 
 * 공지사항 목록, 필터, 페이지네이션을 포함하는 섹션입니다.
 *
 * @param {NoticeListProps} props - 공지사항 목록 props
 * @param {number} props.totalCount - 전체 공지사항 개수
 * @param {Function} [props.onWriteClick] - 작성하기 버튼 클릭 핸들러
 * @param {Array} props.filterOptions - 필터 옵션 목록
 * @param {string} [props.selectedFilter] - 선택된 필터 ID
 * @param {Function} [props.onFilterChange] - 필터 선택 변경 핸들러
 * @param {NoticeItemProps[]} props.notices - 공지사항 목록
 * @param {number} [props.currentPage] - 현재 페이지
 * @param {number} [props.totalPages] - 전체 페이지 수
 * @param {Function} [props.onPageChange] - 페이지 변경 핸들러
 * 
 * @example
 * <NoticeList
 *   totalCount={24}
 *   onWriteClick={() => console.log('write')}
 *   filterOptions={[
 *     { id: 'all', label: '전체' },
 *     { id: 'prohibition', label: '금지' },
 *   ]}
 *   selectedFilter="all"
 *   onFilterChange={(id) => console.log(id)}
 *   notices={[...]}
 *   currentPage={1}
 *   totalPages={7}
 *   onPageChange={(page) => console.log(page)}
 * />
 * 
 * @returns {JSX.Element} 공지사항 목록 요소
 */
const NoticeList = ({
  totalCount,
  onWriteClick,
  filterOptions,
  selectedFilter,
  onFilterChange,
  notices,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: NoticeListProps) => {
  return (
    <S.NoticeListContainer>
      <NoticeListHeader
        totalCount={totalCount}
        onWriteClick={onWriteClick}
      />

      <NoticeFilters
        filters={filterOptions}
        selectedFilter={selectedFilter}
        onFilterChange={onFilterChange}
      />

      <NoticeTable notices={notices} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </S.NoticeListContainer>
  );
};

export default NoticeList;

