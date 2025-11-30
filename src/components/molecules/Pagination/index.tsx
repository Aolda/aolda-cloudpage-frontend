import * as S from './style';

export interface PaginationProps {
  /** 현재 페이지 */
  currentPage: number;
  /** 전체 페이지 수 */
  totalPages: number;
  /** 페이지 변경 핸들러 */
  onPageChange?: (page: number) => void;
}

/**
 * 페이지네이션 컴포넌트
 * 
 * 페이지 목록과 이전/다음 버튼을 제공합니다.
 * 
 * @param {PaginationProps} props - 페이지네이션 props
 * @param {number} props.currentPage - 현재 페이지
 * @param {number} props.totalPages - 전체 페이지 수
 * @param {Function} [props.onPageChange] - 페이지 변경 핸들러
 * 
 * @example
 * <Pagination
 *   currentPage={1}
 *   totalPages={7}
 *   onPageChange={(page) => console.log(page)}
 * />
 * 
 * @returns {JSX.Element} 페이지네이션 요소
 */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange?.(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange?.(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange?.(page);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <S.PaginationContainer>
      <S.PrevButton
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="이전 페이지"
      >
        &lt; 이전
      </S.PrevButton>
      <S.PageList>
        {pages.map((page) => (
          <S.PageButton
            key={page}
            $isActive={page === currentPage}
            onClick={() => handlePageClick(page)}
            aria-label={`${page}페이지`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </S.PageButton>
        ))}
      </S.PageList>
      <S.NextButton
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="다음 페이지"
      >
        다음 &gt;
      </S.NextButton>
    </S.PaginationContainer>
  );
};

export default Pagination;

