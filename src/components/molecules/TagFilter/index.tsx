import * as S from './style';

export interface FilterItem {
  /** 필터 ID */
  id: string;
  /** 필터 라벨 */
  label: string;
}

export interface TagFilterProps {
  /** 필터 항목 목록 */
  items: FilterItem[];
  /** 선택된 필터 ID */
  selectedId?: string;
  /** 필터 선택 변경 핸들러 */
  onChange?: (selectedId: string) => void;
  /** 태그 prefix (기본값: '#') */
  prefix?: string;
  /** FAQ 스타일 적용 여부 */
  faqStyle?: boolean;
}

/**
 * 태그 필터 컴포넌트
 * 
 * 단일 선택이 가능한 태그 형태의 필터입니다.
 * 
 * @param {TagFilterProps} props - 태그 필터 props
 * @param {FilterItem[]} props.items - 필터 항목 목록
 * @param {string} [props.selectedId] - 선택된 필터 ID
 * @param {Function} [props.onChange] - 필터 선택 변경 핸들러
 * @param {string} [props.prefix='#'] - 태그 prefix
 * 
 * @example
 * <TagFilter
 *   items={[
 *     { id: 'all', label: '전체' },
 *     { id: 'notice', label: '공지' },
 *   ]}
 *   selectedId="all"
 *   onChange={(id) => console.log(id)}
 * />
 * 
 * @returns {JSX.Element} 태그 필터 요소
 */
const TagFilter = ({
  items,
  selectedId,
  onChange,
  prefix = '#',
  faqStyle = false,
}: TagFilterProps) => {
  const handleClick = (itemId: string) => {
    if (!onChange) return;
    onChange(itemId);
  };

  return (
    <S.Container data-faq-style={faqStyle}>
      {items.map((item) => (
        <S.Button
          key={item.id}
          $isActive={selectedId === item.id}
          $faqStyle={faqStyle}
          onClick={() => handleClick(item.id)}
        >
          {prefix}{item.label}
        </S.Button>
      ))}
    </S.Container>
  );
};

export default TagFilter;

