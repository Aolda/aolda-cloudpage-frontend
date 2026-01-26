import * as S from './style';

export interface FilterItem {
  /** 필터 ID */
  id: string;
  /** 필터 라벨 */
  label: string;
}

export type FilterMode = 'checkbox' | 'tag';

export interface FilterProps {
  /** 필터 모드 */
  mode: FilterMode;
  /** 필터 항목 목록 */
  items: FilterItem[];
  /** 선택된 필터 ID (tag 모드) 또는 ID 목록 (checkbox 모드) */
  selectedIds?: string | string[];
  /** 필터 선택 변경 핸들러 */
  onChange?: (selectedIds: string | string[]) => void;
  /** 태그 모드에서 사용할 prefix (기본값: '#') */
  tagPrefix?: string;
}

/**
 * 범용 필터 컴포넌트
 * 
 * 체크박스 형태(다중 선택) 또는 태그 형태(단일 선택)의 필터를 제공합니다.
 * 
 * @param {FilterProps} props - 필터 props
 * @param {FilterMode} props.mode - 필터 모드 ('checkbox' | 'tag')
 * @param {FilterItem[]} props.items - 필터 항목 목록
 * @param {string | string[]} [props.selectedIds] - 선택된 필터 ID (tag 모드: string, checkbox 모드: string[])
 * @param {Function} [props.onChange] - 필터 선택 변경 핸들러
 * 
 * @example
 * // 체크박스 모드 (다중 선택)
 * <Filter
 *   mode="checkbox"
 *   items={[
 *     { id: 'favorites', label: '즐겨찾기' },
 *     { id: 'server', label: '서버' },
 *   ]}
 *   selectedIds={['favorites']}
 *   onChange={(ids) => console.log(ids)}
 * />
 * 
 * @example
 * // 태그 모드 (단일 선택)
 * <Filter
 *   mode="tag"
 *   items={[
 *     { id: 'all', label: '전체' },
 *     { id: 'prohibition', label: '금지' },
 *   ]}
 *   selectedIds="all"
 *   onChange={(id) => console.log(id)}
 * />
 * 
 * @returns {JSX.Element} 필터 요소
 */
const Filter = ({
  mode,
  items,
  selectedIds,
  onChange,
  tagPrefix = '#',
}: FilterProps) => {
  if (mode === 'checkbox') {
    const selectedArray = Array.isArray(selectedIds) ? selectedIds : [];
    
    const handleToggle = (itemId: string) => {
      if (!onChange) return;

      const isSelected = selectedArray.includes(itemId);
      if (isSelected) {
        onChange(selectedArray.filter((id) => id !== itemId));
      } else {
        onChange([...selectedArray, itemId]);
      }
    };

    return (
      <S.CheckboxContainer>
        {items.map((item) => {
          const isSelected = selectedArray.includes(item.id);
          return (
            <S.CheckboxOption key={item.id}>
              <S.CheckboxLabel>
                <S.CheckboxInput
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleToggle(item.id)}
                />
                <S.Checkmark $checked={isSelected} />
                {item.label}
              </S.CheckboxLabel>
            </S.CheckboxOption>
          );
        })}
      </S.CheckboxContainer>
    );
  }

  // tag 모드
  const selectedId = typeof selectedIds === 'string' ? selectedIds : undefined;

  const handleTagClick = (itemId: string) => {
    if (!onChange) return;
    onChange(itemId);
  };

  return (
    <S.TagContainer>
      {items.map((item) => (
        <S.TagButton
          key={item.id}
          $isActive={selectedId === item.id}
          onClick={() => handleTagClick(item.id)}
        >
          {tagPrefix}{item.label}
        </S.TagButton>
      ))}
    </S.TagContainer>
  );
};

export default Filter;

