import * as S from './style';

export interface FilterTagProps {
  /** 태그 라벨 */
  label: string;
  /** 선택 여부 */
  isActive?: boolean;
  /** 클릭 핸들러 */
  onClick?: () => void;
}

/**
 * 필터 태그 컴포넌트
 * 
 * 공지사항 필터링에 사용되는 태그 버튼입니다.
 * 
 * @param {FilterTagProps} props - 필터 태그 props
 * @param {string} props.label - 태그 라벨
 * @param {boolean} [props.isActive] - 선택 여부
 * @param {Function} [props.onClick] - 클릭 핸들러
 * 
 * @example
 * <FilterTag
 *   label="전체"
 *   isActive={true}
 *   onClick={() => console.log('clicked')}
 * />
 * 
 * @returns {JSX.Element} 필터 태그 요소
 */
const FilterTag = ({ label, isActive = false, onClick }: FilterTagProps) => {
  return (
    <S.Tag $isActive={isActive} onClick={onClick}>
      #{label}
    </S.Tag>
  );
};

export default FilterTag;

