import { type NoticeItemProps } from '../../molecules/NoticeItem';
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
      <S.HeaderWrapper>
        <S.Header>
          <S.Count>총 {totalCount}개</S.Count>
          <S.WriteButton onClick={onWriteClick}>
            <S.WriteIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </S.WriteIcon>
            <S.WriteText>작성하기</S.WriteText>
          </S.WriteButton>
        </S.Header>
        <S.Separator />
      </S.HeaderWrapper>
      <NoticeFilters
        filters={filterOptions}
        selectedFilter={selectedFilter}
        onFilterChange={onFilterChange}
      />

      <NoticeTable notices={notices} />

      {totalPages > 0 && (
        <S.PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </S.PaginationWrapper>
      )}
    </S.NoticeListContainer>
  );
};

export default NoticeList;

